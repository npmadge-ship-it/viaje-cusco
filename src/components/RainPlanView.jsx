import React, { useMemo, useState } from 'react';
import { CloudRain } from 'lucide-react';
import { PLACES, RAIN_PLAN_IDS } from '../data/tripData';
import PlaceRow from './PlaceRow';

export default function RainPlanView({ visited, reserved, onOpenPlace, onToggleVisited }) {
  const [rainZone, setRainZone] = useState('Valle Sagrado');
  const [rainCat, setRainCat] = useState('Todos');

  const categories = ['Todos', 'Museos & Arte', 'Gastronomía & Vino', 'Cafés & Bares', 'Bienestar'];

  const items = useMemo(() => {
    const ids =
      rainZone === 'Todas'
        ? [...RAIN_PLAN_IDS['Valle Sagrado'], ...RAIN_PLAN_IDS['Cusco Ciudad']]
        : RAIN_PLAN_IDS[rainZone] || [];

    return ids
      .map((id) => PLACES[id])
      .filter((p) => p && (rainCat === 'Todos' || p.rainCategory === rainCat));
  }, [rainZone, rainCat]);

  return (
    <div className="space-y-4">
      {/* Atmospheric Rain Sanctuary Header */}
      <div className="relative overflow-hidden rounded-[26px] bg-gradient-to-br from-[#2B424D] via-[#344F57] to-[#2F5941] px-5 py-6 text-white shadow-[0_10px_28px_rgba(43,66,77,0.22)]">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-sm px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#F2D585] mb-2.5">
          <CloudRain className="h-3.5 w-3.5" />
          Enero en los Andes
        </div>
        <h2 className="font-serif-editorial text-[1.6rem] font-bold leading-tight">
          Plan B Lluvia
        </h2>
        <p className="mt-1.5 text-[14px] text-white/85 leading-relaxed">
          Si cae un chubasco por la tarde, aquí tienes 16 refugios 100% bajo techo con chimenea, vino, arte y café.
        </p>
      </div>

      {/* Segmented Zone Selector */}
      <div className="grid grid-cols-3 gap-1 rounded-2xl bg-[#EFECE6] p-1">
        {[
          { key: 'Valle Sagrado', label: 'Valle (6)' },
          { key: 'Cusco Ciudad', label: 'Cusco (10)' },
          { key: 'Todas', label: 'Todos (16)' }
        ].map((z) => {
          const active = rainZone === z.key;
          return (
            <button
              key={z.key}
              type="button"
              onClick={() => setRainZone(z.key)}
              className={`min-h-[42px] rounded-xl text-[13px] font-bold transition cursor-pointer ${
                active
                  ? 'bg-white text-[#1C1F1D] shadow-sm'
                  : 'text-[#666B68] hover:text-[#1C1F1D]'
              }`}
            >
              {z.label}
            </button>
          );
        })}
      </div>

      {/* Category Chips */}
      <div className="flex gap-1.5 overflow-x-auto no-scrollbar">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setRainCat(c)}
            className={`flex-none min-h-[36px] rounded-full px-3.5 text-[12.5px] font-semibold transition cursor-pointer border ${
              rainCat === c
                ? 'bg-[#395462] border-[#395462] text-white'
                : 'bg-white border-[#E5DFD5] text-[#555A56]'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <p className="text-[12.5px] font-semibold text-[#7A7E7B] px-0.5">
        {items.length} {items.length === 1 ? 'refugio bajo techo' : 'refugios bajo techo'}
      </p>

      {/* Compact Rows in Rain Mode */}
      <div className="space-y-2.5">
        {items.length > 0 ? (
          items.map((place) => (
            <PlaceRow
              key={place.id}
              place={place}
              rainMode
              showZone={rainZone === 'Todas'}
              isVisited={!!visited[place.id]}
              isReserved={!!reserved[place.id]}
              onOpen={onOpenPlace}
              onToggleVisited={onToggleVisited}
            />
          ))
        ) : (
          <div className="rounded-2xl border border-dashed border-[#D6CEC2] bg-white px-6 py-10 text-center text-[14.5px] text-[#7A7E7B]">
            No hay refugios de esa categoría en esta zona. Selecciona "Todos".
          </div>
        )}
      </div>
    </div>
  );
}
