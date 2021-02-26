// Initialize and add the map
function initMap() {
  // The location of Galati
  const Galati = { lat: 45.413177, lng: 28.024101 };
  // The map, centered at Galati
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: Galati,
  });
  // The marker, positioned at Galati
  const marker = new google.maps.Marker({
    position: Galati,
    map: map,
  });
}