//Actions
import { GET_POKEMONS } from './actionTypes';
import axios from 'axios';

export const getPokemons = () => {
    return (dispatch) => {
            axios.get('http://localhost:3001/')
            .then(r => r.data)
            .then(data => {
                dispatch({
                    type: GET_POKEMONS,
                    payload: data
                })
            })
    }
}
// export const getPokemons = () => {
//     return (dispatch) => {
//         axios.get('http://localhost:3001/')
//             .then(r => r.data)
//             .then(data => {
//                 dispatch({
//                     type: GET_POKEMONS,
//                     payload: data
//                 })
//             })
//     }
// }
