import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// Removed Loader import
import { loadMap, setGoogleMapInstance } from './mapSlice';
import Paper from '@mui/material/Paper';

const Map = () => {
  const dispatch = useDispatch();
  // Removed apiKey and version from useSelector
  const { center, zoom } = useSelector((state) => state.map);
  const mapRef = React.useRef(null);

  useEffect(() => {
    dispatch(loadMap()); // Dispatch the thunk action

    if (center && zoom) {
      // Removed Loader initialization
      const google = window.google;
      if(mapRef.current === null) {
        mapRef.current = new google.maps.Map(document.getElementById('map'), {
          center, 
          zoom
        });
        dispatch(setGoogleMapInstance(mapRef.current));
      } else {
        mapRef.current.setCenter(center);
        mapRef.current.setZoom(zoom);
      }
    }
  }, [center, zoom]); // Removed apiKey and version from the dependency array

  return (
    <Paper id="map" style={{width: '685px', height:'400px', marginTop: '10px', marginLeft: '10px'}} elevation={3}></Paper>
  );
}

export default Map;
