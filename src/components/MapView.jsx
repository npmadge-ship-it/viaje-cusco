import React, { useEffect, useMemo, useRef, useState } from 'react';
import L from 'leaflet';
import { Navigation, ChevronRight, LocateFixed, Check } from 'lucide-react';
import { ITINERARY, PLACES, getDayPlaceIds, mapsUrl } from '../data/tripData';
import { zonePillStyle } from './PlaceRow';

const ZONE_CENTERS = {
  all: { center: [-13.45, -71.97], zoom: 10 },
  'Valle Sagrado': { center: [-13.315, -72.09], zoom: 12 },
  'Cusco Ciudad': { center: [-13.5175, -71.9775], zoom: 15 },
  'Valle Sur': { center: [-13.61, -71.75], zoom: 12 }
};

function getPinColor(place, isVisited) {
  if (isVisited) return '#2E8555';
  if (place.zone === 'Valle Sagrado') return '#2F5941';
  if (place.zone === 'Cusco Ciudad') return '#B5502C';
  return '#C4931E';
}

function getPinSymbol(place, isVisited) {
  if (isVisited) return '✓';
  if (place.category === 'Cafés') return '☕';
  if (place.category === 'Bares & Vino') return '🍷';
  if (place.category === 'Restaurantes') return '🍽';
  if (place.category === 'Hotel' || place.id === 'hotel-valle') return '★';
  if (place.category === 'Museos & Arte') return '🏛';
  return '●';
}

export default function MapView({
  activeDayId,
  dayChoices,
  visited,
  focusPlaceId,
  initialFilter = 'Todos',
  onClearFocus,
  onOpenPlace
}) {
  const mapElRef = useRef(null);
  const mapRef = useRef(null);
  const markersLayerRef = useRef(null);

  const [filter, setFilter] = useState(initialFilter);
  const [selectedId, setSelectedId] = useState(focusPlaceId || null);

  useEffect(() => {
    setFilter(initialFilter);
  }, [initialFilter]);

  useEffect(() => {
    if (focusPlaceId) {
      setSelectedId(focusPlaceId);
    }
  }, [focusPlaceId]);

  const activeDay = ITINERARY.find((d) => d.id === activeDayId) || ITINERARY[0];
  const dayIds = useMemo(
    () => new Set(getDayPlaceIds(activeDay, dayChoices)),
    [activeDay, dayChoices]
  );

  const visiblePlaces = useMemo(() => {
    return Object.values(PLACES).filter((p) => {
      if (!p.coords) return false;
      if (filter === 'Día actual') return dayIds.has(p.id);
      if (filter === 'Valle Sagrado') return p.zone === 'Valle Sagrado';
      if (filter === 'Cusco Ciudad') return p.zone === 'Cusco Ciudad';
      if (filter === 'Valle Sur') return p.zone === 'Valle Sur';
      if (filter === 'Comer') return p.section === 'eat' || p.section === 'both';
      if (filter === 'Explorar') return p.section === 'explore' || p.section === 'both';
      if (filter === 'Bajo techo') return p.rainSafe;
      return true;
    });
  }, [filter, dayIds]);

  // Initialize Leaflet Map once
  useEffect(() => {
    if (!mapElRef.current || mapRef.current) return;

    const map = L.map(mapElRef.current, {
      center: ZONE_CENTERS['Cusco Ciudad'].center,
      zoom: 12,
      zoomControl: false
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; OpenStreetMap &copy; CARTO',
      subdomains: 'abcd',
      maxZoom: 19
    }).addTo(map);

    L.control.zoom({ position: 'bottomright' }).addTo(map);

    markersLayerRef.current = L.layerGroup().addTo(map);
    mapRef.current = map;

    setTimeout(() => map.invalidateSize(), 150);

    return () => {
      map.remove();
      mapRef.current = null;
      markersLayerRef.current = null;
    };
  }, []);

  // Render markers whenever filter / visited / selectedId changes
  useEffect(() => {
    const map = mapRef.current;
    const layer = markersLayerRef.current;
    if (!map || !layer) return;

    layer.clearLayers();

    visiblePlaces.forEach((p) => {
      const isSelected = p.id === selectedId;
      const isVis = !!visited[p.id];
      const bg = getPinColor(p, isVis);
      const symbol = getPinSymbol(p, isVis);

      const icon = L.divIcon({
        className: 'custom-map-pin',
        html: `<div class="pin-bubble ${isSelected ? 'is-selected' : ''}" style="background:${bg}">${symbol}</div>`,
        iconSize: [34, 34],
        iconAnchor: [17, 17]
      });

      const marker = L.marker(p.coords, {
        icon,
        zIndexOffset: isSelected ? 1000 : isVis ? 100 : 0
      });

      marker.on('click', () => {
        setSelectedId(p.id);
        map.panTo(p.coords, { animate: true });
      });

      marker.addTo(layer);
    });
  }, [visiblePlaces, selectedId, visited]);

  // Auto-fit bounds when filter changes (unless focused on specific pin)
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    if (focusPlaceId && PLACES[focusPlaceId]?.coords) {
      map.flyTo(PLACES[focusPlaceId].coords, 16, { duration: 0.65 });
      onClearFocus?.();
      return;
    }

    if (visiblePlaces.length > 0) {
      const bounds = L.latLngBounds(visiblePlaces.map((p) => p.coords));
      map.fitBounds(bounds, { padding: [46, 46], maxZoom: 15, animate: true });
    }
  }, [filter, visiblePlaces, focusPlaceId, onClearFocus]);

  const flyToZone = (key) => {
    const map = mapRef.current;
    if (!map) return;
    const target = ZONE_CENTERS[key];
    if (target) map.flyTo(target.center, target.zoom, { duration: 0.6 });
  };

  const selectedPlace = selectedId ? PLACES[selectedId] : null;
  const filters = [
    'Todos',
    'Día actual',
    'Valle Sagrado',
    'Cusco Ciudad',
    'Valle Sur',
    'Comer',
    'Explorar',
    'Bajo techo'
  ];

  return (
    <div className="space-y-3">
      {/* Header */}
      <div className="flex items-end justify-between gap-2 px-0.5">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#2F5941]">
            Mapa Interactivo · {visiblePlaces.length} pines
          </p>
          <h2 className="font-serif-editorial text-[1.55rem] font-bold leading-tight text-[#1C1F1D]">
            Todos los Lugares
          </h2>
        </div>
        <div className="flex gap-1.5">
          {['Valle Sagrado', 'Cusco Ciudad', 'Valle Sur'].map((z) => (
            <button
              key={z}
              type="button"
              onClick={() => flyToZone(z)}
              className="rounded-full bg-white border border-[#E5DFD6] px-2.5 py-1.5 text-[11px] font-bold text-[#444A46] hover:border-[#A64B2A] active:scale-95 transition cursor-pointer"
            >
              {z === 'Valle Sagrado' ? 'Valle' : z === 'Cusco Ciudad' ? 'Cusco' : 'Sur'}
            </button>
          ))}
        </div>
      </div>

      {/* Filter Pills */}
      <div className="flex gap-1.5 overflow-x-auto no-scrollbar pb-0.5">
        {filters.map((f) => {
          const active = filter === f;
          return (
            <button
              key={f}
              type="button"
              onClick={() => {
                setFilter(f);
                setSelectedId(null);
              }}
              className={`flex-none min-h-[38px] rounded-full px-3.5 text-[13px] font-semibold transition cursor-pointer border ${
                active
                  ? 'bg-[#1C1F1D] border-[#1C1F1D] text-white'
                  : 'bg-white border-[#E5DFD5] text-[#555A56]'
              }`}
            >
              {f === 'Día actual' ? `Día ${activeDay.dayNum}` : f}
            </button>
          );
        })}
      </div>

      {/* Map Container */}
      <div className="relative h-[62vh] min-h-[430px] w-full overflow-hidden rounded-[26px] border border-[#E4DDD2] shadow-[0_8px_24px_rgba(28,31,29,0.08)] bg-[#EDEAE4]">
        <div ref={mapElRef} className="h-full w-full z-0" />

        {/* Legend Pill Top-Left */}
        <div className="pointer-events-none absolute top-3 left-3 z-[400] flex flex-wrap gap-1.5 rounded-full bg-white/92 backdrop-blur-md px-3 py-1.5 text-[11px] font-semibold text-[#3C413E] shadow-sm">
          <span className="inline-flex items-center gap-1">
            <span className="h-2.5 w-2.5 rounded-full bg-[#2F5941]" /> Valle
          </span>
          <span className="inline-flex items-center gap-1">
            <span className="h-2.5 w-2.5 rounded-full bg-[#B5502C]" /> Cusco
          </span>
          <span className="inline-flex items-center gap-1">
            <span className="h-2.5 w-2.5 rounded-full bg-[#C4931E]" /> V. Sur
          </span>
        </div>

        {/* Fit All Button Top-Right */}
        <button
          type="button"
          onClick={() => flyToZone('all')}
          title="Ver toda la ruta"
          className="absolute top-3 right-3 z-[400] flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-[#1C1F1D] shadow-md backdrop-blur-sm active:scale-95 transition cursor-pointer"
        >
          <LocateFixed className="h-4.5 w-4.5 text-[#A64B2A]" />
        </button>

        {/* Floating Preview Card when a pin is selected */}
        {selectedPlace && (
          <div className="absolute bottom-3 left-3 right-3 z-[400] rounded-2xl bg-white/98 backdrop-blur-md p-3 shadow-[0_12px_32px_rgba(0,0,0,0.2)] border border-[#ECE7DF]">
            <div
              role="button"
              tabIndex={0}
              onClick={() => onOpenPlace(selectedPlace.id)}
              onKeyDown={(e) => e.key === 'Enter' && onOpenPlace(selectedPlace.id)}
              className="flex items-center gap-3 cursor-pointer"
            >
              <img
                src={selectedPlace.photo}
                alt={selectedPlace.name}
                className="h-16 w-16 shrink-0 rounded-xl object-cover bg-[#EEE9E0]"
              />
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${zonePillStyle(
                      selectedPlace.zone
                    )}`}
                  >
                    {selectedPlace.zone}
                  </span>
                  {visited[selectedPlace.id] && (
                    <span className="inline-flex items-center gap-0.5 text-[10.5px] font-bold text-[#2E8555]">
                      <Check className="h-3 w-3 stroke-[3]" /> Visitado
                    </span>
                  )}
                </div>
                <h4 className="truncate text-[15.5px] font-bold text-[#1C1F1D]">
                  {selectedPlace.name}
                </h4>
                <p className="truncate text-[13px] text-[#666B68]">
                  {selectedPlace.subtitle}
                </p>
              </div>
              <ChevronRight className="h-5 w-5 text-[#A64B2A] shrink-0" />
            </div>

            <div className="mt-2.5 flex gap-2 pt-2.5 border-t border-[#F0ECE4]">
              <button
                type="button"
                onClick={() => onOpenPlace(selectedPlace.id)}
                className="flex-1 min-h-[42px] rounded-xl bg-[#1C1F1D] text-white text-[13px] font-semibold cursor-pointer active:scale-[0.98] transition"
              >
                Ver detalles y checks
              </button>
              <a
                href={mapsUrl(selectedPlace.mapsQuery)}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[42px] inline-flex items-center gap-1.5 rounded-xl bg-[#E7F0EA] px-3.5 text-[13px] font-semibold text-[#234731]"
              >
                <Navigation className="h-3.5 w-3.5" />
                Maps
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
