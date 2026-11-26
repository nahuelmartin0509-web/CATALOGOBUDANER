/**
 * Catálogo Oficial 0KM - Budaner Automotores
 * Mercado Argentina (10 Modelos: 2 por cada marca líder)
 */

const VEHICULOS_0KM = [
  // ==========================================
  // CHEVROLET
  // ==========================================
  {
    id: "chevrolet-onix",
    marca: "CHEVROLET",
    modelo: "Chevrolet Onix",
    tipo: "Hatchback",
    slug: "chevrolet-onix",
    videoYoutubeId: "c2Q-eN6u7lY", // Video oficial promocional Onix
    colores: [
      { id: "blanco-summit", nombre: "Blanco Summit", hex: "#F4F4F4", bordeOscuro: true },
      { id: "gris-plata", nombre: "Gris Plata", hex: "#A8AFB5" },
      { id: "azul-seeker", nombre: "Azul Seeker", hex: "#1E3A5F" },
      { id: "negro", nombre: "Negro", hex: "#18181B" }
    ],
    versiones: [
      {
        nombre: "LT 1.2",
        motor: "1.2L Nafta 90 CV",
        transmision: "Manual 5 velocidades",
        potencia: "90 CV @ 6.200 rpm",
        seguridad: "6 Airbags (frontales, laterales y cortina), Control de estabilidad (ESP) y tracción (TCS), Asistente en pendientes",
        equipamiento: [
          "Pantalla táctil MyLink de 8\" con Apple CarPlay y Android Auto",
          "Computadora de a bordo de 3.5\"",
          "Volante multifunción regulable en altura y profundidad",
          "Aire acondicionado y dirección eléctrica progresiva",
          "Llantas de acero 15\" con tazas de diseño aerodinámico"
        ]
      },
      {
        nombre: "Premier 1.0 Turbo",
        motor: "1.0L Turbo 116 CV",
        transmision: "Automática secuencial 6 velocidades",
        potencia: "116 CV @ 5.500 rpm (160 Nm de torque)",
        seguridad: "Alerta de punto ciego, Sensor de estacionamiento delantero/trasero con cámara de retroceso, 6 Airbags",
        equipamiento: [
          "Wi-Fi nativo a bordo y sistema OnStar 24/7",
          "Tapizado premium en eco-cuero bitono",
          "Cargador inalámbrico de smartphones",
          "Acceso sin llave y encendido por botón Start/Stop",
          "Llantas de aleación de 16\" diamantadas"
        ]
      }
    ]
  },
  {
    id: "chevrolet-tracker",
    marca: "CHEVROLET",
    modelo: "Chevrolet Tracker",
    tipo: "SUV",
    slug: "chevrolet-tracker",
    videoYoutubeId: "QpQ9_k4zX9c",
    colores: [
      { id: "blanco-summit", nombre: "Blanco Summit", hex: "#F4F4F4", bordeOscuro: true },
      { id: "gris-satin-steel", nombre: "Gris Satin Steel", hex: "#6B7280" },
      { id: "azul-eclipse", nombre: "Azul Eclipse", hex: "#1B365D" },
      { id: "rojo-chili", nombre: "Rojo Chili", hex: "#991B1B" }
    ],
    versiones: [
      {
        nombre: "1.2 Turbo AT",
        motor: "1.2L Turbo 132 CV",
        transmision: "Automática de 6 velocidades",
        potencia: "132 CV @ 5.500 rpm (190 Nm)",
        seguridad: "6 Airbags de serie, Control de tracción y estabilidad, Asistente de arranque en pendientes (HSA)",
        equipamiento: [
          "Pantalla multimedia táctil MyLink de 8\"",
          "Dirección con asistencia eléctrica progresiva",
          "Barras de techo longitudinales en negro",
          "Control de velocidad crucero",
          "Cámara de visión trasera de alta definición"
        ]
      },
      {
        nombre: "RS 1.2 Turbo AT",
        motor: "1.2L Turbo 132 CV",
        transmision: "Automática de 6 velocidades con modo secuencial",
        potencia: "132 CV @ 5.500 rpm",
        seguridad: "Frenado autónomo de emergencia, Alerta de colisión frontal, Sensor de punto ciego",
        equipamiento: [
          "Techo solar panorámico con apertura eléctrica corrediza",
          "Estética deportiva RS (parrilla panal black gloss y moños negros)",
          "Faros delanteros tipo proyector Full LED",
          "Llantas de aleación de 17\" en acabado negro brillante",
          "Tapizado exclusivo RS con costuras en rojo contraste"
        ]
      }
    ]
  },

  // ==========================================
  // PEUGEOT
  // ==========================================
  {
    id: "peugeot-208",
    marca: "PEUGEOT",
    modelo: "Nuevo Peugeot 208",
    tipo: "Hatchback",
    slug: "peugeot-208",
    videoYoutubeId: "U3jK1q2x7yA",
    colores: [
      { id: "blanco-nacre", nombre: "Blanco Nacre", hex: "#F5F5F4", bordeOscuro: true },
      { id: "gris-artense", nombre: "Gris Artense", hex: "#9CA3AF" },
      { id: "azul-quasar", nombre: "Azul Quasar", hex: "#0284C7" },
      { id: "negro-perla", nombre: "Negro Perla", hex: "#111827" }
    ],
    versiones: [
      {
        nombre: "Active 1.6",
        motor: "1.6L VTi 115 CV",
        transmision: "Manual de 5 velocidades",
        potencia: "115 CV @ 6.000 rpm",
        seguridad: "4 Airbags (frontales y laterales), Control de estabilidad ESP, Anclajes ISOFIX",
        equipamiento: [
          "Pantalla táctil multimedia HD de 10.1\" inalámbrica",
          "Luces diurnas DRL LED en forma de colmillos de león",
          "Volante Sport Drive de dimensiones reducidas",
          "Climatizador manual con mandos tipo piano toggle switches",
          "Llantas de aleación de 16\" Taksim"
        ]
      },
      {
        nombre: "GT T200",
        motor: "1.0L Turbo T200 120 CV",
        transmision: "Automática CVT de 7 marchas preseteadas",
        potencia: "120 CV @ 5.750 rpm (200 Nm desde 1.750 rpm)",
        seguridad: "Pack Asistencias ADAS (Frenado autónomo, Mantenimiento de carril activo, Reconocimiento de señales)",
        equipamiento: [
          "Tablero digital Peugeot i-Cockpit 3D con efecto holográfico",
          "Ópticas delanteras Full LED con firma de 3 garras",
          "Techo panorámico cielo vidriado",
          "Cargador inalámbrico inductivo de celular",
          "Llantas de aleación diamantadas de 17\" Bronte"
        ]
      }
    ]
  },
  {
    id: "peugeot-2008",
    marca: "PEUGEOT",
    modelo: "Nuevo Peugeot 2008",
    tipo: "SUV",
    slug: "peugeot-2008",
    videoYoutubeId: "4T3q2c5F7kI",
    colores: [
      { id: "gris-selenium", nombre: "Gris Selenium", hex: "#64748B" },
      { id: "blanco-okenite", nombre: "Blanco Okenite", hex: "#F8FAFC", bordeOscuro: true },
      { id: "negro-perla", nombre: "Negro Perla", hex: "#111827" },
      { id: "gris-artense", nombre: "Gris Artense", hex: "#9CA3AF" }
    ],
    versiones: [
      {
        nombre: "Allure T200",
        motor: "1.0L Turbo 120 CV",
        transmision: "Automática CVT",
        potencia: "120 CV (200 Nm)",
        seguridad: "6 Airbags, Frenos a disco en las 4 ruedas, Cámara de visión 360° VisionPark",
        equipamiento: [
          "Cuadro de instrumentos digital i-Cockpit 10\"",
          "Pantalla táctil central de 10.3\" con Apple CarPlay & Android Auto",
          "Tapizado en combinación tela y cuero TEP",
          "Sensor de estacionamiento delantero y trasero",
          "Llantas de aleación de 17\" diamantadas Karakoy"
        ]
      },
      {
        nombre: "GT T200",
        motor: "1.0L Turbo 120 CV",
        transmision: "Automática CVT 7 velocidades",
        potencia: "120 CV",
        seguridad: "Pack ADAS avanzado: Frenado activo de emergencia, Alerta de punto ciego, Asistente de luces altas",
        equipamiento: [
          "Techo bitono Negro Perla Black Diamond",
          "Techo solar panorámico con apertura eléctrica corrediza",
          "Faros delanteros y traseros 100% Full LED 3D",
          "Pedalera deportiva y zócalos de puerta en aluminio",
          "Tapizado en Alcantara con costuras verde Adamite"
        ]
      }
    ]
  },

  // ==========================================
  // FIAT
  // ==========================================
  {
    id: "fiat-cronos",
    marca: "FIAT",
    modelo: "Fiat Cronos",
    tipo: "Sedán",
    slug: "fiat-cronos",
    videoYoutubeId: "mH2K9a4v7tY",
    colores: [
      { id: "blanco-alaska", nombre: "Blanco Alaska", hex: "#F9FAFB", bordeOscuro: true },
      { id: "gris-silverstone", nombre: "Gris Silverstone", hex: "#71717A" },
      { id: "rojo-montecarlo", nombre: "Rojo Montecarlo", hex: "#B91C1C" },
      { id: "negro-vulcano", nombre: "Negro Vulcano", hex: "#18181B" }
    ],
    versiones: [
      {
        nombre: "Like 1.3",
        motor: "1.3L Firefly 99 CV",
        transmision: "Manual de 5 velocidades",
        potencia: "99 CV @ 6.000 rpm",
        seguridad: "Doble Airbag frontal, Control de estabilidad (ESC), Control de tracción (TC), Asistente en pendientes",
        equipamiento: [
          "Enorme baúl familiar de 525 litros de capacidad",
          "Pantalla multimedia táctil de 7\" con conectividad smartphone",
          "Sensores de estacionamiento traseros sonoros",
          "Aire acondicionado manual y dirección electro-asistida",
          "Llantas de aleación de 15\""
        ]
      },
      {
        nombre: "Precision 1.3 CVT",
        motor: "1.3L Firefly 99 CV",
        transmision: "Automática CVT de 7 marchas simuladas",
        potencia: "99 CV @ 6.000 rpm (127 Nm)",
        seguridad: "Control de velocidad crucero, Cámara de estacionamiento trasera con guías dinámicas",
        equipamiento: [
          "Tapizado completo en cuero ecológico con detalles de costura",
          "Apertura de puertas por presencia Keyless Entry'N'Go",
          "Climatizador automático digital monozona",
          "Volante forrado en cuero con levas al volante (paddle shift)",
          "Llantas de aleación de 16\" diamantadas"
        ]
      }
    ]
  },
  {
    id: "fiat-fastback",
    marca: "FIAT",
    modelo: "Fiat Fastback",
    tipo: "SUV Coupé",
    slug: "fiat-fastback",
    videoYoutubeId: "Jd3M8x5p2qA",
    colores: [
      { id: "blanco-banchisa", nombre: "Blanco Banchisa", hex: "#F8FAFC", bordeOscuro: true },
      { id: "gris-strato", nombre: "Gris Strato", hex: "#8E9BAE" },
      { id: "negro-vulcano", nombre: "Negro Vulcano", hex: "#18181B" },
      { id: "rojo-montecarlo", nombre: "Rojo Montecarlo", hex: "#B91C1C" }
    ],
    versiones: [
      {
        nombre: "T270 AT6",
        motor: "1.3L Turbo T270 175 CV",
        transmision: "Automática de 6 marchas",
        potencia: "175 CV @ 5.750 rpm (270 Nm de torque)",
        seguridad: "Frenado autónomo de emergencia (AEB), Alerta de cambio de carril activo, 4 Airbags",
        equipamiento: [
          "Pantalla central flotante táctil de 10.1\" inalámbrica",
          "Tablero de instrumentos Full Digital de 7\"",
          "Freno de estacionamiento eléctrico con función Auto-Hold",
          "Cargador inalámbrico para celulares por inducción",
          "Gran baúl deportivo de 600 litros de capacidad"
        ]
      },
      {
        nombre: "Abarth T270",
        motor: "1.3L Turbo T270 175 CV Calibración Deportiva",
        transmision: "Automática de 6 velocidades con levas metálicas",
        potencia: "175 CV (0-100 km/h en 8.1s)",
        seguridad: "Control de estabilidad y tracción calibrado por Abarth, Frenos deportivos sobredimensionados",
        equipamiento: [
          "Botón 'Poison' en volante para respuesta instantánea de motor y dirección",
          "Doble salida de escape deportiva con sonoridad exclusiva",
          "Llantas exclusivas Abarth de 18\" en negro brillante",
          "Emblemas de escorpión Abarth y franjas decorativas laterales",
          "Interior oscurecido con butacas deportivas de cuero y costuras rojas"
        ]
      }
    ]
  },

  // ==========================================
  // FORD
  // ==========================================
  {
    id: "ford-ranger",
    marca: "FORD",
    modelo: "Nueva Ford Ranger",
    tipo: "Pick-up",
    slug: "ford-ranger",
    videoYoutubeId: "K9q8v7x2p1M",
    colores: [
      { id: "blanco-oxford", nombre: "Blanco Oxford", hex: "#F8FAFC", bordeOscuro: true },
      { id: "gris-plata", nombre: "Gris Plata", hex: "#9CA3AF" },
      { id: "azul-belice", nombre: "Azul Belice", hex: "#1D4ED8" },
      { id: "negro-perlado", nombre: "Negro Perlado", hex: "#111827" }
    ],
    versiones: [
      {
        nombre: "XLS 2.0L 4x2",
        motor: "2.0L Turbo Diésel Panther 170 CV",
        transmision: "Manual de 6 velocidades",
        potencia: "170 CV @ 3.500 rpm (405 Nm)",
        seguridad: "7 Airbags (incluye de rodilla para conductor), Frenos con ABS y EBD, Control de balanceo de trailer",
        equipamiento: [
          "Pantalla multitáctil vertical de 10\" con sistema SYNC 4",
          "Tablero de instrumentos digital de 8\"",
          "Dirección asistida eléctrica EPAS progresiva",
          "Control de velocidad crucero y limitador de velocidad",
          "Llantas de aleación de 17\" con neumáticos todoterreno"
        ]
      },
      {
        nombre: "Limited+ V6 4WD",
        motor: "3.0L V6 Turbo Diésel Lion 250 CV",
        transmision: "Automática de 10 velocidades con selector e-Shifter",
        potencia: "250 CV @ 3.250 rpm (600 Nm de torque masivo)",
        seguridad: "Ford Co-Pilot 360 con Frenado autónomo, Control crucero adaptativo Stop&Go, Mantenimiento de carril, Alerta de punto ciego",
        equipamiento: [
          "Sistema de tracción integral inteligente 4WD con reductora 4x4",
          "Pantalla vertical premium de 12\" con audio de alta fidelidad",
          "Cámara 360° con vista panorámica y guías de enganche",
          "Tapizado en cuero premium microperforado con butacas eléctricas",
          "Llantas de aleación diamantadas de 20\""
        ]
      }
    ]
  },
  {
    id: "ford-territory",
    marca: "FORD",
    modelo: "Nueva Ford Territory",
    tipo: "SUV",
    slug: "ford-territory",
    videoYoutubeId: "W5r8v3q9x2T",
    colores: [
      { id: "blanco-oxford", nombre: "Blanco Oxford", hex: "#F8FAFC", bordeOscuro: true },
      { id: "gris-mercurio", nombre: "Gris Mercurio", hex: "#6B7280" },
      { id: "azul-pantera", nombre: "Azul Pantera", hex: "#1E3A8A" },
      { id: "negro-perlado", nombre: "Negro Perlado", hex: "#111827" }
    ],
    versiones: [
      {
        nombre: "SEL 1.8 EcoBoost",
        motor: "1.8L Turbo EcoBoost 185 CV",
        transmision: "Automática de 7 velocidades doble embrague",
        potencia: "185 CV @ 5.200 rpm (320 Nm)",
        seguridad: "6 Airbags, Asistente de arranque y descenso en pendientes, Control electrónico de estabilidad",
        equipamiento: [
          "Doble pantalla panorámica integrada de 12\" (tablero + multimedia)",
          "Conectividad inalámbrica para Apple CarPlay y Android Auto",
          "Climatizador automático bi-zona con salidas traseras",
          "Selector de marchas giratorio Rotary Shifter",
          "Llantas de aleación de 18\""
        ]
      },
      {
        nombre: "Titanium 1.8 EcoBoost",
        motor: "1.8L Turbo EcoBoost 185 CV",
        transmision: "Automática de 7 velocidades DCT",
        potencia: "185 CV @ 5.200 rpm",
        seguridad: "Ford Co-Pilot 360: Frenado autónomo, Control crucero adaptativo, Sensor de punto ciego con alerta de tráfico cruzado",
        equipamiento: [
          "Techo solar panorámico con cortina eléctrica",
          "Butacas delanteras calefaccionadas y ventiladas con regulación eléctrica",
          "Portón trasero eléctrico con función 'manos libres'",
          "Cámara de estacionamiento con visión panorámica 360°",
          "Llantas de aleación de 19\" con acabado bitono"
        ]
      }
    ]
  },

  // ==========================================
  // NISSAN
  // ==========================================
  {
    id: "nissan-kicks",
    marca: "NISSAN",
    modelo: "Nissan Kicks",
    tipo: "SUV",
    slug: "nissan-kicks",
    videoYoutubeId: "H7t2k9x8v4N",
    colores: [
      { id: "blanco-perlado", nombre: "Blanco Perlado", hex: "#F8FAFC", bordeOscuro: true },
      { id: "gris-plata", nombre: "Gris Plata", hex: "#9CA3AF" },
      { id: "azul-electrico", nombre: "Azul Eléctrico", hex: "#0369A1" },
      { id: "rojo-perlado", nombre: "Rojo Perlado", hex: "#991B1B" }
    ],
    versiones: [
      {
        nombre: "Sense 1.6 MT",
        motor: "1.6L 16V 120 CV",
        transmision: "Manual de 5 velocidades",
        potencia: "120 CV @ 6.300 rpm",
        seguridad: "6 Airbags de serie, Control dinámico vehicular (VDC), Asistente de arranque en pendientes (HSA)",
        equipamiento: [
          "Pantalla táctil de 7\" con Apple CarPlay y Android Auto",
          "Botón de encendido Start/Stop y llave inteligente i-Key",
          "Asientos con tecnología Zero Gravity inspirados en la NASA",
          "Aire acondicionado y volante con comandos integrados",
          "Llantas de aleación de 16\""
        ]
      },
      {
        nombre: "Exclusive 1.6 CVT",
        motor: "1.6L 16V 120 CV",
        transmision: "Automática Xtronic CVT con modo Sport",
        potencia: "120 CV @ 6.300 rpm (149 Nm)",
        seguridad: "Nissan Intelligent Mobility (Frenado inteligente de emergencia, Monitor inteligente de visión periférica 360°, Alerta de colisión frontal)",
        equipamiento: [
          "Sistema de audio premium BOSE Personal con parlantes UltraNearfield en apoyacabeza conductor",
          "Pantalla multimedia táctil de 8\" de alta definición",
          "Tablero digital a color configurable de 7\"",
          "Tapizado en cuero premium en tono oscuro",
          "Faros delanteros con tecnología Full LED Signature"
        ]
      }
    ]
  },
  {
    id: "nissan-frontier",
    marca: "NISSAN",
    modelo: "Nueva Nissan Frontier",
    tipo: "Pick-up",
    slug: "nissan-frontier",
    videoYoutubeId: "P9q5v8x2k7F",
    colores: [
      { id: "blanco-hielo", nombre: "Blanco Hielo", hex: "#F8FAFC", bordeOscuro: true },
      { id: "gris-cuarzo", nombre: "Gris Cuarzo", hex: "#52525B" },
      { id: "negro", nombre: "Negro", hex: "#18181B" },
      { id: "rojo-solido", nombre: "Rojo Sólido", hex: "#B91C1C" }
    ],
    versiones: [
      {
        nombre: "S 4x2 MT",
        motor: "2.3L Turbo Diésel 160 CV",
        transmision: "Manual de 6 velocidades",
        potencia: "160 CV @ 3.750 rpm (403 Nm)",
        seguridad: "6 Airbags de serie, Control de estabilidad (VDC), Asistente de ascenso en pendientes (HSA)",
        equipamiento: [
          "Exclusiva suspensión trasera Multilink con eje rígido y resortes helicoidales",
          "Control de velocidad crucero",
          "Salidas de aire acondicionado para plazas traseras",
          "Panel de instrumentos con pantalla central de 7\"",
          "Llantas de acero estampadas de 17\" para trabajo pesado"
        ]
      },
      {
        nombre: "PRO-4X 4x4 AT",
        motor: "2.3L Bi-Turbo Diésel 190 CV",
        transmision: "Automática secuencial de 7 velocidades",
        potencia: "190 CV @ 3.750 rpm (450 Nm desde 1.500 rpm)",
        seguridad: "Nissan Intelligent Mobility: Alerta de colisión frontal, Frenado inteligente de emergencia, Monitor 360° con detector de objetos en movimiento y modo Off-Road",
        equipamiento: [
          "Bloqueo mecánico de diferencial trasero para máxima tracción Off-Road",
          "Estética PRO-4X exclusiva con apliques en negro y detalles en rojo lava",
          "Faros delanteros Quad LED y luces traseras LED",
          "Techo solar panorámico eléctrico",
          "Llantas de aleación de 17\" negras con neumáticos All-Terrain"
        ]
      }
    ]
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { VEHICULOS_0KM };
}
