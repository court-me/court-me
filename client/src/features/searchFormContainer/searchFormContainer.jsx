import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SearchForm from '../searchForm/searchForm'
import Grid from '@mui/material/Grid';

const searchFormContainer = () => {

    return (
      <Grid item xs={12} sm={8} md={6}>
        <SearchForm />
      </Grid>
    );
}

export default searchFormContainer;