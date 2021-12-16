import { useState } from 'react';
import s from './PokemonFiltered.module.css';
import * as allImages from '../../img/pokeImages'
import { useDispatch, useSelector } from 'react-redux';
import defaultImg from '../../img/question2.png';
import NavBar from '../navBar/NavBar';
import { useNavigate, useParams } from 'react-router-dom';
import { deletePokemonState, getPokemons } from '../../redux/actions/pokemon';
import Error from '../error404/Error';
import Loading from '../loading/Loading';
import { useEffect } from 'react';

export default function PokemonFiltered() {
    const dispatch = useDispatch();
    const params = useParams();
    const pokeUrl = params.pokemonName;
    const [color, setColor] = useState('#808080');
    const [typeImg, setTypeImg] = useState('');
    const [typeImg1, setTypeImg1] = useState('');
    useEffect(() => {
        dispatch(getPokemons(pokeUrl))
    }, [])
    let pokemons = useSelector((data) => data.pokemonReducer.pokemons);
    
    console.log(pokemons)
    if (pokemons === null) {
        return (
            <div>
                <Error/>
            </div>
        )
    }
    if (pokemons.length > 1) {
        pokemons = pokemons.find(p => p.name === pokeUrl)
    }


    
    if (pokemons.length === 0) {
        return (
            <div>
                <Loading/>
            </div>
        )
    } else {
        const type = pokemons.tipos.map(p => p.name);

        const name = pokemons.name;
        const img = pokemons.imgUrl;
        
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

        const variables = [bugC, darkC, dragonC, electricC, fairyC, fightingC, fireC, flyingC, ghostC, grassC, groundC, iceC, normalC, poisonC, psychicC, rockC, steelC, waterC];
        const nombres = allImages.default.map(p => p.name.slice(14).split('.')[0]);//!solo nombres
        const variablesImg = allImages.default.map(p => p.name);
        
        for (let i = 0; i < nombres.length; i++) {
            if (type[0] === nombres[i] && color !== variables[i]) {
                setColor(variables[i])
                setTypeImg(variablesImg[i])
            }
        }

        if (type[1]) {
            for (let i = 0; i < nombres.length; i++) {
                if (type[1] === nombres[i] && typeImg1 !== variablesImg[i]) {
                    setTypeImg1(variablesImg[i])
                }
                
            }
        }
        
        
        let upperName = name.toUpperCase().slice(0, 1) + name.slice(1, name.length);
        
        function addDefaultImg(e) {
            e.target.src = defaultImg;
        }
    
        return (
            <div className={s.realMain}>
                <NavBar />
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
                                <div className={s.idContainer}>
                                    <h5>Id: {pokemons.id}</h5>
                                </div>
                                <h2 style={{ fontSize: '30px' }}>{upperName}</h2>
                            </div>
    
                            <div className={s.imgContainer}>
                                {img ? <img className={s.image} src={img} alt={name} onError={(e) => addDefaultImg(e)} /> : <img className={s.defaultImg} src={defaultImg} alt={name} />}
    
                                <div className={s.dimensionesText}>
                                    <h3>Dimensiones:</h3>
                                    <h4>Altura: {pokemons.height}</h4>
                                    <h4>Peso: {pokemons.weight}</h4>
                                </div>
                                
    
                                <div className={s.atributosText}>
                                    <h3>Atributos:</h3>
                                    <h4>Vida: {pokemons.hp}</h4>
                                    <h4>Ataque: {pokemons.strength}</h4>
                                    <h4>Defensa: {pokemons.defense}</h4>
                                    <h4>Velocidad: {pokemons.speed}</h4>
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