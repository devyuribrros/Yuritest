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
   
    try {
        const resposta = await axios.get(`https://api.github.com/search/repositories`, );
        res.json(resposta.data);
    } catch (erro) {
        console.error(erro);

    }
});

app.listen(PORT, () => {
    console.log(`${PORT}`);
});