/* Catálogo público: escucha Firestore en tiempo real (solo colección pública "vehicles"). */
document.addEventListener('DOMContentLoaded', function () {
  db.collection('vehicles').onSnapshot(
    function (snap) {
      setVehicles(snap.docs.map(function (d) { return normalizeVehicle(d.id, d.data()); }));
    },
    function (err) {
      console.error('Firestore:', err);
      setVehicles([], 'No pudimos cargar las unidades. Intentá nuevamente en unos minutos.');
    }
  );
});
