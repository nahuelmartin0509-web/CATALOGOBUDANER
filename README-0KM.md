# Documentación de Assets 0KM - Budaner Automotores

Esta carpeta (`public/assets/0km/` y su réplica relativa `assets/0km/`) contiene los renders y fotografías oficiales de los vehículos 0KM para la landing page inspirada en el estilo de estudio limpio (Nissan Argentina).

## Convención de Nombres de Archivo

El sistema está configurado para cargar automáticamente los archivos `.webp` (o `.png` / `.jpg` si se actualiza la extensión) siguiendo este formato estricto:

### 1. Fotos de Portada / Card (Vista 3/4 Frente):
Formato: `[marca]-[modelo]-card.webp`
Ejemplos:
- `chevrolet-onix-card.webp`
- `chevrolet-tracker-card.webp`
- `peugeot-208-card.webp`
- `peugeot-2008-card.webp`
- `fiat-cronos-card.webp`
- `fiat-fastback-card.webp`
- `ford-ranger-card.webp`
- `ford-territory-card.webp`
- `nissan-kicks-card.webp`
- `nissan-frontier-card.webp`

### 2. Fotos de Perfil Lateral para el Configurador de Color:
Formato: `[marca]-[modelo]-[color-slug].webp`
El `[color-slug]` debe coincidir con el identificador del color en minúsculas y sin acentos ni espacios (reemplazados por guion).

Ejemplos:
- `peugeot-208-azul-quasar.webp`
- `peugeot-208-blanco-nacre.webp`
- `peugeot-208-gris-artense.webp`
- `peugeot-208-negro-perla.webp`
- `chevrolet-tracker-rojo-chili.webp`
- `ford-ranger-azul-belice.webp`
- `fiat-fastback-gris-strato.webp`
- `nissan-kicks-azul-electrico.webp`

## Fallback Visual Inteligente (Modo Beta)
Mientras no se suban los archivos `.webp` correspondientes, el sistema cuenta con un **fallback visual automático** mediante siluetas automotrices vectoriales de alta precisión (SVG) combinadas con filtros dinámicos de color CSS (`hue-rotate`, `saturate`, `brightness`), lo que permite que el catálogo, las tarjetas y el configurador de colores funcionen al 100% desde el primer segundo. Al colocar los archivos `.webp` en esta carpeta, el sistema los detecta y los reemplaza automáticamente sin modificar una sola línea de código.
