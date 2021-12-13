import { GET_POKEMONS, GET_TYPES } from '../actions/actionTypes';

const initialState = {    
    pokemons: [],
    types: [],
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
        default:
            return state;
    }
}

export default postsReducer;