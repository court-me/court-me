import React from "react";
import { useDispatch } from 'react-redux';
import { addToFavorites } from '../reducers/favoritesSlice.js';
// import { addToLeastFavorites } from '../reducers/leastFavoritesSlice.js'
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ResultsCard = (props) => {
    const dispatch = useDispatch();

    // const actionAdd = { type: addToFavorites, payload: { /* ... */ } };
    // const actionDislike = { type: addToDislikes, payload: { /* ... */ } };
    let onHandleLike = () => dispatch(
        addToFavorites({
            name: props.data.name,
            address: props.data.address,
            rating: props.data.rating
        })
    );

    let onHandleDislike = () => dispatch(
        addToLeastFavorites({
            name: props.data.name,
            address: props.data.address,
            rating: props.data.rating
        })
    );
    return (
        <Card
            sx={{
                maxWidth: 400,
                padding: '16px',
                mb: 2,
                '&:hover': {
                    transform: 'scale(1.05)',
                    transition: 'transform .2s ease-in-out'
                },
                backgroundColor: '#32936F'
            }}
        >
            <Typography variant="h5" sx={{ color: '#DFFD91', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                {props.data.name}
            </Typography>
            <div style={{ marginTop: '10px', marginBottom: '10px' }}>
                <Button
                    variant="contained"
                    onClick={onHandleLike}
                    sx={{ backgroundColor: '#CCFF00', color: '#395E66', '&:hover': { backgroundColor: '#32936F' } }}
                >
                    Like
                </Button>
                <Button
                    variant="outlined"
                    onClick={onHandleDislike}
                    sx={{ borderColor: '#CCFF00', color: '#CCFF00', '&:hover': { borderColor: 'black', color: 'yellow' } }}
                // sx={{ borderColor: '#CCFF00', color: '#CCFF00', '&:hover': { borderColor: '#32936F', color: '#32936F' } }}
                >
                    Dislike
                </Button>
            </div>
            <div id='results' style={{ textAlign: 'left' }}>
                <Typography variant="body1" sx={{ color: '#DFFD91' }}>Address: {props.data.address}</Typography>
                <Typography variant="body1" sx={{ color: '#DFFD91' }}>Rating: {props.data.rating}</Typography>
            </div>
        </Card>
    );
};


export default ResultsCard;