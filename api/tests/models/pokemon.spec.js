const { Pokemon, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Pokemon model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('No se pudo conectar con la base de datos:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Pokemon.sync({ force: true }));
    describe('name', () => {
      it('deberia dar un error si el nombre es null', (done) => {
        Pokemon.create({})
          .then(() => done(new Error('requiere un nombre valido')))
          .catch(() => done());
      });
      it('deberia funcionar cuando se crea con un nombre valido', () => {
        Pokemon.create({ name: 'Pikachu' });
      });
    });
  });
});

describe('Pokemon model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('No se pudo conectar con la base de datos:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Pokemon.sync({ force: true }));
    describe('id', () => {
      it('deberia dar un error si id es diferente de un string', (done) => {
        Pokemon.create({id: 421})
          .then(() => done(new Error('el id debe ser un string')))
          .catch(() => done());
      });
      it('debe funcionar cuando se le pasa un string', () => {
        Pokemon.create({ id: '1231j23lkj123' });
      });
    });
  });
});

describe('Pokemon model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('No se pudo conectar con la base de datos:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Pokemon.sync({ force: true }));
    describe('hp, strength', () => {
      it('deberia dar un error si no se pasan valores enteros', (done) => {
        Pokemon.create({hp: '421', strength: 213})
          .then(() => done(new Error('los valores deben ser numeros enteros')))
          .catch(() => done());
      });
      it('debe funcionar cuando se le pasa un valor adecuado', () => {
        Pokemon.create({ hp: 200, strength: 310 });
      });
    });
  });
});
