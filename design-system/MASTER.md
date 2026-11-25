# Design System — Valle Sagrado & Cusco (Luxury Andean Editorial)

> Referencia maestra inspirada en hospitalidad de lujo contemporánea (*Belmond, Aman, Kinfolk, Condé Nast Traveler*) optimizada para lectura móvil de alto contraste bajo el sol de los Andes.

---

## 1. Principios de Diseño (UI/UX Pro Max)

1. **Silencio visual (*Quiet Luxury*):** Menos elementos por pantalla, más aire (`20–28px` entre bloques), divisiones por líneas finas (`1px #E8E1D5`) en lugar de cajas pesadas o sombras duras.
2. **Escaneo en 2 segundos:** Las listas nunca muestran párrafos extensos. Cada parada muestra estrictamente **foto editorial (`68×68`) + hora + título + 1 sola línea + indicador de estado**. Toda la profundidad vive dentro del **Bottom Sheet deslizable**.
3. **Fotografía como protagonista:** Cada día abre con una portada editorial apaisada (`16:9` / `h-64`) con velo cinematográfico suave y tipografía serif elegante sobre imagen.
4. **Ergonomía impecable sin infantilizar:** Texto base `16.5–17px` (+ modo lectura amplia `A+` a `19px`), objetivos táctiles ≥ `48px` y contraste superior a `10:1` en textos principales.
5. **100% Offline-First:** Todas las fotos, íconos, estilos y la aplicación React se precachean en Service Worker (`vite-plugin-pwa`).

---

## 2. Sistema de Color (Tokens Semánticos)

| Token | Hex | Rol | Contraste sobre `#FAF7F2` |
| --- | --- | --- | --- |
| `--canvas-alabaster` | `#FAF7F2` | Fondo principal (papel algodón cálido) | — |
| `--surface-ivory` | `#FFFFFF` | Tarjetas limpias y Bottom Sheet | — |
| `--surface-linen` | `#F3EDE3` | Superficies secundarias, pills inactivas | — |
| `--border-hairline` | `#E8E1D5` | Divisores sutiles y bordes finos | — |
| `--ink-obsidian` | `#171A18` | Títulos, texto principal, estado activo | **15.8 : 1 (AAA)** |
| `--ink-stone` | `#525854` | Subtítulos, descripciones editoriales | **6.7 : 1 (AA+)** |
| `--ink-muted` | `#7A7F7B` | Metadatos secundarios, etiquetas | **4.6 : 1 (AA)** |
| `--accent-terracotta` | `#9E472A` | Acento andino, horas, pestaña activa | **5.8 : 1 (AA)** |
| `--accent-cypress` | `#2E4F3A` | Valle Sagrado, botón Google Maps, check | **8.7 : 1 (AAA)** |
| `--accent-brass` | `#B5892E` | Reservas pendientes, detalles dorados | `#7A5A0F` en texto (**5.9 : 1**) |
| `--accent-slate` | `#334E5C` | Plan B Lluvia (refugios bajo techo) | **8.3 : 1 (AAA)** |

---

## 3. Tipografía Editorial

- **Display / Editorial Serif:** `Cormorant Garamond` (pesos `500`, `600`, `700` + *italic* para subtítulos y números de día).
  - Portada de día (`h2`): `28px–32px`, `line-height: 1.1`, tracking `-0.015em`.
  - Título del Bottom Sheet: `26px–28px`, `line-height: 1.15`.
  - Montos en Soles (`S/`): `tabular-nums`, serif semibold.
- **UI & Lectura Sans:** `Plus Jakarta Sans` (pesos `400`, `500`, `600`, `700`).
  - Etiquetas editoriales (*kickers*): `11px`, `uppercase`, `letter-spacing: 0.16em`, `font-weight: 700`.
  - Cuerpo de texto: `15.5px–16.5px`, `line-height: 1.62`.

---

## 4. Arquitectura de Componentes

- **Header Editorial Minimalista:** Kicker de estado online/offline + marca en `Cormorant Garamond` + botón discreto `A+`.
- **Day Strip Editorial:** Píldoras táctiles verticales con día de la semana en micro-uppercase, número grande en serif y zona debajo.
- **Portada Hero por Día:** Fotografía de borde a borde redondeada (`rounded-[28px]`), degradado inferior cinematográfico, etiqueta de edición arriba a la izquierda y botón de vidrio esmerilado **"Mapa del día"** arriba a la derecha.
- **Compact Place Row (`PlaceRow`):** Foto `68×68` (`rounded-2xl`), hora + indicador de reserva en una línea superior, nombre del lugar, **1 sola línea descriptiva**, y anillo de check circular minimalista a la derecha.
- **Airbnb / iPhone Bottom Sheet (`PlaceSheet`):** Handle superior táctil, imagen hero `h-56`, insignias flotantes + botón "Ver pin en mapa", narrativa completa, tarjeta de datos prácticos con divisores finos, toggles persistentes de **Reservado** / **Visitado** y barra fija inferior con **Abrir en Google Maps**, **WhatsApp** y **Llamar**.
- **Mapa Interactivo (`MapView`):** Leaflet con basemap claro minimalista, pines circulares diferenciados por zona (`Valle`, `Cusco`, `Valle Sur`, `Visitado`), filtros flotantes y tarjeta inferior flotante conectada al Bottom Sheet.
- **Navegación Inferior Flotante:** Dock de cristal cálido de 5 pestañas (**Itinerario**, **Mapa**, **Guía**, **Lluvia**, **Logística**) con safe-area iOS.

---

## 5. Anti-Patrones Evitados

- Sin tarjetas gigantes saturadas de texto en los listados.
- Sin sombras negras pesadas, degradados neón ni bordes de colores estridentes.
- Sin texto de relleno (*Lorem Ipsum*) ni menciones a lugares excluidos del circuito clásico.
