const { Tipo, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Tipo model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('No se pudo conectar con la base de datos:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Tipo.sync({ force: true }));
    describe('name', () => {
      it('deberia dar un error si el nombre es null', (done) => {
        Tipo.create({})
          .then(() => done(new Error('Debes introducir un nombre valido')))
          .catch(() => done());
      });
      
    });
  });
});