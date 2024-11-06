import express from 'express'; // Usando import no lugar de require
const app = express();
const PORT = process.env.PORT || 3000; // Usando a variável de ambiente do Render

// Configuração da engine de visualização (EJS)
app.set('view engine', 'ejs');

// Servir arquivos estáticos (caso você tenha arquivos de CSS ou JS externos)
app.use(express.static('public'));

// Middleware para interpretar os dados do formulário (caso necessário)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Rota principal para renderizar o HTML (index.ejs)
app.get('/', (req, res) => {
    res.render('index');
});

// Rota para retornar a lista de itens
app.get('/items', (req, res) => {
    const quantity = parseInt(req.query.quantity) || 0; // Obtém a quantidade da query string
    if (quantity < 1) {
        return res.json({ items: [] }); // Retorna uma lista vazia se a quantidade for inválida
    }

    const items = [];

    // Gera uma lista de itens conforme a quantidade solicitada
    for (let i = 1; i <= quantity; i++) {
        items.push(`Item ${i}`);
    }

    // Retorna a lista como JSON
    res.json({ items });
});

// Inicia o servidor na porta fornecida pelo Render ou 3000 (caso local)
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
