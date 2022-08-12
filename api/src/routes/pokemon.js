const router = require("express").Router();
const { Pokemon, Tipo } = require("../db.js");
const axios = require("axios");

let apiData = [];

const getApiInfo = async () => {
  const apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=40";
  await axios
    .get(apiUrl)
    .then((data) => {
      apiData.push(data.data.results);
    })
    .catch((e) => {
      console.log(e);
    });
  const pokemons = apiData[0].map((p) => axios.get(p.url));

  const totalPokemons = Promise.all(pokemons)
    .then((r) => {
      const pokemons = r.map((e) => e.data);
      const resultados = [];
      pokemons.map((e) =>
        resultados.push({
          name: e.name,
          height: e.height,
          weight: e.weight,
          img: e.sprites.other["official-artwork"].front_default,
          hp: e.stats[0].base_stat,
          strength: e.stats[1].base_stat,
          defense: e.stats[2].base_stat,
          speed: e.stats[5].base_stat,
          types: e.types.map((t) => t.type.name),
          pokemonId: e.id,
        })
      );

      //   resultados.map((r) =>
      //     Pokemon.create({
      //       name: r.name,
      //       height: r.height,
      //       weight: r.weight,
      //       imgUrl: r.img,
      //       hp: r.hp,
      //       strength: r.strength,
      //       defense: r.defense,
      //       speed: r.speed,
      //       id: r.pokemonId,
      //       createdByUser: false,
      //     })
      //       .then((create) => {
      //         create.setTipos(r.types);
      //       })
      //       .catch((e) => {
      //         console.log("ERROR!!");
      //         console.log(e);
      //       })
      //   );

      resultados.map((r) => {
        console.log(
          r.types.map((t) => {
            return { name: t };
          })
        );
        Pokemon.create(
          {
            name: r.name,
            height: r.height,
            weight: r.weight,
            imgUrl: r.img,
            hp: r.hp,
            strength: r.strength,
            defense: r.defense,
            speed: r.speed,
            id: r.pokemonId,
            createdByUser: false,
            tipos: r.types.map((t) => {
              return { name: t };
            }),
          },
          {
            include: [Tipo],
          }
        );
      });

      return resultados;
    })
    .catch((e) => {
      console.log(e);
    });
};

router.get("/pokemons/:id", async function (req, res) {
  const { id } = req.params;
  console.log(id);
  try {
    const pokemonSearch = await Pokemon.findOne({
      where: { id: id },
      include: { model: Tipo },
    });
    res.json(pokemonSearch).status(200);
  } catch (e) {
    console.log(e);
  }
});

router.get("/pokemons", async function (req, res) {
  try {
    const pokemonCheck = await Pokemon.findAll({});
    if (pokemonCheck.length < 30) {
      getApiInfo();
    }
  } catch (e) {
    console.log(e);
  }
  const { filter, orderBy, name } = req.query;
  if (name) {
    try {
      const { Op } = require("sequelize");
      const pokemonSearch = await Pokemon.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`,
          },
        },
        include: { model: Tipo },
      });
      return res.json(pokemonSearch).status(200);
    } catch (e) {
      console.log(e);
    }
  }
  if (filter && orderBy) {
    try {
      const pokemonNames = await Pokemon.findAll({
        order: [[filter, orderBy]],
        attributes: ["name", "imgUrl", "id"],
        include: {
          model: Tipo,
        },
      });

      res.json(pokemonNames);
    } catch (e) {
      console.log(e);
    }
  } else {
    try {
      const pokemonNames = await Pokemon.findAll({
        attributes: ["name", "imgUrl", "id"],
        include: {
          model: Tipo,
        },
      });

      res.json(pokemonNames);
    } catch (e) {
      console.log(e);
    }
  }
});

router.post("/pokemons", async function (req, res) {
  const { name, hp, strength, defense, speed, height, weight, type, imgUrl } =
    req.body;
  try {
    const pokemonCreate = await Pokemon.create({
      name: name,
      hp: hp,
      strength: strength,
      defense: defense,
      speed: speed,
      height: height,
      weight: weight,
      imgUrl: imgUrl,
    });
    await pokemonCreate.setTipos(type);
    res
      .json(
        `El pokemon ${name} con las caracteristicas, vida: ${hp}, fuerza: ${strength}, defensa: ${defense}, velocidad: ${speed}, altura: ${height}, y peso: ${weight} se ha creado correctamente`
      )
      .status(201);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.delete("/pokemons/:name", async function (req, res) {
  const { name } = req.params;
  try {
    const destroyPokemon = await Pokemon.destroy({
      where: {
        name: name,
      },
    });
    res.json(destroyPokemon).sendStatus(200);
  } catch (e) {
    console.log(e);
    res.sendStatus(404);
  }
});

module.exports = router;
