import s from './LandingPage.module.css';
import { Link } from 'react-router-dom';
import pokeballImg from '../../img/pokeballreddot.png'


export default function Pokemons() {
    return (
        <div className={s.container}>
            <div>
                <h1 className={s.title}>Pokefinder</h1>
            </div>
            <Link to='/pokemons'><img className={s.pokeImg}  src={pokeballImg} alt='toPokemons'/></Link>
        </div>
    )
};