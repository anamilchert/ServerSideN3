const express = require('express');
const app = express();
const sequelize = require('./config/database');

app.use(express.json());

const categoriaRoutes = require('./routes/categoriaRoutes');
const prestadorRoutes = require('./routes/prestadorRoutes');
const servicoRoutes = require('./routes/servicoRoutes');


app.use('/api', categoriaRoutes);
app.use('/api', prestadorRoutes);
app.use('/api', servicoRoutes);

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
