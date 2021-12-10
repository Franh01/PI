import { useState } from 'react';
import s from './PokemonCard.module.css';
import * as allImages from '../../img/pokeImages'
import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';

export default function PokemonCard({ name, img, type }) {
    const poisonc = '#6E3CBC';
    const bugc = '#3c9950';
    const waterc = '#516BEB';
    const grassc = '#27cb50';
    const firec = '#FF5403';
    const fairyc = '#961a45';
    const normalc = '#ca98a6';
    const electricc = '#e2e32b';
    const groundc = '#a8702d';
    const flyingc = '#ffe9e9';

    const [color, setColor] = useState('#808080');
    // let color2 = color

    // if (type[1] === 'poison' && color2 !== poisonc) {
    //     color2 = poisonc
    // } else if (type[1] === 'bug' && color2 !== bugc){
    //     color2 = bugc
    // } else if (type[1] === 'water' && color2 !== waterc){
    //     color2 = waterc
    // } else if (type[1] === 'grass' && color2 !== grassc){
    //     color2 = grassc
    // } else if (type[1] === 'fire' && color2 !== firec){
    //     color2 = firec
    // } else if (type[1] === 'fairy' && color2 !== fairyc){
    //     color2 = fairyc
    // } else if (type[1] === 'normal' && color2 !== normalc){
    //     color2 = normalc
    // } else if (type[1] === 'electric' && color2 !== electricc){
    //     color2 = electricc
    // } else if (type[1] === 'ground' && color2 !== groundc){
    //     color2 = groundc
    // } else if (type[1] === 'flying' && color2 !== flyingc){
    //     color2 = flyingc
    // }

    const [typeImg, setTypeImg] = useState('');
    // const [typeImg2, setTypeImg2] = useState('');
    
        if (type[0] === 'poison' && color !== poisonc) {
            setColor(poisonc);
            setTypeImg(allImages.default.poison)
        } else if (type[0] === 'bug' && color !== bugc) {
            setColor(bugc);
            setTypeImg(allImages.default.bug)
        } else if (type[0] === 'water' && color !== waterc) {
            setColor(waterc);
            setTypeImg(allImages.default.water)
        } else if (type[0] === 'grass' && color !== grassc) {
            setColor(grassc);
            setTypeImg(allImages.default.grass)
        } else if (type[0] === 'fire' && color !== firec) {
            setColor(firec);
            setTypeImg(allImages.default.fire)
        } else if (type[0] === 'fairy' && color !== fairyc) {
            setColor(fairyc);
            setTypeImg(allImages.default.fairy)
        } else if (type[0] === 'normal' && color !== normalc) {
            setColor(normalc);
            setTypeImg(allImages.default.normal)
        } else if (type[0] === 'electric' && color !== electricc) {
            setColor(electricc);
            setTypeImg(allImages.default.electric)
        } else if (type[0] === 'ground' && color !== groundc) {
            setColor(groundc);
            setTypeImg(allImages.default.ground)
        } else if (type[0] === 'flying' && color !== flyingc) {
            setColor(flyingc);
            setTypeImg(allImages.default.flying)
        }
    
    // if(type.length > 1) {
    //     if (type[0] === 'poison' && typeImg !== allImages.default.poison && type[1] === 'bug' && typeImg !== allImages.default.bug) {
    //         setTypeImg(allImages.default.poison)
    //         setTypeImg2(allImages.default.bug)
    //     } else if (type[0] === 'bug' && typeImg !== allImages.default.bug && type[1] === 'poison' && typeImg !== allImages.default.poison) {
    //         setTypeImg(allImages.default.bug)
    //         setTypeImg2(allImages.default.poison)
    //     } else if (type[0] === 'grass' && typeImg !== allImages.default.grass && type[1] === 'poison' && typeImg !== allImages.default.poison) {
    //         setTypeImg(allImages.default.grass)
    //         setTypeImg2(allImages.default.poison)
    //     } else if (type[0] === 'poison' && typeImg !== allImages.default.poison && type[1] === 'grass' && typeImg !== allImages.default.grass) {
    //         setTypeImg(allImages.default.poison)
    //         setTypeImg2(allImages.default.grass)
    //     } else if (type[0] === 'fire' && typeImg !== allImages.default.fire && type[1] === 'flying' && typeImg !== allImages.default.flying) {
    //         setTypeImg(allImages.default.fire)
    //         setTypeImg2(allImages.default.flying)
    //     } else if (type[0] === 'flying' && typeImg !== allImages.default.flying && type[1] === 'fire' && typeImg !== allImages.default.fire) {
    //         setTypeImg(allImages.default.flying)
    //         setTypeImg2(allImages.default.fire)
    //     } else if (type[0] === 'bug' && typeImg !== allImages.default.bug && type[1] === 'flying' && typeImg !== allImages.default.flying) {
    //         setTypeImg(allImages.default.bug)
    //         setTypeImg2(allImages.default.flying)
    //     } else if (type[0] === 'flying' && typeImg !== allImages.default.flying && type[1] === 'bug' && typeImg !== allImages.default.bug) {
    //         setTypeImg(allImages.default.flying)
    //         setTypeImg2(allImages.default.bug)
    //     }
    // }
    
    // let upperType = ''
    // if (type.length > 1) {
        //     let scnd = upperType = type[1].toUpperCase().slice(0, 1) + type[1].slice(1, type[1].length);
        //     upperType = type[0].toUpperCase().slice(0, 1) + type[0].slice(1, type[0].length) + ' & ' + scnd
        // } else {        
            // }
            // console.log(type)
    let upperName = name.toUpperCase().slice(0, 1) + name.slice(1, name.length);
    let upperType = type[0].toUpperCase().slice(0, 1) + type[0].slice(1, type[0].length);

    return (
            <Link style={{textDecoration: 'none', color: 'white'}} to={`/pokemons/${name}`}>
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
            </Link>
    )
};