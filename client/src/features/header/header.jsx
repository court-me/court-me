import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Paper from '@mui/material/Paper';


const Header = () => {

  return (
    <div>
       <Paper sx={{
          padding: '1rem',
          backgroundColor: 'var(--steel-blue)',
          maxHeight: '100vh',
          overflowY: 'auto',
          borderRadius: 2, p: 3 ,
          elevation: 3,
          marginTop: '10px',
        }}>
            <Typography 
                variant="h4" 
                component="div" 
                sx={{ color: 'var(--off-yellow)', mb: 2, textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', textAlign: 'center' }}
            >
               🎾 Easy Court
            </Typography>

        </Paper>
    </div>
  );
};

export default Header;
