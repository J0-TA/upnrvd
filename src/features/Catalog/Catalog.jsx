import React from 'react';
import { Grid } from '@mui/material';
import { moviesDB } from '../../const/moviesDB';

import MovieCard from '../MovieCard/MovieCard';


const Catalog = () => {
    return (
            <Grid container justifyContent='space-around'>
                {moviesDB.map((movie, idx) => <MovieCard movie={movie} idx={idx + 1} key={`${movie.title}${movie.year}`}/>)}
            </Grid>
    )
};

export default Catalog;