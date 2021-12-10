const router = require('express').Router();
const { Pokemon, Tipo } = require('../db.js');
const axios = require('axios');

let apiData = [];

const getApiInfo = async () => {

    const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=40';
    await axios.get(apiUrl)
        .then(data => {
            apiData.push(data.data.results)
        })
        .catch(e => {
            console.log(e)
        })
    const pokemons = apiData[0].map(p => axios.get(p.url))

    const totalPokemons = Promise.all(pokemons)
        .then(r => {
            const pokemons = r.map(e => e.data)
            const resultados = []
            pokemons.map(e => resultados.push({
                name: e.name,
                height: e.height,
                weight: e.weight,
                img: e.sprites.other['official-artwork'].front_default,
                hp: e.stats[0].base_stat,
                strength: e.stats[1].base_stat,
                defense: e.stats[2].base_stat,
                speed: e.stats[5].base_stat,
                types: e.types.map(t=>t.type.name)
            }))
            
            resultados.map(r => Pokemon.create({
                name: r.name,
                height: r.height,
                weight: r.weight,
                imgUrl: r.img,
                hp: r.hp,
                strength: r.strength,
                defense: r.defense,
                speed: r.speed,
                // types: r.types
            })
                .then(create => {
                    create.setTipos(r.types)
                })
                .catch(e => {
                    console.log('ERROR!!')
                    console.log(e)
                }))
            
            return resultados
        })
        .catch(e => {
            console.log(e)
        })
}
setTimeout(() => {
    getApiInfo()
}, 500);


router.get('/pokemons', async function (req, res) {
    try {
        const pokemonNames = await Pokemon.findAll({
            // order: [['name', 'ASC']],
            // attributes: ['name', 'pokemonId', 'imgUrl', 'height', 'weight', 'hp', 'strength', 'defense', 'speed', 'type']
            include: {
                model: Tipo
            }
        });
        
        res.json(pokemonNames);
    } catch (e) {
        console.log(e)
    }
});

router.post('/pokemons', async function (req, res) {
    const { name, hp, strength, defense, speed, height, weight, type, imgUrl } = req.body;
    try {
        const pokemonCreate = await Pokemon.create({
            name: name,
            hp: hp,
            strength: strength,
            defense: defense,
            speed: speed,
            height: height,
            weight: weight,
            imgUrl: imgUrl
        })
        pokemonCreate.setTipos(type)
        res.json(`El pokemon ${name} con las caracteristicas, vida: ${hp}, fuerza: ${strength}, defensa: ${defense}, velocidad: ${speed}, altura: ${height}, y peso: ${weight} se ha creado correctamente`).status(201);
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
});

module.exports = router;