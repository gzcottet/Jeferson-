// src/pages/Dashboard/Dashboard.tsx
import React, { useContext } from 'react';
import { FinanceContext } from '../../context/FinanceContext'; // Corrija o caminho
import './Dashboard.css';

const Dashboard: React.FC = () => {
  const context = useContext(FinanceContext);

  if (!context) {
    return <div>Loading...</div>; // Adicionando uma verificação de carregamento
  }

  const { totalReceitas, totalDespesas, saldo } = context;

  return (
    <div>
      <h2 className="dashboard-title">Visão Geral Financeira</h2>
      <div className="dashboard-container">
        <div className="nova-receitas">
          <h3 className="subtitulo-dashboard">Total de Receitas</h3>
          <p className="valor-dashboard">R$ {totalReceitas.toFixed(2)}</p>
        </div>
        <div className="nova-despesas">
          <h3 className="subtitulo-dashboard">Total de Despesas</h3>
          <p className="valor-dashboard">R$ {totalDespesas.toFixed(2)}</p>
        </div>
        <div className="novo-saldo">
          <h3 className="subtitulo-dashboard">Saldo Disponível</h3>
          <p className="valor-dashboard">R$ {saldo.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
