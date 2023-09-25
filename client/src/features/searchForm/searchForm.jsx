import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToResults } from '../results/resultsSlice.js';
import { Grid, TextField, Button, Container } from '@mui/material';

const searchForm= (props) => {
    const dispatch = useDispatch();

    const dummyResult = {
        name: 'dummy',
        address: 'dummy road',
        city: 'dumb city',
        state: 'dumb york',
        zip: 'dumb',
    }

    let onHandleSearch = () => dispatch( 
        addToResults({
            name: dummyResult.name,
            address: dummyResult.address,
            city: dummyResult.city,
            state: dummyResult.state,
            zip: dummyResult.zip,
        })
    );

    return (
      <Container>
        <Grid container spacing={1} justifyContent="center" alignItems="center">
          <Grid item xs={10} sm={5}>
            <TextField 
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