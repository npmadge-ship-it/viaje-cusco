import React, { useCallback, useEffect, useState } from 'react';
import { CalendarDays, MapPin, Compass, Umbrella, Briefcase } from 'lucide-react';
import { DEFAULT_DAY_CHOICES, PLACES, STORAGE_KEY } from './data/tripData';
import ItineraryView from './components/ItineraryView';
import MapView from './components/MapView';
import GuideView from './components/GuideView';
import RainPlanView from './components/RainPlanView';
import LogisticsView from './components/LogisticsView';
import PlaceSheet from './components/PlaceSheet';

const defaultState = () => ({
  activeTab: 'itinerario',
  activeDay: 'd1',
  largeText: false,
  visited: {},
  reserved: {},
  dayChoices: { ...DEFAULT_DAY_CHOICES },
  dayNotes: {},
  bookingChecks: {},
  packingChecks: {},
  customPacking: [],
  expenses: []
});

function loadInitialState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState();
    const parsed = JSON.parse(raw);
    const base = defaultState();
    return {
      ...base,
      ...parsed,
      activeTab: ['itinerario', 'mapa', 'guia', 'lluvia', 'logistica'].includes(parsed.activeTab)
        ? parsed.activeTab
        : 'itinerario',
      dayChoices: { ...base.dayChoices, ...(parsed.dayChoices || {}) },
      visited: parsed.visited || {},
      reserved: parsed.reserved || {},
      dayNotes: parsed.dayNotes || {},
      bookingChecks: parsed.bookingChecks || {},
      packingChecks: parsed.packingChecks || {},
      customPacking: Array.isArray(parsed.customPacking) ? parsed.customPacking : [],
      expenses: Array.isArray(parsed.expenses) ? parsed.expenses : []
    };
  } catch {
    return defaultState();
  }
}

export default function App() {
  const [state, setState] = useState(loadInitialState);
  const [isOnline, setIsOnline] = useState(
    typeof navigator !== 'undefined' ? navigator.onLine !== false : true
  );
  const [sheetState, setSheetState] = useState({ placeId: null, rainMode: false });
  const [mapFocus, setMapFocus] = useState({ placeId: null, filter: 'Todos' });
  const [resetModalOpen, setResetModalOpen] = useState(false);
  const [toast, setToast] = useState('');

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // ignore
    }
  }, [state]);

  useEffect(() => {
    document.documentElement.classList.toggle('text-large', !!state.largeText);
  }, [state.largeText]);

  useEffect(() => {
    const onOnline = () => setIsOnline(true);
    const onOffline = () => setIsOnline(false);
    window.addEventListener('online', onOnline);
    window.addEventListener('offline', onOffline);
    return () => {
      window.removeEventListener('online', onOnline);
      window.removeEventListener('offline', onOffline);
    };
  }, []);

  const showToast = useCallback((msg) => setToast(msg), []);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(''), 2200);
    return () => clearTimeout(t);
  }, [toast]);

  const switchTab = (tab) => {
    setState((s) => ({ ...s, activeTab: tab }));
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleOpenPlace = useCallback((placeId, opts = {}) => {
    setSheetState({ placeId, rainMode: !!opts.rainMode });
  }, []);

  const handleCloseSheet = useCallback(() => {
    setSheetState({ placeId: null, rainMode: false });
  }, []);

  const handleToggleVisited = useCallback(
    (placeId) => {
      setState((s) => {
        const next = !s.visited[placeId];
        showToast(next ? 'Marcado como visitado' : 'Desmarcado');
        return { ...s, visited: { ...s.visited, [placeId]: next } };
      });
    },
    [showToast]
  );

  const handleToggleReserved = useCallback(
    (placeId) => {
      setState((s) => {
        const next = !s.reserved[placeId];
        showToast(next ? 'Reserva confirmada' : 'Reserva pendiente');
        return { ...s, reserved: { ...s.reserved, [placeId]: next } };
      });
    },
    [showToast]
  );

  const handleChooseOption = useCallback(
    (momentId, choiceKey) => {
      setState((s) => ({
        ...s,
        dayChoices: { ...s.dayChoices, [momentId]: choiceKey }
      }));
      showToast(`Opción ${choiceKey} seleccionada`);
    },
    [showToast]
  );

  const handleChangeDayNote = useCallback((dayId, value) => {
    setState((s) => ({
      ...s,
      dayNotes: { ...s.dayNotes, [dayId]: value }
    }));
  }, []);

  const handleToggleBooking = useCallback((id, linkedPlace) => {
    setState((s) => {
      if (linkedPlace) {
        return {
          ...s,
          reserved: { ...s.reserved, [linkedPlace]: !s.reserved[linkedPlace] }
        };
      }
      return {
        ...s,
        bookingChecks: { ...s.bookingChecks, [id]: !s.bookingChecks[id] }
      };
    });
  }, []);

  const handleTogglePacking = useCallback((id) => {
    setState((s) => ({
      ...s,
      packingChecks: { ...s.packingChecks, [id]: !s.packingChecks[id] }
    }));
  }, []);

  const handleAddPacking = useCallback(
    (title) => {
      setState((s) => ({
        ...s,
        customPacking: [
          ...s.customPacking,
          { id: 'pack-custom-' + Date.now(), title, sub: 'Agregado por ustedes' }
        ]
      }));
      showToast('Agregado al equipaje');
    },
    [showToast]
  );

  const handleAddExpense = useCallback(
    ({ desc, amount, method }) => {
      const now = new Date();
      const date = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(
        2,
        '0'
      )}`;
      setState((s) => ({
        ...s,
        expenses: [{ id: 'exp-' + Date.now(), desc, amount, method, date }, ...s.expenses]
      }));
      showToast(`Gasto anotado: S/ ${amount.toFixed(2)}`);
    },
    [showToast]
  );

  const handleDeleteExpense = useCallback(
    (id) => {
      setState((s) => ({
        ...s,
        expenses: s.expenses.filter((e) => e.id !== id)
      }));
      showToast('Gasto eliminado');
    },
    [showToast]
  );

  const handleConfirmReset = () => {
    setState((s) => ({
      ...s,
      visited: {},
      reserved: {},
      bookingChecks: {},
      packingChecks: {}
    }));
    setResetModalOpen(false);
    showToast('Todos los checks fueron restaurados');
  };

  const handleOpenDayMap = useCallback((dayId) => {
    setState((s) => ({ ...s, activeDay: dayId, activeTab: 'mapa' }));
    setMapFocus({ placeId: null, filter: 'Día actual' });
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleLocateOnMap = useCallback((placeId) => {
    setMapFocus({ placeId, filter: 'Todos' });
    setState((s) => ({ ...s, activeTab: 'mapa' }));
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const activeSheetPlace = sheetState.placeId ? PLACES[sheetState.placeId] : null;

  const navItems = [
    { id: 'itinerario', label: 'Itinerario', Icon: CalendarDays },
    { id: 'mapa', label: 'Mapa', Icon: MapPin },
    { id: 'guia', label: 'Guía', Icon: Compass },
    { id: 'lluvia', label: 'Lluvia', Icon: Umbrella },
    { id: 'logistica', label: 'Logística', Icon: Briefcase }
  ];

  return (
    <div className="min-h-screen bg-[#EFEAE1] flex justify-center">
      <div className="paper-canvas w-full max-w-[600px] min-h-screen shadow-[0_0_60px_rgba(23,26,24,0.09)] relative pb-[110px]">
        {/* Quiet Luxury Masthead */}
        <header className="sticky top-0 z-30 bg-[#FAF7F2]/92 backdrop-blur-md border-b border-[#E8E1D5] px-5 pt-[calc(12px+env(safe-area-inset-top,0px))] pb-3">
          <div className="flex items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-[0.18em] text-[#9E472A]">
                <span
                  className={`h-1.5 w-1.5 rounded-full ${isOnline ? 'bg-[#2E4F3A]' : 'bg-[#B5892E]'}`}
                />
                <span>
                  {isOnline ? 'Valle Sagrado & Cusco · 19–24 Ene' : 'Sin conexión · Valle & Cusco'}
                </span>
              </div>
              <h1 className="font-serif-editorial text-[1.68rem] font-semibold leading-none tracking-[-0.015em] text-[#171A18] mt-1">
                Cuaderno de Viaje
              </h1>
            </div>

            <button
              type="button"
              onClick={() => {
                setState((s) => {
                  const next = !s.largeText;
                  showToast(next ? 'Lectura amplia activada' : 'Lectura estándar');
                  return { ...s, largeText: next };
                });
              }}
              aria-label="Cambiar tamaño de lectura"
              className={`min-h-[42px] min-w-[44px] rounded-full px-3 text-[13px] font-bold border transition cursor-pointer active:scale-95 ${
                state.largeText
                  ? 'bg-[#171A18] border-[#171A18] text-[#FAF7F2]'
                  : 'bg-white border-[#DDD5C8] text-[#171A18]'
              }`}
            >
              {state.largeText ? 'A−' : 'A+'}
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="px-4 pt-5 pb-6">
          {state.activeTab === 'itinerario' && (
            <ItineraryView
              activeDayId={state.activeDay}
              onSelectDay={(id) => setState((s) => ({ ...s, activeDay: id }))}
              dayChoices={state.dayChoices}
              onChooseOption={handleChooseOption}
              visited={state.visited}
              reserved={state.reserved}
              dayNotes={state.dayNotes}
              onChangeDayNote={handleChangeDayNote}
              onOpenPlace={handleOpenPlace}
              onToggleVisited={handleToggleVisited}
              onOpenDayMap={handleOpenDayMap}
            />
          )}

          {state.activeTab === 'mapa' && (
            <MapView
              activeDayId={state.activeDay}
              dayChoices={state.dayChoices}
              visited={state.visited}
              focusPlaceId={mapFocus.placeId}
              initialFilter={mapFocus.filter}
              onClearFocus={() => setMapFocus((f) => ({ ...f, placeId: null }))}
              onOpenPlace={handleOpenPlace}
            />
          )}

          {state.activeTab === 'guia' && (
            <GuideView
              visited={state.visited}
              reserved={state.reserved}
              onOpenPlace={handleOpenPlace}
              onToggleVisited={handleToggleVisited}
            />
          )}

          {state.activeTab === 'lluvia' && (
            <RainPlanView
              visited={state.visited}
              reserved={state.reserved}
              onOpenPlace={handleOpenPlace}
              onToggleVisited={handleToggleVisited}
            />
          )}

          {state.activeTab === 'logistica' && (
            <LogisticsView
              visited={state.visited}
              reserved={state.reserved}
              bookingChecks={state.bookingChecks}
              packingChecks={state.packingChecks}
              customPacking={state.customPacking}
              expenses={state.expenses}
              onOpenPlace={handleOpenPlace}
              onToggleVisited={handleToggleVisited}
              onToggleBooking={handleToggleBooking}
              onTogglePacking={handleTogglePacking}
              onAddPacking={handleAddPacking}
              onAddExpense={handleAddExpense}
              onDeleteExpense={handleDeleteExpense}
              onRequestReset={() => setResetModalOpen(true)}
            />
          )}
        </main>

        {/* Floating Warm-Ivory Bottom Navigation Dock */}
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[600px] z-40 px-3 pb-[calc(10px+env(safe-area-inset-bottom,0px))] pt-1 pointer-events-none">
          <nav
            aria-label="Navegación principal"
            className="pointer-events-auto grid grid-cols-5 items-center rounded-[28px] bg-white/95 backdrop-blur-xl border border-[#E5DDD0] p-1.5 shadow-[0_12px_34px_rgba(23,26,24,0.14)]"
          >
            {navItems.map(({ id, label, Icon }) => {
              const active = state.activeTab === id;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => switchTab(id)}
                  className={`flex flex-col items-center justify-center gap-1 min-h-[54px] rounded-[22px] transition-all cursor-pointer ${
                    active
                      ? 'bg-[#171A18] text-[#FAF7F2] shadow-sm'
                      : 'text-[#787E7A] hover:text-[#171A18]'
                  }`}
                >
                  <Icon className="h-[19px] w-[19px] stroke-[1.9]" />
                  <span className="text-[10.5px] font-semibold leading-none">{label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Luxury Editorial Bottom Sheet */}
        <PlaceSheet
          place={activeSheetPlace}
          rainMode={sheetState.rainMode}
          isVisited={activeSheetPlace ? !!state.visited[activeSheetPlace.id] : false}
          isReserved={activeSheetPlace ? !!state.reserved[activeSheetPlace.id] : false}
          onClose={handleCloseSheet}
          onToggleVisited={handleToggleVisited}
          onToggleReserved={handleToggleReserved}
          onLocateOnMap={handleLocateOnMap}
        />

        {/* Restore Checks Modal */}
        {resetModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#171A18]/50 backdrop-blur-[3px] p-5 animate-fade-in"
            role="dialog"
            aria-modal="true"
            onClick={() => setResetModalOpen(false)}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-[380px] rounded-[28px] bg-[#FAF7F2] p-6 shadow-2xl border border-[#E8E1D5]"
            >
              <h3 className="font-serif-editorial text-[1.5rem] font-semibold text-[#171A18]">
                ¿Restaurar todos los checks?
              </h3>
              <p className="mt-2 text-[14.5px] text-[#525854] leading-relaxed">
                Se desmarcarán los lugares visitados, reservas confirmadas y listas de equipaje. Tus
                gastos en la billetera se conservarán intactos.
              </p>
              <div className="mt-5 flex gap-2.5">
                <button
                  type="button"
                  onClick={() => setResetModalOpen(false)}
                  className="flex-1 min-h-[48px] rounded-2xl border border-[#DCD4C7] bg-white text-[14.5px] font-semibold text-[#171A18] cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  onClick={handleConfirmReset}
                  className="flex-1 min-h-[48px] rounded-2xl bg-[#9E472A] text-[14.5px] font-semibold text-white cursor-pointer"
                >
                  Sí, restaurar
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Toast */}
        {toast && (
          <div
            role="status"
            aria-live="polite"
            className="fixed bottom-[94px] left-1/2 -translate-x-1/2 z-50 rounded-full bg-[#171A18] px-4 py-2 text-[13px] font-semibold text-[#FAF7F2] shadow-lg whitespace-nowrap"
          >
            {toast}
          </div>
        )}
      </div>
    </div>
  );
}
