import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import LandingPage  from './LandingPage.jsx';

test('Deberia contener el texto "Pokefinder"', () => {
    render(<LandingPage />, { wrapper: MemoryRouter })

    expect(screen.getByText('Pokefinder'));
})

test('Deberia tener una imagen', () => {
    render(<LandingPage />, { wrapper: MemoryRouter })

    expect(screen.getByRole('img'));
})

test('Deberia tener una imagen con un alt "toPokemons"', () => {
    render(<LandingPage />, { wrapper: MemoryRouter })

    expect(screen.getByAltText('toPokemons'));
})