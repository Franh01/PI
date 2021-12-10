import { useState } from 'react';
import s from './PokemonCard.module.css';
import * as allImages from '../../img/pokeImages'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getPokemonByName } from '../../redux/actions/pokemon';

export default function PokemonCard({ name, img, type }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
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
    let upperName = name.toUpperCase().slice(0, 1) + name.slice(1, name.length);
    let upperType = type[0].toUpperCase().slice(0, 1) + type[0].slice(1, type[0].length);

    function handleOnClick() {
        dispatch(getPokemonByName(name));
        setTimeout(() => {
            navigate(`/pokemons/${name}`)
        }, 200);
    }

    return (
        <div onClick={()=>handleOnClick()}>
            {img ?                
                    <div>
                        <div className={s.card} style={
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
                                    <img className={s.image} src={img} alt={name}/>
                                </div>

                                <div className={s.typeContainer}>
                                        <h3>{upperType}</h3>
                                        <div>
                                            <img className={s.typeImg} src={typeImg} alt="typeImg"/>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                :
                    <div>
                        <div className={s.card} style={
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
                                    
                                </div>

                                <div className={s.typeContainer}>
                                    <h3>{upperType}</h3>
                                    <img className={s.typeImg} src={typeImg} alt="typeImg"/>
                                </div>
                            </div>
                        </div>
                    </div>}
                </div>
    )
};