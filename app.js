const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Configuração da engine de visualização
app.set('view engine', 'ejs');

// Servir arquivos estáticos (se necessário)
app.use(express.static('public'));

// Rota principal para renderizar o HTML
app.get('/', (req, res) => {
    res.render('index');
});

// Rota para retornar a lista de itens
app.get('/items', (req, res) => {
    const quantity = parseInt(req.query.quantity) || 0; // Obtém a quantidade da query string
    const items = [];

    // Gera uma lista de itens conforme a quantidade solicitada
    for (let i = 1; i <= quantity; i++) {
        items.push(`Item ${i}`);
    }

    // Retorna a lista como JSON
    res.json({ items });
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
