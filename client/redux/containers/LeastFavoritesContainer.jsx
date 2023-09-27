// This component contains a variable amount of "Favorite" components.
// It accesses the data stored in state about favorites, saves that in a variable,
// and passes said data to each child as a prop. 

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import LeastFavorite from '../components/LeastFavorite.jsx';
import { Container, Typography, Grid, Paper } from '@mui/material';
// import { removeLeastFavorite } from '../reducers/leastFavoritesSlice.js';

const LeastFavorites = () => {
    const leastFavorites = useSelector((state) => state.leastFavorites);
    const handleRemove = (id) => {
        dispatch(removeLeastFavorite({ id }));
    };
    // const dispatch = useDispatch();
    const renderedLeastFavorites = leastFavorites.map((leastFavorite, index) => (
        <Grid item xs={12} key={index}>
            <LeastFavorite data={leastFavorite} onRemove={handleRemove}/>
        </Grid>
    ))

    const dispatch = useDispatch();


    return (
        <Paper sx={{
            padding: '1rem',
            backgroundColor: 'var(--steel-blue)',
            maxHeight: '100vh',
            overflowY: 'auto',
            borderRadius: 2, p: 3,
            elevation: 3,
            marginTop: '10px',
            marginRight: '10px'
        }}>
            <Typography
                variant="h4"
                component="div"
                sx={{ 
                    color: 'var(--off-yellow)', 
                    mb: 2, 
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', 
                    textAlign: 'center' 
                    }}
                    >
                Least Favorite Tennis Courts
            </Typography>
            <Grid container spacing={3} direction="column">
                {renderedLeastFavorites}
            </Grid>
        </Paper>
    );
}

export default LeastFavorites;