const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', { items: [] });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

app.get('/items', (req, res) => {
    const quantity = parseInt(req.query.quantity) || 0;
    const items = Array.from({ length: quantity }, (_, i) => `Item ${i + 1}`);
    res.json({ items });
});
