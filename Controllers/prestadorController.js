const Prestador = require('../Models/prestador');

exports.createPrestador = async (req, res) => {
    try {
        console.log(req.body);
        const { nome_prestador, tempo_experiencia, categoriaId } = req.body;
        const prestador = new Prestador({ nome_prestador, tempo_experiencia, categoriaId });
        await prestador.save();
        res.status(201).json(prestador);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar prestador' });
    }
};

exports.getPrestadores = async (req, res) => {
    try {
        const prestadores = await Prestador.find().populate('categoriaId');
        res.json(prestadores);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar prestadores' });
    }
};

exports.updatePrestador = async (req, res) => {
    try {
        const { id } = req.params;
        const { nome_prestador, tempo_experiencia, categoriaId } = req.body;
        const prestador = await Prestador.findByIdAndUpdate(
            id,
            { nome_prestador, tempo_experiencia, categoriaId },
            { new: true }
        ).populate('categoriaId');
        res.json(prestador);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar prestador' });
    }
};

exports.deletePrestador = async (req, res) => {
    try {
        const { id } = req.params;
        await Prestador.findByIdAndDelete(id);
        res.json({ message: 'Prestador deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar prestador' });
    }
};
