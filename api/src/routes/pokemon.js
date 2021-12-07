const router = require('express').Router();
const { Pokemon } = require('../db.js');
const axios = require('axios');
const e = require('express');

let todasLasPromesas = [];
let apiData = [];
let newArr = [];
(function promiseMaker () {
    for (let i = 1; i <= 40; i++) {
        todasLasPromesas.push(async () => {
            await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
                .then(data => {
                    return newArr.push(data)
                })
                .catch(e => {
                    console.log(e);
                })            
        })
    }
})()

Promise.all([todasLasPromesas[0](), todasLasPromesas[1](), todasLasPromesas[2]()])
    .then(resultado => {
    return resultado;
})  .catch( err => {
    console.log(err); 
});

let dataCatcher = async function () {
    setTimeout(() => {
        for (let i = 0; i < newArr.length; i++) {
            console.log('Nombre ',newArr[i].data.forms[0].name)
            console.log('Tipo',newArr[i].data.types[0].type.name)
            console.log('Altura',newArr[i].data.height)
            console.log('Peso',newArr[i].data.weight)
        }
    }, 1000);
}
dataCatcher()
// console.log(apiData)
router.get('/', async function (req, res) {
    
    const pokemonNames = await Pokemon.findAll();
    try {
        if (pokemonNames.length < 40) {
            
        } res.json(pokemonNames);
        // } else {
        // if (!pokemonNames) return res.status(404);
        // res.json(pokemonNames);
        // }    
    } catch (e) {
        console.log(e)
    }
});

router.post('/', async function (req, res) {
    const { id, name, vida, fuerza, defensa, velocidad, altura, peso, type } = req.body;
    
});

module.exports = router;