import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Catalog from './Catalog';

test('Catalog view should have a list of movies', () => {
    render(<Catalog />);
    const moviesList = screen.getByRole('list');
    const movieCard = screen.getAllByRole('listitem')[0];
    expect(moviesList).toBeInTheDocument();
    expect(moviesList).toContainElement(movieCard);
});
