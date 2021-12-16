import { DELETE_POKEMON_STATE, GET_POKEMONS, GET_POKEMONS_FILTERED, GET_TYPES, SORT_BY_CREATED_BY, SORT_BY_TYPE } from '../actions/actionTypes';

const initialState = {    
    pokemons: [],
    types: [],
    sortBy: 'todos',
    sortByCreatedBy: 'Todos'
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
        case SORT_BY_CREATED_BY:
            return {
                ...state,
                sortByCreatedBy: payload
            }
        case DELETE_POKEMON_STATE:
            return {
                ...state,
                pokemons: payload
            }
        default:
            return state;
    }
}

export default postsReducer;