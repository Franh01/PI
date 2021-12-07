import s from './LandPage.module.css';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPokemons } from '../../redux/actions/pokemon';
import pokeballImg from '../../img/pokeballreddot.png'


export default function Pokemons() {
    const dispatch = useDispatch();
    setTimeout(() => {
        dispatch(getPokemons())
    }, 3500);
    function handleOnClick() {
        dispatch(getPokemons());
    }
    return (
        <div className={s.container}>
            <div>
                <h1 className={s.title}>Pokefinder</h1>
            </div>
            <Link to='/pokemons'><img className={s.pokeImg}  src={pokeballImg} alt='toPokemons' onClick={handleOnClick()}/></Link>
        </div>
    )
};