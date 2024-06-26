const express = require('express');
const router = express.Router();
const servicoController = require('../Controllers/servicoController');

router.post('/servicos', servicoController.createServico);
router.get('/servicos', servicoController.getServicos);

module.exports = router;
