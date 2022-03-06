import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, Grid, List, Typography } from '@mui/material';

import MovieCard from '../MovieCard/MovieCard';
import MovieForm from '../MovieForm/MovieForm';

const Catalog = () => {
    const [open, setOpen] = useState(false);
    const catalog = useSelector((state) => state.catalog);

    const handleOpenForm = () => setOpen(true);
    const handleCloseForm = () => setOpen(false);
    
    return (
        <Grid container display='flex' flexDirection='column' alignItems='center' justifyContent='space-around'>
            <Grid item margin={4}>
                <Typography variant="h3" component="h1" color="primary">UPOVOD™️</Typography>
            </Grid>
            <Grid item margin={4}>
                <Button sx={{ width: 450}} variant="contained" color="primary" onClick={handleOpenForm}>Click here to ask for a new movie</Button>
            </Grid>
            <List>
                {catalog.movies.map((movie, idx) => (
                    <Grid component="li" item margin={4} key={`${movie.title}${idx}`} >                   
                        <MovieCard movie={movie} idx={idx + 1} key={`${movie.title}${movie.year}`} />
                    </Grid>))
                }                    
            </List>
            {open && <MovieForm open={open} handleClose={handleCloseForm} />}
        </Grid>
    );
};

export default Catalog;


