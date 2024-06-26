const express = require('express');
const router = express.Router();
const categoriaController = require('../Controllers/categoriaController');

router.post('/categorias', categoriaController.createCategoria);
router.get('/categorias', categoriaController.getCategorias);

module.exports = router;
