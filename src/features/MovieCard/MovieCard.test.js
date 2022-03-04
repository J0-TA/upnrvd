import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import MovieCard from './MovieCard';

const movie = {
      "title": "The Shawshank Redemption",
      "year": 1994,
      "director": "Frank Darabont",
      "duration": "2h 22min",
      "genre": [
        "Crime",
        "Drama"
      ],
      "rate": "9.3"
};

describe('Movie card info', () => {
    beforeEach(() => render(<MovieCard movie={movie}  idx={0} />));
    it('should display movie title', () => expect(screen.getByRole('heading')).toBeInTheDocument());
    it('should display movie poster', () => expect(screen.getByRole('img')).toBeInTheDocument());
    it('should display movie rating', () => expect(screen.getByText(/^[+-]?([0-9]+\.?[0-9]*|\.[0-9]+)$/)).toBeInTheDocument());
    it('should show movie information at click event', () => {
        fireEvent.click(screen.getByRole('article'));
        expect(screen.getByText(/director:/i)).toBeInTheDocument(); 
        expect(screen.getByText(/year: ?(19|20|21)[0-9]{2}/i)).toBeInTheDocument(); 
        expect(screen.getByText(/duration: [0-9]h [0-9][0-9]?min/i)).toBeInTheDocument(); 
        screen.debug()
    });
});

describe('Movie card actions', () => { 
    it('should edit the movie info', () => {
        
    });

    it('should delete the movie info', () => {
        
    });    
 });
