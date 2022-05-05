// Initialize and add the map
function initMap() {
  // The location of Hilo
  const puna = { lat: 19.561686890970694, lng: -155.0954991182228 };
  const hilo = { lat: 19.7241, lng: 204.92 };
  const hamakua = { lat: 19.9916, lng: -155.2419 };
  const kohala = { lat: 20.088787869961966, lng: -155.71836094207646 };
  const kau = { lat: 19.296113597730706, lng: -155.53512452299208 };
  const kona = { lat: 19.647, lng: 204 };
  const island = { lat: 19.54810212316036, lng: -155.67210351448992 };

  // The map, centered at Hilo
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 9,
    center: hilo,
  });

  const punaGraph = "<div><img src='rent.png'></div>";
  const hiloGraph = "<div><img src='rent.png'></div>";
  const hamakuaGraph = "<div><img src='rent.png'></div>";
  const kohalaGraph = "<div><img src='rent.png'></div>";
  const kauGraph = "<div><img src='rent.png'></div>";
  const konaGraph = "<div><img src='rent.png'></div>";
  const islandGraph = "<div><img src='rent.png'></div>";

  const punaWindow = new google.maps.InfoWindow({
    content: punaGraph,
  });

  const hiloWindow = new google.maps.InfoWindow({
    content: punaGraph,
  });

  const hamakuaWindow = new google.maps.InfoWindow({
    content: punaGraph,
  });
  const kohalaWindow = new google.maps.InfoWindow({
    content: punaGraph,
  });

  const kauWindow = new google.maps.InfoWindow({
    content: punaGraph,
  });

  const konaWindow = new google.maps.InfoWindow({
    content: punaGraph,
  });

  const islandWindow = new google.maps.InfoWindow({
    content: punaGraph,
  });

  // Ends Info Windows

  // Starts Markers

  // New google marker, positioned on puna coordinates
  const punaMarker = new google.maps.Marker({
    position: puna,
    map: map,
  });

  const hiloMarker = new google.maps.Marker({
    position: hilo,
    map: map,
  });

  const hamakuaMarker = new google.maps.Marker({
    position: hamakua,
    map: map,
  });

  const kohalaMarker = new google.maps.Marker({
    position: kohala,
    map: map,
  });

  const kauMarker = new google.maps.Marker({
    position: kau,
    map: map,
  });

  const konaMarker = new google.maps.Marker({
    position: kona,
    map: map,
  });

  const islandMarker = new google.maps.Marker({
    position: island,
    map: map,
  });

  // Ends Markers

  // Starts Marker Listeners

  punaMarker.addListener("click", () => {
    punaWindow.open({
      anchor: punaMarker,
      map,
      shouldFocus: false,
    });
  });

  hiloMarker.addListener("click", () => {
    hiloWindow.open({
      anchor: hiloMarker,
      map,
      shouldFocus: false,
    });
  });

  hamakuaMarker.addListener("click", () => {
    hamakuaWindow.open({
      anchor: hamakuaMarker,
      map,
      shouldFocus: false,
    });
  });

  kohalaMarker.addListener("click", () => {
    kohalaWindow.open({
      anchor: kohalaMarker,
      map,
      shouldFocus: false,
    });
  });

  kauMarker.addListener("click", () => {
    kauWindow.open({
      anchor: kauMarker,
      map,
      shouldFocus: false,
    });
  });

  konaMarker.addListener("click", () => {
    konaWindow.open({
      anchor: konaMarker,
      map,
      shouldFocus: false,
    });
  });

  islandMarker.addListener("click", () => {
    islandWindow.open({
      anchor: islandMarker,
      map,
      shouldFocus: false,
    });
  });
}
