import React from 'react';

const ListaDeRepositorios = ({ repositorios }) => {
    return (
        <ul>
            {repositorios.map(repo => (
                <li key={repo.id}>
                    <a href={repo.html_url} target="_blank" rel="noopener">
                        {repo.name}
                    </a>
                    <p>{repo.description}</p>
                </li>
            ))}
        </ul>
    );
};

export default ListaDeRepositorios;