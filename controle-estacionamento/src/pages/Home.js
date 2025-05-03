import React from 'react';
import '../styles/home.css';
import { Link } from 'react-router-dom';
import cadastrarpng from '../images/cadastrar.png';
import listarpng from '../images/listar.png';
import vagaspng from '../images/vagas.png';


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
                <div className="home-content">
                    <h1>Controle de Estacionamento</h1>
                    <p>Bem-vindo! Antes de cadastrar uma vaga, acesse a página de Vagas Disponíveis para verificar quais
                        ainda estão livres. Em seguida, retorne e realize o cadastro escolhendo uma dessas vagas. Para
                        consultar ou remover um cadastro, vá até a página de Vagas Cadastradas.</p>
                    <p><strong>Abaixo veja um exemplo:</strong></p>

                    <section className="home-section">
                        <h2>Vagas</h2>
                        <p>As vagas disponíveis são exibidas dessa forma, com as azuis abertas para serem 
                            reservadas e as vermelhas já indisponíveis para reverva.</p>
                        <div className="section-image">
                            <img
                                src={vagaspng}
                                alt="Tela de Vagas Disponíveis"
                                className="imagem-vagas"
                            />
                        </div>
                    </section>

                    <section className="home-section">
                        <h2>Cadastro</h2>
                        <p>Na página de cadastro, você pode registrar novas vagas. Preencha as informações necessárias e
                            selecione a vaga desejada para adiciona-la ao sistema.</p>
                        <div className="section-image">
                            <img
                                src={cadastrarpng}
                                alt="Tela de Cadastro de Vagas"
                                className="imagem-cadastro"
                            />
                        </div>
                    </section>

                    <section className="home-section">
                        <h2>Registros</h2>
                        <p>Na tela de vagas cadastradas, você pode pesquisar vagas pelo nome do morador ou número da vaga 
                            e remover registros quando necessário.</p>
                        <div className="section-image">
                            <img
                                src={listarpng} 
                                alt="Tela de Vagas Cadastradas"
                                className="imagem-cadastradas"
                            />
                        </div>
                    </section>

                </div>
            </main>
        </div>
    );
}

export default Home;
