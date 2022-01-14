import s from './Pokemons.module.css';
import PokemonCard from '../pokemonCard/PokemonCard';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getPokemons, getTypes } from '../../redux/actions/pokemon';
import NavBar from '../navBar/NavBar';
import Loading from '../loading/Loading'

export default function Pokemons() {
    const dispatch = useDispatch()
    const pokemons = useSelector((state) => state.pokemonReducer.pokemons);
    let pokemonsFiltered = pokemons;
    const typeFilter = useSelector((state) => state.pokemonReducer.sortBy);
    const userFilter = useSelector((state) => state.pokemonReducer.sortByCreatedBy);
    

    //* PAGINADO
    const [page, setPage] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    
    
    function nextPage() {
        if (pokemons.length > page + 12 && typeFilter === 'todos') {
            setPage(page + 12)
            setCurrentPage(currentPage + 1)
        }
    }
    function prevPage() {
        if (page > 0) {
            setPage(page - 12)
            setCurrentPage(currentPage - 1)
        }
    }
    useEffect(() => {
        dispatch(getTypes(''))
    }, [])
    useEffect(() => {
        setPage(0)
        setCurrentPage(1)
    }, [userFilter])
    
    useEffect(() => {
        dispatch(getPokemons(''))
    }, [])
    if (pokemonsFiltered !== null) {
        if (pokemonsFiltered.length === 0) {
            return (
                <div>
                    <Loading/>
                </div>
            )
        }
    }
    //* FILTRO DE CREADO O NO POR USER
    if (pokemons !== null && pokemons.length > 1) {
        if (userFilter === 'Todos') {
            pokemonsFiltered = pokemonsFiltered
        } else if (userFilter === 'Usuario') {
            pokemonsFiltered = pokemons.filter(u => u.id.length > 2)
        } else if (userFilter === 'API') {
            pokemonsFiltered = pokemonsFiltered.filter(u => u.id.length <= 2)
        }
        
    }
    if (pokemons !== null && pokemons.length) {
        if (typeFilter === 'todos') {
            if (page === 0) {
                pokemonsFiltered = pokemonsFiltered.slice(page, page + 9);
            } else {
                pokemonsFiltered = pokemonsFiltered.slice(page, page + 12);
            }
        } else {
            pokemonsFiltered = pokemonsFiltered.filter(t => t.tipos.find(p => p.name === typeFilter))
        }
    }
    
    
    if (pokemons === null) {
        return (
            <div>
                <NavBar/>
                <h3 className={s.notFound}style={{marginTop: '5%', marginLeft: '2%', color: 'black'}}>El pokemon ingresado no se encuentra</h3>
            </div>
        )
    }
    if (pokemonsFiltered.length === 0) {
        return (
            <div style={{fontFamily: 'Poppins'}}>
                <NavBar/>
                <h3 style={{marginTop: '5%', marginLeft: '2%', color: 'black'}}>No se encuentran pokemons con el tipo seleccionado</h3>
            </div>
        )
    }
    if (pokemons !== null && pokemons.length === undefined) {
        return (
            <div>
                <div className={s.navBarContainer}>
                    <NavBar/>
                </div>

                <div className={s.container}>
                    <PokemonCard
                        key={pokemons.id}
                        name={pokemons.name}
                        img={pokemons.imgUrl}
                        type={pokemons.tipos.map(p=>p.name)}
                    />
                </div>
            </div>
        )
    } else if (pokemons !== null && pokemons.length) {
        return (
            <div>
                <div className={s.navBarContainer}>
                    <NavBar/>
                </div>
                {pokemonsFiltered.length >= 9 || page > 9 ? <div className={s.paginadoContainer}>
                    <button className={s.paginadoButton} onClick={() => prevPage()}>{`<`}</button>
                    <div>
                        <h5
                            style={{
                                color: 'black',
                                userSelect: 'none'
                            }}>
                            {currentPage}
                        </h5>
                    </div>
                    <button className={s.paginadoButton} onClick={()=>nextPage()}>{`>`}</button>
                </div> : <span style={{display: 'none'}}/>}
                <div className={s.container}>
                    {pokemonsFiltered.map(p => (
                        <PokemonCard
                            key={p.id}
                            name={p.name}
                            img={p.imgUrl}
                            type={p.tipos.map(p => p.name)}
                        />
                    ))}
                </div>
            </div>
        )
    }
}