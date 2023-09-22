import React, { useState, useEffect } from 'react';
import { Loader } from "@googlemaps/js-api-loader"


const App = () => {
  
  const [map, setMap] = useState([])

  useEffect(() => {
    const loader = new Loader({
      apiKey: '',
      version: 'weekly',
    });

    loader.load().then(() => {
      const google = window.google; // Reference to the global google object
      const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
      setMap(map); // Set the map in your component state
    });
  }, []);


  return (
  <div id="mainContainer">
    <div id="map" style={{width: '400px', height:'400px'}}>
    </div>
  </div>
)};

export default App;
