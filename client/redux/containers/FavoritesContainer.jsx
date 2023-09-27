// This component contains a variable amount of "Favorite" components.
// It accesses the data stored in state about favorites, saves that in a variable,
// and passes said data to each child as a prop. 

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Favorite from '../components/Favorite.jsx';
import { Container, Typography, Grid, Paper } from '@mui/material';
import { removeFavorite } from '../reducers/favoritesSlice.js';

const FavoritesContainer = () => {
    const favorites = useSelector((state) => state.favorites);
    const dispatch = useDispatch();
    const handleRemove = (id) => {
        dispatch(removeFavorite({ id }));
    };
    
    const renderedFavorites = favorites.map((favorite, index) => (
        <Grid item xs={12} key={index}>
            <Favorite data={favorite} onRemove={handleRemove}/>
        </Grid>
    ))

    return (
        
        <Grid item xs={12} md={6}> 
        
            <Grid container spacing={2}>

                <Grid item xs={6}>

                    <Paper sx={{
                        padding: '1rem',
                        backgroundColor: 'var(--steel-blue)',
                        maxHeight: '100vh',
                        overflowY: 'auto',
                        borderRadius: 2, p: 3 ,
                        elevation: 3,
                        marginTop: '10px',
                    }}
                    >

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

                            Favorite Tennis Courts
                            
                        </Typography>
                        
                        <Grid container spacing={3} direction="column">

                            {renderedFavorites}
                            
                        </Grid>

                    </Paper>

                </Grid>
                
            </Grid>
            
         </Grid>  
    );
}

export default FavoritesContainer;
