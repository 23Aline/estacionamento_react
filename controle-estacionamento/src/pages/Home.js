import React from 'react';
import '../styles/home.css'; // Certifique-se de que o caminho esteja correto
import { Link } from 'react-router-dom';

function Home() {
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
                    <h1>Controle de Estacionamento</h1>
                    <article className="card">
                        <Link to="/CadastrarVagas">
                            <button>Cadastrar vagas</button>
                        </Link>
                        <Link to="/VagasCadastradas">
                            <button>Vagas cadastradas</button>
                        </Link>
                        <Link to="/VagasDisponiveis">
                            <button>Vagas disponíveis</button>
                        </Link>
                    </article>
                </section>
            </main>
        </div>
    );
}

export default Home;
