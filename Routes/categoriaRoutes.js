const express = require('express');
const router = express.Router();
const categoriaController = require('../Controllers/categoriaController');

router.post('/', categoriaController.createCategoria);
router.get('/', categoriaController.getCategorias);
router.put('/', categoriaController.updateCategoria);
router.delete('/', categoriaController.deleteCategoria);

module.exports = router;