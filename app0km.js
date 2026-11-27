/**
 * Lógica Interactiva 0KM - Budaner Automotores
 * Conexión directa a assets locales, gama oficial argentina y configurador de estudio
 */

const WHATSAPP_PHONE_0KM = "543856175327";

let currentBrandFilter = "ALL";
let activeVehicle = null;
let activeCarroceria = null;
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
function getFallbackSvgForCar(vehicle, colorHex) {
  if (typeof getCarStudioSvg === "function") {
    return getCarStudioSvg(vehicle.tipo, colorHex || "#0095C8", "card");
  }
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="600" height="340" viewBox="0 0 600 340">
      <rect width="600" height="340" fill="#ffffff"/>
      <text x="300" y="170" fill="#94a3b8" font-family="sans-serif" font-size="18" text-anchor="middle font-weight="bold">${vehicle.modelo}</text>
    </svg>
  `);
}

function renderZeroCatalog() {
  const grid = document.getElementById("zero-grid");
  if (!grid) return;

  const filtered = currentBrandFilter === "ALL" 
    ? VEHICULOS_0KM 
    : VEHICULOS_0KM.filter(v => v.marca === currentBrandFilter);

  grid.innerHTML = filtered.map(v => {
    const defaultColor = v.colores[0];
    const fallbackSvg = getFallbackSvgForCar(v, defaultColor ? defaultColor.hex : "#0095C8");
    const primarySrc = v.imagenCard || (defaultColor ? defaultColor.imagen : fallbackSvg);

    return `
      <article 
        class="zero-card bg-white rounded-3xl p-6 border border-slate-200/80 flex flex-col items-center justify-between cursor-pointer group shadow-xs hover:border-[#0095C8]/40"
        onclick="openCarDetail('${v.id}')"
      >
        <!-- Imagen 3/4 Estudio con Fondo Blanco Puro -->
        <div class="w-full aspect-[16/10] flex items-center justify-center p-2 relative overflow-hidden bg-white">
          <img 
            src="${primarySrc}" 
            alt="${v.modelo}" 
            class="car-img w-full h-full object-contain transition-transform duration-500 ease-out select-none drop-shadow-sm"
            loading="lazy"
            onerror="this.onerror=null; this.src='${fallbackSvg}';"
          />
        </div>

        <!-- Información Centrada & Limpia -->
        <div class="w-full text-center pt-4 border-t border-slate-100/90 mt-2">
          <div class="flex items-center justify-center gap-1.5 mb-1">
            <span class="text-[11px] font-black uppercase tracking-wider text-[#0095C8]">
              ${v.marca}
            </span>
            <span class="text-slate-300">•</span>
            <span class="text-[11px] font-bold text-slate-500">
              ${v.tipo}
            </span>
          </div>

          <h3 class="text-base sm:text-lg font-black text-slate-900 group-hover:text-[#0095C8] transition-colors leading-snug">
            ${v.modelo.toUpperCase()}
          </h3>

          ${v.subtitulo ? `
            <p class="text-[11px] text-slate-400 font-medium mt-0.5 line-clamp-1">
              ${v.subtitulo}
            </p>
          ` : ''}
          
          <!-- Mini preview de colores disponibles -->
          <div class="flex items-center justify-center gap-1.5 my-3">
            ${v.colores.map(c => `
              <span 
                class="w-3 h-3 rounded-full border border-slate-200 shadow-xs" 
                style="background-color: ${c.hex};" 
                title="${c.nombre}"
              ></span>
            `).join('')}
          </div>

          <!-- Texto sutil hover -->
          <div class="view-cta text-xs font-bold text-[#0095C8] flex items-center justify-center gap-1 pt-1">
            <span>Ver versiones y colores oficiales</span>
            <span class="transition-transform group-hover:translate-x-1">→</span>
          </div>
        </div>
      </article>
    `;
  }).join('');
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

  // Manejo de carrocerías (ej. Chevrolet Onix Hatchback vs Onix Plus Sedán)
  if (v.carrocerias && v.carrocerias.length > 0) {
    activeCarroceria = v.carrocerias[0];
    activeColor = activeCarroceria.colores[0];
  } else {
    activeCarroceria = null;
    activeColor = v.colores[0];
  }

  activeVersion = v.versiones[0];

  document.getElementById("catalog-view").classList.add("hidden");
  document.getElementById("detail-view").classList.remove("hidden");

  // Encabezado
  document.getElementById("detail-brand-badge").textContent = v.marca;
  document.getElementById("detail-model-title").textContent = v.modelo;
  document.getElementById("detail-type-subtitle").textContent = v.subtitulo || `${v.tipo} 0KM • Mercado Oficial Argentina`;

  // Selector de Carrocería (si aplica)
  renderCarroceriaSelector();

  // Video YouTube (embed responsive modo silencioso/loop para experiencia fluida)
  const videoIframe = document.getElementById("detail-video-iframe");
  if (videoIframe) {
    videoIframe.src = `https://www.youtube.com/embed/${v.videoYoutubeId}?autoplay=1&mute=1&loop=1&playlist=${v.videoYoutubeId}&controls=1&rel=0`;
  }

  // Configurador de Color
  renderColorSelector();
  updateColorPreview();

  // Selector de Versiones y Especificaciones
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
  activeCarroceria = null;
}

// Selector de Carrocería (Hatchback vs Onix Plus)
function renderCarroceriaSelector() {
  const container = document.getElementById("carroceria-container");
  const tabs = document.getElementById("carroceria-tabs");
  if (!container || !tabs) return;

  if (activeVehicle && activeVehicle.carrocerias && activeVehicle.carrocerias.length > 0) {
    container.classList.remove("hidden");
    tabs.innerHTML = activeVehicle.carrocerias.map(c => `
      <button 
        type="button" 
        class="carroceria-pill px-4 py-2 text-xs font-bold rounded-lg transition-all ${c.id === activeCarroceria.id ? 'active' : 'text-slate-600 hover:text-slate-900'}"
        onclick="selectCarroceria('${c.id}')"
      >
        ${c.nombre}
      </button>
    `).join('');
  } else {
    container.classList.add("hidden");
    tabs.innerHTML = "";
  }
}

function selectCarroceria(carroceriaId) {
  if (!activeVehicle || !activeVehicle.carrocerias) return;
  const c = activeVehicle.carrocerias.find(x => x.id === carroceriaId);
  if (!c) return;

  activeCarroceria = c;
  // Cambiar la paleta de colores activa a los de esta carrocería
  activeColor = c.colores[0];

  renderCarroceriaSelector();
  renderColorSelector();
  updateColorPreview();
  updateWhatsAppLink();
}

// Render botones de color oficiales
function renderColorSelector() {
  const container = document.getElementById("color-dots-container");
  if (!container || !activeVehicle) return;

  const currentColors = activeCarroceria ? activeCarroceria.colores : activeVehicle.colores;

  container.innerHTML = currentColors.map(c => `
    <button 
      type="button"
      data-color-id="${c.id}" 
      class="color-dot w-9 h-9 rounded-full border-2 transition-transform duration-200 shadow-sm relative flex items-center justify-center ${c.bordeOscuro ? 'border-slate-300' : 'border-white'} ${c.id === activeColor.id ? 'active' : ''}"
      style="background-color: ${c.hex};" 
      title="${c.nombre}"
      onclick="selectColor('${c.id}')"
    >
      ${c.id === activeColor.id ? `<span class="w-2 h-2 rounded-full ${c.hex === '#F4F4F4' || c.hex === '#F8FAFC' || c.hex === '#F9FAFB' ? 'bg-slate-900' : 'bg-white'}"></span>` : ''}
    </button>
  `).join('');

  document.getElementById("color-name-display").textContent = activeColor.nombre;
}

function selectColor(colorId) {
  const currentColors = activeCarroceria ? activeCarroceria.colores : activeVehicle.colores;
  const c = currentColors.find(x => x.id === colorId);
  if (!c) return;
  
  activeColor = c;
  renderColorSelector();
  updateColorPreview();
  updateWhatsAppLink();
}

function updateColorPreview() {
  const imgEl = document.getElementById("detail-side-photo");
  if (!imgEl || !activeVehicle || !activeColor) return;

  // Fallback vectorial con color exacto
  const fallbackSvg = getFallbackSvgForCar(activeVehicle, activeColor.hex);

  // Ruta del asset local directo
  const targetSrc = activeColor.imagen || fallbackSvg;

  // Transición suave
  imgEl.style.opacity = "0.7";
  
  const tempImg = new Image();
  tempImg.onload = () => {
    imgEl.src = targetSrc;
    imgEl.style.opacity = "1";
  };
  tempImg.onerror = () => {
    imgEl.src = fallbackSvg;
    imgEl.style.opacity = "1";
  };
  tempImg.src = targetSrc;
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

// Actualizar ficha técnica compacta (4 columnas simétricas) y equipamiento
function updateVersionSpecs() {
  const grid = document.getElementById("version-specs-grid");
  const list = document.getElementById("version-features-list");
  if (!grid || !list || !activeVersion) return;

  // Tarjetas simétricas de 4 columnas
  grid.innerHTML = `
    <!-- 1. Motor -->
    <div class="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col justify-between hover:border-[#0095C8]/40 transition-colors">
      <div>
        <div class="flex items-center justify-between mb-2">
          <span class="text-[10px] uppercase font-black text-[#0095C8] tracking-wider">Motorización</span>
          <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
        </div>
        <span class="text-sm sm:text-base font-black text-slate-900 leading-tight block">${activeVersion.motor}</span>
      </div>
      <span class="text-[11px] text-slate-400 mt-2 block font-medium">Nafta • Homologado Argentina</span>
    </div>

    <!-- 2. Transmisión -->
    <div class="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col justify-between hover:border-[#0095C8]/40 transition-colors">
      <div>
        <div class="flex items-center justify-between mb-2">
          <span class="text-[10px] uppercase font-black text-[#0095C8] tracking-wider">Transmisión</span>
          <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/></svg>
        </div>
        <span class="text-sm sm:text-base font-black text-slate-900 leading-tight block">${activeVersion.transmision}</span>
      </div>
      <span class="text-[11px] text-slate-400 mt-2 block font-medium">Tracción delantera 4x2</span>
    </div>

    <!-- 3. Potencia y Torque -->
    <div class="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col justify-between hover:border-[#0095C8]/40 transition-colors">
      <div>
        <div class="flex items-center justify-between mb-2">
          <span class="text-[10px] uppercase font-black text-[#0095C8] tracking-wider">Potencia / Torque</span>
          <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
        </div>
        <span class="text-sm sm:text-base font-black text-slate-900 leading-tight block">${activeVersion.potencia}</span>
      </div>
      <span class="text-[11px] text-slate-400 mt-2 block font-medium">Rendimiento y eficiencia</span>
    </div>

    <!-- 4. Seguridad -->
    <div class="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col justify-between hover:border-[#0095C8]/40 transition-colors">
      <div>
        <div class="flex items-center justify-between mb-2">
          <span class="text-[10px] uppercase font-black text-emerald-600 tracking-wider">Seguridad Oficial</span>
          <svg class="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
        </div>
        <span class="text-xs sm:text-sm font-bold text-slate-800 leading-snug block">${activeVersion.seguridad}</span>
      </div>
      <span class="text-[11px] text-emerald-700 font-semibold mt-2 block">Protección activa y pasiva</span>
    </div>
  `;

  // Lista de equipamiento destacado
  list.innerHTML = activeVersion.equipamiento.map(item => `
    <li class="flex items-start gap-2.5 p-2 rounded-xl bg-white border border-slate-200/60 shadow-2xs text-xs sm:text-sm text-slate-700">
      <span class="text-[#0095C8] font-black text-sm leading-none shrink-0 mt-0.5">✓</span>
      <span class="font-medium">${item}</span>
    </li>
  `).join('');

  updateWhatsAppLink();
}

// CTA WhatsApp con mensaje prearmado inteligente
function updateWhatsAppLink() {
  const btn = document.getElementById("detail-whatsapp-btn");
  if (!btn || !activeVehicle || !activeVersion || !activeColor) return;

  let modelDescriptor = `${activeVehicle.marca} ${activeVehicle.modelo}`;
  if (activeCarroceria) {
    modelDescriptor += ` [${activeCarroceria.nombre}]`;
  }

  const msg = `Hola Budaner Automotores! Me interesa consultar por el vehículo 0KM:\n\n*${modelDescriptor}*\n• Versión: *${activeVersion.nombre}*\n• Color seleccionado: *${activeColor.nombre}*\n\n¿Tienen disponibilidad en agencia o plazos de entrega, y qué alternativas de financiación oficial disponen? Muchas gracias!`;
  
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
