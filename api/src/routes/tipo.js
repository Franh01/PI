const router = require('express').Router();
const { Tipo } = require('../db.js');
const axios = require('axios');

let apiData = [];

const getTypeInfo = async () => {

    const apiUrl = 'https://pokeapi.co/api/v2/type';
    await axios.get(apiUrl)
        .then(data => {
            apiData.push(data.data.results)
        })
        .catch(e => {
            console.log(e)
        })
    const types = apiData[0].map(p => axios.get(p.url))

    const totalTypes = Promise.all(types)
        .then(r => {
            const types = r.map(e => e.data)
            const resultados = []
            types.map(e => resultados.push({
                name: e.name,
                pokemons: e.pokemon.map(pokemon=>pokemon.pokemon.name)
            }))

            resultados.map(r => Tipo.create({
                name: r.name,
                belongsToPokemons: r.pokemons
            }))
            
            return resultados
        })
        .catch(e => {
            console.log(e)
        })
}
getTypeInfo()

router.get('/types', async function (req, res) {
    try {
        const pokemonTypes = await Tipo.findAll();
        res.json(pokemonTypes);
    } catch (e) {
        console.log(e)
    }
});

router.post('/types', async function (req, res) {
    try {
        Tipo.create({
            name: req.body.name
        })
        res.json(`El tipo '${req.body.name}' Se creo correctamente`).status(201);
    } catch (e) {
        console.log(e)
        res.sendStatus(500);
    }
});

module.exports = router;