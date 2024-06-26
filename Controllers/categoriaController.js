const Categoria = require('../Models/categoria');

exports.createCategoria = async (req, res) => {
    try {
        const { nome_categoria } = req.body;
        const categoria = new Categoria({ nome_categoria });
        await categoria.save();
        res.status(201).json(categoria);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar categoria' });
    }
};

exports.getCategorias = async (req, res) => {
    try {
        const categorias = await Categoria.find();
        res.json(categorias);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar categorias' });
    }
};