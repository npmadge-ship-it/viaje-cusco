# Valle Sagrado & Cusco — Cuaderno de Viaje (React + Tailwind + PWA)

Web app de viaje mobile-first construida con **React, Tailwind CSS, Leaflet y Vite PWA**, precargada con los 44 lugares, 6 días editables (Opción A/B), mapa interactivo, Plan B Lluvia, checklists sincronizados y billetera en soles — lista para funcionar **100% sin internet** en iPhone y Android.

## Ejecutar en local

```bash
npm install
npm run dev      # Desarrollo (puerto 5173)
npm run build    # Compilar producción + Service Worker offline en dist/
npm run preview  # Vista previa de producción (puerto 4173)
```

## Desplegar gratis e instalar en iPhone / Android (offline)

1. Ejecuta `npm run build` (ya generado en la carpeta `dist/`).
2. Sube la carpeta `dist/` a [Netlify Drop](https://app.netlify.com/drop) o conecta el proyecto en Vercel / GitHub Pages.
3. Abre el enlace HTTPS una sola vez con Wi-Fi en el celular de tus padres (el Service Worker guarda en caché los 43 archivos, incluidas todas las fotos de portada y miniaturas).
4. **iPhone (Safari):** **Compartir → Agregar a pantalla de inicio**.
5. **Android (Chrome):** **Menú ⋮ → Instalar aplicación**.
