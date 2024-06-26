const express = require('express');
const router = express.Router();
const servicoController = require('../Controllers/servicoController');

router.post('/', servicoController.createServico);
router.get('/', servicoController.getServicos);
router.put('/:id', servicoController.updateServico);
router.delete('/:id', servicoController.deleteServico);

module.exports = router;