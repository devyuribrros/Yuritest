import React, { useState } from 'react';

const BarraDePesquisa = ({ aoPesquisar }) => {
    const [input, setInput] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        aoPesquisar(input);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Digite o nome do repositório"
            />
            <button type="submit">Buscar</button>
        </form>
    );
};

export default BarraDePesquisa;