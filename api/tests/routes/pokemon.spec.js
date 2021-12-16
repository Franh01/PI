/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Pokemon, conn } = require('../../src/db.js');

const agent = session(app);
const pokemon = {
  name: 'Pikachu',
};

describe('Pokemon routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('No se pudo conectar con la base de datos:', err);
  }));
  beforeEach(() => Pokemon.sync({ force: true })
    .then(() => Pokemon.create(pokemon)));
  describe('GET /pokemons', () => {
    it('deberia devolver un status 200', () =>
      agent.get('/pokemons').expect(200)
    );
  });
  describe('POST /pokemons', () => {
    it('deberia devolver un status 200', () =>
      agent.post('/pokemons').send({name: 'Raichu', id: '402'}).expect(200))
  })
});
