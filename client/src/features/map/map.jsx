import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// Removed Loader import
import { loadMap } from './mapSlice';
import Paper from '@mui/material/Paper';

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
    <Paper id="map" style={{width: '685px', height:'400px', marginTop: '10px', marginLeft: '10px'}} elevation={3}></Paper>
  );
}

export default Map;
