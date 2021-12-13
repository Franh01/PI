import { Link } from 'react-router-dom';
import s from './Error.module.css';

export default function Error() {
    return (
        <div className={s.mainContainer}>
            <h1>Error 404</h1>
            <Link to='/pokemons'><button>Home</button></Link>
        </div>
    )
}