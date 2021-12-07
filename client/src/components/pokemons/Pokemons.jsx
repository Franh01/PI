import s from './Pokemons.module.css';
import PokemonCard from '../pokemonCard/PokemonCard';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getPokemons } from '../../redux/actions/pokemon';

export default function Pokemons() {
    const dispatch = useDispatch()
    const pokemons = useSelector((state) => state.pokemonReducer.pokemons);
    console.log(pokemons)
    useEffect(() => {
        dispatch(getPokemons())
    },[dispatch])
    // setTimeout(() => {
    //     pokemons.length === 0 ? dispatch(getPokemons()) : console.log('array vacio')
    // }, 1000);
    // console.log(pokemons[0].name)
    return (
        <div className={s.container}>
            {pokemons.length === 0
                ?
                <h1>Cargando...</h1>
                :
                pokemons.map(p => (
                    
                <PokemonCard
                    key={p.id}
                    name={p.name}
                    img={p.img}
                />
            )) }       
        </div>
    )
}