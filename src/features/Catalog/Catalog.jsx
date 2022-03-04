import React from 'react';
import { Grid, List, Typography } from '@mui/material';
import { moviesDB } from '../../const/moviesDB';

import MovieCard from '../MovieCard/MovieCard';


const Catalog = () => {
    return (
            <Grid container display='flex' flexDirection='column' alignItems='center' justifyContent='space-around'>
                <Grid item margin={4}>
                    <Typography variant="h4" component="h1" color="primary">Catalog</Typography>
                </Grid>
                <List>
                    {moviesDB.map((movie, idx) => (
                        <Grid component="li" item margin={4} key={`${movie.title}${idx}`}>                   
                            <MovieCard movie={movie} idx={idx + 1} key={`${movie.title}${movie.year}`}/>
                        </Grid>))
                    }                    
                </List>
            </Grid>
    )
};

export default Catalog;


