// Initialize and add the map
function initMap() {
    // The location of Hilo
    const hilo = { lat: 19.7241, lng: 204.92 };
    const kona = { lat: 19.63, lng: 204 };
    const naalehu = { lat: 19.05, lng: 204.42 };
    
    
    
    // The map, centered at Hilo
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 9,
      center: hilo,
    });
    
    const contentString =
      '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Hilo</h1>' +
      '<div id="bodyContent">' +
      "<p><b>Hilo Real Estate Data</b>: <br/>" +
      "Year 1: Avg Price: 450k<br/>" +
      "Year 2: Avg Price: 570k<br/>" +    
      "Year 3: Avg Price: 674k<br/>" +
      "Year 4: Avg Price: 938k<br/>" +
      "Year 5: Avg Price: 1m.</p><br/>" +
      "</div>" +
      "</div>";
      
      const contentString2 =
      '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Kona</h1>' +
      '<div id="bodyContent">' +
      "<p><b>Kona Real Estate Data</b>: <br/>" +
      "Year 1: Avg Price: 450k<br/>" +
      "Year 2: Avg Price: 570k<br/>" +    
      "Year 3: Avg Price: 674k<br/>" +
      "Year 4: Avg Price: 938k<br/>" +
      "Year 5: Avg Price: 1m.</p><br/>" +
      "</div>" +
      "</div>";
  
    const infowindow = new google.maps.InfoWindow({
      content: contentString,
    });
    
     const infowindow2 = new google.maps.InfoWindow({
      content: contentString2,
    });
    
    // The marker, positioned on big island
    const marker = new google.maps.Marker({
      position: hilo,
      map: map,
    });
    
    const marker2 = new google.maps.Marker({
      position: kona,
      map: map,
    });
    
    const marker3 = new google.maps.Marker({
      position: naalehu,
      map: map,
    });
    
    marker.addListener("click", () => {
      infowindow.open({
        anchor: marker,
        map,
        shouldFocus: false,
      });
    });
    
    marker2.addListener("click", () => {
      infowindow2.open({
        anchor: marker2,
        map,
        shouldFocus: false,
      });
    });
    
    marker3.addListener("click", () => {
      infowindow2.open({
        anchor: marker3,
        map,
        shouldFocus: false,
      });
    });
  }
