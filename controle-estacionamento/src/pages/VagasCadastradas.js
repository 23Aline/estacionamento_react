import React, { useState, useEffect } from 'react';
import '../styles/cadastradas.css';
import { Link } from 'react-router-dom';

const VagasCadastradas = () => {
    const [vagas, setVagas] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const storedVagas = JSON.parse(localStorage.getItem('vagas')) || [];
        setVagas(storedVagas);
    }, []);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleRemover = (index) => {
        const novasVagas = [...vagas];
        novasVagas.splice(index, 1);
        setVagas(novasVagas);
        localStorage.setItem('vagas', JSON.stringify(novasVagas));
    };

    const filteredVagas = vagas.filter((vaga) =>
        vaga.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vaga.vaga.toString().includes(searchTerm)
    );

    return (
        <div className="container">
            <aside className="sidebar">
                <h2>Menu</h2>
                <Link to="/" className="sidebar-link">Home</Link>
                <Link to="/CadastrarVagas" className="sidebar-link">Cadastrar Vagas</Link>
                <Link to="/VagasCadastradas" className="sidebar-link">Vagas Cadastradas</Link>
                <Link to="/VagasDisponiveis" className="sidebar-link">Vagas Disponíveis</Link>
            </aside>

            <main className="conteudo-vagas">
                <section>
                    <h1>Vagas Cadastradas</h1>
                    <div className="pesquisa-container">
                        <input
                            type="text"
                            id="campoBusca"
                            placeholder="Pesquise por nome ou número da vaga..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                    </div>

                    <ul id="listaVagas" className="lista-vagas">
                        {filteredVagas.length === 0 ? (
                            <li className="mensagem-vazia">Nenhuma vaga encontrada.</li>
                        ) : (
                            filteredVagas.map((vaga, index) => (
                                <li key={index} className="vaga-item">
                                    <strong>Vaga {vaga.vaga}</strong><br />
                                    <p>Proprietário: {vaga.nome} ({vaga.apartamento}, {vaga.bloco})</p>
                                    <p>Veículo: {vaga.modelo}, Cor: {vaga.cor}, Placa: {vaga.placa}</p>
                                    <button className="remover-btn" onClick={() => handleRemover(index)}>Remover</button>
                                </li>
                            ))
                        )}
                    </ul>
                </section>
            </main>
        </div> 
    );
};

export default VagasCadastradas;
