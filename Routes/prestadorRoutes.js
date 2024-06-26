const express = require('express');
const router = express.Router();
const prestadorController = require('../Controllers/prestadorController');

router.post('/prestadores', prestadorController.createPrestador);
router.get('/prestadores', prestadorController.getPrestadores);

module.exports = router;
