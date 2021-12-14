import { GET_POKEMONS, GET_POKEMONS_FILTERED, GET_TYPES, SORT_BY_TYPE } from '../actions/actionTypes';

const initialState = {    
    pokemons: [],
    types: [],
    sortBy: 'todos'
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
        case GET_POKEMONS_FILTERED:
            return {
                ...state,
                pokemons: payload
            }
        case SORT_BY_TYPE:
            return {
                ...state,
                sortBy: payload
            }
        default:
            return state;
    }
}

export default postsReducer;