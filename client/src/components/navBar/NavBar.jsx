import s from './NavBar.module.css';
import { Link } from 'react-router-dom';
import homeImg from '../../img/pixelspoke.png'
import searchIco from '../../img/searchIcon.png'

export default function NavBar() {
    return (
        <div className={s.navBarContainer}>
            <div className={s.homeAndSearch}>
                <div className={s.navComp}><Link to='/'><img className={s.homeImg} src={homeImg} alt='homebtn' /></Link></div>
                
                <div className={s.navComp}>
                    <input type="text" className={s.searchBar} placeholder='Ej: Pikachu...' />
                    <button className={s.searchButton}><img className={s.searchIcon} src={searchIco} alt="search ico" /></button>
                </div>
            </div>
            
            <div className={s.navComp}><Link to='createpokemon'><button className={s.fonting}>Add Pokemon</button></Link></div>

            <div className={s.filters}>
                <div className={s.navComp}>
                    <select className={s.fonting}>
                        <option defaultValue value='Conectar a use state'>Todos</option>
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
                    <button className={s.fonting}>Aplicar</button>
                </div>

                <div className={s.navComp}>
                    <select className={s.fonting}>
                        <option defaultValue>---</option>
                        <option>Nombre</option>
                        <option>Fuerza</option>
                    </select>
                    <select className={s.fonting}>
                        <option defaultValue>---</option>
                        <option>ASC</option>
                        <option>DESC</option>
                    </select>
                    <button className={s.fonting}>Aplicar</button>
                </div>
            </div>
            
        </div>
    )
}