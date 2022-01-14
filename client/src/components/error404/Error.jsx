import { useNavigate } from 'react-router-dom';
import s from './Error.module.css';

export default function Error() {
    const navigate = useNavigate();
    function handleOnClick() {
        navigate('/pokemons')
    }
    return (
        <div className={s.mainContainer}>
            <h1 className={s.errorText}>Error 404</h1>
            <h3 className={s.errorPar}>La pagina a la que estas intentando acceder no existe</h3>
            <button className={s.backButton} onClick={()=>handleOnClick()}>Volver?</button>
        </div>
    )
}