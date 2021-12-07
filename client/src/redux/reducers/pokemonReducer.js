import { GET_POKEMONS } from '../actions/actionTypes';

const initialState = {    
    pokemons: []
};

const postsReducer = (state = initialState, action) => {
    const { payload, type } = action;
    switch (type) {
        case GET_POKEMONS:
            return {
                ...state,
                pokemons: payload
            }
        default:
            return state;
    }
}

export default postsReducer;