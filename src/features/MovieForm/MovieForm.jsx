import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Autocomplete, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";
import { genresList } from "../../consts/autocompleteOptions";
import { movieAdded, movieUpdated } from "../Catalog/CatatalogSlice";

const MovieForm = ({ open, handleClose, movie}) => {   
    const dispatch = useDispatch();

    const [ error, setError ] = useState(null);
    const [formData, setFormData] = useState({
        title: movie ? movie.title : "",
        year: movie ? movie.year : "",
        director: movie ? movie.director : "",
        duration: movie ? movie.duration : "",
        genre: movie ? movie.genre : [],
        rate: movie ? movie.rate : "",
    });
    const formHeader = {
        formTitle: movie ? "Edit Movie" : "Add movie",
        formContext: movie 
            ? 'Please, change the incorrect data and click on "Save"'
            : 'To include a new movie, please fill the following form and we will try to include it in Upovod™️ as soon as posible.'
    };
    const handleInputChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        setFormData({...formData, [field]: value});
    };
    const handleSave = () => {
        if (formData.title && formData.year && formData.director && formData.genre) {
            movie ? dispatch(movieUpdated(formData)) : dispatch(movieAdded(formData))
            handleClose();
        } else {
            setError("Fill in all fields");
        };        
    };
    
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle color="primary">{formHeader.formTitle}</DialogTitle>
            <DialogContent>
                <DialogContentText>{formHeader.formContext}</DialogContentText>
                <TextField
                    sx={{hover: ""}}
                    margin="dense"
                    id="title"
                    name="title"
                    label="Title"
                    type="text"
                    value={formData.title}
                    onChange={handleInputChange}
                    fullWidth
                    error={error !== null}
                    helperText={movie ? "You can't change movie's title" : error}
                    disabled={movie !== undefined}
                    variant="standard" />
                <TextField
                    margin="dense"
                    value={formData.director}
                    onChange={handleInputChange}
                    id="director"
                    name="director"
                    label="Director"
                    type="text"
                    fullWidth
                    error={error !== null}
                    helperText={error}
                    variant="standard" />
                <TextField
                    margin="dense"
                    value={formData.duration}
                    onChange={handleInputChange}
                    id="duration"
                    name="duration"
                    label="Duration"
                    placeholder="xh xxmin"
                    type="text"
                    fullWidth
                    error={error !== null}
                    helperText={error}
                    variant="standard" />
                <TextField
                    margin="dense"
                    value={formData.rate}
                    onChange={handleInputChange}
                    id="rate"
                    name="rate"
                    label="Rate"
                    placeholder="0.00 - 10.00"
                    type="text"
                    fullWidth
                    error={error !== null}
                    helperText={error}
                    variant="standard" />
                <Autocomplete
                    multiple
                    id="genre"
                    name="genre"
                    options={genresList}
                    defaultValue={formData.genre}
                    value={formData.genre}
                    onChange={(event, newValue) => setFormData({...formData, genre: newValue})}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            variant="standard"
                            label="Genres"
                            error={error !== null}
                            helperText={error}
                        />
                    )}
                />
                <TextField
                    margin="dense"
                    value={formData.year}
                    onChange={handleInputChange}
                    id="year"
                    name="year"
                    label="Year"
                    type="number"
                    error={error !== null}
                    helperText={error}
                    variant="standard" />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleSave}>Save</Button>
            </DialogActions>
        </Dialog>
    );
}

export default MovieForm;