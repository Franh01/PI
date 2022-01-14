import { useState } from 'react';
import s from './PokemonCard.module.css';
import * as allImages from '../../img/pokeImages'
import { useNavigate } from 'react-router-dom';
import defaultImg from '../../img/question2.png';

export default function PokemonCard({ name, img, type }) {
    const navigate = useNavigate();
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

    const [color, setColor] = useState('#808080');
    

    const [typeImg, setTypeImg] = useState('');
    const [typeImg1, setTypeImg1] = useState('');
    
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
    console.log(type)
    let upperType = type[0].toUpperCase().slice(0, 1) + type[0].slice(1, type[0].length);
    let upperType1 = '';
    if (type[1]) {
        upperType1 = type[1].toUpperCase().slice(0, 1) + type[1].slice(1, type[1].length);
    }

    function handleOnClick() {
        setTimeout(() => {
            navigate(`/pokemons/${name}`)
            
        }, 200);
    }
    function addDefaultImg(e){
        e.target.src = defaultImg;
    }
    if (!type[1]) {
        return (
            <div> 
                <div>
                    <div
                        onClick={() => handleOnClick()}
                        className={s.card}
                        style={
                        {
                            background: `radial-gradient(circle, ${color}7f 70%, ${color} 100%)`,
                            border: '5px solid',
                            borderImageSlice: '1',
                            borderWidth: '10px',
                            borderImageSource: `radial-gradient(circle, ${color}7f 75%, ${color} 100%)`
                        }}>
                        
                        <div className={s.content}>
                        
                            <div className={s.nameContainer}>
                                <h2>{upperName}</h2>                        
                            </div>
    
                            <div className={s.imgContainer}>
                                <img
                                    className={s.image}
                                    src={img} alt={name}
                                    onError={(e) => addDefaultImg(e)}
                                />
                            </div>
    
                            <div className={s.typeContainer}>
                                    <div className={s.typeAlign}>
                                        <h3>{upperType}</h3>
                                        <img className={s.typeImg} src={typeImg} alt="typeImg"/>
                                    </div>
                            </div>
    
                        </div>
                    </div>
                </div>
                    
            </div>
        )
    } else {
        return (
            <div> 
                <div>
                    <div
                        onClick={() => handleOnClick()}
                        className={s.card}
                        style={
                        {
                            background: `radial-gradient(circle, ${color}7f 70%, ${color} 100%)`,
                            border: '5px solid',
                            borderImageSlice: '1',
                            borderWidth: '10px',
                            borderImageSource: `radial-gradient(circle, ${color}7f 75%, ${color} 100%)`
                        }}>
                        
                        <div className={s.content}>
                        
                            <div className={s.nameContainer}>
                                <h2>{upperName}</h2>                        
                            </div>
    
                            <div className={s.imgContainer}>
                                <img
                                    className={s.image}
                                    src={img} alt={name}
                                    onError={(e) => addDefaultImg(e)}
                                />
                            </div>
    
                            <div className={s.typeContainer}>
                                <div className={s.typeAlign}>
                                    <h3>{upperType}</h3>
                                    <img className={s.typeImg} src={typeImg} alt="typeImg"/>
                                </div>

                                <div className={s.typeAlign}>
                                    <h3>{upperType1}</h3>
                                    <img className={s.typeImg} src={typeImg1} alt="typeImg"/>
                                </div>
                            </div>
    
                        </div>
                    </div>
                </div>
                    
            </div>
        )
    }
    
};