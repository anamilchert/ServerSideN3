const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ error: 'Informe o token' });
    }

    jwt.verify(token, 'koasjodmcxasdljcxmcvvnzxmcnioj9834123', (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: 'Token inválido' });
        }
        req.userId = decoded.id;
        next();
    });
};

module.exports = verifyToken;