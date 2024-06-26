const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connectDB = require('./config/database');
const auth = require('./auth');
const jwt = require('jsonwebtoken');

app.use(bodyParser.json());

const categoriaRoutes = require('./Routes/categoriaRoutes');
const prestadorRoutes = require('./Routes/prestadorRoutes');
const servicoRoutes = require('./Routes/servicoRoutes');

app.get('/', (req, res) => {
    const userId = 'ana';
    const token = jwt.sign({ id: userId }, 'koasjodmcxasdljcxmcvvnzxmcnioj9834123', { expiresIn: '1h' });
    res.send(token);
});

app.use('/api', auth);
app.use('/api/categorias', categoriaRoutes);
app.use('/api/prestadores', prestadorRoutes);
app.use('/api/servicos', servicoRoutes);

app.post('/api/test', (req, res) => {
    console.log('req.body:', req.body);
    res.send('Test route');
});

connectDB();

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
