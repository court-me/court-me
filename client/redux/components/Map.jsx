import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// Removed Loader import
import { loadMap, setGoogleMapInstance } from '../reducers/mapSlice';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

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
    <Grid item xs={12}>
    <Paper id="map" style={{width: '100%', height:'50vh', marginTop: '10px', marginLeft: '10px'}} elevation={3}></Paper>
    </Grid>
  );
}

export default Map;
