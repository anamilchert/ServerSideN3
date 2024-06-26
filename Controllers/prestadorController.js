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

exports.getPrestadores = async (res) => {
    try {
        const prestadores = await Prestador.find().populate('categoriaId');
        res.json(prestadores);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar prestadores' });
    }
};

exports.updatePrestador = async (req, res) => {
    try {
        const categorias = await Categoria.find();
        res.json(categorias);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar categorias' });
    }
};

exports.deletePrestador = async (req, res) => {
    try {
        const categorias = await Categoria.find();
        res.json(categorias);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar categorias' });
    }
};