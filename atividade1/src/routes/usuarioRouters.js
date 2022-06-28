const express = require('express');
const { home, usuario, descricao } = require('../controllers/usuarioController');
const router = express.Router();


router.get('/', home)

router.get('/usuarios', usuario)

router.get('/usuarios/descricao/:id', descricao)

module.exports = router;