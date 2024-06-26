const mongoose = require('mongoose');

const CategoriaSchema = new mongoose.Schema({
    nome_categoria: {
        type: String,
        required: true,
    },
});

const Categoria = mongoose.model('Categoria', CategoriaSchema);

module.exports = Categoria;