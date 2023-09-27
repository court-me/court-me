import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SearchForm from '../components/SearchForm'
import Grid from '@mui/material/Grid';

const SearchFormContainer = () => {
  return (
    <Grid item xs={12}>

      <Grid container justifyContent="center">

        <Grid item xs={12} sm={8} md={6}>
          
          <SearchForm />

        </Grid>
        
      </Grid>

    </Grid>
      
    );
}

export default SearchFormContainer;