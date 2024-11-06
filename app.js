import express from 'express'; 
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/items', (req, res) => {
    const quantity = parseInt(req.query.quantity) || 0; 
    if (quantity < 1) {
        return res.json({ items: [] }); 
    }

    const items = [];

    for (let i = 1; i <= quantity; i++) {
        items.push(`Item ${i}`);
    }

    res.json({ items });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
