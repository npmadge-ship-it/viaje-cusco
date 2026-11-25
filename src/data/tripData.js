export const STORAGE_KEY = 'cuaderno_cusco_valle_state_v1';

export const mapsUrl = (query) =>
  'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(query);

export const PLACES = {
  // --- HOTELS ---
  'hotel-valle': {
    id: 'hotel-valle',
    name: 'Casa Andina Premium Valle Sagrado',
    subtitle: 'Hotel & Villas · 3 noches (19–22 Ene)',
    zone: 'Valle Sagrado',
    section: 'explore',
    category: 'Bienestar',
    rainSafe: true,
    rainCategory: 'Bienestar',
    requiresReservation: false,
    coords: [-13.2923, -72.1788],
    photo: './photos/alpacas.jpg',
    address: '5to Paradero Yanahuara, Urubamba, Cusco',
    hours: 'Check-in 14:00+ · Check-out estándar 10:00 a.m.',
    price: 'Confirmado · Consultar late check-out',
    phone: '+5113916500',
    phoneDisplay: '(01) 391-6500',
    mapsQuery: 'Casa Andina Premium Valle Sagrado Hotel & Villas Yanahuara Urubamba',
    description:
      'Refugio amplio rodeado de montañas con jardines tranquilos, alpacas residentes, fogatas al atardecer, spa completo y restaurante Alma. El Planetario María Reiche está a solo 200 m.',
    alert: 'Check-out estándar a las 10:00 a.m. Conviene consultar late check-out al llegar el martes.',
    rainNote:
      'Tarde perfecta bajo techo: masaje o circuito de spa, lectura frente a la chimenea y cena cálida en Alma Bar Restaurante.'
  },
  'hotel-cusco': {
    id: 'hotel-cusco',
    name: 'Casa Andina Premium Cusco',
    subtitle: 'Casona Colonial · 2 noches (22–24 Ene)',
    zone: 'Cusco Ciudad',
    section: 'logistics',
    category: 'Hotel',
    rainSafe: true,
    requiresReservation: false,
    coords: [-13.5204, -71.9746],
    photo: './photos/hotel-cusco.jpg',
    address: 'Plazoleta Limacpampa Chico 473, Cusco',
    hours: 'Check-out estándar 10:00 a.m. · Custodia de maletas',
    price: 'Confirmado · Solo tarjeta (no acepta efectivo)',
    phone: '+5113916500',
    phoneDisplay: '(01) 391-6500',
    mapsQuery: 'Casa Andina Premium Cusco Plazoleta Limacpampa Chico 473',
    description:
      'Casona colonial del siglo XVIII con patio empedrado y chimenea en el corazón peatonal de Cusco: 2 min a Qorikancha, 5 min a Plaza de Armas y San Blas, 13 min a Mercado San Pedro.',
    alert:
      'Importante: Casona colonial sin ascensor, no acepta efectivo (solo tarjeta) y check-out a las 10:00 a.m.',
    alertType: 'important'
  },

  // --- EAT & DRINK: VALLE SAGRADO ---
  'el-huacatay': {
    id: 'el-huacatay',
    name: 'El Huacatay',
    subtitle: 'Cocina creativa andina y mediterránea',
    zone: 'Valle Sagrado',
    section: 'eat',
    category: 'Restaurantes',
    rainSafe: true,
    requiresReservation: true,
    coords: [-13.306, -72.1168],
    photo: './photos/dining.jpg',
    address: 'Jr. Arica 620, Urubamba',
    hours: 'Lun–Sáb 12:30 – 20:00 (Dom cerrado)',
    price: 'Reserva recomendada · Acepta tarjeta',
    phone: '+5184201790',
    phoneDisplay: '(084) 201-790',
    mapsQuery: 'El Huacatay Jr Arica 620 Urubamba Cusco',
    description:
      'Clásico íntimo y acogedor en el corazón de Urubamba. Ideal para un almuerzo pausado tras llegar del aeropuerto o el jueves: destacan el tartar de trucha, carpaccio de alpaca y platos con hierbas del valle.'
  },
  'las-manos': {
    id: 'las-manos',
    name: 'Las Manos Cocina de Culto',
    subtitle: 'Cocina al fuego, brasas y chimenea',
    zone: 'Valle Sagrado',
    section: 'eat',
    category: 'Restaurantes',
    rainSafe: true,
    rainCategory: 'Gastronomía & Vino',
    requiresReservation: true,
    coords: [-13.2966, -72.1565],
    photo: './photos/dining.jpg',
    address: 'Km 71.1 Carretera Urubamba (rumbo a Yanahuara)',
    hours: 'Lun–Dom 12:00 – 22:00',
    price: 'Reserva recomendada · Muy cerca del hotel',
    mapsQuery: 'Las Manos Cocina de Culto Urubamba Valle Sagrado',
    description:
      'Cocina honesta a las brasas y horno de leña que celebra ingredientes locales del Valle Sagrado. Su salón cálido con chimenea lo convierte en un refugio espectacular para tardes o noches lluviosas.',
    rainNote: 'Sobremesa inolvidable junto a la chimenea con vinos seleccionados y cocina a la brasa.'
  },
  'alma-valle': {
    id: 'alma-valle',
    name: 'Alma Bar Restaurante',
    subtitle: 'Cena ligera de aclimatación en Casa Andina Valle',
    zone: 'Valle Sagrado',
    section: 'eat',
    category: 'Restaurantes',
    rainSafe: true,
    requiresReservation: false,
    coords: [-13.2926, -72.1782],
    photo: './photos/dining.jpg',
    address: 'Casa Andina Premium Valle Sagrado, Yanahuara',
    hours: 'Desayuno, almuerzo y cena diaria hasta 22:00',
    price: 'En el hotel · Sin traslados la primera noche',
    phone: '+5113916500',
    phoneDisplay: '(01) 391-6500',
    mapsQuery: 'Alma Restaurante Casa Andina Premium Valle Sagrado Yanahuara',
    description:
      'Perfecto para la noche de llegada: mate de coca o muña junto a la fogata, crema de quinua o trucha a la plancha, y descanso sin salir del hotel.'
  },
  'wayocari': {
    id: 'wayocari',
    name: 'Wayocari – Viñedos del Inca',
    subtitle: 'Vino de altura 2,940 m · 95 pts Tim Atkin 2026',
    zone: 'Valle Sagrado',
    section: 'both',
    category: 'Bares & Vino',
    exploreCategory: 'Cultura & Talleres',
    rainSafe: true,
    rainCategory: 'Gastronomía & Vino',
    requiresReservation: true,
    coords: [-13.3256, -72.0439],
    photo: './photos/cover-day2.jpg',
    address: 'Centro Poblado Huayoccari, Sector Tikapata S/N, Urubamba',
    hours: 'Lun–Sáb 09:00 – 18:00 (Cita previa)',
    price: 'S/ 80 Tour + Cata · S/ 200 con botella 750 ml',
    phone: '+51981444879',
    whatsapp: '51981444879',
    phoneDisplay: '981 444 879',
    mapsQuery: 'Viñedos del Inca Wayocari Huayoccari Urubamba',
    description:
      'Uno de los viñedos más singulares del Perú. Recorrido guiado y cata del Tannat Reserve 2023 (galardonado con 95 puntos por Tim Atkin 2026), rodeado de montañas y chacras de maíz blanco gigante.',
    alert: 'Reservar con un mínimo de 2 días de anticipación por WhatsApp o teléfono.',
    alertType: 'important',
    rainNote: 'La degustación y explicación enológica se realizan en espacio cubierto con vista al valle.'
  },
  'hacienda-huayoccari': {
    id: 'hacienda-huayoccari',
    name: 'Hacienda Huayoccari',
    subtitle: 'Almuerzo de hacienda + colección privada de arte',
    zone: 'Valle Sagrado',
    section: 'both',
    category: 'Restaurantes',
    exploreCategory: 'Museos & Arte',
    rainSafe: true,
    rainCategory: 'Museos & Arte',
    requiresReservation: true,
    coords: [-13.3238, -72.0454],
    photo: './photos/hotel-cusco.jpg',
    address: 'Carretera Pisac–Urubamba, entre Km 60 y 61, Huayoccari',
    hours: 'Almuerzo 11:30 – 16:00 (Solo con reserva)',
    price: 'Requiere reserva previa · A pasos de Wayocari',
    phone: '+51984690703',
    whatsapp: '51984690703',
    phoneDisplay: '984 690 703',
    mapsQuery: 'Hacienda Huayoccari Urubamba Cusco',
    description:
      'Casona familiar histórica que combina un almuerzo tradicional andino impecable con una notable colección privada de arte prehispánico, colonial y popular peruano en salones cerrados.',
    alert: 'Indispensable reservar mesa con anticipación (reservas@haciendahuayoccari.com o WhatsApp).',
    rainNote: 'Comedor interior con ventanales panorámicos y galerías de arte completamente techadas.'
  },
  'muju-belmond': {
    id: 'muju-belmond',
    name: 'Muju (Belmond Río Sagrado)',
    subtitle: 'Alta cocina estacional junto al río Vilcanota',
    zone: 'Valle Sagrado',
    section: 'eat',
    category: 'Restaurantes',
    rainSafe: true,
    requiresReservation: true,
    coords: [-13.2898, -72.1984],
    photo: './photos/dining.jpg',
    address: 'Km 75.8 Carretera Urubamba–Yanahuara, Valle Sagrado',
    hours: 'Lun–Dom · Almuerzo y Cena (12:30 – 21:30)',
    price: 'Fine dining · Reserva previa recomendada',
    phone: '+5184201631',
    phoneDisplay: '(084) 201-631',
    mapsQuery: 'Belmond Hotel Rio Sagrado Urubamba',
    description:
      'Elegante comedor del hotel Belmond Río Sagrado. Cocina contemporánea inspirada en semillas nativas, vegetales de biohuerto y excelentes maridajes de vino sudamericano.'
  },
  'wayra-sol-luna': {
    id: 'wayra-sol-luna',
    name: 'Wayra (Hotel Sol y Luna)',
    subtitle: 'Cocina del valle + caballos de paso peruanos',
    zone: 'Valle Sagrado',
    section: 'eat',
    category: 'Restaurantes',
    rainSafe: true,
    requiresReservation: true,
    coords: [-13.3025, -72.1322],
    photo: './photos/dining.jpg',
    address: 'Fundo Huincho Lote A-5, Urubamba',
    hours: 'Lun–Dom · Almuerzos 12:30 – 15:30',
    price: 'Consultar días y horario de show ecuestre',
    phone: '+5184608930',
    phoneDisplay: '(084) 608-930',
    mapsQuery: 'Restaurante Wayra Hotel Sol y Luna Urubamba',
    description:
      'Rancho campestre elegante dentro del Relais & Châteaux Sol y Luna. Cocina regional refinada y demostración de caballos peruanos de paso en su picadero.',
    alert: 'Confirmar previamente qué días de la semana se realiza la exhibición de caballos de paso.'
  },
  'cerveceria-valle': {
    id: 'cerveceria-valle',
    name: 'Cervecería del Valle Sagrado',
    subtitle: 'Taproom artesanal junto al río en Puente Pachar',
    zone: 'Valle Sagrado',
    section: 'eat',
    category: 'Bares & Vino',
    rainSafe: true,
    requiresReservation: false,
    coords: [-13.2856, -72.2268],
    photo: './photos/beer.jpg',
    address: 'Paradero Puente Pachar, Valle Sagrado, Urubamba',
    hours: 'Lun–Dom 12:00 – 20:00',
    price: 'Sin reserva · Degustación de 4 estilos',
    phone: '+51997452050',
    whatsapp: '51997452050',
    phoneDisplay: '997 452 050',
    mapsQuery: 'Cerveceria del Valle Sagrado Puente Pachar Urubamba',
    description:
      'Parada perfecta después de caminar a Ñaupa Iglesia. Cervezas artesanales elaboradas con agua de glaciar e insumos andinos (como la Roja con quinua o IPA de temporada) y piqueos frescos.'
  },

  // --- EAT & DRINK: CUSCO CIUDAD ---
  'pachapapa': {
    id: 'pachapapa',
    name: 'Pachapapa',
    subtitle: 'Cocina cusqueña en patio colonial de San Blas',
    zone: 'Cusco Ciudad',
    section: 'eat',
    category: 'Restaurantes',
    rainSafe: true,
    requiresReservation: true,
    coords: [-13.515, -71.9741],
    photo: './photos/hotel-cusco.jpg',
    address: 'Plazoleta San Blas 120, Cusco',
    hours: 'Lun–Dom 12:00 – 22:00',
    price: 'Reserva recomendada para almuerzo',
    phone: '+51932929474',
    whatsapp: '51932929474',
    phoneDisplay: '932 929 474',
    mapsQuery: 'Pachapapa Plazoleta San Blas 120 Cusco',
    description:
      'Clásico encantador frente a la iglesia de San Blas, con horno de barro, arpa andina en vivo y salones interiores cálidos si llueve. Destacan el lechón, quinotto y platos al horno.'
  },
  'cicciolina': {
    id: 'cicciolina',
    name: 'Cicciolina',
    subtitle: 'Tapas bar y alta cocina contemporánea cusqueña',
    zone: 'Cusco Ciudad',
    section: 'eat',
    category: 'Restaurantes',
    rainSafe: true,
    rainCategory: 'Gastronomía & Vino',
    requiresReservation: true,
    coords: [-13.5162, -71.9772],
    photo: './photos/dining.jpg',
    address: 'Calle Palacio 110, 2do piso, Cusco',
    hours: 'Lun–Dom 12:30 – 21:15',
    price: 'Reserva indispensable para salón · Barra de tapas',
    phone: '+5184255763',
    whatsapp: '51994059709',
    phoneDisplay: '(084) 255-763',
    mapsQuery: 'Cicciolina Calle Palacio 110 Cusco',
    description:
      'Referente indiscutible de Cusco desde 2003, en el segundo piso de una casona colonial. Cocina de producto peruano con técnica mediterránea y una de las mejores cavas de vinos de la ciudad.',
    rainNote: 'La barra de Cicciolina Tapas Bar es un refugio extraordinario con vino por copa y tapas calientes.'
  },
  'oculto': {
    id: 'oculto',
    name: 'Oculto',
    subtitle: 'Cocina de autor, vinos seleccionados y coctelería',
    zone: 'Cusco Ciudad',
    section: 'eat',
    category: 'Restaurantes',
    rainSafe: true,
    requiresReservation: true,
    coords: [-13.5174, -71.9752],
    photo: './photos/dining.jpg',
    address: 'Calle Ruinas 459, Centro Histórico, Cusco',
    hours: 'Mar–Dom 12:30 – 22:30 · Lun 17:30 – 22:30',
    price: 'Reserva recomendada · A 4 min caminando del hotel',
    phone: '+51920827998',
    whatsapp: '51920827998',
    phoneDisplay: '920 827 998',
    mapsQuery: 'Oculto Restaurante Calle Ruinas 459 Cusco',
    description:
      'Uno de los espacios más elogiados de la nueva escena gastronómica cusqueña. Ambiente íntimo, cocina creativa contemporánea y curaduría de vinos con personalidad.'
  },
  'mauka': {
    id: 'mauka',
    name: 'Mauka by Pía León',
    subtitle: 'Biodiversidad peruana en Palacio Nazarenas',
    zone: 'Cusco Ciudad',
    section: 'eat',
    category: 'Restaurantes',
    rainSafe: true,
    requiresReservation: true,
    coords: [-13.5151, -71.9769],
    photo: './photos/dining.jpg',
    address: 'Plazoleta Nazarenas 223, Cusco',
    hours: 'Lun–Dom 12:00 – 15:30 y 18:30 – 22:00',
    price: 'Alta gastronomía · Reserva anticipada',
    phone: '+5184582222',
    phoneDisplay: '(084) 582-222 ext. 733',
    mapsQuery: 'Mauka Belmond Palacio Nazarenas Cusco',
    description:
      'Dirigido por Pía León dentro del antiguo convento de Palacio Nazarenas. Celebra raíces andinas, tubérculos poco conocidos y grandes vinos sudamericanos en un entorno sereno y sofisticado.'
  },
  'chicha': {
    id: 'chicha',
    name: 'Chicha por Gastón Acurio',
    subtitle: 'Cocina regional cusqueña contemporánea',
    zone: 'Cusco Ciudad',
    section: 'eat',
    category: 'Restaurantes',
    rainSafe: true,
    requiresReservation: true,
    coords: [-13.5168, -71.9803],
    photo: './photos/dining.jpg',
    address: 'Plaza Regocijo 261, 2do piso, Cusco',
    hours: 'Lun–Dom 12:00 – 22:30',
    price: 'Reserva recomendada · Casona con balcones',
    phone: '+5184240520',
    phoneDisplay: '(084) 240-520',
    mapsQuery: 'Chicha por Gaston Acurio Plaza Regocijo 261 Cusco',
    description:
      'Homenaje elegante a los productores del Cusco en un salón colonial con vigas de madera. Imprescindibles las papas nativas con cremas, cebiche de trucha y pachamanca a la olla.'
  },
  'yaku': {
    id: 'yaku',
    name: 'Yaku Cocina de Altura',
    subtitle: 'Cocina peruana cálida con música en vivo',
    zone: 'Cusco Ciudad',
    section: 'eat',
    category: 'Restaurantes',
    rainSafe: true,
    requiresReservation: true,
    coords: [-13.5173, -71.9805],
    photo: './photos/dining.jpg',
    address: 'Calle San Juan de Dios 214 (esq. Plaza Regocijo 209), Cusco',
    hours: 'Lun–Dom 11:00 – 22:30',
    price: 'Reserva sugerida para cena · Servicio muy atento',
    phone: '+5184207443',
    phoneDisplay: '(084) 207-443',
    mapsQuery: 'Yaku Cocina de Altura San Juan de Dios 214 Cusco',
    description:
      'Opción muy querida para la cena de despedida: cocina peruana sabrosa, excelente trato, música andina en vivo y patio techado con calefactores para las noches frescas.'
  },
  'la-cusquenita': {
    id: 'la-cusquenita',
    name: 'La Cusqueñita Tradicional Pikantería',
    subtitle: 'Almuerzo cusqueño con música y danzas en vivo',
    zone: 'Cusco Ciudad',
    section: 'eat',
    category: 'Restaurantes',
    rainSafe: true,
    requiresReservation: false,
    coords: [-13.5245, -71.9736],
    photo: './photos/dining.jpg',
    address: 'Av. Centenario 800, Wanchaq, Cusco',
    hours: 'Lun–Dom 11:00 – 17:00 (Solo almuerzo)',
    price: 'Ideal al volver del Valle Sur · Acepta reservas',
    phone: '+51974965662',
    whatsapp: '51974965662',
    phoneDisplay: '974 965 662',
    mapsQuery: 'La Cusquenita Tradicional Pikanteria Av Centenario 800 Cusco',
    description:
      'Gran salón tradicional perfecto para cerrar la excursión del Valle Sur el sábado al mediodía: frutillada, chicharrón, costillar, cuy y música cusqueña en vivo.'
  },
  'oropesa-saylla': {
    id: 'oropesa-saylla',
    name: 'Pan Chuta en Oropesa & Chicharrón en Saylla',
    subtitle: 'Parada gastronómica tradicional del Valle Sur',
    zone: 'Valle Sur',
    section: 'eat',
    category: 'Restaurantes',
    rainSafe: false,
    requiresReservation: false,
    coords: [-13.5681, -71.8256],
    photo: './photos/market.jpg',
    address: 'Carretera Cusco–Valle Sur (Oropesa y Saylla)',
    hours: 'Mañana y mediodía (09:00 – 15:00)',
    price: 'Efectivo en billetes chicos recomendado',
    mapsQuery: 'Saylla Chicharronerias Cusco',
    description:
      'Clásico placer de ruta al volver de Andahuaylillas y Tipón: pan chuta recién horneado con anís en Oropesa y chicharrón crocante con mote y hierbabuena en Saylla.'
  },
  'three-monkeys': {
    id: 'three-monkeys',
    name: 'Three Monkeys Coffee',
    subtitle: 'Café de especialidad · #26 del mundo 2026',
    zone: 'Cusco Ciudad',
    section: 'eat',
    category: 'Cafés',
    rainSafe: true,
    rainCategory: 'Cafés & Bares',
    requiresReservation: false,
    coords: [-13.5179, -71.9781],
    photo: './photos/cover-day6.jpg',
    address: 'Pasaje Pampa de la Alianza 474, Cusco',
    hours: 'Lun–Sáb 08:00 – 21:30 · Dom 09:00 – 20:30',
    price: 'Sin reserva · Granos cusqueños de altura',
    mapsQuery: 'Three Monkeys Coffee Cusco Pasaje Pampa de la Alianza 474',
    description:
      'Tostadores apasionados por el café cusqueño de especialidad, reconocidos entre las mejores cafeterías del mundo. Métodos filtrados impecables y ambiente relajado.',
    rainNote: 'Parada tibia con café recién pasado mientras escampa en el centro histórico.'
  },
  'cercania': {
    id: 'cercania',
    name: 'Cercanía Pan y Café',
    subtitle: 'Panadería de masa madre y café de especialidad',
    zone: 'Cusco Ciudad',
    section: 'eat',
    category: 'Cafés',
    rainSafe: true,
    rainCategory: 'Cafés & Bares',
    requiresReservation: false,
    coords: [-13.5193, -71.9762],
    photo: './photos/cover-day6.jpg',
    address: 'Frente a Qorikancha (Obrador Santo Domingo) / Plazoleta Santa Catalina 219',
    hours: 'Lun–Sáb 08:30 – 20:30 (Dom cerrado)',
    price: 'A 2 minutos a pie de Casa Andina Cusco',
    mapsQuery: 'Cercania Pan y Cafe Cusco',
    description:
      'Croissants hojaldrados, pan de masa madre, bollería artesanal y excelente espresso a pasos de Qorikancha y del hotel. Ideal para una pausa a media tarde.',
    rainNote: 'Olor a pan recién horneado y café de especialidad a dos minutos de tu habitación.'
  },
  'florencia-fortunata': {
    id: 'florencia-fortunata',
    name: 'Florencia y Fortunata',
    subtitle: 'Café de especialidad por mujeres caficultoras',
    zone: 'Cusco Ciudad',
    section: 'eat',
    category: 'Cafés',
    rainSafe: true,
    rainCategory: 'Cafés & Bares',
    requiresReservation: false,
    coords: [-13.5157, -71.9797],
    photo: './photos/cover-day6.jpg',
    address: 'Calle Suecia 332, Centro Histórico, Cusco',
    hours: 'Lun–Dom 08:00 – 20:30',
    price: 'Abierto domingo temprano · Tueste propio',
    mapsQuery: 'Florencia y Fortunata Calle Suecia 332 Cusco',
    description:
      'Proyecto con propósito que visibiliza a productoras y tostadoras peruanas. Gran opción el domingo por la mañana tras caminar por el Mercado de San Pedro, también para comprar bolsas de café en grano.',
    rainNote: 'Cafetería luminosa y serena, ideal para conversar con un V60 o flat white.'
  },
  'cicciolina-cafe': {
    id: 'cicciolina-cafe',
    name: 'Cicciolina Café',
    subtitle: 'Desayunos, pastelería artesanal y café matutino',
    zone: 'Cusco Ciudad',
    section: 'eat',
    category: 'Cafés',
    rainSafe: true,
    requiresReservation: false,
    coords: [-13.5173, -71.975],
    photo: './photos/cover-day6.jpg',
    address: 'Calle Ruinas 465, Cusco',
    hours: 'Lun–Dom 07:00 – 21:30',
    price: 'Abierto desde las 07:00 · A 4 min del hotel',
    phone: '+51970462210',
    whatsapp: '51970462210',
    phoneDisplay: '970 462 210',
    mapsQuery: 'Cicciolina Cafe Calle Ruinas 465 Cusco',
    description:
      'La panadería y café hermano de Cicciolina: brioches, tartas caseras, huevos de campo y gran café, muy práctico para la mañana del domingo antes del vuelo.'
  },
  'museo-del-pisco': {
    id: 'museo-del-pisco',
    name: 'Museo del Pisco',
    subtitle: 'Catas de pisco y Semana del Chilcano en enero',
    zone: 'Cusco Ciudad',
    section: 'eat',
    category: 'Bares & Vino',
    rainSafe: true,
    rainCategory: 'Cafés & Bares',
    requiresReservation: false,
    coords: [-13.5176, -71.9768],
    photo: './photos/cocktails.jpg',
    address: 'Calle Santa Catalina Ancha 398, Cusco',
    hours: 'Lun–Dom 12:00 – 23:00',
    price: '¡Enero es Semana del Chilcano!',
    phone: '+51990997996',
    whatsapp: '51990997996',
    phoneDisplay: '990 997 996',
    mapsQuery: 'Museo del Pisco Santa Catalina Ancha 398 Cusco',
    description:
      'Templo del pisco peruano en Cusco. Barra acogedora con catas guiadas de cepas aromáticas y no aromáticas, chilcanos especiales de temporada y cócteles con botánicos andinos.',
    rainNote: 'Brindis bajo techo celebrando la Semana del Chilcano con catas de piscos artesanales.'
  },
  'garibaldi': {
    id: 'garibaldi',
    name: 'Garibaldi Cocktail Bar',
    subtitle: 'Coctelería clásica y de autor en barra íntima',
    zone: 'Cusco Ciudad',
    section: 'eat',
    category: 'Bares & Vino',
    rainSafe: true,
    requiresReservation: false,
    coords: [-13.5186, -71.9759],
    photo: './photos/cocktails.jpg',
    address: 'Calle Maruri 320, Cusco',
    hours: 'Lun–Sáb 17:00 – 00:00 (Dom cerrado)',
    price: 'A 3 min caminando de Casa Andina Cusco',
    phone: '+51932449225',
    whatsapp: '51932449225',
    phoneDisplay: '932 449 225',
    mapsQuery: 'Garibaldi Cocktail Bar Calle Maruri 320 Cusco',
    description:
      'Bar elegante y muy bien ejecutado a pasos del hotel. Destacan sus Negronis, Martinis y reinterpretaciones con destilados peruanos en una atmósfera cálida y sin ruido excesivo.'
  },
  'the-library': {
    id: 'the-library',
    name: 'The Library (Speakeasy)',
    subtitle: 'Bar oculto detrás de una biblioteca en la Plaza',
    zone: 'Cusco Ciudad',
    section: 'eat',
    category: 'Bares & Vino',
    rainSafe: true,
    rainCategory: 'Cafés & Bares',
    requiresReservation: true,
    coords: [-13.517, -71.9792],
    photo: './photos/cocktails.jpg',
    address: 'Portal de Comercio 121 (Plaza de Armas), Cusco',
    hours: 'Jue–Sáb 18:30 – 00:00 · Mar, Mié y Dom 18:30 – 22:00 (Lun cerrado)',
    price: 'Se recomienda reservar · Piqueos de autor',
    phone: '+51976615122',
    whatsapp: '51976615122',
    phoneDisplay: '976 615 122',
    mapsQuery: 'The Library Speakeasy Portal de Comercio 121 Cusco',
    description:
      'Speakeasy de inspiración años 20 al que se ingresa moviendo un estante de libros dentro de la casona de Micaela. Cócteles memorables, ambiente aterciopelado y calma absoluta.',
    rainNote: 'El refugio nocturno más original de Cusco cuando cae la lluvia sobre la Plaza de Armas.'
  },
  'senzo-bar': {
    id: 'senzo-bar',
    name: 'Senzo Bar (Palacio Nazarenas)',
    subtitle: 'Copa final en el claustro de Palacio Nazarenas',
    zone: 'Cusco Ciudad',
    section: 'eat',
    category: 'Bares & Vino',
    rainSafe: true,
    requiresReservation: false,
    coords: [-13.5153, -71.9767],
    photo: './photos/cocktails.jpg',
    address: 'Plazoleta Nazarenas 223, Cusco',
    hours: 'Lun–Dom 11:00 – 22:30',
    price: 'A pasos del MAP · Ambiente muy sereno',
    phone: '+5184582222',
    phoneDisplay: '(084) 582-222',
    mapsQuery: 'Senzo Bar Belmond Palacio Nazarenas Cusco',
    description:
      'Elegante bar de hotel con coctelería botánica, vinos de altura y silencio aristocrático. Ideal para tomar una última copa tranquila el sábado por la noche.'
  },

  // --- EXPLORE: VALLE SAGRADO ---
  'awana-kancha': {
    id: 'awana-kancha',
    name: 'Awana Kancha',
    subtitle: 'Museo vivo de camélidos y textilería tradicional',
    zone: 'Valle Sagrado',
    section: 'explore',
    category: 'Cultura & Talleres',
    rainSafe: false,
    requiresReservation: false,
    coords: [-13.4579, -71.8834],
    photo: './photos/alpacas.jpg',
    address: 'Km 23 Carretera Cusco–Pisac',
    hours: 'Lun–Dom 08:00 – 17:00',
    price: 'Parada en ruta Día 1 · Ingreso libre / propina voluntaria',
    mapsQuery: 'Awana Kancha Cusco Valle Sagrado',
    description:
      'Primera parada camino al Valle Sagrado para ver de cerca llamas, alpacas, vicuñas y guanacos, además de tejedoras demostrando tintes naturales con cochinilla y plantas andinas.'
  },
  'mirador-taray': {
    id: 'mirador-taray',
    name: 'Mirador de Taray',
    subtitle: 'Balcón panorámico sobre el río Vilcanota',
    zone: 'Valle Sagrado',
    section: 'explore',
    category: 'Caminatas',
    rainSafe: false,
    requiresReservation: false,
    coords: [-13.4282, -71.8565],
    photo: './photos/cover-day1.jpg',
    address: 'Carretera Cusco–Pisac, Taray',
    hours: 'Acceso libre todo el día',
    price: 'Parada breve panorámica (15 min)',
    mapsQuery: 'Mirador de Taray Valle Sagrado Cusco',
    description:
      'Vista despejada de las chacras de maíz, el río serpenteando por el valle y las cumbres andinas. Parada fotográfica perfecta antes de bajar al pueblo de Pisac.'
  },
  'mercado-pisac': {
    id: 'mercado-pisac',
    name: 'Mercado Artesanal de Pisac',
    subtitle: '¡Martes es día principal! Platería en Calle Espinar',
    zone: 'Valle Sagrado',
    section: 'explore',
    category: 'Cultura & Talleres',
    rainSafe: false,
    requiresReservation: false,
    coords: [-13.4227, -71.8467],
    photo: './photos/market.jpg',
    address: 'Plaza Constitución y Calle Espinar, Pisac',
    hours: 'Lun–Dom 09:00 – 17:00 (Martes es día mayor)',
    price: 'Solo el mercado artesanal · Llevar soles en efectivo',
    mapsQuery: 'Mercado Artesanal de Pisac Calle Espinar Cusco',
    description:
      'Feria vibrante de textiles, cerámica y joyería en el pueblo de Pisac (solo mercado artesanal, sin subir al sitio arqueológico). Recorrer con calma Calle Espinar para buscar talleres auténticos de platería fina.'
  },
  'planetario-reiche': {
    id: 'planetario-reiche',
    name: 'Planetario María Reiche',
    subtitle: 'Cosmovisión andina y cielo nocturno a 200 m',
    zone: 'Valle Sagrado',
    section: 'explore',
    category: 'Cultura & Talleres',
    rainSafe: true,
    requiresReservation: true,
    coords: [-13.2912, -72.1772],
    photo: './photos/cover-day1.jpg',
    address: 'Yanahuara, a 200 m de Casa Andina Valle Sagrado',
    hours: 'Funciones nocturnas (consultar horario en recepción)',
    price: 'Opcional si el cielo de la noche despeja',
    mapsQuery: 'Planetario Maria Reiche Valle Sagrado Yanahuara',
    description:
      'Experiencia íntima dedicada a las constelaciones incas y el cielo austral. Al estar a pasos del hotel, pueden decidir esa misma tarde según cómo esté la nubosidad.'
  },
  'yucay-ruta': {
    id: 'yucay-ruta',
    name: 'Caminata Cultural por Yucay',
    subtitle: 'Andenes Pacaypata, Sayri Túpac y Cultura Viva',
    zone: 'Valle Sagrado',
    section: 'explore',
    category: 'Caminatas',
    rainSafe: false,
    requiresReservation: false,
    coords: [-13.3189, -72.0864],
    photo: './photos/cover-day1.jpg',
    address: 'Plaza Manco II, Yucay, Urubamba',
    hours: 'Mañana ideal 09:30 – 11:00',
    price: 'Caminata plana/suave · Muy tranquila y auténtica',
    mapsQuery: 'Plaza Manco II Yucay Museo de Cultura Viva Urubamba',
    description:
      'Pueblo jardín del valle, sereno y poco masificado. Caminata cultural uniendo los andenes incas de Pacaypata, los muros del Palacio de Sayri Túpac, el Templo Santiago Apóstol y el pequeño Museo de Cultura Viva.'
  },
  'ceramica-seminario': {
    id: 'ceramica-seminario',
    name: 'Taller Cerámica Seminario',
    subtitle: 'Casa-taller de Pablo Seminario y Marilú Behar',
    zone: 'Valle Sagrado',
    section: 'explore',
    category: 'Cultura & Talleres',
    rainSafe: true,
    rainCategory: 'Museos & Arte',
    requiresReservation: false,
    coords: [-13.3082, -72.1195],
    photo: './photos/ceramics.jpg',
    address: 'Av. Berriozábal 405, Urubamba',
    hours: 'Lun–Dom 09:00 – 18:00',
    price: 'Visita guiada al taller y galería · Acepta tarjeta',
    phone: '+5184201086',
    phoneDisplay: '(084) 201-086',
    mapsQuery: 'Ceramica Seminario Av Berriozabal 405 Urubamba',
    description:
      'Uno de los talleres de cerámica contemporánea más reconocidos del Perú, inspirado en iconografía precolombina con arcilla roja del valle. Recorrido por patios floridos, hornos, salas de modelado y tienda galería.',
    rainNote: 'Salas de exhibición, video de proceso y áreas de modelado cubiertas; ideal si llueve.'
  },
  'museo-inkariy': {
    id: 'museo-inkariy',
    name: 'Museo Inkariy',
    subtitle: '9 culturas del antiguo Perú en salas inmersivas',
    zone: 'Valle Sagrado',
    section: 'explore',
    category: 'Museos & Arte',
    rainSafe: true,
    rainCategory: 'Museos & Arte',
    requiresReservation: false,
    coords: [-13.321, -71.9795],
    photo: './photos/museum.jpg',
    address: 'Km 53 Carretera Calca–Urubamba, Valle Sagrado',
    hours: 'Lun–Dom 09:00 – 17:00',
    price: 'S/ 15 adultos mayores nacionales (60+) con DNI',
    phone: '+51984666698',
    whatsapp: '51984666698',
    phoneDisplay: '984 666 698',
    mapsQuery: 'Museo Inkariy Km 53 Calca Urubamba',
    description:
      'Museo privado sumamente didáctico y cuidado que recorre 9 civilizaciones prehispánicas (Caral, Chavín, Paracas, Mochica, Nazca, Wari, Lambayeque, Chimú e Inca) mediante dioramas a escala real.',
    rainNote: 'Recorrido 100% bajo techo durante 1.5 a 2 horas, perfecto para una tarde lluviosa en el valle.'
  },
  'catarata-arin': {
    id: 'catarata-arin',
    name: 'Catarata de Arín / Sirena',
    subtitle: 'Caminata suave entre flores, eucaliptos y cascada',
    zone: 'Valle Sagrado',
    section: 'explore',
    category: 'Caminatas',
    rainSafe: false,
    requiresReservation: false,
    coords: [-13.3112, -72.0128],
    photo: './photos/cover-day3.jpg',
    address: 'Comunidad de Arín, Huaran, Calca',
    hours: 'Ideal salir 08:30 a.m. (mañana clara)',
    price: 'Ingreso gratuito · 45–60 min ida (ritmo activo)',
    mapsQuery: 'Catarata de Arin Huaran Calca Valle Sagrado',
    description:
      'Sendero encantador y poco concurrido rodeado de huertos, flores silvestres y arroyos hasta la caída de agua de Arín. Perfecto para sumar pasos de mañana con buen calzado con agarre.'
  },
  'naupa-iglesia': {
    id: 'naupa-iglesia',
    name: 'Ñaupa Iglesia (Choquequilla)',
    subtitle: 'Portal inca tallado en roca viva a 15 min del hotel',
    zone: 'Valle Sagrado',
    section: 'explore',
    category: 'Caminatas',
    rainSafe: false,
    requiresReservation: false,
    coords: [-13.2815, -72.237],
    photo: './photos/cover-day3.jpg',
    address: 'Sector Pachar, a 15 min de Casa Andina Valle',
    hours: 'Acceso libre · Caminata corta 25–35 min subida suave',
    price: 'Gratis · Combina perfecto con Cervecería del Valle',
    mapsQuery: 'Naupa Iglesia Pachar Urubamba Cusco',
    description:
      'Santuario ancestral enigmático enclavado en la ladera de la montaña, con un altar de roca tallada de precisión asombrosa y vistas abiertas del valle. Corto, místico y sin multitudes.'
  },

  // --- EXPLORE: CUSCO CIUDAD ---
  'qorikancha': {
    id: 'qorikancha',
    name: 'Qorikancha (Templo del Sol)',
    subtitle: 'Arquitectura inca maestra a 2 min del hotel',
    zone: 'Cusco Ciudad',
    section: 'explore',
    category: 'Museos & Arte',
    rainSafe: true,
    rainCategory: 'Museos & Arte',
    requiresReservation: false,
    coords: [-13.52, -71.9756],
    photo: './photos/museum.jpg',
    address: 'Plazoleta Santo Domingo / Av. El Sol, Cusco',
    hours: 'Lun–Sáb 08:30 – 17:30 · Dom 14:00 – 17:00',
    price: '~S/ 15 (no incluido en BTC · llevar DNI y efectivo)',
    mapsQuery: 'Qorikancha Templo del Sol Cusco',
    description:
      'El templo más sagrado del Tahuantinsuyo, cuyos muros curvos de andesita pulida dialogan con el claustro colonial de Santo Domingo. Sus galerías y salas permiten recorrerlo cómodamente incluso bajo lluvia.',
    rainNote: 'Claustro techado, recintos incas interiores y pinacoteca colonial a solo 2 minutos del hotel.'
  },
  'ruta-san-blas': {
    id: 'ruta-san-blas',
    name: 'Circuito Peatonal Centro & San Blas',
    subtitle: '12 Ángulos · Mirador · 7 Borreguitos · Sapantiana',
    zone: 'Cusco Ciudad',
    section: 'explore',
    category: 'Caminatas',
    rainSafe: false,
    requiresReservation: false,
    coords: [-13.5137, -71.9755],
    photo: './photos/cover-day4.jpg',
    address: 'Inicio desde Qorikancha → Hatun Rumiyoc → San Blas',
    hours: 'Tarde del Viernes 22 (2 a 2.5 h a ritmo activo)',
    price: 'Gratis · Usar zapatillas con suela antideslizante',
    mapsQuery: 'Acueducto de Sapantiana Calle Siete Borreguitos San Blas Cusco',
    description:
      'Caminata urbana inolvidable: desde Qorikancha hacia la Piedra de los 12 Ángulos, subiendo por las callecitas de artistas de San Blas hasta su Mirador, bajando por la fotogénica Calle 7 Borreguitos y el Acueducto colonial de Sapantiana.'
  },
  'casa-concha': {
    id: 'casa-concha',
    name: 'Casa Concha (Museo Arqueológico)',
    subtitle: 'Casona inca-colonial · colección repatriada de Yale',
    zone: 'Cusco Ciudad',
    section: 'explore',
    category: 'Museos & Arte',
    rainSafe: true,
    rainCategory: 'Museos & Arte',
    requiresReservation: false,
    coords: [-13.5172, -71.9769],
    photo: './photos/museum.jpg',
    address: 'Calle Santa Catalina Ancha 320, Cusco',
    hours: 'Lun–Sáb 09:00 – 17:00 (Dom cerrado)',
    price: 'Tarifa nacional con DNI · Cierra puntual a las 17:00',
    mapsQuery: 'Museo Casa Concha Santa Catalina Ancha 320 Cusco',
    description:
      'Antiguo palacio del Inca Túpac Yupanqui que exhibe cientos de piezas originales de cerámica, metalurgia, piedra y textiles incas devueltos por la Universidad de Yale, con museografía clara y elegante.',
    rainNote: 'Salas íntimas alrededor de patios coloniales techados, perfecto entre 15:00 y 17:00.'
  },
  'map-cusco': {
    id: 'map-cusco',
    name: 'MAP – Museo de Arte Precolombino',
    subtitle: '¡Abierto hasta 22:00! Joyas de la colección Larco',
    zone: 'Cusco Ciudad',
    section: 'explore',
    category: 'Museos & Arte',
    rainSafe: true,
    rainCategory: 'Museos & Arte',
    requiresReservation: false,
    coords: [-13.5148, -71.9771],
    photo: './photos/museum.jpg',
    address: 'Plazoleta Nazarenas 231 (Casa Cabrera), Cusco',
    hours: 'Lun–Dom 08:00 – 22:00 (último ingreso 21:30)',
    price: 'S/ 10 peruanos con DNI',
    phone: '+5184595092',
    phoneDisplay: '(084) 595-092',
    mapsQuery: 'Museo de Arte Precolombino MAP Plazoleta Nazarenas 231 Cusco',
    description:
      'El museo más elegante de Cusco: 400 piezas maestras en oro, plata, madera, concha y cerámica de 3,000 años de arte peruano, con iluminación dramática y un horario nocturno único hasta las 10 p.m.',
    rainNote: 'El mejor plan cultural nocturno bajo techo en Cusco: tranquilo, cálido y abierto hasta las 22:00.'
  },
  'museo-inka': {
    id: 'museo-inka',
    name: 'Museo Inka (UNSAAC)',
    subtitle: 'Historia andina en la Casa del Almirante',
    zone: 'Cusco Ciudad',
    section: 'explore',
    category: 'Museos & Arte',
    rainSafe: true,
    rainCategory: 'Museos & Arte',
    requiresReservation: false,
    coords: [-13.5156, -71.9779],
    photo: './photos/museum.jpg',
    address: 'Cuesta del Almirante 103, Cusco',
    hours: 'Lun–Vie 09:15 – 16:00 · Sáb 08:45 – 13:45 (Dom cerrado)',
    price: 'S/ 10 peruanos con DNI · SOLO EFECTIVO',
    phone: '+5184237380',
    phoneDisplay: '(084) 237-380',
    mapsQuery: 'Museo Inka Cuesta del Almirante 103 Cusco',
    description:
      'Ubicado en la espléndida Casa del Almirante, ofrece el panorama más completo de la cultura inca: keros de madera pintada, orfebrería, arquitectura y textilería.',
    alert: 'Solo acepta pago en efectivo (S/ 10 con DNI).',
    rainNote: 'Excelente refugio cultural a dos cuadras de la Plaza de Armas.'
  },
  'mercado-san-pedro': {
    id: 'mercado-san-pedro',
    name: 'Mercado Central de San Pedro',
    subtitle: 'Caminata matutina de despedida a 13 min del hotel',
    zone: 'Cusco Ciudad',
    section: 'explore',
    category: 'Cultura & Talleres',
    rainSafe: true,
    requiresReservation: false,
    coords: [-13.5214, -71.9838],
    photo: './photos/market.jpg',
    address: 'Calle Thupaq Amaru / Cascaparo, Cusco',
    hours: 'Lun–Dom 06:30 – 18:00',
    price: 'Gratis · Llevar soles en billetes chicos',
    mapsQuery: 'Mercado Central de San Pedro Cusco',
    description:
      'Mercado vibrante bajo estructura metálica diseñada por Gustave Eiffel. Ideal el domingo temprano para comprar chocolate cusqueño, quesos, panes locales, granos andinos y tomar un jugo recién exprimido.'
  },

  // --- EXPLORE: VALLE SUR ---
  'tipon': {
    id: 'tipon',
    name: 'Tipón (Valle Sur)',
    subtitle: 'Obra cumbre de la ingeniería hidráulica inca',
    zone: 'Valle Sur',
    section: 'explore',
    category: 'Caminatas',
    rainSafe: false,
    requiresReservation: false,
    coords: [-13.5706, -71.7834],
    photo: './photos/cover-day5.jpg',
    address: 'Distrito de Oropesa, Valle Sur (a 45 min de Cusco)',
    hours: 'Lun–Dom 07:00 – 17:30 · Ir antes de las 10:00 a.m.',
    price: 'Incluido en BTC Circuito II (S/ 40 nacionales con DNI)',
    mapsQuery: 'Parque Arqueologico de Tipon Cusco',
    description:
      'Terrazas monumentales y fuentes ceremoniales donde el agua de manantial sigue corriendo con precisión milimétrica desde tiempos incas. Llegar temprano garantiza luz clara y silencio absoluto.'
  },
  'pikillacta': {
    id: 'pikillacta',
    name: 'Pikillacta (Ciudad Wari)',
    subtitle: 'Metrópoli preinca de arquitectura monumental',
    zone: 'Valle Sur',
    section: 'explore',
    category: 'Caminatas',
    rainSafe: false,
    requiresReservation: false,
    coords: [-13.6147, -71.7176],
    photo: './photos/cover-day5.jpg',
    address: 'Distrito de Lucre, Valle Sur (Km 32)',
    hours: 'Lun–Dom 07:00 – 17:30',
    price: 'Incluido en BTC Circuito II (S/ 40 nacionales con DNI)',
    mapsQuery: 'Parque Arqueologico de Pikillacta Cusco',
    description:
      'Impresionante ciudad amurallada de la civilización Wari (siglos VI–X), anterior a los incas, con calles rectas de piedra volcánica y vistas hacia la laguna de Huacarpay.'
  },
  'andahuaylillas': {
    id: 'andahuaylillas',
    name: 'Iglesia de San Pedro de Andahuaylillas',
    subtitle: 'La "Capilla Sixtina de América" · Barroco Andino',
    zone: 'Valle Sur',
    section: 'explore',
    category: 'Museos & Arte',
    rainSafe: true,
    requiresReservation: false,
    coords: [-13.6736, -71.6769],
    photo: './photos/museum.jpg',
    address: 'Plaza de Armas de Andahuaylillas, Valle Sur',
    hours: 'Lun–Dom 08:30 – 17:00',
    price: 'S/ 10 Ruta del Barroco Andino (tarifa nacional con DNI)',
    mapsQuery: 'Iglesia San Pedro Apostol de Andahuaylillas Cusco',
    description:
      'Joya del siglo XVII que sorprende por su contraste: fachada sobria de adobe por fuera y un interior deslumbrante de pan de oro, artesonado mudéjar, órganos históricos y lienzos de la Escuela Cusqueña.'
  }
};

export const ITINERARY = [
  {
    id: 'd1',
    weekday: 'Mar',
    dayNum: '19',
    month: 'Ene',
    zone: 'Valle Sagrado',
    coverPhoto: './photos/cover-day1.jpg',
    title: 'Llegada y Aclimatación en el Valle',
    summary:
      'Descenso directo al Valle Sagrado (2,870 m) para aclimatar suavemente entre camélidos, miradores, platería tradicional y fogata.',
    stepsGoal: 'Ritmo suave · Aclimatación + jardines',
    moments: [
      {
        id: 'd1-m1',
        time: '08:00',
        label: 'Ruta Privada Aeropuerto → Valle',
        note: 'Martes es día principal del Mercado Artesanal de Pisac. Buscar platería en Calle Espinar.',
        places: ['awana-kancha', 'mirador-taray', 'mercado-pisac']
      },
      {
        id: 'd1-m2',
        time: '12:45',
        label: 'Almuerzo en Urubamba',
        options: [
          { key: 'A', label: 'El Huacatay', placeId: 'el-huacatay' },
          { key: 'B', label: 'Las Manos', placeId: 'las-manos' }
        ]
      },
      {
        id: 'd1-m3',
        time: '14:30',
        label: 'Check-in, Jardines y Fogata',
        places: ['hotel-valle', 'alma-valle']
      },
      {
        id: 'd1-m4',
        time: '19:30',
        label: 'Opcional si despeja el cielo',
        places: ['planetario-reiche']
      }
    ]
  },
  {
    id: 'd2',
    weekday: 'Mié',
    dayNum: '20',
    month: 'Ene',
    zone: 'Valle Sagrado',
    coverPhoto: './photos/cover-day2.jpg',
    title: 'Vino de Altura, Arte y Cultura Viva',
    summary:
      'Pueblo jardín de Yucay, cata del Tannat de altura en Wayocari, almuerzo de hacienda entre arte y tarde adaptable a lluvia.',
    stepsGoal: 'Día enológico y artístico · 100% adaptable',
    moments: [
      {
        id: 'd2-m1',
        time: '09:30',
        label: 'Mañana Activa o Artesanal',
        options: [
          { key: 'A', label: 'Yucay Cultural', placeId: 'yucay-ruta' },
          { key: 'B', label: 'Cerámica Seminario', placeId: 'ceramica-seminario' }
        ]
      },
      {
        id: 'd2-m2',
        time: '11:00',
        label: 'Tour y Cata de Vino de Altura',
        places: ['wayocari']
      },
      {
        id: 'd2-m3',
        time: '13:30',
        label: 'Almuerzo + Colección de Arte',
        places: ['hacienda-huayoccari']
      },
      {
        id: 'd2-m4',
        time: '16:00',
        label: 'Tarde Bajo Techo',
        options: [
          { key: 'A', label: 'Museo Inkariy', placeId: 'museo-inkariy' },
          { key: 'B', label: 'Spa Casa Andina', placeId: 'hotel-valle' }
        ]
      },
      {
        id: 'd2-m5',
        time: '19:30',
        label: 'Cena en el Valle',
        options: [
          { key: 'A', label: 'Las Manos (Brasas)', placeId: 'las-manos' },
          { key: 'B', label: 'Muju (Belmond)', placeId: 'muju-belmond' }
        ]
      }
    ]
  },
  {
    id: 'd3',
    weekday: 'Jue',
    dayNum: '21',
    month: 'Ene',
    zone: 'Valle Sagrado',
    coverPhoto: './photos/cover-day3.jpg',
    title: 'Naturaleza Activa, Cerámica y Cerveza',
    summary:
      'Caminata matutina con aire puro, almuerzo con tradición ecuestre o cocina creativa y tarde serena de cerámica en Urubamba.',
    stepsGoal: 'Mañana caminadora · Cielos claros temprano',
    moments: [
      {
        id: 'd3-m1',
        time: '08:30',
        label: 'Caminata de Mañana',
        options: [
          { key: 'A', label: 'Catarata de Arín', placeId: 'catarata-arin' },
          { key: 'B', label: 'Ñaupa Iglesia + Taproom', placeIds: ['naupa-iglesia', 'cerveceria-valle'] }
        ]
      },
      {
        id: 'd3-m2',
        time: '13:00',
        label: 'Almuerzo Especial',
        options: [
          { key: 'A', label: 'Wayra (Sol y Luna)', placeId: 'wayra-sol-luna' },
          { key: 'B', label: 'El Huacatay', placeId: 'el-huacatay' }
        ]
      },
      {
        id: 'd3-m3',
        time: '16:00',
        label: 'Tarde de Arte y Paseo',
        places: ['ceramica-seminario']
      }
    ]
  },
  {
    id: 'd4',
    weekday: 'Vie',
    dayNum: '22',
    month: 'Ene',
    zone: 'Cusco Ciudad',
    coverPhoto: './photos/cover-day4.jpg',
    title: 'Cusco Peatonal: Centro & San Blas',
    summary:
      'Traslado a la casona en Limacpampa y tarde caminadora por el Cusco más fotogénico, café de talla mundial y cena de autor.',
    stepsGoal: 'Caminata urbana activa · 10,000+ pasos',
    moments: [
      {
        id: 'd4-m1',
        time: '10:00',
        label: 'Check-out Valle & Llegada a Cusco',
        places: ['hotel-cusco']
      },
      {
        id: 'd4-m2',
        time: '13:00',
        label: 'Almuerzo de Bienvenida',
        options: [
          { key: 'A', label: 'Pachapapa (San Blas)', placeId: 'pachapapa' },
          { key: 'B', label: 'Cicciolina', placeId: 'cicciolina' }
        ]
      },
      {
        id: 'd4-m3',
        time: '15:00',
        label: 'Circuito Peatonal Centro & San Blas',
        places: ['qorikancha', 'ruta-san-blas']
      },
      {
        id: 'd4-m4',
        time: '17:30',
        label: 'Café de Especialidad',
        options: [
          { key: 'A', label: 'Three Monkeys', placeId: 'three-monkeys' },
          { key: 'B', label: 'Cercanía Pan y Café', placeId: 'cercania' }
        ]
      },
      {
        id: 'd4-m5',
        time: '19:45',
        label: 'Cena de Autor',
        options: [
          { key: 'A', label: 'Oculto', placeId: 'oculto' },
          { key: 'B', label: 'Mauka (Pía León)', placeId: 'mauka' }
        ]
      },
      {
        id: 'd4-m6',
        time: '21:45',
        label: 'Copa Nocturna',
        options: [
          { key: 'A', label: 'Museo del Pisco', placeId: 'museo-del-pisco' },
          { key: 'B', label: 'Garibaldi Bar', placeId: 'garibaldi' }
        ]
      }
    ]
  },
  {
    id: 'd5',
    weekday: 'Sáb',
    dayNum: '23',
    month: 'Ene',
    zone: 'Valle Sur',
    coverPhoto: './photos/cover-day5.jpg',
    title: 'Valle Sur Cultural & Noche de Museos',
    summary:
      'Ingeniería hidráulica inca, arquitectura Wari y barroco andino por la mañana; grandes museos bajo techo y cena de despedida.',
    stepsGoal: 'Excursión 5–6 h + museos nocturnos',
    moments: [
      {
        id: 'd5-m1',
        time: '08:00',
        label: 'Excursión Valle Sur (5–6 h)',
        note: 'Visitar Tipón antes de las 10:00 a.m. Llevar DNI físico original (BTC II S/ 40 + Barroco S/ 10).',
        places: ['tipon', 'pikillacta', 'andahuaylillas']
      },
      {
        id: 'd5-m2',
        time: '13:30',
        label: 'Almuerzo Tradicional',
        options: [
          { key: 'A', label: 'Oropesa & Saylla', placeId: 'oropesa-saylla' },
          { key: 'B', label: 'La Cusqueñita', placeId: 'la-cusquenita' }
        ]
      },
      {
        id: 'd5-m3',
        time: '15:45',
        label: 'Tarde y Noche de Museos',
        note: 'Casa Concha cierra 17:00; el MAP sigue abierto hasta las 22:00.',
        places: ['casa-concha', 'map-cusco']
      },
      {
        id: 'd5-m4',
        time: '19:45',
        label: 'Cena de Despedida',
        options: [
          { key: 'A', label: 'Cicciolina', placeId: 'cicciolina' },
          { key: 'B', label: 'Chicha (Gastón)', placeId: 'chicha' },
          { key: 'C', label: 'Yaku (Música)', placeId: 'yaku' }
        ]
      },
      {
        id: 'd5-m5',
        time: '21:45',
        label: 'Brindis Final',
        options: [
          { key: 'A', label: 'The Library', placeId: 'the-library' },
          { key: 'B', label: 'Senzo Bar', placeId: 'senzo-bar' }
        ]
      }
    ]
  },
  {
    id: 'd6',
    weekday: 'Dom',
    dayNum: '24',
    month: 'Ene',
    zone: 'Cusco Ciudad',
    coverPhoto: './photos/cover-day6.jpg',
    title: 'Mañana de Café, Mercado y Regreso',
    summary:
      'Última caminata cusqueña al Mercado de San Pedro, café de especialidad recién tostado y regreso sin apuros al aeropuerto.',
    stepsGoal: 'Mañana ligera a pie · Check-out 10:00',
    moments: [
      {
        id: 'd6-m1',
        time: '08:00',
        label: 'Caminata Matutina',
        places: ['mercado-san-pedro']
      },
      {
        id: 'd6-m2',
        time: '09:15',
        label: 'Café de Despedida',
        options: [
          { key: 'A', label: 'Florencia y Fortunata', placeId: 'florencia-fortunata' },
          { key: 'B', label: 'Cicciolina Café', placeId: 'cicciolina-cafe' }
        ]
      },
      {
        id: 'd6-m3',
        time: '10:00',
        label: 'Check-out & Traslado al Aeropuerto',
        places: ['hotel-cusco']
      }
    ]
  }
];

export const RAIN_PLAN_IDS = {
  'Valle Sagrado': [
    'wayocari',
    'hacienda-huayoccari',
    'museo-inkariy',
    'ceramica-seminario',
    'hotel-valle',
    'las-manos'
  ],
  'Cusco Ciudad': [
    'qorikancha',
    'map-cusco',
    'museo-inka',
    'casa-concha',
    'three-monkeys',
    'florencia-fortunata',
    'cercania',
    'cicciolina',
    'museo-del-pisco',
    'the-library'
  ]
};

export const TRANSFERS = [
  {
    id: 'tr-1',
    code: 'DÍA 1',
    date: 'Mar 19 Ene · 08:00',
    from: 'Aeropuerto Cusco',
    to: 'Casa Andina Valle (Yanahuara)',
    stops: 'Awana Kancha · Mirador de Taray · Mercado Artesanal de Pisac · Almuerzo Urubamba',
    tip: 'Martes es día principal de mercado en Pisac (platería en Calle Espinar). Check-in 14:00+.'
  },
  {
    id: 'tr-2',
    code: 'DÍA 4',
    date: 'Vie 22 Ene · Mañana',
    from: 'Casa Andina Valle',
    to: 'Casa Andina Premium Cusco',
    stops: 'Traslado privado directo puerta a puerta',
    tip: 'Check-out estándar 10:00 a.m. en Yanahuara.'
  },
  {
    id: 'tr-3',
    code: 'DÍA 6',
    date: 'Dom 24 Ene · Según vuelo',
    from: 'Casa Andina Cusco',
    to: 'Aeropuerto Cusco (CUZ)',
    stops: '20–30 min desde Limacpampa',
    tip: 'Salir con al menos 2 h de anticipación al vuelo. Pueden dejar maletas en custodia tras check-out 10:00.'
  }
];

export const TICKET_GUIDE = [
  {
    name: 'BTC Circuito II (Parcial Nacional)',
    note: 'Incluye Tipón y Pikillacta (solo si realizan Valle Sur el Sáb 23) + museos municipales.',
    price: 'S/ 40'
  },
  {
    name: 'Ruta del Barroco Andino',
    note: 'Iglesia de San Pedro de Andahuaylillas ("Capilla Sixtina de América"). Tarifa nacional.',
    price: 'S/ 10'
  },
  {
    name: 'Qorikancha (Templo del Sol)',
    note: 'No está incluido en el BTC. Se paga directo en boletería.',
    price: '~S/ 15'
  },
  {
    name: 'MAP – Museo de Arte Precolombino',
    note: 'Tarifa peruanos con DNI. ¡Abierto todos los días hasta las 22:00!',
    price: 'S/ 10'
  },
  {
    name: 'Museo Inka (UNSAAC)',
    note: 'Tarifa nacional con DNI. Importante: SOLO EFECTIVO.',
    price: 'S/ 10'
  },
  {
    name: 'Museo Inkariy (Valle Sagrado)',
    note: 'Tarifa adultos mayores nacionales (60+) presentando DNI original.',
    price: 'S/ 15'
  }
];

export const PRE_BOOKING_CHECKLIST = [
  {
    id: 'res-wayocari',
    linkedPlace: 'wayocari',
    title: 'Wayocari – Viñedos del Inca (Mié 20 · 11:00)',
    sub: 'Reservar mínimo 2 días antes · S/ 80 tour+cata | S/ 200 con botella 750 ml',
    phone: '+51981444879',
    whatsapp: '51981444879'
  },
  {
    id: 'res-huayoccari',
    linkedPlace: 'hacienda-huayoccari',
    title: 'Hacienda Huayoccari (Mié 20 · 13:30)',
    sub: 'Almuerzo + colección de arte · Solo con reserva previa',
    phone: '+51984690703',
    whatsapp: '51984690703'
  },
  {
    id: 'res-valle-rest',
    title: 'Restaurantes Valle: El Huacatay y Las Manos',
    sub: 'Mar 19 almuerzo y Mié 20 cena (chimenea en Las Manos)',
    phone: '+5184201790'
  },
  {
    id: 'res-wayra',
    linkedPlace: 'wayra-sol-luna',
    title: 'Wayra – Hotel Sol y Luna (Jue 21 almuerzo)',
    sub: 'Confirmar días y horario de exhibición de caballos de paso peruanos',
    phone: '+5184608930'
  },
  {
    id: 'res-cusco-rest',
    title: 'Cenas Cusco: Mauka, Cicciolina y/o Oculto',
    sub: 'Vie 22 y Sáb 23 · Reservar con anticipación para conseguir buen horario',
    whatsapp: '51994059709',
    phone: '+51920827998'
  },
  {
    id: 'res-valle-sur',
    title: 'Transporte privado Valle Sur (Sáb 23 · 08:00)',
    sub: 'Excursión 5–6 h: Tipón (antes de 10 a.m.), Pikillacta, Andahuaylillas + retorno'
  },
  {
    id: 'res-validar-traslados',
    title: 'Validar cotización de traslados con proveedor',
    sub: 'Confirmar si S/ 250 p/p auto / S/ 340 p/p van es tarifa total privada puerta a puerta'
  }
];

export const PACKING_DEFAULTS = [
  {
    id: 'pack-shoes',
    title: 'Zapatillas con buena suela antideslizante',
    sub: 'Esencial para adoquines mojados en Cusco y senderos de Arín o Yucay'
  },
  {
    id: 'pack-rain',
    title: 'Casaca impermeable / poncho ligero',
    sub: 'Llevar siempre en la mochila de día para chubascos de tarde en enero'
  },
  {
    id: 'pack-layers',
    title: 'Capas térmicas para la noche',
    sub: 'Chompa de alpaca/polar o casaca ligera de pluma cuando baja el sol'
  },
  {
    id: 'pack-sun',
    title: 'Bloqueador solar, lentes de sol y gorra',
    sub: 'Radiación intensa en las mañanas despejadas de altura'
  },
  {
    id: 'pack-dni',
    title: 'DNI físico original siempre encima',
    sub: 'Indispensable para tarifas nacionales y tarifa 60+ (Inkariy, MAP, BTC)'
  },
  {
    id: 'pack-cash',
    title: 'Efectivo en soles en billetes chicos (S/ 10, S/ 20)',
    sub: 'Para Mercado de Pisac, San Pedro, Museo Inka (solo efectivo), Oropesa y Saylla'
  }
];

export const DEFAULT_DAY_CHOICES = {
  'd1-m2': 'A',
  'd2-m1': 'A',
  'd2-m4': 'A',
  'd2-m5': 'A',
  'd3-m1': 'A',
  'd3-m2': 'A',
  'd4-m2': 'A',
  'd4-m4': 'A',
  'd4-m5': 'A',
  'd4-m6': 'A',
  'd5-m2': 'A',
  'd5-m4': 'A',
  'd5-m5': 'A',
  'd6-m2': 'A'
};

export function getDayPlaceIds(day, dayChoices) {
  const ids = [];
  day.moments.forEach((m) => {
    if (m.options) {
      const key = dayChoices[m.id] || m.options[0].key;
      const opt = m.options.find((o) => o.key === key) || m.options[0];
      if (opt.placeIds) ids.push(...opt.placeIds);
      else if (opt.placeId) ids.push(opt.placeId);
    } else if (m.places) {
      ids.push(...m.places);
    }
  });
  return [...new Set(ids)];
}
