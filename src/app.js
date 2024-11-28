const express = require('express');
const productRoutes = require('./routes/productRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Rotas
app.use('/api/products', productRoutes);

// Página inicial
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/../public/index.html');
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
