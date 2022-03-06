import React, { useState } from 'react';
import { Badge, Card, CardActions, CardContent, CardMedia, Chip, Collapse, IconButton, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';

import MovieForm from '../MovieForm/MovieForm';
import { movieDeleted } from '../Catalog/CatatalogSlice';

const MovieCard = ({ movie, idx }) => {
    const { title, year, director, duration, genre, rate } = movie;
    const [ expanded, setExpanded ] = useState(false);
    const [ open, setOpen ] = useState(false);
    const dispatch = useDispatch();

    const handleExpandClick = () => setExpanded(!expanded);
    const handleDeleteClick = () => dispatch(movieDeleted(movie));
    const handleOpenForm = () => setOpen(true);
    const handleCloseForm = () => setOpen(false);
        
    return (
        <>
            <Badge badgeContent={rate} color="success">
                <Card sx={{ width: 450, cursor:'pointer'}} onClick={handleExpandClick} component="article">              
                    <CardMedia 
                        component='img'
                        height='250'
                        image={`https://picsum.photos/450?random=${idx}`}
                        alt='movie poster fake'
                    />
                    <CardContent>
                        <Typography variant="h5" component="h1" color="primary">
                            {title}
                        </Typography>
                    </CardContent>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                {`Director: ${director}`}
                            </Typography>                        
                            <Typography variant="body2" color="text.secondary">
                                {`Year: ${year}`}
                            </Typography>                        
                            <Typography variant="body2" color="text.secondary">
                                {`Duration: ${duration}`}
                            </Typography>                        
                            {genre.map((genre, idx) => (
                                <Chip 
                                    sx={{m: 1}} 
                                    size="small" 
                                    label={genre} 
                                    key={`${genre}${idx}`} 
                                    color='secondary' 
                                />))}
                            <CardActions disableSpacing>
                                <IconButton aria-label="edit movie" onClick={handleOpenForm}>
                                    <EditIcon />
                                </IconButton>
                                <IconButton aria-label="delete movie" onClick={handleDeleteClick}>
                                    <DeleteIcon />
                                </IconButton>
                            </CardActions>
                        </CardContent>                 
                    </Collapse>
                </Card>
            </Badge>
        {open && <MovieForm open={open} handleClose={handleCloseForm} movie={movie}/>}
        </>
    ) 
}

export default MovieCard;