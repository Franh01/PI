import s from './Pokemons.module.css';
import PokemonCard from '../pokemonCard/PokemonCard';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getPokemons } from '../../redux/actions/pokemon';
import NavBar from '../navBar/NavBar';
import Paginado from '../paginado/Paginado';

export default function Pokemons() {
    const dispatch = useDispatch()
    const pokemons = useSelector((state) => state.pokemonReducer.pokemons);
    let pokemonsFiltered = pokemons;
    const typeFilter = useSelector((state) => state.pokemonReducer.sortBy);
    console.log(typeFilter)
    if (typeFilter === 'todos') {
        pokemonsFiltered = pokemons
    } else {
        pokemonsFiltered = pokemons.filter(t => t.tipos.find(p => p.name === typeFilter))
    }
    

    useEffect(() => {
        dispatch(getPokemons(''))
    }, [])
    
    if (pokemons === null) {
        return (
            <div>
                <NavBar/>
                <h3 style={{marginTop: '5%', marginLeft: '2%', color: 'black'}}>El pokemon ingresado no se encuentra</h3>
            </div>
        )
    }
    if (pokemonsFiltered.length === 0) {
        return (
            <div>
                <NavBar/>
                <h3 style={{marginTop: '5%', marginLeft: '2%', color: 'black'}}>No se encuentran pokemons con el tipo seleccionado</h3>
            </div>
        )
    }
    if (pokemons !== null && pokemons.length === undefined) {
        return (
            <div>
                <div className={s.navBarContainer}>
                    <NavBar/>
                </div>
                <div className={s.paginadoContainer}>
                    <Paginado/>
                </div>

                <div className={s.container}>
                    <PokemonCard
                        key={pokemons.id}
                        name={pokemons.name}
                        img={pokemons.imgUrl}
                        type={pokemons.tipos.map(p=>p.name)}
                    />
                </div>
            </div>
        )
    } else if (pokemons !== null && pokemons.length) {
        return (
            <div>
                <div className={s.navBarContainer}>
                    <NavBar/>
                </div>
                <div className={s.paginadoContainer}>
                    <Paginado/>
                </div>
                <div className={s.container}>
                    {pokemonsFiltered.map(p => (
                        <PokemonCard
                            key={p.id}
                            name={p.name}
                            img={p.imgUrl}
                            type={p.tipos.map(p => p.name)}
                        />
                    ))}
                </div>
            </div>
        )
    } else if (pokemons === null) {
        return (
            <div>
                <div className={s.navBarContainer}>
                    <NavBar/>
                </div>
                <div className={s.paginadoContainer}>
                    <Paginado/>
                </div>
                <div className={s.container}>
                    <div className={s.warning}>El pokemon ingresado no se encuentra</div>
                </div>
            </div>
        )
        
    }
}