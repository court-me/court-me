import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToResults, clearResults } from '../reducers/resultsSlice.js';
import { Grid, TextField, Button, Container } from '@mui/material';
import { setMap } from '../reducers/mapSlice.js';
import { loadMap } from '../reducers/mapSlice.js';

// import { response } from '../../../../server/server.js';

const searchForm = (props) => {
    const dispatch = useDispatch();
    const google = window.google;
    const googleMapInstance = useSelector((state) => state.map.googleMapInstance);

    let onHandleSearch = () => {
        //----
        dispatch(clearResults());

        const inputVal = document.getElementById("inputSearch").value;

        console.log('inputVal', inputVal);
        fetch("api/find/", {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                "zip": inputVal
            })
        })
            .then(response => response.json())
            .then(response => {
                console.log('RESPONSE LOOK HERE', response);
                const currentMap = googleMapInstance;
                let newLat = response[0].location.lat
                let newLng = response[0].location.lng
                let mapPosition = { lat: newLat, lng: newLng }
                dispatch(setMap({ center: mapPosition, zoom: 12 }));
                // invoke load map, passing in the lat/long from inputVal
                response.forEach((el) => {
                    let position = { lat: el.location.lat, lng: el.location.lng }
                    new google.maps.Marker({
                        position: position, 
                        map: currentMap,
                        title: el.name
                    })
                    dispatch(addToResults({
                        name: el.name,
                        address: el.address,
                        rating: el.rating
                    }))
                });

            }
            )
    }
    return (
        <Container>
            <Grid container spacing={1} justifyContent="center" alignItems="center">
                <Grid item xs={10} sm={5}>
                    <TextField
                        id="inputSearch"
                        label="Zip Code"
                        variant="outlined"
                        fullWidth
                        InputProps={{
                            style: {
                                backgroundColor: 'white',
                                borderColor: '#395E66',
                                color: '#395E66'
                            }
                        }}
                        InputLabelProps={{
                            style: {
                                color: '#395E66',
                            }
                        }}
                    />
                </Grid>
                <Grid item xs={2} sm={1}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={onHandleSearch}
                        fullWidth
                        sx={{ backgroundColor: '#CCFF00', color: '#395E66', padding: '12px 12px' }}
                    >
                        Search
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
}

export default searchForm;