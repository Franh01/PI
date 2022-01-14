const session = require('supertest-session');
const app = require('../../src/app.js');
const { conn } = require('../../src/db.js');

const agent = session(app);


describe('Pokemon routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('No se pudo conectar con la base de datos:', err);
  }));
  describe('GET /pokemons', () => {
    it('deberia devolver un status 200', () =>
      agent.get('/pokemons').expect(200)
    );
  });
});
