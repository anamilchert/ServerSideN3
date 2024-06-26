const express = require('express');
const router = express.Router();
const prestadorController = require('../Controllers/prestadorController');

router.post('/', prestadorController.createPrestador);
router.get('/', prestadorController.getPrestadores);
router.put('/:id', prestadorController.updatePrestador);
router.delete('/:id', prestadorController.deletePrestador);

module.exports = router;