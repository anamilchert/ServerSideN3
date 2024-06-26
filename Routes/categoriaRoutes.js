const express = require('express');
const router = express.Router();
const categoriaController = require('../Controllers/categoriaController');

router.post('/', categoriaController.createCategoria);
router.get('/', categoriaController.getCategorias);
router.put('/:id', categoriaController.updateCategoria);
router.delete('/:id', categoriaController.deleteCategoria);

module.exports = router;