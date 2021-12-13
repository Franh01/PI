import { useState } from 'react';
import s from './PokemonFiltered.module.css';
import * as allImages from '../../img/pokeImages'
import { useDispatch, useSelector } from 'react-redux';
import defaultImg from '../../img/questionMark.png';
import NavBar from '../navBar/NavBar';
import { useNavigate, useParams } from 'react-router-dom';
import { getPokemons } from '../../redux/actions/pokemon';
import Error from '../error404/Error';

export default function PokemonFiltered() {
    const dispatch = useDispatch();
    const params = useParams();
    const pokeUrl = params.pokemonName;
    const navigate = useNavigate();
    const [color, setColor] = useState('#808080'); 
    const [typeImg, setTypeImg] = useState('');
    const [typeImg1, setTypeImg1] = useState('');
    const pokemons = useSelector((data) => data.pokemonReducer.pokemons);
    console.log(pokemons)
    const pokemonsFiltered = useSelector((data) => data.pokemonReducer.pokemonFiltered);

    if (pokemons === null) {
        return (
            <div>
                <Error/>
            </div>
        )
    }

    if (pokemons.length === 0) {
        dispatch(getPokemons(pokeUrl))
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }
    
    if (pokemons === null) {
        navigate('/pokemons')
        alert('El pokemon ingresado no se encuentra')

        return (
            <div>
                <Error/>
            </div>
        )
    } else {
        
        let pokemonFiltrado;
        if (pokemons !== null && pokemons.length) {
            pokemonFiltrado = pokemons.find(p => p.name === pokemonsFiltered);
        } else {
            pokemonFiltrado = pokemons;
        }
        const type = pokemonFiltrado.tipos.map(p => p.name)
        const name = pokemonFiltrado.name
        const img = pokemonFiltrado.imgUrl
        console.log(pokemonFiltrado)
        
        const bugC = '#3c9950';
        const darkC = '#040707';
        const dragonC = '#6fa8dc';
        const electricC = '#e2e32b';
        const fairyC = '#ff3e81';
        const fightingC = '#994025';
        const fireC = '#FF5403';
        const flyingC = '#ffe9e9';
        const ghostC = '#5731b9';
        const grassC = '#27cb50';
        const groundC = '#a8702d';
        const iceC = '#bee0ff';
        const normalC = '#ca98a6';
        const poisonC = '#6E3CBC';
        const psychicC = '#ff36ac';
        const rockC = '#744700';
        const steelC = '#5abdcc';
        const waterC = '#516BEB';
    
        
            if (type[0] === 'poison' && color !== poisonC) {
                setColor(poisonC);
                setTypeImg(allImages.default.poison)
            } else if (type[0] === 'bug' && color !== bugC) {
                setColor(bugC);
                setTypeImg(allImages.default.bug)
            } else if (type[0] === 'water' && color !== waterC) {
                setColor(waterC);
                setTypeImg(allImages.default.water)
            } else if (type[0] === 'grass' && color !== grassC) {
                setColor(grassC);
                setTypeImg(allImages.default.grass)
            } else if (type[0] === 'fire' && color !== fireC) {
                setColor(fireC);
                setTypeImg(allImages.default.fire)
            } else if (type[0] === 'fairy' && color !== fairyC) {
                setColor(fairyC);
                setTypeImg(allImages.default.fairy)
            } else if (type[0] === 'normal' && color !== normalC) {
                setColor(normalC);
                setTypeImg(allImages.default.normal)
            } else if (type[0] === 'electric' && color !== electricC) {
                setColor(electricC);
                setTypeImg(allImages.default.electric)
            } else if (type[0] === 'ground' && color !== groundC) {
                setColor(groundC);
                setTypeImg(allImages.default.ground)
            } else if (type[0] === 'flying' && color !== flyingC) {
                setColor(flyingC);
                setTypeImg(allImages.default.flying)
            } else if (type[0] === 'dark' && color !== darkC) {
                setColor(darkC);
                setTypeImg(allImages.default.dark)
            } else if (type[0] === 'dragon' && color !== dragonC) {
                setColor(dragonC);
                setTypeImg(allImages.default.dragon)
            } else if (type[0] === 'fighting' && color !== fightingC) {
                setColor(fightingC);
                setTypeImg(allImages.default.fighting)
            } else if (type[0] === 'ghost' && color !== ghostC) {
                setColor(ghostC);
                setTypeImg(allImages.default.ghost)
            } else if (type[0] === 'ice' && color !== iceC) {
                setColor(iceC);
                setTypeImg(allImages.default.flying)
            } else if (type[0] === 'psychic' && color !== psychicC) {
                setColor(psychicC);
                setTypeImg(allImages.default.psychic)
            } else if (type[0] === 'rock' && color !== rockC) {
                setColor(rockC);
                setTypeImg(allImages.default.rock)
            } else if (type[0] === 'steel' && color !== steelC) {
                setColor(steelC);
                setTypeImg(allImages.default.steel)
        }    
            if (type[1] === 'poison' && typeImg1 !== allImages.default.poison) {
                setTypeImg1(allImages.default.poison)
            } else if (type[1] === 'bug' && typeImg1 !== allImages.default.bug) {
                setTypeImg1(allImages.default.bug)
            } else if (type[1] === 'water' && typeImg1 !== allImages.default.water) {
                setTypeImg1(allImages.default.water)
            } else if (type[1] === 'grass' && typeImg1 !== allImages.default.grass) {
                setTypeImg1(allImages.default.grass)
            } else if (type[1] === 'fire' && typeImg1 !== allImages.default.fire) {
                setTypeImg1(allImages.default.fire)
            } else if (type[1] === 'fairy' && typeImg1 !== allImages.default.fairy) {
                setTypeImg1(allImages.default.fairy)
            } else if (type[1] === 'normal' && typeImg1 !== allImages.default.normal) {
                setTypeImg1(allImages.default.normal)
            } else if (type[1] === 'electric' && typeImg1 !== allImages.default.electric) {
                setTypeImg1(allImages.default.electric)
            } else if (type[1] === 'ground' && typeImg1 !== allImages.default.ground) {
                setTypeImg1(allImages.default.ground)
            } else if (type[1] === 'flying' && typeImg1 !== allImages.default.flying) {
                setTypeImg1(allImages.default.flying)
            } else if (type[1] === 'dark' && typeImg1 !== allImages.default.dark) {
                setTypeImg1(allImages.default.dark)
            } else if (type[1] === 'dragon' && typeImg1 !== allImages.default.dragon) {
                setTypeImg1(allImages.default.dragon)
            } else if (type[1] === 'fighting' && typeImg1 !== allImages.default.fighting) {
                setTypeImg1(allImages.default.fighting)
            } else if (type[1] === 'ghost' && typeImg1 !== allImages.default.ghost) {
                setTypeImg1(allImages.default.ghost)
            } else if (type[1] === 'ice' && typeImg1 !== allImages.default.ice) {
                setTypeImg1(allImages.default.ice)
            } else if (type[1] === 'psychic' && typeImg1 !== allImages.default.psychic) {
                setTypeImg1(allImages.default.psychic)
            } else if (type[1] === 'rock' && typeImg1 !== allImages.default.rock) {
                setTypeImg1(allImages.default.rock)
            } else if (type[1] === 'steel' && typeImg1 !== allImages.default.steel) {
                setTypeImg1(allImages.default.steel)
            }
        
        let upperName = name.toUpperCase().slice(0, 1) + name.slice(1, name.length);
        
        function addDefaultImg(e){
            e.target.src = defaultImg;
        }
    
        return ( 
            
            
            <div className={s.realMain}>
                <NavBar/>
                <div className={s.divMain}>
                    <div className={s.card} style={
                        {
                            background: `${color}`,
                            background: `linear-gradient(149deg, ${color} 36%, #747474 100%)`,
                            border: '5px solid',
                            borderImageSlice: '1',
                            borderWidth: '10px',
                            borderImageSource: `radial-gradient(circle, #ffffff 75%, #ffffff 100%)`
                        }}>
                        <div>
                            <div className={s.nameContainer}>
                                <h2 style={{fontSize: '30px'}}>{upperName}</h2>
                            </div>
    
                            <div className={s.imgContainer}>
                                {img?<img className={s.image} src={img} alt={name} onError={(e) => addDefaultImg(e)}/>:<img className={s.defaultImg} src={defaultImg} alt={name} />}
    
                                    <div className={s.dimensionesText}>
                                        <h3>Dimensiones:</h3>
                                        <h4>Altura: {pokemonFiltrado.height}</h4>
                                        <h4>Peso: {pokemonFiltrado.weight}</h4>                
                                    </div>
                                
    
                                    <div className={s.atributosText}>
                                        <h3>Atributos:</h3>
                                        <h4>Vida: {pokemonFiltrado.hp}</h4>
                                        <h4>Ataque: {pokemonFiltrado.strength}</h4>
                                        <h4>Defensa: {pokemonFiltrado.defense}</h4>
                                        <h4>Velocidad: {pokemonFiltrado.speed}</h4>
                                </div>
                                <div></div>
                                <div></div>
                            </div>
    
                            <div className={s.typeContainer}>
                                {
                                    type.length === 1 ?
                                        <div className={s.activador}>   
                                            <div className={s.toolTip}>
                                                <h4>{`${type[0]}`}</h4>
                                            </div>
                                            <div>
                                                <img className={s.typeImg} src={typeImg} alt={`${type[0]} type`} />
                                            </div>
                                        </div>
                                        :
                                        <div className={s.typesContainer}>
                                            <div className={s.activador}>
                                                <div className={s.toolTip}>
                                                    <h4>{`${type[0]}`}</h4>
                                                </div>
                                                <div>
                                                    <img className={s.typeImg} src={typeImg} alt={`${type[0]} type`} />
                                                </div>
                                            </div>

                                            <div className={s.activador}>
                                                <div className={s.toolTip}>
                                                    <h4>{`${type[1]}`}</h4>
                                                </div>

                                                <div>
                                                    <img className={s.typeImg} src={typeImg1} alt={`${type[1]} type`} />
                                                </div>
                                            </div>
                                        </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};