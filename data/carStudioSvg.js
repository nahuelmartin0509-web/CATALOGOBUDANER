/**
 * Generador de siluetas de estudio vectoriales en alta definición
 * Produce renders limpios estilo estudio fotográfico automotriz en vista 3/4 frontal
 * y perfil lateral exacto para configurador de color.
 */

function getCarStudioSvg(tipo, colorHex, view = "card") {
  const c = colorHex || "#0095C8";
  
  if (view === "side") {
    // Vista de perfil lateral para configurador de color
    if (tipo === "Pick-up") {
      return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 420" width="100%" height="100%">
        <defs>
          <linearGradient id="gnd" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="%230f172a" stop-opacity="0.25"/><stop offset="100%" stop-color="%23ffffff" stop-opacity="0"/></linearGradient>
          <linearGradient id="body" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="${encodeURIComponent(c)}"/><stop offset="70%" stop-color="${encodeURIComponent(c)}"/><stop offset="100%" stop-color="%23000000" stop-opacity="0.35"/></linearGradient>
          <linearGradient id="glass" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="%231e293b"/><stop offset="100%" stop-color="%23090d16"/></linearGradient>
          <linearGradient id="rim" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="%23e2e8f0"/><stop offset="100%" stop-color="%23334155"/></linearGradient>
        </defs>
        <!-- Sombra estudio -->
        <ellipse cx="450" cy="375" rx="380" ry="24" fill="url(%23gnd)" />
        <ellipse cx="450" cy="375" rx="320" ry="14" fill="%23020617" opacity="0.4" />
        <!-- Carrocería Pick-up -->
        <path d="M 120 280 L 140 220 Q 180 180 280 170 L 390 120 Q 420 100 480 100 L 610 100 Q 640 105 660 140 L 670 170 L 780 175 Q 810 180 820 220 L 830 285 Q 830 300 810 305 L 750 305 Q 730 250 670 250 Q 610 250 590 305 L 350 305 Q 330 250 270 250 Q 210 250 190 305 L 125 305 Q 115 300 120 280 Z" fill="url(%23body)" stroke="%23334155" stroke-width="2" />
        <!-- Cabina / Vidrios -->
        <path d="M 405 130 L 485 112 L 605 112 Q 625 115 640 140 L 650 170 L 390 170 Z" fill="url(%23glass)" stroke="%2364748b" stroke-width="1.5" />
        <path d="M 525 112 L 535 170" stroke="%23475569" stroke-width="6" />
        <!-- Luces -->
        <path d="M 122 235 Q 140 230 160 235 L 150 255 Z" fill="%23f8fafc" opacity="0.9" />
        <path d="M 825 210 L 828 245 L 815 240 Z" fill="%23dc2626" />
        <!-- Ruedas -->
        <circle cx="270" cy="305" r="64" fill="%230f172a" stroke="%23334155" stroke-width="4" />
        <circle cx="270" cy="305" r="44" fill="url(%23rim)" />
        <circle cx="270" cy="305" r="16" fill="%230f172a" />
        <circle cx="670" cy="305" r="64" fill="%230f172a" stroke="%23334155" stroke-width="4" />
        <circle cx="670" cy="305" r="44" fill="url(%23rim)" />
        <circle cx="670" cy="305" r="16" fill="%230f172a" />
      </svg>`;
    } else if (tipo === "SUV" || tipo === "SUV Coupé") {
      return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 420" width="100%" height="100%">
        <defs>
          <linearGradient id="gnd" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="%230f172a" stop-opacity="0.25"/><stop offset="100%" stop-color="%23ffffff" stop-opacity="0"/></linearGradient>
          <linearGradient id="body" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="${encodeURIComponent(c)}"/><stop offset="70%" stop-color="${encodeURIComponent(c)}"/><stop offset="100%" stop-color="%23000000" stop-opacity="0.35"/></linearGradient>
          <linearGradient id="glass" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="%231e293b"/><stop offset="100%" stop-color="%23090d16"/></linearGradient>
          <linearGradient id="rim" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="%23e2e8f0"/><stop offset="100%" stop-color="%23334155"/></linearGradient>
        </defs>
        <ellipse cx="450" cy="370" rx="370" ry="22" fill="url(%23gnd)" />
        <ellipse cx="450" cy="370" rx="310" ry="12" fill="%23020617" opacity="0.4" />
        <path d="M 140 270 L 160 210 Q 210 160 310 150 L 420 95 Q 460 85 530 85 L 670 95 Q 730 115 765 170 L 800 240 Q 810 270 790 295 L 740 300 Q 720 245 660 245 Q 600 245 580 300 L 350 300 Q 330 245 270 245 Q 210 245 190 300 L 145 300 Q 135 290 140 270 Z" fill="url(%23body)" stroke="%23334155" stroke-width="2" />
        <path d="M 430 108 L 525 98 L 655 106 Q 710 120 740 165 L 405 165 Z" fill="url(%23glass)" stroke="%2364748b" stroke-width="1.5" />
        <path d="M 555 98 L 565 165" stroke="%23475569" stroke-width="6" />
        <path d="M 142 225 Q 165 220 185 225 L 175 245 Z" fill="%23f8fafc" opacity="0.9" />
        <path d="M 795 210 L 802 240 L 788 238 Z" fill="%23dc2626" />
        <circle cx="270" cy="300" r="60" fill="%230f172a" stroke="%23334155" stroke-width="4" />
        <circle cx="270" cy="300" r="40" fill="url(%23rim)" />
        <circle cx="270" cy="300" r="14" fill="%230f172a" />
        <circle cx="660" cy="300" r="60" fill="%230f172a" stroke="%23334155" stroke-width="4" />
        <circle cx="660" cy="300" r="40" fill="url(%23rim)" />
        <circle cx="660" cy="300" r="14" fill="%230f172a" />
      </svg>`;
    } else {
      // Hatchback / Sedán
      return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 420" width="100%" height="100%">
        <defs>
          <linearGradient id="gnd" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="%230f172a" stop-opacity="0.25"/><stop offset="100%" stop-color="%23ffffff" stop-opacity="0"/></linearGradient>
          <linearGradient id="body" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="${encodeURIComponent(c)}"/><stop offset="70%" stop-color="${encodeURIComponent(c)}"/><stop offset="100%" stop-color="%23000000" stop-opacity="0.35"/></linearGradient>
          <linearGradient id="glass" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="%231e293b"/><stop offset="100%" stop-color="%23090d16"/></linearGradient>
          <linearGradient id="rim" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="%23e2e8f0"/><stop offset="100%" stop-color="%23334155"/></linearGradient>
        </defs>
        <ellipse cx="450" cy="365" rx="360" ry="20" fill="url(%23gnd)" />
        <ellipse cx="450" cy="365" rx="300" ry="10" fill="%23020617" opacity="0.4" />
        <path d="M 140 280 L 165 220 Q 220 170 320 160 L 415 105 Q 465 95 540 95 L 660 105 Q 730 130 765 185 L 800 240 Q 805 270 780 295 L 735 300 Q 715 250 655 250 Q 595 250 575 300 L 350 300 Q 330 250 270 250 Q 210 250 190 300 L 145 300 Q 135 290 140 280 Z" fill="url(%23body)" stroke="%23334155" stroke-width="2" />
        <path d="M 425 115 L 530 105 L 640 115 Q 695 130 735 175 L 400 175 Z" fill="url(%23glass)" stroke="%2364748b" stroke-width="1.5" />
        <path d="M 545 105 L 555 175" stroke="%23475569" stroke-width="6" />
        <path d="M 148 235 Q 170 230 190 235 L 180 250 Z" fill="%23f8fafc" opacity="0.9" />
        <path d="M 790 215 L 798 245 L 784 242 Z" fill="%23dc2626" />
        <circle cx="270" cy="300" r="56" fill="%230f172a" stroke="%23334155" stroke-width="4" />
        <circle cx="270" cy="300" r="38" fill="url(%23rim)" />
        <circle cx="270" cy="300" r="14" fill="%230f172a" />
        <circle cx="655" cy="300" r="56" fill="%230f172a" stroke="%23334155" stroke-width="4" />
        <circle cx="655" cy="300" r="38" fill="url(%23rim)" />
        <circle cx="655" cy="300" r="14" fill="%230f172a" />
      </svg>`;
    }
  }

  // Vista 3/4 frontal para cards (estudio fotográfico con piso reflectante)
  return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="100%" height="100%">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="%23ffffff"/><stop offset="100%" stop-color="%23f8fafc"/></linearGradient>
      <radialGradient id="shadow" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="%230f172a" stop-opacity="0.3"/><stop offset="60%" stop-color="%23334155" stop-opacity="0.1"/><stop offset="100%" stop-color="%23ffffff" stop-opacity="0"/></radialGradient>
      <linearGradient id="paint" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="${encodeURIComponent(c)}"/><stop offset="50%" stop-color="${encodeURIComponent(c)}"/><stop offset="100%" stop-color="%23000000" stop-opacity="0.35"/></linearGradient>
      <linearGradient id="glass" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="%231e293b"/><stop offset="100%" stop-color="%23090d16"/></linearGradient>
      <linearGradient id="rim" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="%23f8fafc"/><stop offset="100%" stop-color="%23475569"/></linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(%23bg)" />
    <!-- Sombra piso estudio -->
    <ellipse cx="400" cy="410" rx="340" ry="26" fill="url(%23shadow)" />
    <ellipse cx="380" cy="410" rx="260" ry="14" fill="%230f172a" opacity="0.35" />
    
    <!-- Silueta 3/4 de alta fidelidad -->
    <g transform="translate(40, 40)">
      <!-- Carrocería principal -->
      <path d="M 120 280 L 170 210 Q 240 130 380 120 L 520 135 Q 580 150 630 200 L 680 250 Q 700 290 670 320 L 600 325 Q 570 260 500 260 Q 430 260 410 325 L 260 325 Q 240 260 170 260 Q 110 260 90 325 L 60 320 Q 40 300 50 270 L 120 280 Z" fill="url(%23paint)" stroke="%23334155" stroke-width="2" />
      
      <!-- Parabrisas & Ventanillas -->
      <path d="M 270 190 L 380 135 L 510 148 Q 560 160 590 200 L 350 210 Z" fill="url(%23glass)" stroke="%2364748b" stroke-width="1.5" />
      <path d="M 450 142 L 460 205" stroke="%23475569" stroke-width="5" />
      
      <!-- Capot y frontal 3/4 -->
      <path d="M 170 210 L 270 190 L 350 210 L 220 240 Z" fill="url(%23paint)" opacity="0.9" />
      <!-- Ópticas delanteras LED -->
      <path d="M 130 240 Q 180 230 210 245 L 180 270 Z" fill="%23f8fafc" stroke="%2338bdf8" stroke-width="2" filter="drop-shadow(0 0 6px rgba(56,189,248,0.5))" />
      <path d="M 640 240 L 670 255 L 660 275 Z" fill="%23dc2626" />
      
      <!-- Parrilla cromada / dark gloss -->
      <path d="M 110 265 L 160 260 L 140 295 L 90 295 Z" fill="%230f172a" stroke="%2364748b" stroke-width="1.5" />
      
      <!-- Ruedas en ángulo 3/4 -->
      <ellipse cx="170" cy="315" rx="52" ry="58" fill="%230f172a" stroke="%23334155" stroke-width="3" />
      <ellipse cx="170" cy="315" rx="34" ry="40" fill="url(%23rim)" />
      <circle cx="170" cy="315" r="14" fill="%230f172a" />
      
      <ellipse cx="500" cy="315" rx="52" ry="58" fill="%230f172a" stroke="%23334155" stroke-width="3" />
      <ellipse cx="500" cy="315" rx="34" ry="40" fill="url(%23rim)" />
      <circle cx="500" cy="315" r="14" fill="%230f172a" />
    </g>
  </svg>`;
}
