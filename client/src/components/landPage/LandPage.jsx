import s from './LandPage.module.css';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPokemons } from '../../redux/actions/pokemon';

export default function Pokemons(name) {
    const dispatch = useDispatch();
    function handleOnClick() {
        dispatch(getPokemons());
    }
    return (
        <div>
            <div>
                <h1>Pokemons</h1>
                <Link to='/pokemons'><button type="button" onClick={handleOnClick()}>Pokemons</button></Link>
            </div>
        </div>
    )
};