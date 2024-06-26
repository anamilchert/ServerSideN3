const mongoose = require('mongoose');

const PrestadorSchema = new mongoose.Schema({
    nome_prestador: {
        type: String,
        required: true,
    },

    tempo_experiencia: {
        type: Number,
        required: true,
    },
    
    categoriaId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Categoria',
        required: true,
    },
});

const Prestador = mongoose.model('Prestador', PrestadorSchema);

module.exports = Prestador;