/* Configuración de Firebase (SDK compat, funciona en index.html y admin.html) */
const firebaseConfig = {
  apiKey: "AIzaSyAaSP_OgqG1isQKqC7qzRPbSVS_fK1Uxms",
  authDomain: "budaner-automotores.firebaseapp.com",
  projectId: "budaner-automotores",
  storageBucket: "budaner-automotores.firebasestorage.app",
  messagingSenderId: "78113782543",
  appId: "1:78113782543:web:12b4bee2d0e9bfe10cdc7a"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

/*
 * Modelo de datos:
 *  - vehicles/{id}          -> datos PÚBLICOS (los lee el catálogo).
 *  - vehicles_private/{id}  -> Precio / Costo. Solo lectura/escritura con login (ver firestore.rules).
 */
