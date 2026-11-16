/**
 * BUDANER AUTOMOTORES - Catálogo público (datos en tiempo real desde Firestore)
 * Esta página SOLO lee la colección pública "vehicles". El precio vive en
 * "vehicles_private" y nunca se consulta ni se muestra acá.
 */

const WHATSAPP_PHONE = "543856175327";

const WA_ICON = '<path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>';
const CHECK_ICON = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/>';

const GOOGLE_REVIEWS = [
  { author: "Mariano Gómez", date: "Hace 2 semanas", rating: 5, city: "Santiago del Estero", comment: "Excelente atención de todo el equipo de Budaner. Compré una Amarok impecable, la entrega fue en tiempo y forma y se encargaron de toda la transferencia sin problemas. Totalmente recomendables por su seriedad.", car: "Compró: VW Amarok" },
  { author: "Florencia Morales", date: "Hace 1 mes", rating: 5, city: "La Banda", comment: "Súper agradecida con el asesoramiento y la calidez humana. Me financiaron el Yaris con cuotas que se adaptaron perfecto a lo que podía pagar. 100% de confianza, dan mucha tranquilidad.", car: "Compró: Toyota Yaris" },
  { author: "Carlos R. Santillán", date: "Hace 2 meses", rating: 5, city: "Santiago del Estero", comment: "La mejor agencia de autos de Santiago del Estero sin ninguna duda. Las unidades están en estado inmaculado, súper cuidados y la atención directa de los dueños hace la diferencia. Cumplieron todo lo pactado.", car: "Compró: Hyundai Ioniq" },
  { author: "Valeria Navarro", date: "Hace 3 meses", rating: 5, city: "Fernández", comment: "Compramos nuestro primer auto familiar acá y la experiencia fue transparente desde el primer minuto. Todo certificado y listo para rodar. Da gusto hacer negocios con gente seria y honesta.", car: "Compró: Ford Ka Freestyle" }
];

// ---------- Estado ----------
let VEHICLES = [];
let loadError = "";
let loaded = false;
let currentLimit = 8;
let modalVehicle = null;
let filterState = { search: "", brand: "all", body: "all", year: "all", sort: "featured" };

// ---------- Utilidades ----------
function esc(s) {
  return String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

// Solo se copian campos públicos conocidos (whitelist).
function normalizeVehicle(id, d) {
  const created = d.createdAt && d.createdAt.toMillis ? d.createdAt.toMillis() : 0;
  return {
    id,
    brand: d.brand || "",
    model: d.model || "",
    version: d.version || "",
    year: Number(d.year) || 0,
    km: Number(d.km) || 0,
    color: d.color || "",
    engine: d.engine || "",
    transmission: d.transmission || "",
    fuel: d.fuel || "",
    body: d.body || "",
    status: d.status || "apto",
    features: Array.isArray(d.features) ? d.features : [],
    photos: Array.isArray(d.photos) ? d.photos : [],
    createdAt: created
  };
}

function setVehicles(list, error) {
  VEHICLES = list;
  loadError = error || "";
  loaded = true;
  refreshFilterOptions();
  renderCatalog();
  if (modalVehicle) {
    const upd = VEHICLES.find((v) => v.id === modalVehicle.id);
    if (upd) openVehicleModal(upd.id, true);
    else closeVehicleModal();
  }
}

const vTitle = (v) => [v.brand, v.model, v.version].filter(Boolean).join(" ");
const vShort = (v) => [v.brand, v.model].filter(Boolean).join(" ");
const vSubtitle = (v) => [v.km ? v.km.toLocaleString("es-AR") + " km" : "0 km", v.transmission, v.fuel].filter(Boolean).join(" • ");

function getWhatsAppUrl(v) {
  const msg = `Hola Budaner Automotores! Me interesa consultar por la unidad: ${vTitle(v)} (${v.year}) que vi en su catálogo web. ¿Sigue disponible y cuáles son las opciones de financiación?`;
  return `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(msg)}`;
}

function badgeHtml(v, big) {
  const size = big ? "text-xs px-2.5 py-1" : "vehicle-badge-fin text-[10px] sm:text-xs px-2 py-0.5 sm:py-1";
  if (v.status === "apto") {
    return `<span class="inline-flex items-center gap-1 bg-emerald-600 text-white font-bold rounded-full shadow-md uppercase tracking-wide ${size}"><svg class="w-2.5 h-2.5 sm:w-3 sm:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">${CHECK_ICON}</svg>Apto Financiación</span>`;
  }
  if (v.status === "reservado") {
    return `<span class="inline-flex items-center bg-amber-500 text-white font-bold rounded-full shadow-md uppercase tracking-wide ${size}">Reservado</span>`;
  }
  return "";
}

const PLACEHOLDER = `<div class="w-full h-full flex items-center justify-center text-slate-300"><svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4-4 4 4 4-6 4 6M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"/></svg></div>`;

// ---------- Tarjeta ----------
function createVehicleCard(v) {
  const img = v.photos[0]
    ? `<img src="${esc(v.photos[0])}" alt="${esc(vTitle(v))}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy"/>`
    : PLACEHOLDER;
  return `
    <article class="vehicle-card bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group">
      <div class="relative w-full vehicle-card-img-wrap h-36 sm:h-48 md:h-52 overflow-hidden bg-slate-100 cursor-pointer" onclick="openVehicleModal('${esc(v.id)}')">
        ${img}
        <div class="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
        <div class="absolute top-2 left-2 z-10">${badgeHtml(v)}</div>
        ${v.year ? `<div class="absolute top-2 right-2 z-10"><span class="inline-flex items-center bg-slate-900/85 text-white text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-md">${v.year}</span></div>` : ""}
      </div>
      <div class="p-2.5 sm:p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 class="vehicle-card-title text-xs sm:text-base font-bold text-slate-900 line-clamp-2 cursor-pointer" onclick="openVehicleModal('${esc(v.id)}')" title="${esc(vTitle(v))}">${esc(vTitle(v))}</h3>
          <p class="text-[10px] sm:text-xs text-slate-500 mt-1 mb-2 font-medium leading-snug">${esc(vSubtitle(v))}</p>
        </div>
        <div class="pt-2 border-t border-slate-100 mt-auto">
          <a href="${getWhatsAppUrl(v)}" target="_blank" rel="noopener noreferrer"
             class="vehicle-card-btn btn-card-consultar w-full py-2 sm:py-2.5 px-2 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm"
             title="Consultar por WhatsApp sobre ${esc(vTitle(v))}">
            <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current shrink-0" viewBox="0 0 24 24">${WA_ICON}</svg>
            <span>CONSULTAR</span>
          </a>
        </div>
      </div>
    </article>`;
}

// ---------- Filtros ----------
function uniqueSorted(arr, numeric) {
  const set = Array.from(new Set(arr.filter(Boolean)));
  return numeric ? set.sort((a, b) => b - a) : set.sort((a, b) => String(a).localeCompare(String(b), "es"));
}

function fillSelect(id, allLabel, values, current) {
  const el = document.getElementById(id);
  if (!el) return current;
  const keep = values.map(String).includes(String(current)) ? current : "all";
  el.innerHTML = `<option value="all">${allLabel}</option>` + values.map((x) => `<option value="${esc(x)}">${esc(x)}</option>`).join("");
  el.value = keep;
  return keep;
}

function refreshFilterOptions() {
  const brands = uniqueSorted(VEHICLES.map((v) => v.brand));
  const bodies = uniqueSorted(VEHICLES.map((v) => v.body));
  const years = uniqueSorted(VEHICLES.map((v) => v.year), true);
  filterState.brand = fillSelect("filter-brand", "Todas las Marcas", brands, filterState.brand);
  filterState.body = fillSelect("filter-body", "Todos los Tipos", bodies, filterState.body);
  filterState.year = fillSelect("filter-year", "Todos los Años", years, filterState.year);

  const chips = document.getElementById("brand-chips");
  if (chips) {
    const cls = (on) => `filter-chip px-3.5 py-1.5 rounded-full transition-all whitespace-nowrap ${on ? "bg-[#0284c7] text-white shadow-sm" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`;
    chips.innerHTML = `<button data-brand="all" class="${cls(filterState.brand === "all")}">Todos</button>` +
      brands.map((b) => `<button data-brand="${esc(b)}" class="${cls(filterState.brand === b)}">${esc(b)}</button>`).join("");
  }
}

function getFilteredVehicles() {
  return VEHICLES.filter((v) => {
    if (filterState.search) {
      const q = filterState.search.toLowerCase();
      const hay = [v.brand, v.model, v.version, v.year, v.body, v.fuel, v.color].join(" ").toLowerCase();
      if (!hay.includes(q)) return false;
    }
    if (filterState.brand !== "all" && v.brand !== filterState.brand) return false;
    if (filterState.body !== "all" && v.body !== filterState.body) return false;
    if (filterState.year !== "all" && String(v.year) !== String(filterState.year)) return false;
    return true;
  }).sort((a, b) => {
    if (filterState.sort === "year-desc") return b.year - a.year;
    if (filterState.sort === "km-asc") return a.km - b.km;
    return b.createdAt - a.createdAt;
  });
}

// ---------- Render ----------
function renderCatalog() {
  const container = document.getElementById("vehicle-grid");
  const countEl = document.getElementById("results-count");
  const loadMoreBtn = document.getElementById("btn-load-more");
  const noResultsEl = document.getElementById("no-results");
  const noTitle = document.getElementById("no-results-title");
  const noText = document.getElementById("no-results-text");

  if (!loaded) {
    container.innerHTML = Array(4).fill('<div class="rounded-2xl bg-slate-200/70 animate-pulse h-64"></div>').join("");
    loadMoreBtn.classList.add("hidden");
    return;
  }

  const filtered = getFilteredVehicles();
  const visible = filtered.slice(0, currentLimit);
  countEl.textContent = `Mostrando ${visible.length} de ${filtered.length} unidades`;

  if (filtered.length === 0) {
    container.innerHTML = "";
    noResultsEl.classList.remove("hidden");
    if (loadError) { noTitle.textContent = "Error de conexión"; noText.textContent = loadError; }
    else if (VEHICLES.length === 0) { noTitle.textContent = "Próximamente nuevas unidades"; noText.textContent = "Estamos actualizando el catálogo. Consultanos por WhatsApp qué modelo buscás."; }
    else { noTitle.textContent = "No encontramos unidades con esos filtros"; noText.textContent = "Probá cambiando los criterios o consultanos por WhatsApp qué modelo buscás."; }
    loadMoreBtn.classList.add("hidden");
    return;
  }

  noResultsEl.classList.add("hidden");
  container.innerHTML = visible.map(createVehicleCard).join("");

  if (filtered.length <= 8) {
    loadMoreBtn.classList.add("hidden");
  } else if (currentLimit >= filtered.length) {
    loadMoreBtn.classList.remove("hidden");
    loadMoreBtn.innerHTML = `<span>Ver Menos Unidades</span><svg class="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>`;
  } else {
    loadMoreBtn.classList.remove("hidden");
    loadMoreBtn.innerHTML = `<span>Ver Más Unidades (${filtered.length - currentLimit})</span><svg class="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>`;
  }
}

function toggleLoadMore() {
  const filtered = getFilteredVehicles();
  if (currentLimit >= filtered.length) {
    currentLimit = 8;
    const s = document.getElementById("catalogo-section");
    if (s) s.scrollIntoView({ behavior: "smooth" });
  } else {
    currentLimit += 4;
  }
  renderCatalog();
}

// ---------- Modal ----------
function setModalPhoto(i) {
  if (!modalVehicle) return;
  const main = document.getElementById("modal-main-photo");
  if (main && modalVehicle.photos[i]) main.src = modalVehicle.photos[i];
  document.querySelectorAll(".modal-thumb").forEach((t, idx) => {
    t.classList.toggle("ring-2", idx === i);
    t.classList.toggle("ring-[#0284c7]", idx === i);
  });
}

function specBox(label, value) {
  return `<div class="bg-slate-50 p-3 rounded-xl border border-slate-100"><span class="text-[10px] text-slate-400 font-semibold block uppercase">${label}</span><span class="text-xs sm:text-sm font-bold text-slate-800">${esc(value || "—")}</span></div>`;
}

function openVehicleModal(id, keepScroll) {
  const v = VEHICLES.find((x) => x.id === id);
  if (!v) return;
  modalVehicle = v;
  const modal = document.getElementById("vehicle-modal");
  const content = document.getElementById("modal-vehicle-content");
  const metaLine = [v.year, v.km ? v.km.toLocaleString("es-AR") + " km" : "", v.color].filter(Boolean).join(" • ");

  const photo = v.photos[0]
    ? `<img id="modal-main-photo" src="${esc(v.photos[0])}" alt="${esc(vTitle(v))}" class="w-full h-full object-cover"/>`
    : PLACEHOLDER;
  const thumbs = v.photos.length > 1
    ? `<div class="flex gap-2 overflow-x-auto no-scrollbar px-4 pt-3">${v.photos.map((p, i) => `<img src="${esc(p)}" onclick="setModalPhoto(${i})" class="modal-thumb w-16 h-12 sm:w-20 sm:h-14 object-cover rounded-lg cursor-pointer shrink-0 ${i === 0 ? "ring-2 ring-[#0284c7]" : ""}" alt="Foto ${i + 1}" loading="lazy"/>`).join("")}</div>`
    : "";

  const financing = v.status === "apto" ? `
    <div class="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 mb-5">
      <div class="flex items-center gap-2 mb-1">
        <svg class="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        <span class="text-sm font-bold text-emerald-900">Plan de Financiación BUDANER</span>
      </div>
      <p class="text-xs text-emerald-700 font-medium">Esta unidad es apta para financiación. Consultanos por cuotas y requisitos.</p>
    </div>` : "";

  const features = v.features.length ? `
    <h4 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Equipamiento Destacado</h4>
    <ul class="space-y-2 mb-6">${v.features.map((f) => `<li class="flex items-start gap-2 text-xs sm:text-sm text-slate-700"><span class="text-emerald-600 font-black leading-5">✓</span><span>${esc(f)}</span></li>`).join("")}</ul>` : "";

  content.innerHTML = `
    <div class="relative bg-white rounded-3xl overflow-hidden shadow-2xl max-w-2xl w-full mx-2 sm:mx-4 my-4 max-h-[92vh] flex flex-col">
      <button onclick="closeVehicleModal()" class="absolute top-3 right-3 z-20 bg-slate-900/70 hover:bg-slate-900 text-white rounded-full p-2 transition-all" aria-label="Cerrar">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
      </button>
      <div class="overflow-y-auto">
        <div class="relative h-60 sm:h-80 bg-slate-100">
          ${photo}
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none"></div>
          <div class="absolute bottom-4 left-4 right-4 text-white pointer-events-none">
            <div class="mb-1">${badgeHtml(v, true)}</div>
            <h2 class="text-lg sm:text-2xl font-black font-heading leading-tight">${esc(vTitle(v))}</h2>
            <p class="text-xs sm:text-sm text-slate-200">${esc(metaLine)}</p>
          </div>
        </div>
        ${thumbs}
        <div class="p-4 sm:p-6">
          ${financing}
          <h4 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Ficha Técnica</h4>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6">
            ${specBox("Motor", v.engine)}${specBox("Caja", v.transmission)}${specBox("Combustible", v.fuel)}${specBox("Carrocería", v.body)}
          </div>
          ${features}
          <div class="pt-4 border-t border-slate-100">
            <a href="${getWhatsAppUrl(v)}" target="_blank" rel="noopener noreferrer"
               class="w-full py-3.5 px-4 rounded-2xl bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2 shadow-lg transition-all">
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">${WA_ICON}</svg>
              <span>CONSULTAR POR ESTA UNIDAD</span>
            </a>
          </div>
        </div>
      </div>
    </div>`;

  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.style.overflow = "hidden";
}

function closeVehicleModal() {
  modalVehicle = null;
  const modal = document.getElementById("vehicle-modal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
  document.body.style.overflow = "auto";
}

// ---------- Reseñas ----------
function renderGoogleReviews() {
  const c = document.getElementById("reviews-container");
  if (!c) return;
  const star = '<svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>';
  c.innerHTML = GOOGLE_REVIEWS.map((r) => `
    <div class="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm flex flex-col justify-between">
      <div>
        <div class="flex items-center gap-3 mb-3">
          <div class="w-10 h-10 rounded-full bg-gradient-to-tr from-[#0284c7] to-sky-400 text-white font-bold flex items-center justify-center text-sm">${esc(r.author.charAt(0))}</div>
          <div><h4 class="text-sm font-bold text-slate-900 leading-tight">${esc(r.author)}</h4><span class="text-[11px] text-slate-400">${esc(r.city)} • ${esc(r.date)}</span></div>
        </div>
        <div class="flex gap-0.5 text-amber-400 mb-2.5">${star.repeat(r.rating)}</div>
        <p class="text-xs sm:text-sm text-slate-600 leading-relaxed italic mb-3">"${esc(r.comment)}"</p>
      </div>
      <div class="pt-2 border-t border-slate-100 text-[11px] text-slate-400">${esc(r.car)}</div>
    </div>`).join("");
}

function resetFilters() {
  filterState = { search: "", brand: "all", body: "all", year: "all", sort: "featured" };
  const si = document.getElementById("search-input"); if (si) si.value = "";
  const ss = document.getElementById("sort-select"); if (ss) ss.value = "featured";
  currentLimit = 8;
  refreshFilterOptions();
  renderCatalog();
}

// ---------- Init ----------
document.addEventListener("DOMContentLoaded", () => {
  renderCatalog();
  renderGoogleReviews();

  document.getElementById("btn-load-more").addEventListener("click", toggleLoadMore);

  const bind = (id, key, ev) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener(ev, (e) => {
      filterState[key] = key === "search" ? e.target.value.trim() : e.target.value;
      currentLimit = 8;
      if (key === "brand") refreshFilterOptions();
      renderCatalog();
    });
  };
  bind("search-input", "search", "input");
  bind("filter-brand", "brand", "change");
  bind("filter-body", "body", "change");
  bind("filter-year", "year", "change");
  bind("sort-select", "sort", "change");

  document.getElementById("brand-chips").addEventListener("click", (e) => {
    const chip = e.target.closest(".filter-chip");
    if (!chip) return;
    filterState.brand = chip.getAttribute("data-brand");
    currentLimit = 8;
    refreshFilterOptions();
    renderCatalog();
  });

  const modal = document.getElementById("vehicle-modal");
  modal.addEventListener("click", (e) => { if (e.target === modal || e.target.id === "modal-vehicle-content") closeVehicleModal(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeVehicleModal(); });
});
