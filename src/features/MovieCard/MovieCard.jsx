import React from 'react';
import { Badge, Card, CardActions, CardContent, CardMedia, Chip, IconButton, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
const MovieCard = ({ movie, idx }) => {
    const { title, year, director, duration, genre, rate } = movie;
    
    return (
        <Badge badgeContent={rate} color="secondary">
            <Card sx={{ width: 275, height: 500}}>
                <CardMedia 
                    component='img'
                    height='200'
                    image={`https://picsum.photos/200/300?random=${idx}`}
                    alt='movie poster fake'
                />
                <CardContent>
                    <Typography variant="h5" component="div" color="primary">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {`${director} (${year})`}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Duration: {duration}
                    </Typography>                    
                    {genre.map((genre, idx) => <Chip size="small" label={genre} key={`${genre}${idx}`} color='secondary' />)}
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="edit movie">
                        <EditIcon />
                    </IconButton>
                    <IconButton aria-label="delete movie">
                        <DeleteIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </Badge>
    ) 
}

export default MovieCard;