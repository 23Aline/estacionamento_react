import React, { useState, useEffect } from 'react';
import '../styles/listarvagas.css';  // ou o CSS que você estiver usando
import { Link } from 'react-router-dom';

const VagasDisponiveis = () => {
  const [vagasCadastradas, setVagasCadastradas] = useState([]);
  const [busca, setBusca] = useState('');

  // Carrega vagas do localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('vagas')) || [];
    setVagasCadastradas(stored.map(v => v.vaga));  // só preciso das strings de vaga
  }, []);

  const handleBusca = e => setBusca(e.target.value);

  // Gera todas as vagas como strings de "1" a "50"
  const todas = Array.from({ length: 50 }, (_, i) => String(i + 1));
  // Filtra as vagas livres e aplica busca
  const livres = todas
    .filter(v => !vagasCadastradas.includes(v))
    .filter(v => v.includes(busca));

  return (
    <div>
      <header>
        <div className="navbar">
          <div className="navbar-left">
            <Link to="/" className="w3-xlarge" style={{ color: 'white', textDecoration: 'none' }}>
              <i className="fa fa-home"></i> Home
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section>
          <h1>Vagas Disponíveis</h1>

          <article className="vaga-container" id="vagaContainer">
            {livres.length === 0
              ? <p className="mensagem-vazia">Não há vagas disponíveis.</p>
              : todas.map((v, i) => (
                  <div key={i} className={`vaga ${vagasCadastradas.includes(v) ? 'ocupada' : ''}`}>
                    {vagasCadastradas.includes(v) ? '' : v} {/* Se ocupada, não mostra o número */}
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
