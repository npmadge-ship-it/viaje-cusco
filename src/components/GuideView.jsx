import React, { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { PLACES } from '../data/tripData';
import PlaceRow from './PlaceRow';

export default function GuideView({ visited, reserved, onOpenPlace, onToggleVisited }) {
  const [subTab, setSubTab] = useState('eat'); // 'eat' | 'explore'
  const [query, setQuery] = useState('');
  const [zone, setZone] = useState('Todas');
  const [category, setCategory] = useState('Todos');

  const zones = ['Todas', 'Valle Sagrado', 'Cusco Ciudad', 'Valle Sur'];
  const categories =
    subTab === 'eat'
      ? ['Todos', 'Restaurantes', 'Cafés', 'Bares & Vino', 'Requiere reserva', 'Bajo techo']
      : ['Todos', 'Caminatas', 'Museos & Arte', 'Cultura & Talleres', 'Bajo techo'];

  const items = useMemo(() => {
    const q = query.trim().toLowerCase();
    return Object.values(PLACES).filter((p) => {
      if (subTab === 'eat') {
        if (p.section !== 'eat' && p.section !== 'both') return false;
      } else {
        if (p.section !== 'explore' && p.section !== 'both') return false;
        if (p.id === 'hotel-valle') return false;
      }

      if (zone !== 'Todas' && p.zone !== zone) return false;

      if (category === 'Requiere reserva') {
        if (!p.requiresReservation) return false;
      } else if (category === 'Bajo techo') {
        if (!p.rainSafe) return false;
      } else if (category !== 'Todos') {
        const cat = subTab === 'eat' ? p.category : p.exploreCategory || p.category;
        if (cat !== category) return false;
      }

      if (q) {
        const hay = `${p.name} ${p.subtitle} ${p.description} ${p.address} ${p.zone}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [subTab, zone, category, query]);

  return (
    <div className="space-y-4">
      <div>
        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#2F5941]">
          Selección Curada
        </p>
        <h2 className="font-serif-editorial text-[1.6rem] font-bold leading-tight text-[#1C1F1D]">
          {subTab === 'eat' ? 'Comer & Beber' : 'Explorar'}
        </h2>
      </div>

      {/* Clean Underlined Sub-Tabs (Screenshot 4 style) */}
      <div className="flex gap-6 border-b border-[#E8E2D9]">
        {[
          { key: 'eat', label: 'Comer & Beber' },
          { key: 'explore', label: 'Explorar' }
        ].map((t) => {
          const active = subTab === t.key;
          return (
            <button
              key={t.key}
              type="button"
              onClick={() => {
                setSubTab(t.key);
                setCategory('Todos');
              }}
              className={`pb-2.5 text-[15px] font-semibold transition-colors relative cursor-pointer ${
                active ? 'text-[#1C1F1D]' : 'text-[#8B8F8C] hover:text-[#444A46]'
              }`}
            >
              {t.label}
              {active && (
                <span className="absolute bottom-0 left-0 right-0 h-[2.5px] rounded-full bg-[#A64B2A]" />
              )}
            </button>
          );
        })}
      </div>

      {/* Clean Search Input */}
      <div className="relative">
        <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-[#8B8F8C]" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={
            subTab === 'eat'
              ? 'Buscar restaurante, café, bar o plato...'
              : 'Buscar caminata, museo, taller...'
          }
          className="w-full min-h-[46px] rounded-2xl border border-[#E5DFD5] bg-white pl-10 pr-4 text-[14.5px] text-[#1C1F1D] placeholder:text-[#989A97] focus:border-[#A64B2A] focus:outline-none"
        />
      </div>

      {/* Zone Pills */}
      <div className="space-y-2">
        <div className="flex gap-1.5 overflow-x-auto no-scrollbar">
          {zones.map((z) => (
            <button
              key={z}
              type="button"
              onClick={() => setZone(z)}
              className={`flex-none min-h-[38px] rounded-full px-3.5 text-[13px] font-semibold transition cursor-pointer border ${
                zone === z
                  ? 'bg-[#1C1F1D] border-[#1C1F1D] text-white'
                  : 'bg-white border-[#E5DFD5] text-[#555A56]'
              }`}
            >
              {z}
            </button>
          ))}
        </div>

        {/* Category Pills */}
        <div className="flex gap-1.5 overflow-x-auto no-scrollbar">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c)}
              className={`flex-none min-h-[36px] rounded-full px-3.5 text-[12.5px] font-semibold transition cursor-pointer border ${
                category === c
                  ? 'bg-[#2F5941] border-[#2F5941] text-white'
                  : 'bg-[#F5F2EC] border-transparent text-[#555A56]'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <p className="text-[12.5px] font-semibold text-[#7A7E7B] px-0.5">
        {items.length} {items.length === 1 ? 'lugar' : 'lugares'} · Toca cualquiera para abrir detalles
      </p>

      {/* Compact Rows */}
      <div className="space-y-2.5">
        {items.length > 0 ? (
          items.map((place) => (
            <PlaceRow
              key={place.id}
              place={place}
              showZone={zone === 'Todas'}
              isVisited={!!visited[place.id]}
              isReserved={!!reserved[place.id]}
              onOpen={onOpenPlace}
              onToggleVisited={onToggleVisited}
            />
          ))
        ) : (
          <div className="rounded-2xl border border-dashed border-[#D6CEC2] bg-white px-6 py-10 text-center text-[14.5px] text-[#7A7E7B]">
            No hay resultados con ese filtro. Prueba seleccionar otra zona o categoría.
          </div>
        )}
      </div>
    </div>
  );
}
