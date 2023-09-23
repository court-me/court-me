import React, { useState, useEffect } from 'react';
import { Loader } from "@googlemaps/js-api-loader";


const App = () => {
  const [map, setMap] = useState([])
  console.log(process.env.REACT_APP_API_KEY, 'THIS IS THE PROCESS.ENV');

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.REACT_APP_API_KEY,
      // apiKey: "AIzaSyCG437myX-Wr9FKS4q_VZnsjMRD9uUTfGA",
      version: 'weekly',
    });

    loader.load().then(() => {
      const google = window.google; // Reference to the global google object
      const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 40.75202376741981, lng: -73.98375569685952 },
        zoom: 12,
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
