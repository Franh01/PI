const session = require('supertest-session');
const app = require('../../src/app.js');
const { conn } = require('../../src/db.js');

const agent = session(app);

describe('Tipo routes', () => {
    before(() => conn.authenticate()
    .catch((err) => {
    console.error('No se pudo conectar con la base de datos:', err);
    }));
    describe('GET /types', () => {
    it('deberia devolver un status 200', () =>
        agent.get('/types').expect(200)
    );
    });
});
