import s from './CreatePokemon.module.css';
import { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createPokemon, getTypes } from '../../redux/actions/pokemon';

export default function CreatePokemon() {
    const tipos = useSelector((state) => state.pokemonReducer.types.map(t => t.name));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    if (tipos.length === 0) {
        dispatch(getTypes())
    };
    
    const [name, setName] = useState('');
    const [hp, setHp] = useState('');
    const [strength, setStrength] = useState('');
    const [defense, setDefense] = useState('');
    const [speed, setSpeed] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const [type1, setType1] = useState('normal');
    const [type2, setType2] = useState('none');
    let makeItem = function(x) {
        return <option key={x}>{x}</option>;
    };

    function handleOnSubmit() {
        if (name && hp && strength && defense && speed && height && weight && type1 && !hp.includes('e') && !strength.includes('e') && !defense.includes('e') && !speed.includes('e') && !height.includes('e') && !weight.includes('e')) {
            if (type2 === 'none') {
                dispatch(createPokemon({
                    name: name,
                    hp: hp,
                    strength: strength,
                    defense: defense,
                    speed: speed,
                    height: height,
                    weight: weight,
                    imgUrl: imgUrl,
                    type: [type1]
                }))
            } else {
                dispatch(createPokemon({
                    name: name,
                    hp: hp,
                    strength: strength,
                    defense: defense,
                    speed: speed,
                    height: height,
                    weight: weight,
                    imgUrl: imgUrl,
                    type: [type1, type2]
                }))
            }
            alert(`Tu pokemon ${name} fue creado con exito!`)
            navigate('/pokemons')
        } else {
            alert('Debes introducir parametros validos!')
        }
    }
    
    

    return (
        <div className={s.container}>
            <div className={s.formContainer}>
                <form className={s.form}>

                    <div className={s.nameContainer}>
                        <h4 className={s.titles}>Nombre:</h4>
                        <input className={s.inputs} type='text' placeholder='Pikachu...' required value={name} onChange={e => {
                            setName(e.target.value)
                        }}></input>
                    </div>

                    <div className={s.typesContainer}>
                        <h4 className={s.type}>Tipo principal:</h4>
                        <select className={s.pokemonTypes} value={type1} multiple={false} onChange={e => { setType1(e.target.value) }}>
                            {tipos.map(makeItem)}
                        </select>
                        <h4 className={s.type}>Tipo secundario:</h4>
                        <select className={s.pokemonTypes} value={type2} multiple={false} onChange={e => {setType2(e.target.value)}}>
                            <option defaultValue>none</option>
                            {tipos.map(makeItem)}
                        </select>
                    </div>

                    <div className={s.imgContainer}>
                        <h4 className={s.titles}>Imagen(opcional):</h4>
                        <input className={s.inputs} type='text' placeholder='Img url...' value={imgUrl} onChange={e => {
                            setImgUrl(e.target.value)
                        }}></input>
                    </div>
                    
                    <div className={s.stats}>
                        <h4 className={s.type}>Estadísticas(numericas):</h4>
                        <input className={s.inputs} type='number' placeholder='Vida...' value={hp} onChange={e => {
                            setHp(e.target.value)
                        }}></input>
                        <input className={s.inputs} type='number' placeholder='Fuerza...' value={strength} onChange={e => {
                            setStrength(e.target.value)
                        }}></input>
                        <input className={s.inputs} type='number' placeholder='Defensa...' value={defense} onChange={e => {
                            setDefense(e.target.value)
                        }}></input>
                        <input className={s.inputs} type='number' placeholder='Velocidad...' value={speed} onChange={e => {
                            setSpeed(e.target.value)
                        }}></input>
                        <input className={s.inputs} type='number' placeholder='Altura...' value={height} onChange={e => {
                            setHeight(e.target.value)
                        }}></input>
                        <input className={s.inputs} type='number' placeholder='Peso...' value={weight} onChange={e => {
                            setWeight(e.target.value)
                        }}></input>
                    </div>
                    <div className={s.formBtnContainer}>
                        <button className={s.formBtn} type='submit' onClick={handleOnSubmit}>Crear</button>
                    </div>
                </form>
            </div>
        </div>
    )
}