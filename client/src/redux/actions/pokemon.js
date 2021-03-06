//Actions
import { CREATE_POKEMON, GET_POKEMONS, GET_TYPES, GET_POKEMONS_FILTERED, SORT_BY_TYPE, SORT_BY_CREATED_BY } from './actionTypes';
import axios from 'axios';

export const getPokemons = (value) => {
    return (dispatch) => {
            axios.get(`/pokemons?name=${value}`)
            .then(r => r.data)
            .then(data => {
                dispatch({
                    type: GET_POKEMONS,
                    payload: data
                })
            })
    }
}

export const getPokemonsFiltered = (filter, orderBy) => {
    console.log(filter, orderBy)
    return (dispatch) => {
            axios.get(`/pokemons`, {params: {filter, orderBy}})
            .then(r => r.data)
            .then(data => {
                dispatch({
                    type: GET_POKEMONS_FILTERED,
                    payload: data
                })
            })
    }
}


export const getTypes = () => {
    return (dispatch) => {
            axios.get('/types')
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
        axios.post('/pokemons', { name, hp, strength, defense, speed, height, weight, imgUrl, type })
            .then(() => {
                dispatch({
                    type: CREATE_POKEMON
                })
            })
            .then(() => {
                axios.get('/pokemons')
            })
    }
}

export const sortByType = (value) => {
    return {
        type: SORT_BY_TYPE,
        payload: value
    }
}

export const sortByCreatedBy = (value) => {
    return {
        type: SORT_BY_CREATED_BY,
        payload: value
    }
}