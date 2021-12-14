import s from './Paginado.module.css';

export default function Paginado() {
    return (
        <div className={s.mainContainer}>
            <div className={s.buttonsContainer}>
                <button className={s.buttons}>1</button>
                <button className={s.buttons}>2</button>
                <button className={s.buttons}>3</button>
                <button className={s.buttons}>4</button>
                <button className={s.buttons}>5</button>
                <button className={s.buttons}>6</button>
            </div>
        </div>
    )
}