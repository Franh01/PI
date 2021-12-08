import { useState } from 'react';
import s from './PokemonCard.module.css';
import * as allImages from '../../img/pokeImages'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export default function PokemonCard({ name, img, type}) {
    const poisonc = '#6E3CBC'
    const bugc = '#3c9950'
    const waterc = '#516BEB'
    const grassc = '#27cb50'
    const firec = '#FF5403'
    const fairyc = '#961a45'
    const normalc = '#ca98a6'
    const electricc = '#e2e32b'
    const groundc = '#a8702d'

    const [color, setColor] = useState('gray');
    const [typeImg, setTypeImg] = useState('');
    if (type === 'poison' && color !== poisonc) {
        setColor(poisonc);
        setTypeImg(allImages.default.poison)
    } else if (type === 'bug' && color !== bugc) {
        setColor(bugc);
        setTypeImg(allImages.default.bug)
    } else if (type === 'water' && color !== waterc) {
        setColor(waterc);
        setTypeImg(allImages.default.water)
    } else if (type === 'grass' && color !== grassc) {
        setColor(grassc);
        setTypeImg(allImages.default.grass)
    } else if (type === 'fire' && color !== firec) {
        setColor(firec);
        setTypeImg(allImages.default.fire)
    } else if (type === 'fairy' && color !== fairyc) {
        setColor(fairyc);
        setTypeImg(allImages.default.fairy)
    } else if (type === 'normal' && color !== normalc) {
        setColor(normalc);
        setTypeImg(allImages.default.normal)
    } else if (type === 'electric' && color !== electricc) {
        setColor(electricc);
        setTypeImg(allImages.default.electric)
    } else if (type === 'ground' && color !== groundc) {
        setColor(groundc);
        setTypeImg(allImages.default.ground)
    }

    let upperName = name.toUpperCase().slice(0, 1) + name.slice(1, name.length);
    let upperType = type.toUpperCase().slice(0, 1) + type.slice(1, type.length);

    return (
            <Link style={{textDecoration: 'none', color: 'white'}} to={`/pokemons/${name}`}>
                <div>
                    <div className={s.card} style={
                        {
                            background: color,
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
                                <img className={s.typeImg} src={typeImg} alt="typeImg"/>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
    )
};