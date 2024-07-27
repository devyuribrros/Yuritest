const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/repositorios', async (req, res) => {
    const { q } = req.query;
    if (!q) {
        return res.status(400).json({ erro: 'O parâmetro de consulta "q" é obrigatório' });
    }

    try {
        const resposta = await axios.get(`https://api.github.com/search/repositories`, {
            params: { q },
            headers: { Authorization: `token ${process.env.GITHUB_TOKEN}` }
        });
        res.json(resposta.data);
    } catch (erro) {
        console.error('Erro ao buscar dados do GitHub:', erro);
        res.status(500).json({ erro: 'Erro ao buscar dados do GitHub' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor está rodando na porta ${PORT}`);
});