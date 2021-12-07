const { Router } = require('express');
const express = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const pokemon = require('./pokemon.js');
const router = Router();

router.use(express.json());
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/', pokemon)

module.exports = router;
