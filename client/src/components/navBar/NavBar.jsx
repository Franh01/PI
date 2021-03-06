import s from './NavBar.module.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import homeImg from '../../img/pixelspoke.png'
import searchIco from '../../img/searchIcon.png'
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons, getPokemonsFiltered, getTypes, sortByCreatedBy, sortByType } from '../../redux/actions/pokemon';
import { useState } from 'react';

export default function NavBar() {
    const tipos = useSelector((state) => state.pokemonReducer.types.map(t => t.name));
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch()
    if (tipos.length === 0) {
        dispatch(getTypes())
    };
    
    const [name, setName] = useState('');
    function handleOnSearch() {
        if (location.pathname.length > 10) {
            navigate(`/pokemons/${name}`)
            dispatch(getPokemons(name));
        } else {
            dispatch(getPokemons(name));
        }
    }
    function homeBtn() {
        setName('');
        dispatch(getPokemons(''));
        setType('todos');
        dispatch(sortByType('todos'));
        setFilter('---');
        setOrderBy('---');
        if (location.pathname === '/pokemons') {
            window.location.reload()
        }
    }
    //* FILTRO DE TIPO
    const [type, setType] = useState('todos');
    const [createdByUser, setCreatedByUser] = useState('Todos');
    function typeFilterButton() {
        dispatch(sortByCreatedBy(createdByUser))
        dispatch(sortByType(type))
        // console.log(pokemons.filter(t => t.tipos.find(p=>p.name === type)))
        
    }

    //* FILTRO DE ORDEN
    const [filter, setFilter] = useState('');
    const [orderBy, setOrderBy] = useState('');
    function orderFilterButton() {
        if (filter === '---' || orderBy === '---') {
            dispatch(getPokemons(''))
        } else {
            dispatch(getPokemonsFiltered(filter, orderBy))
        }
    }

    return (
        <div className={s.navBarContainer}>
            <div className={s.homeAndSearch}>
                <div className={s.navComp}><Link to='/pokemons'><img className={s.homeImg} src={homeImg} alt='homebtn' onClick={()=>homeBtn()}/></Link></div>
                
                <div className={s.navComp}>
                    <input type="text" className={s.searchBar} placeholder='Ej: pikachu...' value={name} onChange={e=>{setName(e.target.value.toLowerCase())}}/>
                    <button className={s.searchButton} onClick={()=>handleOnSearch()}><img className={s.searchIcon} src={searchIco} alt="search ico"/></button>
                </div>
            </div>
            
            <div className={s.navComp}><Link to='/pokemons/createpokemon'><button className={s.createPokemon}>Crear Pokemon</button></Link></div>

            <div className={s.filters}>
                <div className={s.navComp}>
                    <select className={s.fontingIzq} value={createdByUser} onChange={(e) => setCreatedByUser(e.target.value)}>User, database
                        <option>Todos</option>
                        <option>Usuario</option>
                        <option>API</option>
                    </select>

                    <select className={s.fonting} value={type} onChange={(e) => setType(e.target.value)}>
                        <option defaultValue>Todos</option>
                        {tipos.map(t => <option value={t} key={t}>{t.charAt(0).toUpperCase()+t.slice(1)}</option>)}
                    </select>
                    <button className={s.filterButtons} onClick={() => typeFilterButton()}>Aplicar</button>
                </div>

                <div className={s.navComp}>
                    <select className={s.fontingIzq} value={filter} onChange={(e)=> setFilter(e.target.value)}>
                        <option defaultValue>---</option>
                        <option value='name'>Nombre</option>
                        <option value='strength'>Fuerza</option>
                    </select>
                    <select className={s.fonting}  value={orderBy} onChange={(e)=> setOrderBy(e.target.value)}>
                        <option defaultValue>---</option>
                        <option>ASC</option>
                        <option>DESC</option>
                    </select>
                    <button className={s.filterButtons} onClick={() => orderFilterButton()}>Aplicar</button>
                </div>
            </div>
            
        </div>
    )
}