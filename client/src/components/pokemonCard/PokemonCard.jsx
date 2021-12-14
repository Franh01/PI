import { useState } from 'react';
import s from './PokemonCard.module.css';
import * as allImages from '../../img/pokeImages'
import { useNavigate } from 'react-router-dom';
import defaultImg from '../../img/questionMark.png';

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
            setTypeImg(allImages.default.flying)
        } else if (type[0] === 'dragon' && color !== dragonC) {
            setColor(dragonC);
            setTypeImg(allImages.default.flying)
        } else if (type[0] === 'fighting' && color !== fightingC) {
            setColor(fightingC);
            setTypeImg(allImages.default.fighting)
        } else if (type[0] === 'ghost' && color !== ghostC) {
            setColor(ghostC);
            setTypeImg(allImages.default.flying)
        } else if (type[0] === 'ice' && color !== iceC) {
            setColor(iceC);
            setTypeImg(allImages.default.flying)
        } else if (type[0] === 'psychic' && color !== psychicC) {
            setColor(psychicC);
            setTypeImg(allImages.default.flying)
        } else if (type[0] === 'rock' && color !== rockC) {
            setColor(rockC);
            setTypeImg(allImages.default.flying)
        } else if (type[0] === 'steel' && color !== steelC) {
            setColor(steelC);
            setTypeImg(allImages.default.flying)
    }
    
    if (type[1]) {
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
            setTypeImg1(allImages.default.flying)
        } else if (type[1] === 'dragon' && typeImg1 !== allImages.default.dragon) {
            setTypeImg1(allImages.default.flying)
        } else if (type[1] === 'fighting' && typeImg1 !== allImages.default.fighting) {
            setTypeImg1(allImages.default.fighting)
        } else if (type[1] === 'ghost' && typeImg1 !== allImages.default.ghost) {
            setTypeImg1(allImages.default.flying)
        } else if (type[1] === 'ice' && typeImg1 !== allImages.default.ice) {
            setTypeImg1(allImages.default.flying)
        } else if (type[1] === 'psychic' && typeImg1 !== allImages.default.psychic) {
            setTypeImg1(allImages.default.flying)
        } else if (type[1] === 'rock' && typeImg1 !== allImages.default.rock) {
            setTypeImg1(allImages.default.flying)
        } else if (type[1] === 'steel' && typeImg1 !== allImages.default.steel) {
            setTypeImg1(allImages.default.steel)
        }
    }

    let upperName = name.toUpperCase().slice(0, 1) + name.slice(1, name.length);
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