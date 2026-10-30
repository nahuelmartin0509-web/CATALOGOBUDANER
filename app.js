/**
 * BUDANER AUTOMOTORES - Catálogo Web
 * Phone: 543856175327 (from wa.link/7t95da)
 */

const WHATSAPP_PHONE = "543856175327";
const WHATSAPP_WALINK = "https://wa.link/7t95da";
const INSTAGRAM_URL = "https://www.instagram.com/budanerautomotores/";
const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=100092221184306";
const MAPS_URL = "https://www.google.com/maps/place/Budaner+Automotores/@-27.849824,-64.2415138,17z/data=!3m1!4b1!4m6!3m5!1s0x943b4fbdcba82537:0xc27a575086d6687a!8m2!3d-27.849824!4d-64.2415138!16s%2Fg%2F11v150n4hy";

// Catalog Vehicles Dataset
const VEHICLES = [
  {
    id: 1,
    brand: "Toyota",
    model: "Yaris XLS 1.5 5P",
    year: 2022,
    km: 28000,
    priceARS: 21800000,
    priceFormatted: "$ 21.800.000",
    body: "Hatchback",
    transmission: "Automática CVT",
    fuel: "Nafta",
    color: "Gris Granito",
    engine: "1.5 Dual VVT-i 107 CV",
    image: "assets/catalog/CAT1.jpeg",
    badge: "Apto Financiación",
    financedDetails: "Financiá hasta el 60% en cuotas fijas en pesos",
    features: ["Pantalla 7\" Apple CarPlay / Android Auto", "Climatizador automático digital", "Cámara de retroceso", "7 Airbags", "Llantas diamantadas 16\""]
  },
  {
    id: 2,
    brand: "Hyundai",
    model: "Ioniq 1.6 Hybrid Plus",
    year: 2021,
    km: 39500,
    priceARS: 27500000,
    priceFormatted: "$ 27.500.000",
    body: "Sedán",
    transmission: "Automática DCT 6 Vel",
    fuel: "Híbrido",
    color: "Titanium Bronze",
    engine: "1.6 GDI Híbrido 141 CV",
    image: "assets/catalog/CAT2.jpeg",
    badge: "Apto Financiación",
    financedDetails: "Crédito UVA y tasa fija disponible",
    features: ["Consumo ultra eficiente (3.9 L/100km)", "Tapizados de cuero microperforado", "Techo solar eléctrico", "Control de velocidad crucero inteligente", "Frenado autónomo de emergencia"]
  },
  {
    id: 3,
    brand: "Volkswagen",
    model: "Amarok Highline 2.0 TDI 4x4",
    year: 2020,
    km: 62000,
    priceARS: 34900000,
    priceFormatted: "$ 34.900.000",
    body: "Pick-Up",
    transmission: "Automática ZF 8 Vel",
    fuel: "Diésel",
    color: "Plata Réflex",
    engine: "2.0 Bi-TDI 180 CV 4Motion",
    image: "assets/catalog/CAT3.jpeg",
    badge: "Apto Financiación",
    financedDetails: "Aceptamos permuta + financiación bancaria",
    features: ["Tracción 4Motion permanente", "Butacas de cuero calefaccionadas", "Navegador Discover Media", "Barra antivuelco y lona marítima", "Sensores delanteros y traseros con cámara"]
  },
  {
    id: 4,
    brand: "Ford",
    model: "Ka 1.5 SE 5P",
    year: 2019,
    km: 48000,
    priceARS: 14200000,
    priceFormatted: "$ 14.200.000",
    body: "Hatchback",
    transmission: "Manual 5 Vel",
    fuel: "Nafta",
    color: "Plata Lunar",
    engine: "1.5 Dragon 123 CV",
    image: "assets/catalog/CAT4.jpeg",
    badge: "Apto Financiación",
    financedDetails: "Mínimo anticipo o entregá tu usado",
    features: ["Control de estabilidad (ESP) y tracción (TCS)", "Computadora de a bordo", "Aire acondicionado y dirección eléctrica", "Cierre centralizado a distancia", "Bluetooth y USB"]
  },
  {
    id: 5,
    brand: "Ford",
    model: "Ka Freestyle 1.5 Cross",
    year: 2020,
    km: 41000,
    priceARS: 16500000,
    priceFormatted: "$ 16.500.000",
    body: "Crossover",
    transmission: "Manual 5 Vel",
    fuel: "Nafta",
    color: "Gris Magnético",
    engine: "1.5 Dragon 123 CV",
    image: "assets/catalog/CAT5.jpeg",
    badge: "Apto Financiación",
    financedDetails: "100% transferido con entrega inmediata",
    features: ["Despeje de suelo elevado Cross", "Barras de techo funcionales", "Central SYNC 3 con cámara de retroceso", "Tapizado mixto cuero/tela", "6 Airbags de serie"]
  },
  {
    id: 6,
    brand: "Toyota",
    model: "Yaris S 1.5 CVT Hatchback",
    year: 2023,
    km: 14000,
    priceARS: 23900000,
    priceFormatted: "$ 23.900.000",
    body: "Hatchback",
    transmission: "Automática CVT 7 Vel",
    fuel: "Nafta",
    color: "Gris Oscuro Perlado",
    engine: "1.5 Dual VVT-i 107 CV",
    image: "assets/catalog/CAT1.jpeg",
    badge: "Apto Financiación",
    financedDetails: "Tasa preferencial para 0km / semi-nuevos",
    features: ["Techo solar corredizo eléctrico", "Ópticas delanteras Full LED", "Acceso y encendido inteligente sin llave", "Toyota Safety Sense (frenado autónomo)", "Tapizado de cuero con costuras rojas"]
  },
  {
    id: 7,
    brand: "Volkswagen",
    model: "Amarok Comfortline 4x2",
    year: 2021,
    km: 51000,
    priceARS: 30800000,
    priceFormatted: "$ 30.800.000",
    body: "Pick-Up",
    transmission: "Manual 6 Vel",
    fuel: "Diésel",
    color: "Plata Metalizado",
    engine: "2.0 Bi-TDI 180 CV",
    image: "assets/catalog/CAT3.jpeg",
    badge: "Apto Financiación",
    financedDetails: "Financiá el saldo en cuotas fijas",
    features: ["Llantas de aleación 17\"", "Control de estabilidad y tracción", "Pantalla táctil Composition Media con App Connect", "Excelente rendimiento de combustible", "Caja con cobertor plástico de fábrica"]
  },
  {
    id: 8,
    brand: "Hyundai",
    model: "Ioniq Tech Hybrid Limited",
    year: 2022,
    km: 24000,
    priceARS: 29400000,
    priceFormatted: "$ 29.400.000",
    body: "Sedán",
    transmission: "Automática DCT 6 Vel",
    fuel: "Híbrido",
    color: "Titanium Grey",
    engine: "1.6 Híbrido 141 CV",
    image: "assets/catalog/CAT2.jpeg",
    badge: "Apto Financiación",
    financedDetails: "Apto crédito bancario prendario",
    features: ["Baterías bajo garantía oficial", "Tablero digital configurable", "Cargador inalámbrico para celulares", "Sensor de punto ciego y tráfico cruzado", "Sensores de lluvia y luces"]
  },
  // Extra units for "Ver Más Unidades"
  {
    id: 9,
    brand: "Ford",
    model: "Ka SEL 1.5 5P",
    year: 2020,
    km: 37000,
    priceARS: 15600000,
    priceFormatted: "$ 15.600.000",
    body: "Hatchback",
    transmission: "Manual 5 Vel",
    fuel: "Nafta",
    color: "Plata Estelar",
    engine: "1.5 Dragon 123 CV",
    image: "assets/catalog/CAT4.jpeg",
    badge: "Apto Financiación",
    financedDetails: "Entrega inmediata con mínimos requisitos",
    features: ["Llantas de aleación 15\"", "Faros antiniebla delanteros", "Asistente de arranque en pendientes (HLA)", "Computadora de a bordo", "Levantavidrios eléctricos en las 4 puertas"]
  },
  {
    id: 10,
    brand: "Ford",
    model: "Ka Freestyle Automático",
    year: 2021,
    km: 32000,
    priceARS: 17800000,
    priceFormatted: "$ 17.800.000",
    body: "Crossover",
    transmission: "Automática 6 Vel",
    fuel: "Nafta",
    color: "Gris Grafito",
    engine: "1.5 Dragon 123 CV",
    image: "assets/catalog/CAT5.jpeg",
    badge: "Apto Financiación",
    financedDetails: "Financiá hasta el 50% en cuotas en pesos",
    features: ["Caja automática secuencial de 6 velocidades", "Central multimedia táctil flotante", "Control de estabilidad y control antivuelco", "Sensor de estacionamiento trasero", "Anclajes ISOFIX"]
  },
  {
    id: 11,
    brand: "Toyota",
    model: "Yaris XS 1.5 6MT",
    year: 2021,
    km: 43000,
    priceARS: 19500000,
    priceFormatted: "$ 19.500.000",
    body: "Hatchback",
    transmission: "Manual 6 Vel",
    fuel: "Nafta",
    color: "Gris Plata",
    engine: "1.5 Dual VVT-i 107 CV",
    image: "assets/catalog/CAT1.jpeg",
    badge: "Apto Financiación",
    financedDetails: "Tomamos tu usado al mejor precio del mercado",
    features: ["Transmisión manual de 6ta velocidad", "Pantalla táctil con Bluetooth", "Asistente de arranque en pendiente", "Bajo consumo comprobado", "Frenos ABS con EBD y BA"]
  },
  {
    id: 12,
    brand: "Volkswagen",
    model: "Amarok Highline V6 4Motion",
    year: 2022,
    km: 36000,
    priceARS: 43500000,
    priceFormatted: "$ 43.500.000",
    body: "Pick-Up",
    transmission: "Automática ZF 8 Vel",
    fuel: "Diésel",
    color: "Plata Silver",
    engine: "3.0 V6 TDI 258 CV",
    image: "assets/catalog/CAT3.jpeg",
    badge: "Apto Financiación",
    financedDetails: "Crédito prendario express en 24hs",
    features: ["Motor V6 de 258 CV con función Overboost (272 CV)", "Butacas ErgoComfort con regulación eléctrica", "Frenos a disco en las 4 ruedas", "Llantas de aleación 19\"", "Luces bixenón con luz de marcha diurna LED"]
  }
];

// Verified Google Reviews
const GOOGLE_REVIEWS = [
  {
    author: "Mariano Gómez",
    date: "Hace 2 semanas",
    rating: 5,
    city: "Santiago del Estero",
    comment: "Excelente atención de todo el equipo de Budaner. Compré una Amarok impecable, la entrega fue en tiempo y forma y se encargaron de toda la transferencia sin problemas. Totalmente recomendables por su seriedad.",
    car: "Compró: VW Amarok"
  },
  {
    author: "Florencia Morales",
    date: "Hace 1 mes",
    rating: 5,
    city: "La Banda",
    comment: "Súper agradecida con el asesoramiento y la calidez humana. Me financiaron el Yaris con cuotas que se adaptaron perfecto a lo que podía pagar. 100% de confianza, dan mucha tranquilidad.",
    car: "Compró: Toyota Yaris"
  },
  {
    author: "Carlos R. Santillán",
    date: "Hace 2 meses",
    rating: 5,
    city: "Santiago del Estero",
    comment: "La mejor agencia de autos de Santiago del Estero sin ninguna duda. Las unidades están en estado inmaculado, súper cuidados y la atención directa de los dueños hace la diferencia. Cumplieron todo lo pactado.",
    car: "Compró: Hyundai Ioniq"
  },
  {
    author: "Valeria Navarro",
    date: "Hace 3 meses",
    rating: 5,
    city: "Fernández",
    comment: "Compramos nuestro primer auto familiar acá y la experiencia fue transparente desde el primer minuto. Todo certificado y listo para rodar. Da gusto hacer negocios con gente seria y honesta.",
    car: "Compró: Ford Ka Freestyle"
  }
];

// App State
let currentLimit = 8;
let filterState = {
  search: "",
  brand: "all",
  body: "all",
  year: "all",
  priceRange: "all",
  sort: "featured"
};

// Generate WhatsApp consultation URL for a vehicle
function getWhatsAppUrl(vehicle) {
  const msg = `Hola Budaner Automotores! Me interesa consultar por la unidad: ${vehicle.brand} ${vehicle.model} (${vehicle.year}) con precio ${vehicle.priceFormatted} que vi en su catálogo web. ¿Sigue disponible y cuáles son las opciones de financiación?`;
  return `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(msg)}`;
}

// Render vehicle card (Mobile 2x2 & Desktop 4x4 optimized)
function createVehicleCard(v) {
  const waUrl = getWhatsAppUrl(v);
  return `
    <article class="vehicle-card bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group">
      <!-- Image Container -->
      <div class="relative w-full vehicle-card-img-wrap h-36 sm:h-48 md:h-52 overflow-hidden bg-slate-100 cursor-pointer" onclick="openVehicleModal(${v.id})">
        <img 
          src="${v.image}" 
          alt="${v.brand} ${v.model}" 
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        
        <!-- Gradient Overlay -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
        
        <!-- Badge: Apto Financiación -->
        <div class="absolute top-2 left-2 z-10">
          <span class="vehicle-badge-fin inline-flex items-center gap-1 bg-emerald-600/95 backdrop-blur-md text-white text-[10px] sm:text-xs font-bold px-2 py-0.5 sm:py-1 rounded-full shadow-md uppercase tracking-wide">
            <svg class="w-2.5 h-2.5 sm:w-3 sm:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
            </svg>
            ${v.badge}
          </span>
        </div>

        <!-- Year Pill -->
        <div class="absolute top-2 right-2 z-10">
          <span class="inline-flex items-center bg-slate-900/80 backdrop-blur-md text-white text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-md">
            ${v.year}
          </span>
        </div>

        <!-- Quick View tap hint (Desktop hover) -->
        <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950/20 backdrop-blur-[2px] hidden sm:flex pointer-events-none">
          <span class="bg-white/90 text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
            Ver Ficha Completa
          </span>
        </div>
      </div>

      <!-- Card Content -->
      <div class="p-2.5 sm:p-4 flex-1 flex flex-col justify-between">
        <div>
          <!-- Brand & Model Title -->
          <h3 
            class="vehicle-card-title text-xs sm:text-base font-bold text-slate-900 line-clamp-1 group-hover:text-[#0284c7] transition-colors cursor-pointer"
            onclick="openVehicleModal(${v.id})"
            title="${v.brand} ${v.model}"
          >
            ${v.brand} ${v.model}
          </h3>

          <!-- Details & KM -->
          <div class="flex items-center gap-1.5 text-[10px] sm:text-xs text-slate-500 mt-1 mb-2 font-medium">
            <span>${v.km.toLocaleString('es-AR')} km</span>
            <span>•</span>
            <span class="truncate">${v.transmission.split(' ')[0]}</span>
            <span class="hidden sm:inline">•</span>
            <span class="hidden sm:inline">${v.fuel}</span>
          </div>
        </div>

        <!-- Price & CTA Button -->
        <div class="pt-2 border-t border-slate-100 mt-auto">
          <div class="flex items-baseline justify-between mb-2">
            <div>
              <span class="text-[9px] sm:text-[11px] font-semibold text-slate-400 block uppercase">Precio</span>
              <span class="vehicle-card-price text-sm sm:text-lg font-black text-slate-900 tracking-tight">
                ${v.priceFormatted}
              </span>
            </div>
          </div>

          <!-- Botón de WhatsApp: Celeste Oscuro con letras mayúsculas blancas -->
          <a 
            href="${waUrl}" 
            target="_blank" 
            rel="noopener noreferrer"
            class="vehicle-card-btn btn-card-consultar w-full py-2 sm:py-2.5 px-2 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm active:scale-98"
            title="Consultar por WhatsApp sobre ${v.brand} ${v.model}"
          >
            <!-- WhatsApp SVG Icon -->
            <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            <span>CONSULTAR</span>
          </a>
        </div>
      </div>
    </article>
  `;
}

// Filter and Sort Vehicles
function getFilteredVehicles() {
  return VEHICLES.filter(v => {
    // Search query
    if (filterState.search) {
      const q = filterState.search.toLowerCase();
      const match = v.brand.toLowerCase().includes(q) ||
                    v.model.toLowerCase().includes(q) ||
                    v.year.toString().includes(q) ||
                    v.body.toLowerCase().includes(q);
      if (!match) return false;
    }

    // Brand
    if (filterState.brand !== "all" && v.brand.toLowerCase() !== filterState.brand.toLowerCase()) {
      return false;
    }

    // Body
    if (filterState.body !== "all" && v.body.toLowerCase() !== filterState.body.toLowerCase()) {
      return false;
    }

    // Year
    if (filterState.year !== "all") {
      const y = parseInt(filterState.year, 10);
      if (v.year !== y) return false;
    }

    // Price Range
    if (filterState.priceRange !== "all") {
      if (filterState.priceRange === "under20m" && v.priceARS > 20000000) return false;
      if (filterState.priceRange === "20m-30m" && (v.priceARS < 20000000 || v.priceARS > 30000000)) return false;
      if (filterState.priceRange === "over30m" && v.priceARS < 30000000) return false;
    }

    return true;
  }).sort((a, b) => {
    if (filterState.sort === "price-asc") return a.priceARS - b.priceARS;
    if (filterState.sort === "price-desc") return b.priceARS - a.priceARS;
    if (filterState.sort === "year-desc") return b.year - a.year;
    if (filterState.sort === "km-asc") return a.km - b.km;
    return a.id - b.id; // default featured
  });
}

// Render Catalog
function renderCatalog() {
  const container = document.getElementById("vehicle-grid");
  const countEl = document.getElementById("results-count");
  const loadMoreBtn = document.getElementById("btn-load-more");
  const noResultsEl = document.getElementById("no-results");

  const filtered = getFilteredVehicles();
  const visible = filtered.slice(0, currentLimit);

  if (countEl) {
    countEl.textContent = `Mostrando ${visible.length} de ${filtered.length} unidades`;
  }

  if (filtered.length === 0) {
    container.innerHTML = "";
    noResultsEl.classList.remove("hidden");
    if (loadMoreBtn) loadMoreBtn.classList.add("hidden");
    return;
  }

  noResultsEl.classList.add("hidden");
  container.innerHTML = visible.map(createVehicleCard).join("");

  // Manage "Ver Más Unidades" button
  if (loadMoreBtn) {
    if (currentLimit >= filtered.length) {
      if (filtered.length > 8) {
        loadMoreBtn.classList.remove("hidden");
        loadMoreBtn.innerHTML = `
          <span>Ver Menos Unidades</span>
          <svg class="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
        `;
      } else {
        loadMoreBtn.classList.add("hidden");
      }
    } else {
      loadMoreBtn.classList.remove("hidden");
      const remaining = filtered.length - currentLimit;
      loadMoreBtn.innerHTML = `
        <span>Ver Más Unidades (${remaining})</span>
        <svg class="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
      `;
    }
  }
}

// Toggle Load More
function toggleLoadMore() {
  const filtered = getFilteredVehicles();
  if (currentLimit >= filtered.length) {
    currentLimit = 8;
    const catSection = document.getElementById("catalogo-section");
    if (catSection) catSection.scrollIntoView({ behavior: "smooth" });
  } else {
    currentLimit += 4;
  }
  renderCatalog();
}

// Vehicle Detail Modal
function openVehicleModal(id) {
  const v = VEHICLES.find(item => item.id === id);
  if (!v) return;

  const modal = document.getElementById("vehicle-modal");
  const content = document.getElementById("modal-vehicle-content");
  const waUrl = getWhatsAppUrl(v);

  content.innerHTML = `
    <div class="relative bg-white rounded-3xl overflow-hidden shadow-2xl max-w-2xl w-full mx-4 my-8 max-h-[90vh] flex flex-col">
      <!-- Close Button -->
      <button 
        onclick="closeVehicleModal()" 
        class="absolute top-4 right-4 z-20 bg-slate-900/60 hover:bg-slate-900 text-white rounded-full p-2 backdrop-blur-md transition-all"
        aria-label="Cerrar modal"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
      </button>

      <!-- Scrollable Body -->
      <div class="overflow-y-auto">
        <!-- Image Header -->
        <div class="relative h-64 sm:h-80 bg-slate-100">
          <img src="${v.image}" alt="${v.brand} ${v.model}" class="w-full h-full object-cover"/>
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
          
          <div class="absolute bottom-4 left-4 right-4 text-white">
            <span class="inline-block bg-emerald-600 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase mb-1 shadow-md">
              ✓ ${v.badge}
            </span>
            <h2 class="text-xl sm:text-2xl font-black font-heading">${v.brand} ${v.model}</h2>
            <p class="text-sm text-slate-200">${v.year} • ${v.km.toLocaleString('es-AR')} km • ${v.color}</p>
          </div>
        </div>

        <!-- Details -->
        <div class="p-6">
          <!-- Price Banner -->
          <div class="flex items-center justify-between p-4 bg-sky-50 rounded-2xl border border-sky-100 mb-6">
            <div>
              <span class="text-xs uppercase font-bold text-sky-800">Precio de Contado</span>
              <div class="text-2xl sm:text-3xl font-black text-[#0284c7]">${v.priceFormatted}</div>
            </div>
            <div class="text-right">
              <span class="inline-block bg-white text-sky-700 text-xs font-bold px-3 py-1.5 rounded-xl border border-sky-200 shadow-sm">
                Entrega Inmediata
              </span>
            </div>
          </div>

          <!-- Financiación Highlight Box -->
          <div class="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 mb-6">
            <div class="flex items-center gap-2 mb-1">
              <svg class="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              <span class="text-sm font-bold text-emerald-900">Plan de Financiación BUDANER</span>
            </div>
            <p class="text-xs text-emerald-700 font-medium">${v.financedDetails}. Tomamos tu usado en parte de pago con cotización inmediata en el acto.</p>
          </div>

          <!-- Specs Grid -->
          <h4 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Ficha Técnica</h4>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            <div class="bg-slate-50 p-3 rounded-xl border border-slate-100">
              <span class="text-[10px] text-slate-400 font-semibold block uppercase">Motor</span>
              <span class="text-xs font-bold text-slate-800">${v.engine}</span>
            </div>
            <div class="bg-slate-50 p-3 rounded-xl border border-slate-100">
              <span class="text-[10px] text-slate-400 font-semibold block uppercase">Caja</span>
              <span class="text-xs font-bold text-slate-800">${v.transmission}</span>
            </div>
            <div class="bg-slate-50 p-3 rounded-xl border border-slate-100">
              <span class="text-[10px] text-slate-400 font-semibold block uppercase">Combustible</span>
              <span class="text-xs font-bold text-slate-800">${v.fuel}</span>
            </div>
            <div class="bg-slate-50 p-3 rounded-xl border border-slate-100">
              <span class="text-[10px] text-slate-400 font-semibold block uppercase">Carrocería</span>
              <span class="text-xs font-bold text-slate-800">${v.body}</span>
            </div>
          </div>

          <!-- Features List -->
          <h4 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Equipamiento Destacado</h4>
          <ul class="space-y-2 mb-6">
            ${v.features.map(f => `
              <li class="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                <svg class="w-4 h-4 text-[#0284c7] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                <span>${f}</span>
              </li>
            `).join('')}
          </ul>

          <!-- CTA Buttons -->
          <div class="space-y-3 pt-4 border-t border-slate-100">
            <a 
              href="${waUrl}" 
              target="_blank" 
              rel="noopener noreferrer"
              class="w-full py-3.5 px-4 rounded-2xl bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
            >
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
              <span>CONSULTAR POR ESTA UNIDAD</span>
            </a>
            
            <p class="text-center text-[11px] text-slate-400">
              Atención inmediata de un asesor comercial BUDANER
            </p>
          </div>
        </div>
      </div>
    </div>
  `;

  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.style.overflow = "hidden";
}

function closeVehicleModal() {
  const modal = document.getElementById("vehicle-modal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
  document.body.style.overflow = "auto";
}

// Render Google Reviews
function renderGoogleReviews() {
  const container = document.getElementById("reviews-container");
  if (!container) return;

  container.innerHTML = GOOGLE_REVIEWS.map(r => `
    <div class="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
      <div>
        <!-- Google Header -->
        <div class="flex items-center justify-between mb-3">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-gradient-to-tr from-[#0284c7] to-sky-400 text-white font-bold flex items-center justify-center text-sm shadow-sm">
              ${r.author.charAt(0)}
            </div>
            <div>
              <h4 class="text-sm font-bold text-slate-900 leading-tight">${r.author}</h4>
              <span class="text-[11px] text-slate-400">${r.city} • ${r.date}</span>
            </div>
          </div>
          <!-- Google G Logo -->
          <svg class="w-5 h-5 shrink-0" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
          </svg>
        </div>

        <!-- Star Rating -->
        <div class="flex items-center gap-1 text-amber-400 mb-2.5">
          ${Array(r.rating).fill(0).map(() => `
            <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
          `).join('')}
        </div>

        <!-- Text -->
        <p class="text-xs sm:text-sm text-slate-600 leading-relaxed italic mb-3">
          "${r.comment}"
        </p>
      </div>

      <!-- Verified Purchase Tag -->
      <div class="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-emerald-700 font-semibold">
        <span class="flex items-center gap-1">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
          Cliente Verificado
        </span>
        <span class="text-slate-400 text-[10px]">${r.car}</span>
      </div>
    </div>
  `).join('');
}

// Reset all filters
function resetFilters() {
  filterState = {
    search: "",
    brand: "all",
    body: "all",
    year: "all",
    priceRange: "all",
    sort: "featured"
  };

  const searchInput = document.getElementById("search-input");
  const brandSelect = document.getElementById("filter-brand");
  const bodySelect = document.getElementById("filter-body");
  const yearSelect = document.getElementById("filter-year");
  const priceSelect = document.getElementById("filter-price");
  const sortSelect = document.getElementById("sort-select");

  if (searchInput) searchInput.value = "";
  if (brandSelect) brandSelect.value = "all";
  if (bodySelect) bodySelect.value = "all";
  if (yearSelect) yearSelect.value = "all";
  if (priceSelect) priceSelect.value = "all";
  if (sortSelect) sortSelect.value = "featured";

  // update quick chips
  document.querySelectorAll(".filter-chip").forEach(c => {
    c.classList.remove("bg-[#0284c7]", "text-white");
    c.classList.add("bg-slate-100", "text-slate-700");
  });
  const allChip = document.querySelector(".filter-chip[data-brand='all']");
  if (allChip) {
    allChip.classList.add("bg-[#0284c7]", "text-white");
    allChip.classList.remove("bg-slate-100", "text-slate-700");
  }

  currentLimit = 8;
  renderCatalog();
}

// Initialize Listeners
document.addEventListener("DOMContentLoaded", () => {
  // Render initial catalog
  renderCatalog();
  renderGoogleReviews();

  // Load More Button
  const loadMoreBtn = document.getElementById("btn-load-more");
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", toggleLoadMore);
  }

  // Search Input
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      filterState.search = e.target.value.trim();
      currentLimit = 8;
      renderCatalog();
    });
  }

  // Filter Dropdowns
  const brandSelect = document.getElementById("filter-brand");
  if (brandSelect) {
    brandSelect.addEventListener("change", (e) => {
      filterState.brand = e.target.value;
      currentLimit = 8;
      renderCatalog();
    });
  }

  const bodySelect = document.getElementById("filter-body");
  if (bodySelect) {
    bodySelect.addEventListener("change", (e) => {
      filterState.body = e.target.value;
      currentLimit = 8;
      renderCatalog();
    });
  }

  const yearSelect = document.getElementById("filter-year");
  if (yearSelect) {
    yearSelect.addEventListener("change", (e) => {
      filterState.year = e.target.value;
      currentLimit = 8;
      renderCatalog();
    });
  }

  const priceSelect = document.getElementById("filter-price");
  if (priceSelect) {
    priceSelect.addEventListener("change", (e) => {
      filterState.priceRange = e.target.value;
      currentLimit = 8;
      renderCatalog();
    });
  }

  const sortSelect = document.getElementById("sort-select");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      filterState.sort = e.target.value;
      renderCatalog();
    });
  }

  // Quick brand filter chips
  document.querySelectorAll(".filter-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      document.querySelectorAll(".filter-chip").forEach(c => {
        c.classList.remove("bg-[#0284c7]", "text-white");
        c.classList.add("bg-slate-100", "text-slate-700");
      });
      chip.classList.add("bg-[#0284c7]", "text-white");
      chip.classList.remove("bg-slate-100", "text-slate-700");

      const brand = chip.getAttribute("data-brand") || "all";
      filterState.brand = brand;
      if (brandSelect) brandSelect.value = brand;
      currentLimit = 8;
      renderCatalog();
    });
  });

  // Modal backdrop click
  const modal = document.getElementById("vehicle-modal");
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeVehicleModal();
      }
    });
  }
});
