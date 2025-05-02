import React, { useState, useEffect } from 'react';
import '../styles/listarvagas.css'; 
import { Link } from 'react-router-dom';

const VagasDisponiveis = () => {
  const [vagasCadastradas, setVagasCadastradas] = useState([]);
  const [busca, setBusca] = useState('');


  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('vagas')) || [];
    setVagasCadastradas(stored.map(v => v.vaga));  
  }, []);

  const handleBusca = e => setBusca(e.target.value);

  const todas = Array.from({ length: 50 }, (_, i) => String(i + 1));
 
  const livres = todas
    .filter(v => !vagasCadastradas.includes(v))
    .filter(v => v.includes(busca));

  
    return (
    <div className="container">
      <aside className="sidebar">
        <h2>Menu</h2>
        <Link to="/" className="sidebar-link">Home</Link>
        <Link to="/CadastrarVagas" className="sidebar-link">Cadastrar Vagas</Link>
        <Link to="/VagasCadastradas" className="sidebar-link">Vagas Cadastradas</Link>
        <Link to="/VagasDisponiveis" className="sidebar-link">Vagas Disponíveis</Link>
      </aside>
  
        <main className="conteudo-principal">
          <section>
            <h1>Vagas Disponíveis</h1>
  
            <article className="vaga-container" id="vagaContainer">
              {livres.length === 0
                ? <p className="mensagem-vazia">Não há vagas disponíveis.</p>
                : todas.map((v, i) => (
                    <div key={i} className={`vaga ${vagasCadastradas.includes(v) ? 'ocupada' : ''}`}>
                      {vagasCadastradas.includes(v) ? '' : v} {}
                    </div>
                  ))
              }
            </article>
          </section>
        </main>
      </div>
    );
  }

export default VagasDisponiveis;
