const express = require('express');
const { home, usuario } = require('../controllers/usuarioController');
const router = express.Router();


router.get('/', home)

router.get('/usuarios', usuario)

module.exports = router;