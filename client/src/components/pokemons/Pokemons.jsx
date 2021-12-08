import s from './Pokemons.module.css';
import PokemonCard from '../pokemonCard/PokemonCard';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getPokemons } from '../../redux/actions/pokemon';
import NavBar from '../navBar/NavBar';
import gif from '../../img/loading.gif'

export default function Pokemons() {
    const dispatch = useDispatch()
    const pokemons = useSelector((state) => state.pokemonReducer.pokemons);

    useEffect(() => {
        dispatch(getPokemons())
    }, [])

    
    
    return (
        <div>
            <div className={s.navBarContainer}>
                <NavBar/>
            </div>
            
            <div className={s.container}>
                {pokemons.length === 0
                    ?<div className={s.loading}>
                        <h1>Cargando...</h1>
                        <img className={s.pokegif} src={gif} alt="pokegif" />
                    </div>
                    :
                    pokemons.map(p => (
                        
                        <PokemonCard
                        key={p.pokemonId}
                        name={p.name}
                        img={p.imgUrl}
                        type={p.type}
                    />
                    ))}
            </div>    
        </div>
    )
}