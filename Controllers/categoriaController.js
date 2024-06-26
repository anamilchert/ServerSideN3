const Categoria = require('../models/categoria');

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

exports.updateCategoria = async (req, res) => {
    try {
        const { id } = req.params;
        const { nome_categoria } = req.body;
        const categoria = await Categoria.findByIdAndUpdate(id, { nome_categoria }, { new: true });
        res.json(categoria);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar categoria' });
    }
};

exports.deleteCategoria = async (req, res) => {
    try {
        const { id } = req.params;
        await Categoria.findByIdAndDelete(id);
        res.json({ message: 'Categoria deletada com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar categoria' });
    }
};
