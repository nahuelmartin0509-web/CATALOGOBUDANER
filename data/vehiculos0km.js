/**
 * Catálogo Oficial 0KM - Budaner Automotores
 * Datos técnicos y gama oficial para el mercado de la República Argentina
 * Modelos homologados: Chevrolet Onix / Onix Plus, Peugeot 2008, Fiat Cronos
 */

const VEHICULOS_0KM = [
  // ==========================================
  // 1. CHEVROLET - ONIX / ONIX PLUS
  // ==========================================
  {
    id: "chevrolet-onix",
    marca: "CHEVROLET",
    modelo: "Chevrolet Onix",
    tipo: "Hatchback & Sedán",
    subtitulo: "Gama Oficial Hatchback 5P y Sedán Onix Plus 4P",
    slug: "chevrolet-onix",
    videoYoutubeId: "Gn0GGdqbbtQ", // Video comercial oficial Chevrolet Onix Argentina
    imagenCard: "assets/0km/CHEVROLET/ONIX/ONIX/Blanco%20Summit.png",
    
    // Variantes de carrocería según Chevrolet Argentina
    carrocerias: [
      {
        id: "hatchback",
        nombre: "Onix Hatchback (5 Puertas)",
        badge: "Hatchback 5P",
        descripcion: "Silueta ágil y juvenil con baúl de 275 litros",
        imagenPreview: "assets/0km/CHEVROLET/ONIX/ONIX/Blanco%20Summit.png",
        colores: [
          {
            id: "blanco-summit",
            nombre: "Blanco Summit",
            hex: "#F4F4F4",
            bordeOscuro: true,
            imagen: "assets/0km/CHEVROLET/ONIX/ONIX/Blanco%20Summit.png"
          },
          {
            id: "negro-black-meet-kettle",
            nombre: "Negro Black Meet Kettle",
            hex: "#18181B",
            imagen: "assets/0km/CHEVROLET/ONIX/ONIX/Negro%20Black%20Meet%20Kettle.png"
          },
          {
            id: "rojo-jinx",
            nombre: "Rojo Jinx",
            hex: "#991B1B",
            imagen: "assets/0km/CHEVROLET/ONIX/ONIX/Rojo%20Jinx.png"
          }
        ]
      },
      {
        id: "plus",
        nombre: "Onix Plus Sedán (4 Puertas)",
        badge: "Sedán Plus 4P",
        descripcion: "Diseño ejecutivo con baúl familiar líder de 469 litros",
        imagenPreview: "assets/0km/CHEVROLET/ONIX/ONIX%20PLUS/Blanco%20Summit.png",
        colores: [
          {
            id: "blanco-summit-plus",
            nombre: "Blanco Summit",
            hex: "#F4F4F4",
            bordeOscuro: true,
            imagen: "assets/0km/CHEVROLET/ONIX/ONIX%20PLUS/Blanco%20Summit.png"
          },
          {
            id: "gris-sharkskin",
            nombre: "Gris Sharkskin",
            hex: "#596169",
            imagen: "assets/0km/CHEVROLET/ONIX/ONIX%20PLUS/Gris%20Sharkskin.png"
          },
          {
            id: "azul-some-kinda-blue",
            nombre: "Azul Some Kinda Blue",
            hex: "#1D3B58",
            imagen: "assets/0km/CHEVROLET/ONIX/ONIX%20PLUS/Azul%20Some%20Kinda%20Blue.png"
          },
          {
            id: "negro-black-meet-kettle-plus",
            nombre: "Negro Black Meet Kettle",
            hex: "#18181B",
            imagen: "assets/0km/CHEVROLET/ONIX/ONIX%20PLUS/Negro%20Black%20Meet%20Kettle.png"
          },
          {
            id: "rojo-scarlet",
            nombre: "Rojo Scarlet",
            hex: "#881337",
            imagen: "assets/0km/CHEVROLET/ONIX/ONIX%20PLUS/Rojo%20Scarlet.png"
          }
        ]
      }
    ],

    // Colores directos por defecto (Hatchback)
    colores: [
      {
        id: "blanco-summit",
        nombre: "Blanco Summit",
        hex: "#F4F4F4",
        bordeOscuro: true,
        imagen: "assets/0km/CHEVROLET/ONIX/ONIX/Blanco%20Summit.png"
      },
      {
        id: "negro-black-meet-kettle",
        nombre: "Negro Black Meet Kettle",
        hex: "#18181B",
        imagen: "assets/0km/CHEVROLET/ONIX/ONIX/Negro%20Black%20Meet%20Kettle.png"
      },
      {
        id: "rojo-jinx",
        nombre: "Rojo Jinx",
        hex: "#991B1B",
        imagen: "assets/0km/CHEVROLET/ONIX/ONIX/Rojo%20Jinx.png"
      }
    ],

    versiones: [
      {
        nombre: "LT 1.2 Manual",
        carroceriaAplica: "Hatchback & Plus",
        motor: "1.2L Nafta 3 cilindros 12V",
        transmision: "Manual de 5 velocidades",
        potencia: "90 CV @ 6.200 rpm (115 Nm @ 4.400 rpm)",
        seguridad: "6 Airbags de serie (frontales, laterales y de cortina), Control de estabilidad (ESP) y de tracción (TCS), Asistente de arranque en pendientes (HSA), Frenos ABS con distribución electrónica (EBD)",
        equipamiento: [
          "Pantalla táctil Chevrolet MyLink de 8\" con integración Apple CarPlay y Android Auto",
          "Computadora de a bordo multifunción con pantalla digital de 3.5\"",
          "Dirección con asistencia eléctrica progresiva y volante multifunción regulable en altura",
          "Aire acondicionado manual y levantavidrios eléctricos One-Touch en las 4 puertas",
          "Llantas de acero de 15\" con tazas de diseño aerodinámico y cierre centralizado con control remoto",
          "Alarma antirrobo volumétrica y encendido automático de luces con sensor crepuscular"
        ]
      },
      {
        nombre: "RS 1.0 Turbo MT",
        carroceriaAplica: "Exclusivo Hatchback",
        motor: "1.0L Turbo 3 cilindros 12V",
        transmision: "Manual de 5 velocidades",
        potencia: "116 CV @ 5.500 rpm (160 Nm desde 2.000 rpm)",
        seguridad: "6 Airbags de serie, Control de tracción y estabilidad con respuesta deportiva, Luces diurnas DRL LED, Frenos de disco delanteros",
        equipamiento: [
          "Diseño exterior deportivo RS: parrilla delantera tipo panal de abejas black gloss y moño Chevrolet en negro",
          "Alerón deportivo posterior integrado, faldones laterales y techo pintado en negro metalizado",
          "Llantas de aleación ligera de 16\" con acabado negro brillante Black Gloss",
          "Butacas deportivas exclusivas RS con costuras en rojo de contraste y tapizado premium",
          "Volante deportivo con base plana forrado en eco-cuero con mandos de audio",
          "Faros oscurecidos tipo proyector y cuadro de instrumentos con serigrafía RS deportiva"
        ]
      },
      {
        nombre: "Premier 1.0 Turbo AT",
        carroceriaAplica: "Hatchback & Plus",
        motor: "1.0L Turbo 3 cilindros 12V",
        transmision: "Automática secuencial de 6 velocidades con Active Select",
        potencia: "116 CV @ 5.500 rpm (160 Nm de torque sostenido)",
        seguridad: "Alerta de punto ciego en espejos retrovisores, Sensores de estacionamiento delanteros/traseros, Cámara de retroceso HD, 6 Airbags",
        equipamiento: [
          "Asistente avanzado de estacionamiento semiautónomo Easy Park (paralelo y perpendicular)",
          "Wi-Fi 4G nativo a bordo para hasta 7 dispositivos con antena amplificada y sistema telemático OnStar 24/7",
          "Cargador inductivo inalámbrico para smartphones en consola central",
          "Apertura de puertas sin llave y encendido por botón de presencia Keyless Start/Stop",
          "Tapizado integral en eco-cuero bitono Jet Black & Maple Sugar de alta confección",
          "Climatizador automático digital monozona y llantas de aleación de 16\" diamantadas bitono"
        ]
      }
    ]
  },

  // ==========================================
  // 2. PEUGEOT - NUEVO 2008
  // ==========================================
  {
    id: "peugeot-2008",
    marca: "PEUGEOT",
    modelo: "Nuevo Peugeot 2008",
    tipo: "SUV",
    subtitulo: "Nueva Generación Fabricada en Argentina (Plataforma CMP)",
    slug: "peugeot-2008",
    videoYoutubeId: "9O4fDmg_L4Q", // Presentación oficial Nuevo Peugeot 2008 Argentina
    imagenCard: "assets/0km/PEUGEOT/2008/VERSIONES/2008-versiones-gt.avif",

    colores: [
      {
        id: "gris-selenium",
        nombre: "Gris Selenium",
        hex: "#64748B",
        imagen: "assets/0km/PEUGEOT/2008/COLORES/gris-selenium-frontal.avif"
      },
      {
        id: "blanco-okenite",
        nombre: "Blanco Okenite",
        hex: "#F8FAFC",
        bordeOscuro: true,
        imagen: "assets/0km/PEUGEOT/2008/COLORES/2008-colores-blanco-okenite-frontal.avif"
      },
      {
        id: "azul-obsession",
        nombre: "Azul Obsession",
        hex: "#0284C7",
        imagen: "assets/0km/PEUGEOT/2008/COLORES/2008-azul-obsession-frontal.avif"
      },
      {
        id: "gris-artense",
        nombre: "Gris Artense",
        hex: "#9CA3AF",
        imagen: "assets/0km/PEUGEOT/2008/COLORES/gris-artense-frontal.avif"
      },
      {
        id: "negro-perla",
        nombre: "Negro Perla Nera",
        hex: "#111827",
        imagen: "assets/0km/PEUGEOT/2008/COLORES/negro-perla-frontal.avif"
      }
    ],

    versiones: [
      {
        nombre: "Active T200",
        imagenVersion: "assets/0km/PEUGEOT/2008/VERSIONES/2008-versiones-active.avif",
        motor: "Turbo 200 1.0L Turbo 3 cilindros",
        transmision: "Automática CVT de 7 marchas preseteadas",
        potencia: "120 CV @ 5.750 rpm (200 Nm desde 1.750 rpm)",
        seguridad: "4 Airbags (frontales y laterales), Control electrónico de estabilidad (ESP), Asistente de arranque en pendientes (Hill Assist), Frenos a disco en las 4 ruedas",
        equipamiento: [
          "Nuevo puesto de conducción Peugeot i-Cockpit® con volante compacto Sport",
          "Pantalla táctil central multimedia de 10.3\" con Apple CarPlay y Android Auto inalámbrico",
          "Luces diurnas DRL LED delanteras con la icónica firma luminosa de 3 garras",
          "Climatizador digital con mandos accesibles tipo teclas de piano",
          "Llantas de aleación ligera de 17\" con terminación diamantada",
          "Levantavidrios eléctricos One-Touch en todas las plazas y espejos exteriores eléctricos"
        ]
      },
      {
        nombre: "Allure T200",
        imagenVersion: "assets/0km/PEUGEOT/2008/VERSIONES/2008-versiones-allure.avif",
        motor: "Turbo 200 1.0L Turbo 3 cilindros",
        transmision: "Automática CVT de 7 marchas con modo Sport",
        potencia: "120 CV @ 5.750 rpm (200 Nm)",
        seguridad: "6 Airbags (frontales, laterales y de cortina completos), Cámara de retroceso VisioPark 180° HD con sensores de proximidad",
        equipamiento: [
          "Cuadro de instrumentos 100% digital 2D de 10\" configurable en alta resolución",
          "Cargador inductivo inalámbrico para teléfonos celulares compatibles",
          "Tapizado combinado con inserciones de tela premium y cuero ecológico TEP",
          "Sistema de acceso sin llave y arranque por botón Keyless Entry & Start",
          "Barras de techo longitudinales en negro brillante y detalles cromados",
          "Espejos exteriores rebatibles eléctricamente al cerrar el vehículo"
        ]
      },
      {
        nombre: "GT T200",
        imagenVersion: "assets/0km/PEUGEOT/2008/VERSIONES/2008-versiones-gt.avif",
        motor: "Turbo 200 1.0L Turbo 3 cilindros",
        transmision: "Automática CVT de 7 marchas preseteadas con levas al volante",
        potencia: "120 CV @ 5.750 rpm (200 Nm de torque)",
        seguridad: "Pack ADAS avanzado completo: Frenado autónomo de emergencia (AEB), Alerta de mantenimiento de carril activo, Reconocimiento de señales de tránsito con límite de velocidad, Alerta de punto ciego y Detector de fatiga",
        equipamiento: [
          "Exclusivo Peugeot i-Cockpit® 3D con efecto holográfico en panel digital de 10\"",
          "Techo solar panorámico corredizo vidriado de apertura eléctrica con cortina de oscurecimiento",
          "Ópticas delanteras Full LED con tecnología Peugeot Matrix y firma luminosa de 3 garras",
          "Techo bitono Negro Perla Black Diamond de serie",
          "Tapizados deportivos GT en cuero y Alcantara con pespuntes exclusivos verde Adamite",
          "Llantas de aleación diamantadas de 17\" con diseño exclusivo Karakurt"
        ]
      }
    ]
  },

  // ==========================================
  // 3. FIAT - CRONOS
  // ==========================================
  {
    id: "fiat-cronos",
    marca: "FIAT",
    modelo: "Fiat Cronos",
    tipo: "Sedán",
    subtitulo: "El Auto Más Elegido de Argentina • Fabricado en Planta Ferreyra, Córdoba",
    slug: "fiat-cronos",
    videoYoutubeId: "zgR3zdQ4eNo", // Spot oficial Fiat Cronos Argentina
    imagenCard: "assets/0km/FIAT/CRONOS/plata.png",

    colores: [
      {
        id: "blanco-banchisa",
        nombre: "Blanco Banchisa",
        hex: "#F8FAFC",
        bordeOscuro: true,
        imagen: "assets/0km/FIAT/CRONOS/banchisa.png"
      },
      {
        id: "gris-silverstone",
        nombre: "Gris Silverstone",
        hex: "#64748B",
        imagen: "assets/0km/FIAT/CRONOS/gris.png"
      },
      {
        id: "plata-bari",
        nombre: "Plata Bari",
        hex: "#9CA3AF",
        imagen: "assets/0km/FIAT/CRONOS/plata.png"
      },
      {
        id: "negro-vulcano",
        nombre: "Negro Vulcano",
        hex: "#18181B",
        imagen: "assets/0km/FIAT/CRONOS/negro.png"
      },
      {
        id: "rojo-montecarlo",
        nombre: "Rojo Montecarlo",
        hex: "#B91C1C",
        imagen: "assets/0km/FIAT/CRONOS/rojo.png"
      }
    ],

    versiones: [
      {
        nombre: "Like 1.3 GSE MT",
        motor: "1.3L Firefly 8V 4 cilindros",
        transmision: "Manual de 5 velocidades",
        potencia: "99 CV @ 6.000 rpm (127 Nm @ 4.000 rpm)",
        seguridad: "Doble Airbag frontal, Control de estabilidad (ESC), Control de tracción (TC), Asistente al arranque en pendientes (Hill Holder), Monitoreo de presión de neumáticos (iTPMS)",
        equipamiento: [
          "Insuperable baúl de 525 litros de capacidad (el más amplio y profundo de su categoría)",
          "Computadora de a bordo multifunción con display digital de 3.5\"",
          "Dirección con asistencia eléctrica progresiva y columna regulable en altura",
          "Aire acondicionado manual y levantavidrios eléctricos delanteros One-Touch",
          "Llantas de aleación de 15\" con neumáticos de rodado confortable",
          "Cierre centralizado con comando a distancia en llave tipo navaja"
        ]
      },
      {
        nombre: "Drive Plus 1.3 GSE MT / CVT",
        motor: "1.3L Firefly 8V 4 cilindros",
        transmision: "Manual de 5 marchas o Automática CVT de 7 marchas",
        potencia: "99 CV @ 6.000 rpm (127 Nm de torque)",
        seguridad: "Cámara de retroceso con guías activas dinámicas, Sensores de estacionamiento traseros sonoros, Control de velocidad crucero",
        equipamiento: [
          "Central multimedia táctil Uconnect™ de 7\" con Apple CarPlay y Android Auto",
          "Climatizador automático digital monozona",
          "Faros delanteros con firma lumínica y luces diurnas DRL LED integradas",
          "Pack exterior Drive: espejos retrovisores y manijas de puertas en color carrocería",
          "Volante multifunción forrado en eco-cuero con mandos satelitales",
          "Levantavidrios eléctricos en las 4 puertas con antipinzamiento"
        ]
      },
      {
        nombre: "Precision 1.3 GSE CVT",
        motor: "1.3L Firefly 8V 4 cilindros",
        transmision: "Automática CVT de 7 marchas preseteadas con levas al volante",
        potencia: "99 CV @ 6.000 rpm (127 Nm)",
        seguridad: "Control de velocidad crucero, Control de tracción y estabilidad, Asistente en pendientes, Frenos ABS con EBD",
        equipamiento: [
          "Transmisión automática CVT con levas al volante (Paddle Shifts) y botón de Modo SPORT",
          "Apertura de puertas por proximidad y botón de encendido Start/Stop Keyless Entry 'n' Go",
          "Tapizado integral de butacas en eco-cuero con apoyabrazos central delantero",
          "Llantas de aleación de 16\" diamantadas en acabado bitono",
          "Espejos exteriores rebatibles eléctricamente con luz de cortesía hacia el piso",
          "Volante forrado en cuero regulable tanto en altura como en profundidad"
        ]
      }
    ]
  }
];

// Exportación compatible para Node y Browser
if (typeof module !== "undefined" && module.exports) {
  module.exports = { VEHICULOS_0KM };
}
