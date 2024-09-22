// src/pages/Home/Home.tsx
import React from 'react';
import orcamentoImage from '../../assets/orcamento.png'; // Suba dois níveis para acessar a pasta assets
import './Home.css';
import { Link } from 'react-router-dom';



const Home: React.FC = () => {
  return (
    <div className="home-container">
    <img src={orcamentoImage} alt="Ícone de Orçamento" className="animated-icon" />
      <h1>Bem-vindo ao Gerenciador de Orçamento Pessoal</h1>
      <p>
      Esta aplicação web foi desenvolvida para proporcionar uma experiência intuitiva e eficiente na gestão de suas finanças pessoais. Com ela, você poderá adicionar, editar e excluir suas receitas e despesas mensais com facilidade, permitindo um controle detalhado de suas entradas e saídas. Além disso, a plataforma oferece uma visão clara do seu saldo restante, auxiliando na tomada de decisões financeiras mais informadas e na elaboração de um planejamento orçamentário eficaz.
      </p>
      <Link to="/login">Comece Agora</Link>
    </div>
  );
};




export default Home;
