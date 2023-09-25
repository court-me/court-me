import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit"
import { Loader } from "@googlemaps/js-api-loader"

export const loadMap = createAsyncThunk(
    'map/loadMap', 
    async (_, { getState, dispatch }) => {
    const { center, zoom } = getState().map;
    if (!center && !zoom) {
      const loader = new Loader({
        apiKey: process.env.REACT_APP_API_KEY,
        version: 'weekly',
      });
  
      await loader.load().then(() => {
        const initialCenter = { lat: 40.75202376741981, lng: -73.98375569685952 }
        const initialZoom = 12;
        dispatch(setMap({ center: initialCenter, zoom: initialZoom }));
      });
    }
  });

const mapSlice = createSlice({
    name: 'map',
    initialState: {
        center: null,
        zoom: null,
    },
    reducers: {
        setMap: (state, action) => {
            state.center = action.payload.center;
            state.zoom = action.payload.zoom;
        },
        setGoogleMapInstance: (state, action) => {
          state.googleMapInstance = action.payload;
        },
    },
});

export const { setMap, setGoogleMapInstance } = mapSlice.actions;
export default mapSlice.reducer;
