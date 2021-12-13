import s from './Loading.module.css';
import gif from '../../img/loading.gif';

export default function Loading() {
    return (
        <div className={s.loading}>
            <h1>Cargando...</h1>
            <img className={s.pokegif} src={gif} alt="pokegif" />
        </div>
    )
}