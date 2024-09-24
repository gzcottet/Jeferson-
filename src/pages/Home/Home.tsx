import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <h1>Planejador Financeiro</h1> {}
      <p>
        Gerencie suas finanças de forma simples e eficaz. {}
      </p>
      <Link to="/login">Começar Agora</Link> {}
    </div>
  );
};

export default Home;
