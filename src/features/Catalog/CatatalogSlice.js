import { createSlice } from "@reduxjs/toolkit";
import { moviesDB } from "../../consts/moviesDB";

const initialState = {
    movies: moviesDB,
};

const catalogSlice = createSlice({
    name: "catalog",
    initialState,
    reducers: {
        movieAdded(state, action) {
            state.movies.unshift(action.payload);
        },
        movieDeleted(state, action) {
            const { title } = action.payload;
            const existingMovie = state.movies.find((movie) => movie.title === title);
            if (existingMovie) {
                state.movies = state.movies.filter((movie) => movie.title !== title);
            };
        },
        movieUpdated(state, action) {
            const { title, year, director, duration, genre, rate } = action.payload;
            const existingMovie = state.movies.find((movie) => movie.title === title);
            if (existingMovie) {
                existingMovie.title = title;
                existingMovie.year = year;
                existingMovie.director = director;
                existingMovie.duration = duration;
                existingMovie.genre = genre;
                existingMovie.rate = rate;
            };
        },
    },
});

export const { movieAdded, movieUpdated, movieDeleted } = catalogSlice.actions;

export default catalogSlice.reducer;