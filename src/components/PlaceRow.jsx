import React from 'react';
import { Check, Umbrella, ChevronRight } from 'lucide-react';

export function zonePillStyle(zone) {
  if (zone === 'Valle Sagrado') {
    return 'bg-[#E9F0EC] text-[#264632]';
  }
  if (zone === 'Cusco Ciudad') {
    return 'bg-[#F8EAE4] text-[#8B3B1E]';
  }
  return 'bg-[#FBF3DC] text-[#7A5A0F]';
}

export default function PlaceRow({
  place,
  time,
  rainMode = false,
  isVisited = false,
  isReserved = false,
  onOpen,
  onToggleVisited,
  showZone = false
}) {
  if (!place) return null;

  const oneLine = rainMode && place.rainNote ? place.rainNote : place.subtitle;

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onOpen(place.id, { rainMode })}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onOpen(place.id, { rainMode });
        }
      }}
      className={`group flex items-center gap-3.5 rounded-[20px] p-3 transition-all duration-200 cursor-pointer active:scale-[0.985] border ${
        isVisited
          ? 'bg-[#F4F7F4] border-[#DAE5DD]'
          : 'bg-white border-[#EAE3D7] hover:border-[#D7CCBC] shadow-[0_2px_12px_rgba(23,26,24,0.03)]'
      }`}
    >
      {/* Editorial Thumbnail (68x68) */}
      <div className="relative h-[68px] w-[68px] shrink-0 overflow-hidden rounded-[15px] bg-[#EFE9DF] ring-1 ring-black/5">
        <img
          src={place.photo}
          alt={place.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {place.rainSafe && (
          <span
            title="Bajo techo"
            className="absolute bottom-1 right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#FAF7F2]/95 text-[#334E5C] shadow-sm"
          >
            <Umbrella className="h-3 w-3" />
          </span>
        )}
      </div>

      {/* Compact Copy: Time + Name + Strictly 1 Line */}
      <div className="min-w-0 flex-1">
        <div className="mb-0.5 flex items-center gap-1.5 flex-wrap">
          {time && (
            <span className="text-[11px] font-bold tracking-[0.06em] text-[#9E472A] tabular-nums">
              {time}
            </span>
          )}
          {time && (showZone || place.requiresReservation) && (
            <span className="text-[10px] text-[#C8BFB2]">·</span>
          )}
          {showZone && (
            <span
              className={`rounded-full px-2 py-0.5 text-[10px] font-semibold tracking-wide ${zonePillStyle(
                place.zone
              )}`}
            >
              {place.zone}
            </span>
          )}
          {place.requiresReservation && (
            <span
              className={`inline-flex items-center gap-1 text-[11px] font-semibold ${
                isReserved ? 'text-[#2E4F3A]' : 'text-[#8C6610]'
              }`}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  isReserved ? 'bg-[#2E4F3A]' : 'bg-[#B5892E]'
                }`}
              />
              {isReserved ? 'Reservado' : 'Reservar'}
            </span>
          )}
        </div>

        <h4
          className={`truncate text-[16px] font-semibold tracking-[-0.01em] leading-snug ${
            isVisited ? 'text-[#4B6153]' : 'text-[#171A18]'
          }`}
        >
          {place.name}
        </h4>

        <p className="truncate text-[13.5px] text-[#666C68] leading-snug mt-0.5">
          {oneLine}
        </p>
      </div>

      {/* Right Check Ring + Subtle Chevron */}
      <div className="flex items-center gap-0.5 shrink-0">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onToggleVisited(place.id);
          }}
          aria-label={isVisited ? `Desmarcar ${place.name}` : `Marcar ${place.name} como visitado`}
          aria-pressed={isVisited}
          className="flex h-11 w-11 items-center justify-center rounded-full transition-transform active:scale-90 cursor-pointer"
        >
          <span
            className={`flex h-7 w-7 items-center justify-center rounded-full border-[1.75px] transition-all ${
              isVisited
                ? 'border-[#2E4F3A] bg-[#2E4F3A] text-white shadow-sm'
                : 'border-[#D4CCBF] bg-[#FAF7F2] text-transparent hover:border-[#9E472A]'
            }`}
          >
            <Check className="h-3.5 w-3.5 stroke-[3]" />
          </span>
        </button>
        <ChevronRight className="h-4 w-4 text-[#C6BEB2] -ml-1.5 hidden sm:block" />
      </div>
    </div>
  );
}
