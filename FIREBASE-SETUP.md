# Budaner – Configuración de Firebase (una sola vez)

1. **Authentication** → Sign-in method → habilitar *Correo/Contraseña*. En *Users* crear el usuario administrador (y desactivar cualquier otro método de alta).
2. **Firestore Database** → crear base de datos → pestaña *Rules* → pegar el contenido de `firestore.rules` → Publicar.
3. **No se usa Storage** (el proyecto funciona 100% en el plan gratuito Spark). Las fotos se comprimen en el navegador (~70 KB) y se guardan como texto en el array `imagenes` del documento de Firestore (máx. 8 por vehículo, límite 1 MB por documento).
4. **Authentication → Settings → Authorized domains**: agregar el dominio donde se publique el sitio (ej. `nahuelmartin0509-web.github.io`). `localhost` ya viene autorizado.
5. Abrir `admin.html`, ingresar y cargar vehículos.

## Privacidad del precio
- Datos públicos: colección `vehicles` (lo único que lee `index.html`).
- Precio / Costo: colección `vehicles_private` (reglas: solo usuarios autenticados). El catálogo público no la consulta y Firestore rechazaría la lectura.

Para probar en local usar un servidor (ej. `npx serve`) y abrir `http://localhost:3000`.
