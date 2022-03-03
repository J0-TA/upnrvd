import React, { useState } from 'react';
import { Badge, Card, CardActions, CardContent, CardMedia, Chip, Collapse, IconButton, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const MovieCard = ({ movie, idx }) => {
    const { title, year, director, duration, genre, rate } = movie;
    const [ expanded, setExpanded ] = useState(false);

    const handleExpandClick = () => setExpanded(!expanded);
    const handleEditClick = () => window.alert('Edit'); 
    const handleDeleteClick = () => window.alert('Delete');
        
    return (
        <Badge badgeContent={rate} color="success">
            <Card sx={{ width: 450, cursor:'pointer'}} onClick={handleExpandClick}>              
                <CardMedia 
                    component='img'
                    height='250'
                    image={`https://picsum.photos/450?random=${idx}`}
                    alt='movie poster fake'
                />
                <CardContent>
                    <Typography variant="h5" component="div" color="primary">
                        {title}
                    </Typography>
                </CardContent>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {`${director} (${year}). ${duration}`}
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
                            <IconButton aria-label="edit movie" onClick={handleEditClick}>
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
    ) 
}

export default MovieCard;