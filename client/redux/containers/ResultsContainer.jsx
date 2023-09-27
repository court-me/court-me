import React from "react";
import { useSelector } from "react-redux";
import ResultsCard from '../components/ResultsCard.jsx';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography'

const Results = () => {

    const results = useSelector((state) => state.results);

    const renderedResults = results.map((result, index) => (
      <Grid item xs={12} sm={6} md={4} key={index}>
        <ResultsCard data={result} />
      </Grid>
    ))
    
    return (
        <Grid item xs={12}>
            {results.length > 0 && (
                <Paper elevation={3} >
                    <Container maxWidth="lg" sx={{ backgroundColor: '#152614', p: 2, }}>
                        <Typography 
                            variant="h4" 
                            component="div" 
                            sx={{ color: '#DFFD91', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                            Search Results
                        </Typography>
                        <hr></hr>
                        <Grid container spacing={3} id='resultsList'>
                            {renderedResults}
                        </Grid>
                    </Container>
                </Paper>
            )}
        </Grid>
    );
};


export default Results