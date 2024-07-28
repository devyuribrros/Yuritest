import React, { useState } from 'react';
import axios from 'axios';
import BarraDePesquisa from './componentes/barradepesquisa';
import ListaDeRepositorios from './componentes/listaderepositorios';
import './styles.css';

const App = () => {
    const [repositorios, setRepositorios] = useState([]);

    const enviado = async (consulta) => {
        try {
            const resposta = await axios.get(`http://localhost:5000/api/repositorios?q=${consulta}`);
            setRepositorios(resposta.data.items);
        } catch (erro) {
            console.error('erro');
        }
    };

    return (
        <div className="app">
            <h1>Busca de Repositórios no GitHub</h1>
            <BarraDePesquisa aoPesquisar={enviado} />
            <ListaDeRepositorios repositorios={repositorios} />
        </div>
    );
};

export default App;
