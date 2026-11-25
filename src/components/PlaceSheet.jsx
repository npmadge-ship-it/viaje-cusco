import React, { useEffect } from 'react';
import {
  X,
  MapPin,
  Clock,
  Ticket,
  Phone,
  MessageCircle,
  Check,
  AlertCircle,
  Umbrella,
  Navigation,
  CalendarCheck2
} from 'lucide-react';
import { mapsUrl } from '../data/tripData';
import { zonePillStyle } from './PlaceRow';

export default function PlaceSheet({
  place,
  rainMode = false,
  isVisited = false,
  isReserved = false,
  onClose,
  onToggleVisited,
  onToggleReserved,
  onLocateOnMap
}) {
  useEffect(() => {
    if (!place) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [place, onClose]);

  if (!place) return null;

  const waMessage = encodeURIComponent(
    `Hola, quisiera consultar por una reserva para 2 personas en ${place.name}.`
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-[#171A18]/50 backdrop-blur-[4px] animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="sheet-title"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-[600px] max-h-[91vh] flex flex-col rounded-t-[32px] bg-[#FAF7F2] shadow-[0_-16px_48px_rgba(23,26,24,0.28)] animate-sheet-up overflow-hidden"
      >
        {/* Minimal iOS Drag Handle + Close */}
        <div className="relative flex items-center justify-center pt-3.5 pb-2.5 shrink-0 bg-[#FAF7F2]">
          <div className="h-1 w-11 rounded-full bg-[#D7CFC3]" />
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar panel"
            className="absolute right-4 top-2.5 flex h-9 w-9 items-center justify-center rounded-full bg-[#EFE9DF] text-[#3F4541] hover:bg-[#E5DDD0] transition cursor-pointer"
          >
            <X className="h-4.5 w-4.5" />
          </button>
        </div>

        {/* Scrollable Editorial Body */}
        <div className="overflow-y-auto px-5 pb-7 flex-1">
          {/* Framed Hero Photograph */}
          <div className="relative h-56 w-full overflow-hidden rounded-[22px] bg-[#E8E1D5] mb-5 ring-1 ring-black/5">
            <img
              src={place.photo}
              alt={place.name}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/15" />

            <div className="absolute top-3.5 left-3.5 flex flex-wrap gap-1.5">
              <span
                className={`rounded-full px-3 py-1 text-[11px] font-bold tracking-wide shadow-sm ${zonePillStyle(
                  place.zone
                )}`}
              >
                {place.zone}
              </span>
              {place.rainSafe && (
                <span className="inline-flex items-center gap-1 rounded-full bg-[#FAF7F2]/95 px-2.5 py-1 text-[11px] font-bold text-[#334E5C] shadow-sm">
                  <Umbrella className="h-3.5 w-3.5" />
                  Bajo techo
                </span>
              )}
            </div>

            {onLocateOnMap && place.coords && (
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onLocateOnMap(place.id);
                }}
                className="absolute bottom-3.5 right-3.5 inline-flex items-center gap-1.5 rounded-full bg-[#FAF7F2]/95 hover:bg-white px-3.5 py-1.5 text-[12px] font-bold text-[#171A18] shadow-md backdrop-blur-sm active:scale-95 transition cursor-pointer"
              >
                <MapPin className="h-3.5 w-3.5 text-[#9E472A]" />
                Ver pin en mapa
              </button>
            )}
          </div>

          {/* Editorial Headline & Italic Subhead */}
          <h2
            id="sheet-title"
            className="font-serif-editorial text-[1.95rem] font-semibold leading-[1.12] tracking-[-0.015em] text-[#171A18]"
          >
            {place.name}
          </h2>
          <p className="mt-1.5 font-serif-editorial italic text-[1.12rem] font-medium text-[#9E472A] leading-snug">
            {place.subtitle}
          </p>

          {/* Editorial Narrative */}
          <p className="mt-3.5 text-[15.5px] leading-[1.65] text-[#454B47]">
            {place.description}
          </p>

          {/* Rain Sanctuary Note */}
          {rainMode && place.rainNote && (
            <div className="mt-4 flex items-start gap-2.5 rounded-2xl bg-[#E8EFF3] border border-[#CFDDE5] px-4 py-3 text-[14px] font-medium text-[#27404D]">
              <Umbrella className="h-4.5 w-4.5 shrink-0 mt-0.5 text-[#334E5C]" />
              <span>{place.rainNote}</span>
            </div>
          )}

          {/* Important Alert */}
          {place.alert && (
            <div
              className={`mt-4 flex items-start gap-2.5 rounded-2xl px-4 py-3 text-[14px] font-semibold ${
                place.alertType === 'important'
                  ? 'bg-[#FCECE7] text-[#7D2E14] border border-[#EFC7B8]'
                  : 'bg-[#FBF3DC] text-[#664A09] border border-[#EBD69A]'
              }`}
            >
              <AlertCircle className="h-4.5 w-4.5 shrink-0 mt-0.5" />
              <span>{place.alert}</span>
            </div>
          )}

          {/* Hairline Metadata Ledger */}
          <div className="mt-5 rounded-2xl bg-white border border-[#E8E1D5] divide-y divide-[#F1ECE3]">
            <div className="flex items-start gap-3 px-4 py-3.5 text-[14.5px]">
              <MapPin className="h-4.5 w-4.5 shrink-0 mt-0.5 text-[#2E4F3A]" />
              <span className="text-[#171A18]">{place.address}</span>
            </div>
            <div className="flex items-start gap-3 px-4 py-3.5 text-[14.5px]">
              <Clock className="h-4.5 w-4.5 shrink-0 mt-0.5 text-[#2E4F3A]" />
              <span className="text-[#171A18]">{place.hours}</span>
            </div>
            {place.price && (
              <div className="flex items-start gap-3 px-4 py-3.5 text-[14.5px]">
                <Ticket className="h-4.5 w-4.5 shrink-0 mt-0.5 text-[#2E4F3A]" />
                <span className="text-[#171A18]">{place.price}</span>
              </div>
            )}
          </div>

          {/* Quiet-Luxury Status Toggles */}
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {place.requiresReservation && (
              <button
                type="button"
                onClick={() => onToggleReserved(place.id)}
                className={`flex min-h-[52px] items-center justify-between rounded-2xl border px-4 py-2.5 text-[14.5px] font-semibold transition active:scale-[0.985] cursor-pointer ${
                  isReserved
                    ? 'border-[#B5892E] bg-[#FBF3DC] text-[#5C4307]'
                    : 'border-[#DFD7CA] bg-white text-[#171A18]'
                }`}
              >
                <span className="inline-flex items-center gap-2">
                  <CalendarCheck2 className="h-4.5 w-4.5 text-[#9C7316]" />
                  {isReserved ? 'Reserva confirmada' : 'Marcar reservado'}
                </span>
                <span
                  className={`flex h-6 w-6 items-center justify-center rounded-full border-2 ${
                    isReserved
                      ? 'border-[#B5892E] bg-[#B5892E] text-white'
                      : 'border-[#CFC7BA] bg-white text-transparent'
                  }`}
                >
                  <Check className="h-3.5 w-3.5 stroke-[3]" />
                </span>
              </button>
            )}

            <button
              type="button"
              onClick={() => onToggleVisited(place.id)}
              className={`flex min-h-[52px] items-center justify-between rounded-2xl border px-4 py-2.5 text-[14.5px] font-semibold transition active:scale-[0.985] cursor-pointer ${
                !place.requiresReservation ? 'sm:col-span-2' : ''
              } ${
                isVisited
                  ? 'border-[#2E4F3A] bg-[#E9F1EC] text-[#1F3C2A]'
                  : 'border-[#DFD7CA] bg-white text-[#171A18]'
              }`}
            >
              <span className="inline-flex items-center gap-2">
                <Check className="h-4.5 w-4.5 text-[#2E4F3A]" />
                {isVisited ? 'Visitado' : 'Marcar como visitado'}
              </span>
              <span
                className={`flex h-6 w-6 items-center justify-center rounded-full border-2 ${
                  isVisited
                    ? 'border-[#2E4F3A] bg-[#2E4F3A] text-white'
                    : 'border-[#CFC7BA] bg-white text-transparent'
                }`}
              >
                <Check className="h-3.5 w-3.5 stroke-[3]" />
              </span>
            </button>
          </div>
        </div>

        {/* Sticky Editorial Bottom Action Bar */}
        <div className="shrink-0 border-t border-[#E8E1D5] bg-white/95 backdrop-blur-md px-5 py-3.5 pb-[calc(14px+env(safe-area-inset-bottom,0px))]">
          <div className="flex flex-wrap items-center gap-2.5">
            <a
              href={mapsUrl(place.mapsQuery)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[175px] min-h-[52px] inline-flex items-center justify-center gap-2 rounded-2xl bg-[#2E4F3A] hover:bg-[#223C2B] px-4 text-[15px] font-semibold text-white shadow-sm active:scale-[0.985] transition"
            >
              <Navigation className="h-4.5 w-4.5" />
              Abrir en Google Maps
            </a>

            {place.whatsapp && (
              <a
                href={`https://wa.me/${place.whatsapp}?text=${waMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[52px] inline-flex items-center justify-center gap-2 rounded-2xl bg-[#E9F3EC] hover:bg-[#DCECE1] border border-[#C6DEC9] px-4 text-[14.5px] font-semibold text-[#1E4F31] active:scale-[0.985] transition"
              >
                <MessageCircle className="h-4.5 w-4.5" />
                WhatsApp
              </a>
            )}

            {place.phone && (
              <a
                href={`tel:${place.phone}`}
                className="min-h-[52px] inline-flex items-center justify-center gap-2 rounded-2xl bg-[#FAF7F2] hover:bg-[#EFE9DF] border border-[#D9D0C3] px-4 text-[14.5px] font-semibold text-[#171A18] active:scale-[0.985] transition"
              >
                <Phone className="h-4.5 w-4.5" />
                {place.phoneDisplay || 'Llamar'}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
