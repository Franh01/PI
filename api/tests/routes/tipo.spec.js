const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Tipo, conn } = require('../../src/db.js');

const agent = session(app);
const tipo = {
    name: 'electric',
};

describe('Tipo routes', () => {
    before(() => conn.authenticate()
    .catch((err) => {
    console.error('No se pudo conectar con la base de datos:', err);
    }));
    beforeEach(() => Tipo.sync({ force: true })
    .then(() => Tipo.create(tipo)));
    describe('GET /types', () => {
    it('deberia devolver un status 200', () =>
        agent.get('/types').expect(200)
    );
    });
});
