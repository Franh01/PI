import { useState } from 'react';
import s from './PokemonCard.module.css';

export default function PokemonCard({ name, img, type }) {
    const poison = '#6E3CBC'
    const bug = '#064635'
    const water = '#516BEB'
    const grass = '#519259'
    const fire = '#FF5403'
    const fairy = '#F4BEEE'
    const normal = '#99A799'
    const electric = '#FFF323'
    const ground = '#C3B091'


    const [color, setColor] = useState('gray');
    if (type === 'poison' && color !== poison) {
        setColor(poison);
    } else if (type === 'bug' && color !== bug) {
        setColor(bug);
    } else if (type === 'water' && color !== water) {
        setColor(water);
    } else if (type === 'grass' && color !== grass) {
        setColor(grass);
    } else if (type === 'fire' && color !== fire) {
        setColor(fire);
    } else if (type === 'fairy' && color !== fairy) {
        setColor(fairy);
    } else if (type === 'normal' && color !== normal) {
        setColor(normal);
    } else if (type === 'electric' && color !== electric) {
        setColor(electric);
    } else if (type === 'ground' && color !== ground) {
        setColor(ground);
    }
    let upperName = name.toUpperCase().slice(0, 1) + name.slice(1, name.length);
    let upperType = type.toUpperCase().slice(0, 1) + type.slice(1, type.length);
    return (
        <div>
            <div className={s.card} style={{background: color}}>
                <div className={s.content}>
                    <div className={s.nameContainer}>
                        <h2>{upperName}</h2>
                    </div>

                    <div className={s.imgContainer}>
                        <img className={s.image} src={img} />
                    </div>

                    <div className={s.typeContainer}>
                        <h3>{upperType}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
};