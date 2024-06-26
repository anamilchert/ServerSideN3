const Servico = require('../Models/servico');
const Prestador = require('../Models/prestador');

exports.createServico = async (req, res) => {
    try {
        const { nome_servico, prestadorId } = req.body;
        const prestador = await Prestador.findById(prestadorId);

        if (!prestador) {
            return res.status(404).json({ error: 'Prestador não encontrado' });
        }

        let vlr_servico = 50.00;
        if (prestador.tempo_experiencia === 3) {
            vlr_servico *= 1.30;
        } else if (prestador.tempo_experiencia > 3 && prestador.tempo_experiencia <= 5) {
            vlr_servico *= 1.50;
        } else if (prestador.tempo_experiencia > 5) {
            vlr_servico *= 1.75;
        }

        const servico = new Servico({ nome_servico, vlr_servico, prestadorId });
        await servico.save();
        res.status(201).json(servico);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar serviço' });
    }
};

exports.getServicos = async (req, res) => {
    try {
        const servicos = await Servico.find().populate('prestadorId');
        res.json(servicos);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar serviços' });
    }
};

exports.updateServico = async (req, res) => {
    try {
        const categorias = await Categoria.find();
        res.json(categorias);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar categorias' });
    }
};

exports.deleteServico = async (req, res) => {
    try {
        const categorias = await Categoria.find();
        res.json(categorias);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar categorias' });
    }
};