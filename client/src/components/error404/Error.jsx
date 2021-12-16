import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deletePokemonState, getPokemons } from '../../redux/actions/pokemon';
import s from './Error.module.css';


export default function Error() {
    const dispatch = useDispatch();
    const pokemons = useSelector((state)=>state.pokemonReducer.pokemons)
    useEffect(() => {
        dispatch(deletePokemonState())
        dispatch(getPokemons(''))
    }, [])
    return (
        <div className={s.mainContainer}>
            <h1 className={s.errorText}>Error 404</h1>
            <h3 className={s.errorPar}>La pagina a la que estas intentando acceder no existe</h3>
            <Link to='/pokemons'><button className={s.backButton}>Volver?</button></Link>
        </div>
    )
}