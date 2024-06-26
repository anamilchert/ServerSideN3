const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connectDB = require('./config/database');

app.use(bodyParser.json());

const categoriaRoutes = require('/Routes/categoriaRoutes');
const prestadorRoutes = require('/Routes/prestadorRoutes');
const servicoRoutes = require('/Routes/servicoRoutes');

app.use('/api/categorias', categoriaRoutes);
app.use('/api/prestadores', prestadorRoutes);
app.use('/api/servicos', servicoRoutes);

connectDB();

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
