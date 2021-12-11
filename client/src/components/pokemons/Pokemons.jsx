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
        dispatch(getPokemons(''))
    }, [])
    console.log(pokemons)
    return (
        <div>
            <div className={s.navBarContainer}>
                <NavBar/>
            </div>
            
            <div className={s.container}>
                {pokemons !== null && pokemons.length === undefined ?
                    <PokemonCard
                        key={pokemons.id}
                        name={pokemons.name}
                        img={pokemons.imgUrl}
                        type={pokemons.tipos.map(p=>p.name)}
                    /> : <span style={{display: 'none'}} />}
                {pokemons !== null && pokemons.length
                    ?
                    pokemons.map(p => (
                        
                        <PokemonCard
                            key={p.id}
                            name={p.name}
                            img={p.imgUrl}
                            type={p.tipos.map(p => p.name)}
                        />
                    ))
                    : <span style={{ display: 'none' }} />}
                {pokemons === null ?
                    <div className={s.warning}>El pokemon ingresado no se encuentra</div>
                    :
                    <span style={{display: 'none'}} />}
                {/* {!pokemons.length && pokemons.length > 1 ? //!mp funciona
                    <div className={s.loading}>
                        <h1>Cargando...</h1>
                        <img className={s.pokegif} src={gif} alt="pokegif" />
                    </div>
                :
                    <span style={{ display: 'none' }} />
                } */}
                    
            </div>    
        </div>
    )
}