import React from 'react';
import { render } from '@testing-library/react';
import LadingPage from './LandingPage.jsx';
// import App from '../../App';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('Landing page test', () => {
    const initialState = { output: 10 };
    const mockStore = configureStore();
    let store;

    it('Deberia contener el texto "Pokefinder"', () => {
        store = mockStore(initialState);
        const { getByText } = render(
            <Provider store={store}>
                <LadingPage />
            </Provider>
        );

        expect(getByText('Pokefinder')).not.toBeNull();
    });
});

// test('Deberia tener una imagen', () => {
//     render(<LandingPage />, { wrapper: MemoryRouter })

//     expect(screen.getByRole('img')).toBeInTheDocument();
// })