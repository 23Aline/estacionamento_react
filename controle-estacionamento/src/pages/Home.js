import React from 'react';
import '../styles/home.css';
import { Link } from 'react-router-dom';

function Home() {
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
                <h1>Controle de Estacionamento</h1>
                <p>Bem-vindo! Antes de cadastrar uma vaga, acesse a página de Vagas Disponíveis para verificar quais 
                    ainda estão livres. Em seguida, retorne e realize o cadastro escolhendo uma dessas vagas. Para 
                    consultar ou remover um cadastro, vá até a página de Vagas Cadastradas.</p>
                <img
                    src="https://i.pinimg.com/736x/f7/12/d4/f712d40b4b498c262fae9f44f9dd1838.jpg" 
                    alt="Ícone de estacionamento"
                    className="imagem-estacionamento"
                />
            </main>
        </div>
    );
}

export default Home;
