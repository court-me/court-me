import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToResults, clearResults } from '../results/resultsSlice.js';
import { Grid, TextField, Button, Container } from '@mui/material';

// import { response } from '../../../../server/server.js';

const searchForm = (props) => {
    const dispatch = useDispatch();

    let onHandleSearch = () => {
        //----
        dispatch(clearResults());


        const inputVal = document.getElementById("inputSearch").value;

        fetch("api/find/", {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                "zip": inputVal
            })
        })
            .then(response => {
                return response.json()
                    .then(response => {
                        // dispatch(addToResults(''))
                        response.forEach((el) => {
                            dispatch(addToResults({
                                name: el.name,
                                address: el.address,
                                rating: el.rating
                            }))
                        });
                    }
                    )

            })
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