import React from 'react';
import { Grid } from '@mui/material';
import { moviesDB } from '../../const/moviesDB';

import MovieCard from '../MovieCard/MovieCard';


const Catalog = () => {
    return (
            <Grid container display='flex' flexDirection='column' alignItems='center' justifyContent='space-around'>
                {moviesDB.map((movie, idx) => (
                    <Grid item margin={4}>                   
                        <MovieCard movie={movie} idx={idx + 1} key={`${movie.title}${movie.year}`}/>
                    </Grid>))
                }                    
            </Grid>
    )
};

export default Catalog;


