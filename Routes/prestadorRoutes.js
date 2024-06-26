const express = require('express');
const router = express.Router();
const prestadorController = require('../Controllers/prestadorController');

router.post('/', prestadorController.createPrestador);
router.get('/', prestadorController.getPrestadores);
router.put('/', prestadorController.updatePrestador);
router.delete('/', prestadorController.deletePrestador);

module.exports = router;