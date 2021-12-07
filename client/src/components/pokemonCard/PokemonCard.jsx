import s from './PokemonCard.module.css';

export default function PokemonCard({name,img}) {
    return (
        <div>
            <div className={s.card}>
                <div>
                    <h3>{name}</h3>
                    <img src={img}/>
                </div>
            </div>
        </div>
    )
};