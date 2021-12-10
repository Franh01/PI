import { GET_POKEMONS, GET_POKEMON_BY_NAME, GET_TYPES } from '../actions/actionTypes';

const initialState = {    
    pokemons: [],
    types: [],
    pokemonFiltered: 'none'
};

const postsReducer = (state = initialState, action) => {
    const { payload, type } = action;
    switch (type) {
        case GET_POKEMONS:
            return {
                ...state,
                pokemons: payload
            }
        case GET_TYPES:
            return {
                ...state,
                types: payload
            }
        case GET_POKEMON_BY_NAME:
            return {
                ...state,
                pokemonFiltered: payload
            }
        default:
            return state;
    }
}

export default postsReducer;