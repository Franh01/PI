const { Router } = require('express');
const express = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const pokemon = require('./pokemon.js');
const tipo = require('./tipo.js');
const router = Router();

router.use(express.json());
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/', pokemon)
router.use('/', tipo)

module.exports = router;
