import { useState } from 'react';
import s from './CreatePokemon.module.css';

export default function CreatePokemon() {
    const [name, setName] = useState('');
    // const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    const [stats, setStats] = useState({
        vida: '',
        fuerza: '',
        defensa: '',
        velocidad: '',
        altura: '',
        peso: ''
    });
    console.log(stats)
    return (
        <div className={s.container}>
            <div className={s.formContainer}>
                <form className={s.form}>
                    <div>
                        <h4 className={s.titles}>Nombre:</h4>
                        <input className={s.inputs} type='text' placeholder='' required value={name} onChange={e => {
                            setName(e.target.value)
                        }}></input>
                    </div>
                    <div>
                        <h4 className={s.titles}>Tipo/s:</h4>
                        <select className={s.fonting}>
                            <option disabled defaultValue>Tipos</option> {/* conectal al state */}
                            <option>Bug</option>
                            <option>Dark</option>
                            <option>Dragon</option>
                            <option>Electric</option>
                            <option>Fairy</option>
                            <option>Fighting</option>
                            <option>Fire</option>
                            <option>Flying</option>
                            <option>Ghost</option>
                            <option>Grass</option>
                            <option>Ground</option>
                            <option>Ice</option>
                            <option>Normal</option>
                            <option>Poison</option>
                            <option>Psychic</option>
                            <option>Rock</option>
                            <option>Steel</option>
                            <option>Water</option>
                        </select>
                    </div>
                    <div>
                        <h4 className={s.titles}>Imagen:</h4>
                        <input className={s.inputs} type='text' placeholder='' value={url} onChange={e => {
                            setUrl(e.target.value)
                        }}></input>
                    </div>
                    <div>
                        <h4 className={s.titles}>Id:</h4>
                        <input className={s.inputs} type='text' placeholder='' value={url} onChange={e => {
                            setUrl(e.target.value)
                        }}></input>
                    </div>
                    <div>
                        <h4 className={s.titles}>Estadísticas:</h4>
                        <input className={s.inputs} type='text' placeholder='Vida...' value={stats.vida} onChange={e => {
                            setStats({...stats, ['vida']: e.target.value})
                        }}></input>
                        <input className={s.inputs} type='text' placeholder='Fuerza...' value={stats.fuerza} onChange={e => {
                            setStats({...stats, ['fuerza']: e.target.value})
                        }}></input>
                        <input className={s.inputs} type='text' placeholder='Defensa...' value={stats.defensa} onChange={e => {
                            setStats({...stats, ['defensa']: e.target.value})
                        }}></input>
                        <input className={s.inputs} type='text' placeholder='Velocidad...' value={stats.velocidad} onChange={e => {
                            setStats({...stats, ['velocidad']: e.target.value})
                        }}></input>
                        <input className={s.inputs} type='text' placeholder='Altura...' value={stats.altura} onChange={e => {
                            setStats({...stats, ['altura']: e.target.value})
                        }}></input>
                        <input className={s.inputs} type='text' placeholder='Peso...' value={stats.peso} onChange={e => {
                            setStats({...stats, ['peso']: e.target.value})
                        }}></input>
                    </div>
                    <div className={s.formBtnContainer}>
                        <button className={s.formBtn} type='submit' /* onClick={handleOnClick} */>Crear</button>
                    </div>
                </form>
            </div>
        </div>
    )
}