const mongoose = require('mongoose');

const ServicoSchema = new mongoose.Schema({
    nome_servico: {
        type: String,
        required: true,
    },

    vlr_servico: {
        type: Number,
        default: 50.00,
    },
    
    prestadorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Prestador',
        required: true,
    },
});

const Servico = mongoose.model('Servico', ServicoSchema);

module.exports = Servico;