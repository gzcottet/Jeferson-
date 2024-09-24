import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <h1>Planejador Financeiro</h1> {/* Título alterado */}
      <p>
        Gerencie suas finanças de forma simples e eficaz. {/* Texto centralizado e simplificado */}
      </p>
      <Link to="/login">Começar Agora</Link> {/* Texto do botão alterado */}
    </div>
  );
};

export default Home;
