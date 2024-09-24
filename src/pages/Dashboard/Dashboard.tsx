import React, { useContext } from 'react';
import { FinanceContext } from '../../context/FinanceContext';
import Grafico from '../../Components/Grafico/Grafico'; 
import './Dashboard.css';

const Dashboard: React.FC = () => {
  const context = useContext(FinanceContext);

  if (!context) {
    return <div>Loading...</div>; 
  }

  const { totalReceitas, totalDespesas, saldo } = context;

  
  const data = {
    labels: ['Receitas', 'Despesas'],
    datasets: [
      {
        label: 'Valores',
        data: [totalReceitas, totalDespesas],
        backgroundColor: ['#42A5F5', '#EF5350'], 
      },
    ],
  };

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
      <Grafico data={data} /> {}
    </div>
  );
};

export default Dashboard;
