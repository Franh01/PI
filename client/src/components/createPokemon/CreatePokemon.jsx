import s from './CreatePokemon.module.css';
import { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createPokemon, getPokemons, getTypes } from '../../redux/actions/pokemon';
import NavBar from '../navBar/NavBar';
import defaultImg from '../../img/question2.png';

export default function CreatePokemon() {
    const dispatch = useDispatch();
    const tipos = useSelector((state) => state.pokemonReducer.types.map(t => t.name));
    let pokemons = useSelector((state) => state.pokemonReducer.pokemons)
    if (pokemons.length === undefined) {
        dispatch(getPokemons(''))
    }
    if (pokemons.length > 0) {
        pokemons = pokemons.map(n=>n.name)
    }
    const navigate = useNavigate();
    if (tipos.length === 0) {
        dispatch(getTypes())
    };
    
    const [name, setName] = useState('');
    const [hp, setHp] = useState('0');
    const [strength, setStrength] = useState('0');
    const [defense, setDefense] = useState('0');
    const [speed, setSpeed] = useState('0');
    const [height, setHeight] = useState('0');
    const [weight, setWeight] = useState('0');
    const [imgUrl, setImgUrl] = useState('');
    const [type1, setType1] = useState('normal');
    const [type2, setType2] = useState('none');

    function handleOnSubmit(e) {
        e.preventDefault()
        if (pokemons.some(p => p === name)) {
            setName('');
            return alert('Ya existe un pokemon con ese nombre');
        }
        if (imgUrl.length > 255) {

            return alert('URL de imagen invalido!')
        }

        e.preventDefault()        
        if (!name.match(/^[A-Za-z]+$/)) {
            setName('')
            return alert('Solo pudas usar letras en el nombre!')
        }
        
        if (hp.toString().includes('e') || strength.toString().includes('e') || defense.toString().includes('e') || speed.toString().includes('e') || height.toString().includes('e') || weight.toString().includes('e')) {
            return alert('Debes introducir estadisticas validas')
        }
        if (hp === '' || hp < 0) {
            setHp(0)
            return alert('La vida debe ser al menos 0')
        } else if (strength === '' || strength < 0) {
            setStrength(0)
            return alert('La fuerza debe ser al menos 0')
        } else if (defense === '' || defense < 0) {
            setDefense(0)
            return alert('La defensa debe ser al menos 0')
        } else if (speed === '' || speed < 0) {
            setSpeed(0)
            return alert('La velocidad debe ser al menos 0')
        } else if (height === '' || height < 0) {
            setHeight(0)
            return alert('La altura debe ser al menos 0')
        } else if (weight === '' || weight < 0) {
            setWeight(0)
            return alert('El peso debe ser al menos 0')
        }
        if (name) {
            if (type2 === 'none') {
                dispatch(createPokemon({
                    name: name.toLowerCase(),
                    hp: Math.round(hp),
                    strength: Math.round(strength),
                    defense: Math.round(defense),
                    speed: Math.round(speed),
                    height: Math.round(height),
                    weight: Math.round(weight),
                    imgUrl: imgUrl,
                    type: [type1]
                }))
            } else {
                dispatch(createPokemon({
                    name: name.toLowerCase(),
                    hp: Math.round(hp),
                    strength: Math.round(strength),
                    defense: Math.round(defense),
                    speed: Math.round(speed),
                    height: Math.round(height),
                    weight: Math.round(weight),
                    imgUrl: imgUrl,
                    type: [type1, type2]
                }))
            }
            alert(`Tu pokemon ${name} fue creado con exito!`)
            navigate('/pokemons')
        } else {
            return alert('Debes introducir parametros validos!')
        }
    }

    let previewFlag = false;
    const [opacityImg, setOpacityImg] = useState('0%')
    let inputWidth = '500px';
    let inputBorder = '5px'
    if (imgUrl.length > 0) {
        inputWidth = '450px';
        inputBorder = '5px 0px 0px 5px'
        previewFlag = true;

    }
    function handleOnPreview() {
        if (opacityImg === '100%') {
            setOpacityImg('0%');
        } else {
            setOpacityImg('100%');
        }
    }
    function addDefaultImg(e){
        e.target.src = defaultImg;
    }
    return (
        <div className={s.container}>
            <NavBar/>
            <div className={s.formContainer}>
                <form className={s.form}>

                    <div className={s.nameContainer}>
                        <h4 className={s.titles} style={{ margin: '10px 0px 0px 0px' }}>Nombre *:</h4>
                        <input className={s.inputs} type='text' placeholder='Pikachu...' required value={name} onChange={(e) => setName(e.target.value)}></input>
                    </div>

                    <div className={s.typesContainer}>
                        <h4 className={s.type}>Tipo principal:</h4>
                        <select className={s.pokemonTypes} value={type1} multiple={false} onChange={e => { setType1(e.target.value) }}>
                            {tipos.map(t => <option value={t} key={t}>{t.charAt(0).toUpperCase()+t.slice(1)}</option>)}
                        </select>
                        <h4 className={s.type}>Tipo secundario:</h4>
                        <select className={s.pokemonTypes} value={type2} multiple={false} onChange={e => {setType2(e.target.value)}}>
                            <option value='none' defaultValue>None</option>
                            {tipos.map(t => <option value={t} key={t}>{t.charAt(0).toUpperCase()+t.slice(1)}</option>)}
                        </select>
                    </div>

                    <div className={s.imgContainer}>
                        <h4 className={s.titles} style={{ marginBottom: '-5px', marginTop: '5px' }}>Imagen:</h4>
                        <div className={s.inputAndPrev}>
                            <div>
                            <input
                                className={s.inputs}
                                type='text'
                                placeholder='Img url...'
                                value={imgUrl}
                                    style={{
                                        width: inputWidth,
                                        borderRadius: inputBorder
                                    }}
                                onChange={e => {
                                    setImgUrl(e.target.value)
                                }}></input>
                                </div>
                            {previewFlag && <div className={s.previewContainer}><button type='button' className={s.previewButton} onClick={() => handleOnPreview()}>Preview</button></div>}
                            <div className={s.previewImgContainer}>
                                <img
                                    className={s.previewImg}
                                    src={imgUrl} alt="preview"
                                    style={{ opacity: opacityImg }}
                                    onError={(e) => addDefaultImg(e)}

                                />
                            </div>
                            
                        </div>
                    </div>
                    
                        <h4 className={s.type} style={{margin: '10px 0px -20px 0px'}}>Estadísticas:</h4>
                    <div className={s.stats}>
                        <div>
                            <h5 className={s.titleStat}>Vida:</h5>
                            <input className={s.inputsStats} type='number' placeholder='Vida...' value={hp} onChange={e => {
                                setHp(e.target.value)
                            }}></input>
                            <h5 className={s.titleStat}>Fuerza:</h5>
                            <input className={s.inputsStats} type='number' placeholder='Fuerza...' value={strength} onChange={e => {
                                setStrength(e.target.value)
                                }}></input>
                        </div>

                        <div>
                            <h5 className={s.titleStat}>Defensa:</h5>
                            <input className={s.inputsStats} type='number' placeholder='Defensa...' value={defense} onChange={e => {
                                setDefense(e.target.value)
                            }}></input>
                            <h5 className={s.titleStat}>Velocidad:</h5>
                            <input className={s.inputsStats} type='number' placeholder='Velocidad...' value={speed} onChange={e => {
                                setSpeed(e.target.value)
                            }}></input>
                        </div>

                        <div>
                            <h5 className={s.titleStat}>Altura:</h5>
                            <input className={s.inputsStats} type='number' placeholder='Altura...' value={height} onChange={e => {
                                setHeight(e.target.value)
                            }}></input>
                            <h5 className={s.titleStat}>Peso:</h5>
                            <input className={s.inputsStats} type='number' placeholder='Peso...' value={weight} onChange={e => {
                                setWeight(e.target.value)
                            }}></input>
                        </div>
                    </div>
                    <div className={s.formBtnContainer}>
                        <button className={s.formBtn} type='submit' onClick={handleOnSubmit}>Crear</button>
                    </div>
                </form>
            </div>
        </div>
    )
}