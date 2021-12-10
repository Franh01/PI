//Actions
import { CREATE_POKEMON, GET_POKEMONS, GET_TYPES, GET_POKEMON_BY_NAME } from './actionTypes';
import axios from 'axios';

export const getPokemons = () => {
    return (dispatch) => {
            axios.get('http://localhost:3001/pokemons')
            .then(r => r.data)
            .then(data => {
                dispatch({
                    type: GET_POKEMONS,
                    payload: data
                })
            })
    }
}

export const getPokemonByName = (data) => {
    return {
        type: GET_POKEMON_BY_NAME,
        payload: data
    }
}

export const getTypes = () => {
    return (dispatch) => {
            axios.get('http://localhost:3001/tipos')
            .then(r => r.data)
            .then(data => {
                dispatch({
                    type: GET_TYPES,
                    payload: data
                })
            })
    }
}

export const createPokemon = ({name, hp, strength, defense, speed, height, weight, imgUrl, type}) => {
    return (dispatch) => {
        axios.post('http://localhost:3001/pokemons', { name, hp, strength, defense, speed, height, weight, imgUrl, type })
            .then(() => {
                dispatch({
                    type: CREATE_POKEMON
                })
            })
            .then(() => {
                axios.get('http://localhost:3001/pokemons')
            })
    }
}
