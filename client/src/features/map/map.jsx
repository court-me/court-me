import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// Removed Loader import
import { loadMap } from './mapSlice';

const Map = () => {
  const dispatch = useDispatch();
  // Removed apiKey and version from useSelector
  const { center, zoom } = useSelector((state) => state.map);

  useEffect(() => {
    dispatch(loadMap()); // Dispatch the thunk action
  }, [dispatch]);  // Dependency array

  useEffect(() => {
    if (center && zoom) {
      // Removed Loader initialization
      const google = window.google;
      new google.maps.Map(document.getElementById('map'), {
        center,
        zoom
      });
    }
  }, [center, zoom]); // Removed apiKey and version from the dependency array

  return (
    <div id="map" style={{width: '400px', height:'400px'}}></div>
  );
}

export default Map;
