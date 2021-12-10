import s from './NavBar.module.css';
import { Link, useNavigate } from 'react-router-dom';
import homeImg from '../../img/pixelspoke.png'
import searchIco from '../../img/searchIcon.png'
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonByName, getTypes } from '../../redux/actions/pokemon';
import { useState } from 'react';

export default function NavBar() {
    const tipos = useSelector((state) => state.pokemonReducer.types.map(t => t.name));
    // const pokemonFiltrado = useSelector((state) => state.pokemonReducer.pokemonFiltered);
    // console.log(pokemonFiltrado);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    if (tipos.length === 0) {
        dispatch(getTypes())
    };
    let makeItem = function(x) {
        return <option key={x}>{x}</option>;
    };
    const [name, setName] = useState('');
    function handleOnSearch() {
        dispatch(getPokemonByName(name));
        navigate(`/pokemons/${name}`)
    }
    // const urlParam = window.location.href.toString().slice(31);
    // if (urlParam.length > 0 && pokemonFiltrado !== 'none') {
    //     dispatch(getPokemonByName(urlParam))
    // }
    return (
        <div className={s.navBarContainer}>
            <div className={s.homeAndSearch}>
                <div className={s.navComp}><Link to='/pokemons'><img className={s.homeImg} src={homeImg} alt='homebtn' /></Link></div>
                
                <div className={s.navComp}>
                    <input type="text" className={s.searchBar} placeholder='Ej: pikachu...' value={name} onChange={e=>{setName(e.target.value.toLowerCase())}}/>
                    <button className={s.searchButton}><img className={s.searchIcon} src={searchIco} alt="search ico" onClick={()=>handleOnSearch()}/></button>
                </div>
            </div>
            
            <div className={s.navComp}><Link to='/pokemons/createpokemon'><button className={s.fonting}>Crear Pokemon</button></Link></div>

            <div className={s.filters}>
                <div className={s.navComp}>
                    <select className={s.fonting}>
                        <option defaultValue>Todos</option>
                        {tipos.map(makeItem)}
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