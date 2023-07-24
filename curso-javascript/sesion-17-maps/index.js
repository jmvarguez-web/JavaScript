let marker, marker1, marker2, marker3, map;

function initMap() {
  // console.log("Inicializando mapa")
  const posicion = [
    {
      lat: 20.966444,
      lng: -89.623722,
    },
    {
      lat: 48.8583701,
      lng: 2.2944813,
    },
    {
      lat: -13.1631412,
      lng: -72.5449629,
    },
    {
      lat: 27.1750151,
      lng: 78.0421552,
    },
    {
      lat: 41.8902102,
      lng: 12.4922309,
    },
  ];

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: posicion[0],
  });

  marker = new google.maps.Marker({
    position: posicion[0],
    map,
    title: "Posición Inicial",
  });

  marker1 = new google.maps.Marker({
    position: posicion[1],
    map,
    title: "Paris,torre eiffel",
  });

  marker2 = new google.maps.Marker({
    position: posicion[2],
    map,
    title: "Machu Picchu, Perú",
  });

  marker3 = new google.maps.Marker({
    position: posicion[3],
    map,
    title: "El Taj Mahal, India",
  });

  marker4 = new google.maps.Marker({
    position: posicion[4],
    map,
    title: "El Coliseo, Italia",
  });

  // Obtener la geolocalización
  // marker.setPosition({ lat, lng })
  //geoPosiciona();
}

function geoPosiciona() {
  if (navigator.geolocation) {
    const geoLoc = navigator.geolocation;
    const options = { timeout: 60000 };
    const watchPos = geoLoc.watchPosition(centraMapa, onError, options);
  } else {
    alert("Tu navegador no admite geolocalización");
  }
}

function centraMapa(position) {
  const nuevaPos = {
    lat: position.coords.latitude,
    lng: position.coords.longitude,
  };
  marker.setPosition(nuevaPos);
  map.setCenter(nuevaPos);
}

function onError(error) {
  console.log("Se ha producido un error y lo hemos gestionado");
  console.error(error);
}
