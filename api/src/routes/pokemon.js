const router = require('express').Router();
const { Pokemon } = require('../db.js');
const axios = require('axios');

let todasLasPromesas = [];
let apiData = [];
let newArr = [];
(function promiseMaker () {
    for (let i = 1; i <= 42; i++) {
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

Promise.all(todasLasPromesas.map(p => { return p() }))
    .then(resultado => {
    return resultado;
})  .catch( err => {
    console.log(err);
});

(async function dataCatcher () {
    try {
        setTimeout(() => {
            for (let i = 0; i < newArr.length; i++) {
                apiData.push({
                    name: newArr[i].data.forms[0].name,
                    type: newArr[i].data.types[0].type.name,
                    height: newArr[i].data.height,
                    weight: newArr[i].data.weight,
                    imgUrl: newArr[i].data.sprites.other['official-artwork'].front_default
                })            
                
            }
        }, 2800);
    } catch (e) {
        console.log(e)
    }
})()

router.get('/', async function (req, res) {    
    try {
        
        const pokemonNames = await Pokemon.findAll({
            order: [['name', 'ASC']],
            attributes: ['name', 'id', 'imgUrl', 'type']
        });
        setTimeout(() => {
            for (let i = 0; i < apiData.length; i++) {
                Pokemon.create({
                    name: apiData[i].name,
                    imgUrl: apiData[i].imgUrl,
                    type: apiData[i].type
                })
            }
        }, 3000);
        res.json(pokemonNames);
    } catch (e) {
        console.log(e)
    }
});

router.post('/', async function (req, res) {
    const { id, name, vida, fuerza, defensa, velocidad, altura, peso, type } = req.body;
    
});

module.exports = router;