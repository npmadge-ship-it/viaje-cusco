import React, { useState } from 'react';
import {
  Check,
  AlertCircle,
  Car,
  ArrowRight,
  Phone,
  MessageCircle,
  Trash2,
  RotateCcw,
  Plus,
  CreditCard,
  Banknote
} from 'lucide-react';
import {
  PLACES,
  TRANSFERS,
  TICKET_GUIDE,
  PRE_BOOKING_CHECKLIST,
  PACKING_DEFAULTS
} from '../data/tripData';
import PlaceRow from './PlaceRow';

export default function LogisticsView({
  visited,
  reserved,
  bookingChecks,
  packingChecks,
  customPacking,
  expenses,
  onOpenPlace,
  onToggleVisited,
  onToggleBooking,
  onTogglePacking,
  onAddPacking,
  onAddExpense,
  onDeleteExpense,
  onRequestReset
}) {
  const [subTab, setSubTab] = useState('viaje');
  const [packInput, setPackInput] = useState('');
  const [expDesc, setExpDesc] = useState('');
  const [expAmount, setExpAmount] = useState('');
  const [expMethod, setExpMethod] = useState('Efectivo');

  const bookingDoneCount = PRE_BOOKING_CHECKLIST.filter((b) =>
    b.linkedPlace ? !!reserved[b.linkedPlace] : !!bookingChecks[b.id]
  ).length;

  const allPacking = [...PACKING_DEFAULTS, ...customPacking];
  const packingDoneCount = allPacking.filter((item) => !!packingChecks[item.id]).length;

  const totalPEN = expenses.reduce((sum, e) => sum + (Number(e.amount) || 0), 0);
  const cashPEN = expenses
    .filter((e) => e.method === 'Efectivo')
    .reduce((sum, e) => sum + (Number(e.amount) || 0), 0);
  const cardPEN = totalPEN - cashPEN;

  const handlePackSubmit = (e) => {
    e.preventDefault();
    const val = packInput.trim();
    if (!val) return;
    onAddPacking(val);
    setPackInput('');
  };

  const handleExpSubmit = (e) => {
    e.preventDefault();
    const desc = expDesc.trim();
    const amount = parseFloat(expAmount);
    if (!desc || isNaN(amount) || amount <= 0) return;
    onAddExpense({ desc, amount: Math.round(amount * 100) / 100, method: expMethod });
    setExpDesc('');
    setExpAmount('');
  };

  return (
    <div className="space-y-5">
      <div>
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#2E4F3A]">
          Conserjería &amp; Billetera
        </p>
        <h2 className="font-serif-editorial text-[1.85rem] font-semibold leading-tight text-[#171A18]">
          Logística del Viaje
        </h2>
      </div>

      {/* Editorial Underlined Sub-Tabs */}
      <div className="flex gap-6 border-b border-[#E8E1D5] overflow-x-auto no-scrollbar">
        {[
          { key: 'viaje', label: 'Hoteles & Rutas' },
          { key: 'checklists', label: 'Checklists' },
          { key: 'gastos', label: 'Billetera S/' }
        ].map((t) => {
          const active = subTab === t.key;
          return (
            <button
              key={t.key}
              type="button"
              onClick={() => setSubTab(t.key)}
              className={`flex-none pb-2.5 text-[14.5px] font-semibold transition-colors relative cursor-pointer ${
                active ? 'text-[#171A18]' : 'text-[#8B8F8C] hover:text-[#444A46]'
              }`}
            >
              {t.label}
              {active && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-[#9E472A]" />
              )}
            </button>
          );
        })}
      </div>

      {/* SUB-TAB 1: HOTELES, TRASLADOS & ENTRADAS */}
      {subTab === 'viaje' && (
        <div className="space-y-7">
          <div className="space-y-2.5">
            <h3 className="text-[11.5px] font-bold uppercase tracking-[0.15em] text-[#666C68] px-0.5">
              Hoteles Confirmados
            </h3>
            <PlaceRow
              place={PLACES['hotel-valle']}
              showZone
              isVisited={!!visited['hotel-valle']}
              isReserved={!!reserved['hotel-valle']}
              onOpen={onOpenPlace}
              onToggleVisited={onToggleVisited}
            />
            <PlaceRow
              place={PLACES['hotel-cusco']}
              showZone
              isVisited={!!visited['hotel-cusco']}
              isReserved={!!reserved['hotel-cusco']}
              onOpen={onOpenPlace}
              onToggleVisited={onToggleVisited}
            />
            <div className="flex items-start gap-2.5 rounded-2xl bg-[#FCECE7] border border-[#EFC7B8] px-4 py-3 text-[13.5px] font-medium text-[#7D2E14]">
              <AlertCircle className="h-4.5 w-4.5 shrink-0 mt-0.5" />
              <span>
                <strong>Casa Andina Cusco:</strong> Casona colonial sin ascensor,{' '}
                <strong>solo tarjeta (no acepta efectivo)</strong> y check-out 10:00 a.m. En el
                Valle, consultar late check-out.
              </span>
            </div>
          </div>

          {/* Perforated Editorial Transfer Passes */}
          <div className="space-y-3">
            <h3 className="text-[11.5px] font-bold uppercase tracking-[0.15em] text-[#666C68] px-0.5">
              Traslados Privados Confirmados
            </h3>
            <div className="space-y-3">
              {TRANSFERS.map((tr) => (
                <div
                  key={tr.id}
                  className="rounded-[22px] bg-white border border-[#E8E1D5] overflow-hidden shadow-[0_3px_14px_rgba(23,26,24,0.035)]"
                >
                  <div className="px-4 pt-4 pb-3.5">
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#171A18] px-2.5 py-0.5 text-[10.5px] font-bold tracking-[0.1em] text-[#E8CB80]">
                        <Car className="h-3 w-3" />
                        {tr.code}
                      </span>
                      <span className="text-[12.5px] font-bold text-[#9E472A]">{tr.date}</span>
                    </div>

                    <div className="flex items-center gap-2 font-serif-editorial text-[1.22rem] font-semibold text-[#171A18]">
                      <span className="truncate">{tr.from}</span>
                      <ArrowRight className="h-4 w-4 shrink-0 text-[#9E472A]" />
                      <span className="truncate">{tr.to}</span>
                    </div>
                  </div>

                  <div className="ticket-divider px-4 py-3 bg-[#FAF7F2]/75">
                    <p className="text-[13px] font-semibold text-[#454B47]">{tr.stops}</p>
                    <p className="mt-0.5 text-[12.5px] text-[#767B78]">{tr.tip}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-start gap-2.5 rounded-2xl bg-[#FBF3DC] border border-[#EBD69A] px-4 py-3 text-[13.5px] font-medium text-[#644907]">
              <AlertCircle className="h-4.5 w-4.5 shrink-0 mt-0.5" />
              <span>
                <strong>Validar con proveedor:</strong> Confirmar si la cotización (
                <strong>S/ 250 p/p auto</strong> / <strong>S/ 340 p/p van</strong>) es tarifa
                total privada puerta a puerta.
              </span>
            </div>
          </div>

          {/* DNI Ticket Ledger */}
          <div className="space-y-3">
            <h3 className="text-[11.5px] font-bold uppercase tracking-[0.15em] text-[#666C68] px-0.5">
              Entradas con DNI (Tarifas Nacionales)
            </h3>

            <div className="rounded-2xl bg-[#E9F1EC] border border-[#C6DEC9] px-4 py-3.5 text-[13.5px] text-[#21422C]">
              <strong className="block font-serif-editorial text-[1.12rem] mb-0.5">
                No necesitan Boleto Turístico (BTC) del Valle Sagrado
              </strong>
              Ninguna visita del Valle requiere BTC. Solo compren el BTC Circuito II (S/ 40) el
              sábado si realizan el Valle Sur. Lleven siempre el DNI físico original.
            </div>

            <div className="rounded-[20px] bg-white border border-[#E8E1D5] divide-y divide-[#F1ECE3] overflow-hidden">
              {TICKET_GUIDE.map((t) => (
                <div key={t.name} className="flex items-center justify-between gap-3 px-4 py-3.5">
                  <div className="min-w-0">
                    <p className="text-[14.5px] font-semibold text-[#171A18]">{t.name}</p>
                    <p className="text-[12.5px] text-[#6E7370] mt-0.5 leading-snug">{t.note}</p>
                  </div>
                  <span className="font-serif-editorial text-[1.3rem] font-semibold text-[#9E472A] shrink-0 tabular-nums">
                    {t.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* SUB-TAB 2: CHECKLISTS */}
      {subTab === 'checklists' && (
        <div className="space-y-7">
          <div className="space-y-2.5">
            <div className="flex items-center justify-between px-0.5">
              <h3 className="text-[11.5px] font-bold uppercase tracking-[0.15em] text-[#666C68]">
                Reservas Previas
              </h3>
              <span className="rounded-full bg-[#E9F1EC] px-2.5 py-0.5 text-[12px] font-bold text-[#2E4F3A]">
                {bookingDoneCount}/{PRE_BOOKING_CHECKLIST.length}
              </span>
            </div>

            <div className="rounded-[20px] bg-white border border-[#E8E1D5] divide-y divide-[#F1ECE3] overflow-hidden">
              {PRE_BOOKING_CHECKLIST.map((item) => {
                const done = item.linkedPlace
                  ? !!reserved[item.linkedPlace]
                  : !!bookingChecks[item.id];
                return (
                  <div
                    key={item.id}
                    role="button"
                    tabIndex={0}
                    onClick={() => onToggleBooking(item.id, item.linkedPlace)}
                    onKeyDown={(e) =>
                      e.key === 'Enter' && onToggleBooking(item.id, item.linkedPlace)
                    }
                    className={`flex items-start gap-3 px-4 py-3.5 cursor-pointer transition ${
                      done ? 'bg-[#F5F8F5]' : 'hover:bg-[#FAF7F2]'
                    }`}
                  >
                    <span
                      className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition ${
                        done
                          ? 'border-[#2E4F3A] bg-[#2E4F3A] text-white'
                          : 'border-[#CFC7BA] bg-white text-transparent'
                      }`}
                    >
                      <Check className="h-3.5 w-3.5 stroke-[3]" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p
                        className={`text-[14.5px] font-semibold leading-snug ${
                          done ? 'line-through text-[#8B918D]' : 'text-[#171A18]'
                        }`}
                      >
                        {item.title}
                      </p>
                      <p className="text-[12.5px] text-[#6E7370] mt-0.5">{item.sub}</p>
                      {(item.whatsapp || item.phone) && (
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {item.whatsapp && (
                            <a
                              href={`https://wa.me/${item.whatsapp}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center gap-1 rounded-full bg-[#E9F3EC] px-3 py-1 text-[12px] font-semibold text-[#1E4F31]"
                            >
                              <MessageCircle className="h-3.5 w-3.5" />
                              WhatsApp
                            </a>
                          )}
                          {item.phone && (
                            <a
                              href={`tel:${item.phone}`}
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center gap-1 rounded-full bg-[#F3EDE3] px-3 py-1 text-[12px] font-semibold text-[#171A18]"
                            >
                              <Phone className="h-3.5 w-3.5" />
                              Llamar
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="space-y-2.5">
            <div className="flex items-center justify-between px-0.5">
              <h3 className="text-[11.5px] font-bold uppercase tracking-[0.15em] text-[#666C68]">
                Equipaje Enero (Capas + Lluvia)
              </h3>
              <span className="rounded-full bg-[#E9F1EC] px-2.5 py-0.5 text-[12px] font-bold text-[#2E4F3A]">
                {packingDoneCount}/{allPacking.length}
              </span>
            </div>

            <div className="rounded-[20px] bg-white border border-[#E8E1D5] divide-y divide-[#F1ECE3] overflow-hidden">
              {allPacking.map((item) => {
                const done = !!packingChecks[item.id];
                return (
                  <div
                    key={item.id}
                    role="button"
                    tabIndex={0}
                    onClick={() => onTogglePacking(item.id)}
                    onKeyDown={(e) => e.key === 'Enter' && onTogglePacking(item.id)}
                    className={`flex items-start gap-3 px-4 py-3.5 cursor-pointer transition ${
                      done ? 'bg-[#F5F8F5]' : 'hover:bg-[#FAF7F2]'
                    }`}
                  >
                    <span
                      className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition ${
                        done
                          ? 'border-[#2E4F3A] bg-[#2E4F3A] text-white'
                          : 'border-[#CFC7BA] bg-white text-transparent'
                      }`}
                    >
                      <Check className="h-3.5 w-3.5 stroke-[3]" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p
                        className={`text-[14.5px] font-semibold leading-snug ${
                          done ? 'line-through text-[#8B918D]' : 'text-[#171A18]'
                        }`}
                      >
                        {item.title}
                      </p>
                      {item.sub && (
                        <p className="text-[12.5px] text-[#6E7370] mt-0.5">{item.sub}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <form onSubmit={handlePackSubmit} className="flex gap-2">
              <input
                type="text"
                value={packInput}
                onChange={(e) => setPackInput(e.target.value)}
                placeholder="Agregar artículo a la maleta..."
                className="flex-1 min-h-[48px] rounded-2xl border border-[#E4DDD2] bg-white px-4 text-[14.5px] text-[#171A18] placeholder:text-[#989A97] focus:border-[#9E472A] focus:outline-none"
              />
              <button
                type="submit"
                className="min-h-[48px] inline-flex items-center gap-1.5 rounded-2xl bg-[#171A18] hover:bg-[#2F3431] px-4 text-[14px] font-semibold text-white cursor-pointer active:scale-95 transition"
              >
                <Plus className="h-4 w-4" />
                Añadir
              </button>
            </form>
          </div>
        </div>
      )}

      {/* SUB-TAB 3: BILLETERA DE SOLES */}
      {subTab === 'gastos' && (
        <div className="space-y-4">
          <div className="rounded-[26px] bg-[#171A18] p-5 text-[#FAF7F2] shadow-[0_12px_30px_rgba(23,26,24,0.18)]">
            <div className="flex items-baseline justify-between gap-2">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#E8CB80]">
                  Total Acumulado (PEN)
                </p>
                <p className="text-[12.5px] text-white/65 mt-0.5">
                  {expenses.length} {expenses.length === 1 ? 'gasto registrado' : 'gastos registrados'}
                </p>
              </div>
              <span className="font-serif-editorial text-[2.3rem] font-semibold text-[#E8CB80] tabular-nums leading-none">
                S/ {totalPEN.toFixed(2)}
              </span>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2.5 pt-4 border-t border-white/12">
              <div className="rounded-2xl bg-white/7 px-3.5 py-2.5">
                <span className="flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-[0.12em] text-white/65">
                  <Banknote className="h-3.5 w-3.5 text-[#8DD1A8]" /> Efectivo
                </span>
                <strong className="block font-serif-editorial text-[1.35rem] mt-0.5 tabular-nums">
                  S/ {cashPEN.toFixed(2)}
                </strong>
              </div>
              <div className="rounded-2xl bg-white/7 px-3.5 py-2.5">
                <span className="flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-[0.12em] text-white/65">
                  <CreditCard className="h-3.5 w-3.5 text-[#E8CB80]" /> Tarjeta
                </span>
                <strong className="block font-serif-editorial text-[1.35rem] mt-0.5 tabular-nums">
                  S/ {cardPEN.toFixed(2)}
                </strong>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleExpSubmit}
            className="rounded-[22px] bg-white border border-[#E8E1D5] p-4 space-y-2.5 shadow-sm"
          >
            <input
              type="text"
              value={expDesc}
              onChange={(e) => setExpDesc(e.target.value)}
              placeholder="Ej. Cata Wayocari, pan chuta, taxi..."
              required
              className="w-full min-h-[48px] rounded-xl border border-[#E4DDD2] bg-[#FAF7F2] px-3.5 text-[14.5px] text-[#171A18] placeholder:text-[#989A97] focus:border-[#9E472A] focus:outline-none"
            />
            <div className="grid grid-cols-2 gap-2">
              <input
                type="number"
                step="0.50"
                min="0.50"
                inputMode="decimal"
                value={expAmount}
                onChange={(e) => setExpAmount(e.target.value)}
                placeholder="Monto (S/)"
                required
                className="min-h-[48px] rounded-xl border border-[#E4DDD2] bg-[#FAF7F2] px-3.5 text-[14.5px] text-[#171A18] placeholder:text-[#989A97] focus:border-[#9E472A] focus:outline-none"
              />
              <select
                value={expMethod}
                onChange={(e) => setExpMethod(e.target.value)}
                className="min-h-[48px] rounded-xl border border-[#E4DDD2] bg-[#FAF7F2] px-3 text-[14.5px] text-[#171A18] focus:border-[#9E472A] focus:outline-none"
              >
                <option value="Efectivo">Efectivo</option>
                <option value="Tarjeta">Tarjeta</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full min-h-[50px] rounded-xl bg-[#9E472A] hover:bg-[#82381F] text-[15px] font-semibold text-white cursor-pointer active:scale-[0.985] transition"
            >
              Anotar gasto en Soles
            </button>
          </form>

          {expenses.length > 0 ? (
            <div className="rounded-[20px] bg-white border border-[#E8E1D5] divide-y divide-[#F1ECE3] overflow-hidden">
              {expenses.map((exp) => (
                <div key={exp.id} className="flex items-center justify-between gap-3 px-4 py-3.5">
                  <div className="min-w-0">
                    <p className="truncate text-[14.5px] font-semibold text-[#171A18]">
                      {exp.desc}
                    </p>
                    <p className="text-[12px] text-[#7A7F7B]">
                      {exp.method} · {exp.date}
                    </p>
                  </div>
                  <div className="flex items-center gap-2.5 shrink-0">
                    <span className="font-serif-editorial text-[1.25rem] font-semibold text-[#9E472A] tabular-nums">
                      S/ {Number(exp.amount).toFixed(2)}
                    </span>
                    <button
                      type="button"
                      onClick={() => onDeleteExpense(exp.id)}
                      aria-label="Eliminar gasto"
                      className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FAF7F2] border border-[#E8E1D5] text-[#9E472A] hover:bg-[#FCECE7] cursor-pointer"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-[13.5px] text-[#7A7F7B] py-4">
              Aún no han anotado gastos. Úsalo para llevar control del efectivo en soles y tarjeta.
            </p>
          )}

          <div className="pt-3">
            <button
              type="button"
              onClick={onRequestReset}
              className="w-full min-h-[48px] inline-flex items-center justify-center gap-2 rounded-2xl border border-[#DFC4B8] bg-white hover:bg-[#FCECE7] text-[14px] font-semibold text-[#8B3B1E] cursor-pointer transition"
            >
              <RotateCcw className="h-4 w-4" />
              Restaurar checks
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
