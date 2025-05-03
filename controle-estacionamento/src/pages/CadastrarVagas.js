import React, { useState } from 'react';
import '../styles/cadastrar.css';
import { Link, useNavigate } from 'react-router-dom';

const CadastrarVagas = () => {
  const [formData, setFormData] = useState({
    placa: '',
    nome: '',
    apartamento: '',
    bloco: '',
    modelo: '',
    cor: '',
    vaga: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const vagas = JSON.parse(localStorage.getItem('vagas')) || [];
    vagas.push(formData);
    localStorage.setItem('vagas', JSON.stringify(vagas));
    alert('Vaga cadastrada com sucesso!');
    setFormData({
      placa: '',
      nome: '',
      apartamento: '',
      bloco: '',
      modelo: '',
      cor: '',
      vaga: ''
    });
  };

  return (
    <div className="container">
      <aside className="sidebar">
        <h2>Menu</h2>
        <Link to="/" className="sidebar-link">Home</Link>
        <Link to="/CadastrarVagas" className="sidebar-link">Cadastrar Vagas</Link>
        <Link to="/VagasCadastradas" className="sidebar-link">Vagas Cadastradas</Link>
        <Link to="/VagasDisponiveis" className="sidebar-link">Vagas Disponíveis</Link>
      </aside>

      <main className="main-content">
        <div className="cadastro-content">
           <h1>Cadastrar veículo:</h1>
          <div className="cadastro">
            <section>
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="placa">Placa do veículo:</label>
                    <input type="text" id="placa" value={formData.placa} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="nome">Nome do proprietário:</label>
                    <input type="text" id="nome" value={formData.nome} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="apartamento">Número do apartamento:</label>
                    <input type="number" id="apartamento" value={formData.apartamento} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="bloco">Bloco do apartamento:</label>
                    <select id="bloco" value={formData.bloco} onChange={handleChange} required>
                      <option value="" disabled>Selecione o bloco</option>
                      <option value="Bloco A">Bloco A</option>
                      <option value="Bloco B">Bloco B</option>
                      <option value="Bloco C">Bloco C</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="modelo">Modelo do veículo:</label>
                    <input type="text" id="modelo" value={formData.modelo} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cor">Cor do veículo:</label>
                    <input type="text" id="cor" value={formData.cor} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="vaga">Número da vaga:</label>
                    <input type="number" id="vaga" value={formData.vaga} onChange={handleChange} min="1" max="50" required />
                  </div>
                </div>
                <button type="submit">Cadastrar</button>
              </form>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CadastrarVagas;
