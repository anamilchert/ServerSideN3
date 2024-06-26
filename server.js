const express = require('express');
const app = express();
const sequelize = require('./config/database');

app.use(express.json());

const categoriaRoutes = require('./Routes/categoriaRoutes');
const prestadorRoutes = require('./Routes/prestadorRoutes');
const servicoRoutes = require('./Routes/servicoRoutes');

app.use('/api/categorias', categoriaRoutes);
app.use('/api/prestadores', prestadorRoutes);
app.use('/api/servicos', servicoRoutes);

sequelize.sync()
    .then(() => {
        console.log('Banco de dados conectado');
    })
    .catch(err => {
        console.error('não foi possível conectar ao banco:', err);
    });


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
