import { Link } from 'react-router-dom';
import s from './Error.module.css';

export default function Error() {
    return (
        <div className={s.mainContainer}>
            <h1 className={s.errorText}>Error 404</h1>
            <h3 className={s.errorPar}>La pagina a la que estas intentando acceder no existe</h3>
            <Link to='/pokemons'><button className={s.backButton}>Volver?</button></Link>
        </div>
    )
}