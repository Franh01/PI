import s from './NavBar.module.css';
import { Link } from 'react-router-dom';
import homeImg from '../../img/pixelspoke.png'
import searchIco from '../../img/searchIcon.png'

export default function NavBar() {
    return (
        <div className={s.navBarContainer}>
            <div className={s.homeAndSearch}>
                <div className={s.navComp}><Link to='/'><img className={s.homeImg} src={homeImg} alt='home image' /></Link></div>
                
                <div className={s.navComp}>
                    <input type="text" className={s.searchBar} placeholder='Ej: Pikachu...' />
                    <button className={s.searchButton}><img className={s.searchIcon} src={searchIco} alt="search ico" /></button>
                </div>
            </div>
            
            <div className={s.navComp}>Add Pokemon</div>

            <div className={s.filters}>
                <div className={s.navComp}>Filtro1</div>
                <div className={s.navComp}>Filtro2</div>
            </div>
            
        </div>
    )
}