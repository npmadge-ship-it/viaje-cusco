import React, { useState } from 'react';
import { Map, Plus, StickyNote, Compass } from 'lucide-react';
import { ITINERARY, PLACES, getDayPlaceIds } from '../data/tripData';
import PlaceRow from './PlaceRow';

export default function ItineraryView({
  activeDayId,
  onSelectDay,
  dayChoices,
  onChooseOption,
  visited,
  reserved,
  dayNotes,
  onChangeDayNote,
  onOpenPlace,
  onToggleVisited,
  onOpenDayMap
}) {
  const [noteOpen, setNoteOpen] = useState(false);

  const day = ITINERARY.find((d) => d.id === activeDayId) || ITINERARY[0];
  const dayPlaceIds = getDayPlaceIds(day, dayChoices);
  const visitedCount = dayPlaceIds.filter((id) => visited[id]).length;
  const currentNote = dayNotes[day.id] || '';
  const dayIndex = day.id.replace('d', '').padStart(2, '0');

  return (
    <div className="space-y-6">
      {/* Editorial Day Strip */}
      <div
        className="flex gap-2 overflow-x-auto no-scrollbar py-1 -mx-1 px-1"
        role="tablist"
        aria-label="Seleccionar día del viaje"
      >
        {ITINERARY.map((d) => {
          const active = d.id === day.id;
          return (
            <button
              key={d.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => {
                onSelectDay(d.id);
                setNoteOpen(false);
              }}
              className={`flex-none min-w-[68px] rounded-[18px] px-3 py-2.5 text-center transition-all duration-200 cursor-pointer border ${
                active
                  ? 'bg-[#171A18] border-[#171A18] text-[#FAF7F2] shadow-[0_8px_20px_rgba(23,26,24,0.2)]'
                  : 'bg-white border-[#EAE3D7] text-[#171A18] hover:border-[#CFC5B6]'
              }`}
            >
              <span
                className={`block text-[10.5px] font-bold uppercase tracking-[0.14em] ${
                  active ? 'text-[#E3C16D]' : 'text-[#848985]'
                }`}
              >
                {d.weekday}
              </span>
              <span className="block font-serif-editorial text-[24px] font-semibold leading-none mt-1">
                {d.dayNum}
              </span>
              <span
                className={`block text-[10px] font-semibold mt-1 ${
                  active ? 'text-[#FAF7F2]/75' : 'text-[#2E4F3A]'
                }`}
              >
                {d.zone === 'Valle Sagrado'
                  ? 'Valle'
                  : d.zone === 'Cusco Ciudad'
                  ? 'Cusco'
                  : 'V. Sur'}
              </span>
            </button>
          );
        })}
      </div>

      {/* Luxury Editorial Day Cover Photo */}
      <div className="relative h-60 sm:h-68 w-full overflow-hidden rounded-[28px] bg-[#212623] shadow-[0_14px_34px_rgba(23,26,24,0.14)] ring-1 ring-black/5">
        <img
          src={day.coverPhoto}
          alt={day.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121513]/85 via-[#121513]/28 to-black/15" />

        {/* Top Editorial Masthead Row */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FAF7F2]/92 backdrop-blur-md px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#171A18] shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#9E472A]" />
            {day.zone}
          </span>

          <button
            type="button"
            onClick={() => onOpenDayMap(day.id)}
            className="inline-flex items-center gap-1.5 rounded-full bg-[#FAF7F2]/92 hover:bg-white backdrop-blur-md px-3.5 py-1.5 text-[12px] font-bold text-[#171A18] shadow-sm active:scale-95 transition cursor-pointer"
          >
            <Map className="h-3.5 w-3.5 text-[#2E4F3A]" />
            Mapa del día
          </button>
        </div>

        {/* Bottom Editorial Display Typography */}
        <div className="absolute bottom-5 left-5 right-5 text-[#FAF7F2]">
          <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#E8CB80] mb-1.5">
            <span>
              Día {dayIndex} · {day.weekday} {day.dayNum} {day.month}
            </span>
            <span className="opacity-50">|</span>
            <span className="text-white/90">
              {visitedCount}/{dayPlaceIds.length} completados
            </span>
          </div>
          <h2 className="font-serif-editorial text-[1.9rem] sm:text-[2.1rem] font-semibold leading-[1.08] tracking-[-0.015em] text-white">
            {day.title}
          </h2>
          <p className="mt-1.5 text-[13.5px] text-white/85 line-clamp-2 leading-snug max-w-[46ch]">
            {day.summary}
          </p>
        </div>
      </div>

      {/* Subtle Rhythm Row + "+ Notas" Pill */}
      <div className="flex items-center justify-between gap-3 pb-1 border-b border-[#E8E1D5]">
        <div className="flex items-center gap-2 text-[13px] font-medium text-[#525854]">
          <Compass className="h-4 w-4 text-[#B5892E]" />
          <span>{day.stepsGoal}</span>
        </div>

        <button
          type="button"
          onClick={() => setNoteOpen((v) => !v)}
          className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[12.5px] font-semibold transition cursor-pointer border mb-2 ${
            currentNote || noteOpen
              ? 'bg-[#FBF3DC] border-[#E7D294] text-[#664A09]'
              : 'bg-white border-[#E4DDD2] text-[#454B47] hover:bg-[#F3EDE3]'
          }`}
        >
          {currentNote ? <StickyNote className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
          {currentNote ? 'Ver nota' : 'Notas'}
        </button>
      </div>

      {/* Expandable Personal Note */}
      {noteOpen && (
        <div className="rounded-2xl bg-white border border-[#E8E1D5] p-4 shadow-sm">
          <label
            htmlFor={`note-${day.id}`}
            className="block font-serif-editorial text-[1.15rem] font-semibold text-[#171A18] mb-2"
          >
            Notas del {day.weekday} {day.dayNum} {day.month}
          </label>
          <textarea
            id={`note-${day.id}`}
            value={currentNote}
            onChange={(e) => onChangeDayNote(day.id, e.target.value)}
            placeholder="Hora de vuelo, mesa confirmada, nombre del conductor..."
            rows={3}
            className="w-full rounded-xl border border-[#E4DDD2] bg-[#FAF7F2] px-3.5 py-2.5 text-[14.5px] text-[#171A18] placeholder:text-[#989A97] focus:border-[#2E4F3A] focus:outline-none"
          />
          <p className="mt-1.5 text-[11.5px] font-semibold text-[#2E4F3A]">
            ✓ Guardado automáticamente en el celular
          </p>
        </div>
      )}

      {/* Airy Timeline of Compact Photo Rows */}
      <div className="space-y-6">
        {day.moments.map((moment) => {
          let activePlaceIds = moment.places || [];
          let activeOptionKey = null;

          if (moment.options) {
            activeOptionKey = dayChoices[moment.id] || moment.options[0].key;
            const opt =
              moment.options.find((o) => o.key === activeOptionKey) || moment.options[0];
            activePlaceIds = opt.placeIds ? opt.placeIds : [opt.placeId];
          }

          return (
            <div key={moment.id} className="space-y-2.5">
              <div className="flex items-center gap-2.5 px-0.5">
                <span className="rounded-full bg-[#F3EDE3] px-2.5 py-0.5 text-[11px] font-bold tracking-[0.06em] text-[#9E472A] tabular-nums">
                  {moment.time}
                </span>
                <h3 className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#5B615D]">
                  {moment.label}
                </h3>
              </div>

              {moment.note && (
                <p className="px-0.5 text-[13.5px] text-[#666C68] leading-snug">
                  {moment.note}
                </p>
              )}

              {/* Refined A / B Option Switcher */}
              {moment.options && (
                <div
                  className="flex gap-1.5 rounded-[16px] bg-[#EFE9DF] p-1"
                  role="group"
                  aria-label={`Elegir opción para ${moment.label}`}
                >
                  {moment.options.map((opt) => {
                    const selected = opt.key === activeOptionKey;
                    return (
                      <button
                        key={opt.key}
                        type="button"
                        onClick={() => onChooseOption(moment.id, opt.key)}
                        className={`flex-1 min-h-[40px] rounded-[12px] px-2.5 py-1.5 text-[13px] font-semibold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                          selected
                            ? 'bg-white text-[#171A18] shadow-sm'
                            : 'text-[#666B68] hover:text-[#171A18]'
                        }`}
                      >
                        <span
                          className={`inline-flex h-5 w-5 items-center justify-center rounded-full text-[11px] font-bold ${
                            selected
                              ? 'bg-[#9E472A] text-white'
                              : 'bg-[#E3DCD0] text-[#555A56]'
                          }`}
                        >
                          {opt.key}
                        </span>
                        <span className="truncate">{opt.label}</span>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Compact Rows */}
              <div className="space-y-2.5">
                {activePlaceIds.map((pid) => (
                  <PlaceRow
                    key={pid}
                    place={PLACES[pid]}
                    time={moment.time}
                    isVisited={!!visited[pid]}
                    isReserved={!!reserved[pid]}
                    onOpen={onOpenPlace}
                    onToggleVisited={onToggleVisited}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
