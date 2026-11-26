/**
 * Lógica Interactiva 0KM - Budaner Automotores
 * Estilo Estudio Nissan Argentina
 */

const WHATSAPP_PHONE_0KM = "543856175327";

let currentBrandFilter = "ALL";
let activeVehicle = null;
let activeColor = null;
let activeVersion = null;

// ==========================================
// 1. AUTENTICACIÓN BETA (SESSIONSTORAGE)
// ==========================================
function checkBetaAuth() {
  const isAuth = sessionStorage.getItem("budaner_0km_auth") === "true";
  const modal = document.getElementById("beta-auth-modal");
  if (!modal) return;

  if (isAuth) {
    modal.classList.add("hidden");
    document.body.style.overflow = "auto";
  } else {
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }
}

function setupAuthEvents() {
  const form = document.getElementById("beta-login-form");
  const err = document.getElementById("beta-error");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const u = document.getElementById("beta-user").value.trim();
    const p = document.getElementById("beta-pass").value;

    if (u === "admin" && p === "admin") {
      sessionStorage.setItem("budaner_0km_auth", "true");
      checkBetaAuth();
    } else {
      err.textContent = "Usuario o contraseña incorrectos (admin / admin).";
      err.classList.remove("hidden");
    }
  });
}

// ==========================================
// 2. RENDER DE GRILLA 0KM (ESTUDIO LIMPIO)
// ==========================================
function getCardImage(vehicle) {
  // Ruta primaria webp local
  const localWebp = `public/assets/0km/${vehicle.slug}-card.webp`;
  // Fallback vectorial con color base del modelo
  const defaultHex = vehicle.colores[0] ? vehicle.colores[0].hex : "#0095C8";
  const fallbackSvg = getCarStudioSvg(vehicle.tipo, defaultHex, "card");
  return { localWebp, fallbackSvg };
}

function renderZeroCatalog() {
  const grid = document.getElementById("zero-grid");
  if (!grid) return;

  const filtered = currentBrandFilter === "ALL" 
    ? VEHICULOS_0KM 
    : VEHICULOS_0KM.filter(v => v.marca === currentBrandFilter);

  grid.innerHTML = filtered.map(v => {
    const { localWebp, fallbackSvg } = getCardImage(v);
    return `
      <article 
        class="zero-card bg-white rounded-3xl p-6 border border-slate-100 flex flex-col items-center justify-between cursor-pointer group shadow-xs"
        onclick="openCarDetail('${v.id}')"
      >
        <!-- Imagen 3/4 Estudio con Fondo Blanco Puro -->
        <div class="w-full aspect-[16/10] flex items-center justify-center p-2 relative overflow-hidden bg-white">
          <img 
            src="${fallbackSvg}" 
            data-local-src="${localWebp}"
            alt="${v.modelo}" 
            class="car-img w-full h-full object-contain transition-transform duration-500 ease-out select-none"
            loading="lazy"
            onerror="this.onerror=null; this.src='${fallbackSvg}';"
          />
        </div>

        <!-- Información Centrada & Limpia -->
        <div class="w-full text-center pt-4 border-t border-slate-100/80 mt-2">
          <span class="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
            ${v.marca} • ${v.tipo}
          </span>
          <h3 class="text-base sm:text-lg font-black text-slate-900 group-hover:text-[#0095C8] transition-colors leading-snug">
            ${v.modelo.toUpperCase()}
          </h3>
          
          <!-- Mini preview de colores disponibles -->
          <div class="flex items-center justify-center gap-1.5 my-3">
            ${v.colores.map(c => `
              <span class="w-2.5 h-2.5 rounded-full border border-slate-200" style="background-color: ${c.hex};" title="${c.nombre}"></span>
            `).join('')}
          </div>

          <!-- Texto sutil hover -->
          <div class="view-cta text-xs font-bold text-[#0095C8] flex items-center justify-center gap-1 pt-1">
            <span>Ver versiones y colores</span>
            <span class="transition-transform group-hover:translate-x-1">→</span>
          </div>
        </div>
      </article>
    `;
  }).join('');

  // Probar carga suave de webp si existe en el servidor
  document.querySelectorAll(".car-img[data-local-src]").forEach(img => {
    const local = img.getAttribute("data-local-src");
    if (local) {
      const probe = new Image();
      probe.onload = () => { img.src = local; };
      probe.src = local;
    }
  });
}

// Configuración de tabs de marca
function setupBrandTabs() {
  document.querySelectorAll(".brand-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".brand-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      currentBrandFilter = tab.getAttribute("data-brand") || "ALL";
      renderZeroCatalog();
    });
  });
}

// ==========================================
// 3. FICHA INTERACTIVA DEL VEHÍCULO
// ==========================================
function openCarDetail(id) {
  const v = VEHICULOS_0KM.find(x => x.id === id);
  if (!v) return;

  activeVehicle = v;
  activeColor = v.colores[0];
  activeVersion = v.versiones[0];

  document.getElementById("catalog-view").classList.add("hidden");
  document.getElementById("detail-view").classList.remove("hidden");

  // Encabezado
  document.getElementById("detail-brand-badge").textContent = v.marca;
  document.getElementById("detail-model-title").textContent = v.modelo;
  document.getElementById("detail-type-subtitle").textContent = `${v.tipo} 0KM • Mercado Oficial Argentina`;

  // Video YouTube (embed responsive modo silencioso/loop para experiencia fluida)
  const videoIframe = document.getElementById("detail-video-iframe");
  videoIframe.src = `https://www.youtube.com/embed/${v.videoYoutubeId}?autoplay=1&mute=1&loop=1&playlist=${v.videoYoutubeId}&controls=1&rel=0`;

  // Configurador de Color
  renderColorSelector();
  updateColorPreview();

  // Selector de Versiones
  renderVersionTabs();
  updateVersionSpecs();

  window.scrollTo({ top: 120, behavior: "smooth" });
}

function closeCarDetail() {
  document.getElementById("detail-view").classList.add("hidden");
  document.getElementById("catalog-view").classList.remove("hidden");
  // Detener video
  const videoIframe = document.getElementById("detail-video-iframe");
  if (videoIframe) videoIframe.src = "";
  activeVehicle = null;
}

// Render botones de color
function renderColorSelector() {
  const container = document.getElementById("color-dots-container");
  if (!container || !activeVehicle) return;

  container.innerHTML = activeVehicle.colores.map(c => `
    <button 
      type="button"
      data-color-id="${c.id}" 
      class="color-dot w-9 h-9 rounded-full border-2 transition-transform duration-200 shadow-sm relative flex items-center justify-center ${c.bordeOscuro ? 'border-slate-300' : 'border-white'} ${c.id === activeColor.id ? 'active' : ''}"
      style="background-color: ${c.hex};" 
      title="${c.nombre}"
      onclick="selectColor('${c.id}')"
    >
      ${c.id === activeColor.id ? `<span class="w-1.5 h-1.5 rounded-full ${c.hex === '#F4F4F4' || c.hex === '#F8FAFC' || c.hex === '#F9FAFB' ? 'bg-slate-900' : 'bg-white'}"></span>` : ''}
    </button>
  `).join('');

  document.getElementById("color-name-display").textContent = activeColor.nombre;
}

function selectColor(colorId) {
  const c = activeVehicle.colores.find(x => x.id === colorId);
  if (!c) return;
  activeColor = c;
  renderColorSelector();
  updateColorPreview();
  updateWhatsAppLink();
}

function updateColorPreview() {
  const imgEl = document.getElementById("detail-side-photo");
  if (!imgEl || !activeVehicle || !activeColor) return;

  // Ruta local esperada
  const localSrc = `public/assets/0km/${activeVehicle.slug}-${activeColor.id}.webp`;
  // Fallback vectorial con color dinámico exacto
  const fallbackSvg = getCarStudioSvg(activeVehicle.tipo, activeColor.hex, "side");

  // Asignar fallback inmediatamente
  imgEl.src = fallbackSvg;

  // Probar si existe la imagen local real y reemplazar sin parpadeos
  const probe = new Image();
  probe.onload = () => { imgEl.src = localSrc; };
  probe.src = localSrc;
}

// Render pestañas de versión
function renderVersionTabs() {
  const container = document.getElementById("version-tabs-container");
  if (!container || !activeVehicle) return;

  container.innerHTML = activeVehicle.versiones.map(ver => `
    <button 
      type="button" 
      class="version-tab px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 ${ver.nombre === activeVersion.nombre ? 'active' : ''}"
      onclick="selectVersion('${ver.nombre}')"
    >
      ${ver.nombre}
    </button>
  `).join('');
}

function selectVersion(versionName) {
  const v = activeVehicle.versiones.find(x => x.nombre === versionName);
  if (!v) return;
  activeVersion = v;
  renderVersionTabs();
  updateVersionSpecs();
  updateWhatsAppLink();
}

function updateVersionSpecs() {
  const grid = document.getElementById("version-specs-grid");
  const list = document.getElementById("version-features-list");
  if (!grid || !list || !activeVersion) return;

  grid.innerHTML = `
    <div class="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs">
      <span class="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">Motor</span>
      <span class="text-sm font-extrabold text-slate-800 mt-0.5 block">${activeVersion.motor}</span>
    </div>
    <div class="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs">
      <span class="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">Transmisión</span>
      <span class="text-sm font-extrabold text-slate-800 mt-0.5 block">${activeVersion.transmision}</span>
    </div>
    <div class="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs">
      <span class="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">Potencia / Torque</span>
      <span class="text-sm font-extrabold text-slate-800 mt-0.5 block">${activeVersion.potencia}</span>
    </div>
    <div class="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs md:col-span-2 lg:col-span-3">
      <span class="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">Seguridad Activa y Pasiva</span>
      <span class="text-xs sm:text-sm font-bold text-emerald-800 mt-0.5 block">${activeVersion.seguridad}</span>
    </div>
  `;

  list.innerHTML = activeVersion.equipamiento.map(item => `
    <li class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
      <span class="text-[#0095C8] font-black text-sm leading-none shrink-0 mt-0.5">✓</span>
      <span>${item}</span>
    </li>
  `).join('');

  updateWhatsAppLink();
}

// CTA WhatsApp con mensaje prearmado
function updateWhatsAppLink() {
  const btn = document.getElementById("detail-whatsapp-btn");
  if (!btn || !activeVehicle || !activeVersion || !activeColor) return;

  const msg = `Hola Budaner Automotores! Me interesa consultar por el vehículo 0KM:\n\n*${activeVehicle.marca} ${activeVehicle.modelo}*\n• Versión: *${activeVersion.nombre}*\n• Color: *${activeColor.nombre}*\n\n¿Tienen disponibilidad para entrega o plazos de entrega y qué opciones de financiación oficial disponen? Muchas gracias!`;
  
  btn.href = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE_0KM}&text=${encodeURIComponent(msg)}`;
}

// ==========================================
// 4. INICIALIZACIÓN
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  checkBetaAuth();
  setupAuthEvents();
  setupBrandTabs();
  renderZeroCatalog();

  // Escuchar tecla escape para cerrar vista detalle
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && activeVehicle) {
      closeCarDetail();
    }
  });
});
