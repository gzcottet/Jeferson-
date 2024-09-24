// src/components/Despesas/Despesas.tsx
import React, { useContext, useState } from 'react';
import { FinanceContext } from '../../context/FinanceContext'; 
import './Despesas.css';

const Despesas: React.FC = () => {
  const financeContext = useContext(FinanceContext);
  const [valor, setValor] = useState<number | ''>(''); 
  const [detalhe, setDetalhe] = useState(''); 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 
    if (valor && detalhe && financeContext) {
      financeContext.addDespesa({ valor: Number(valor), detalhe }); 
      setValor(''); 
      setDetalhe(''); 
    } else {
      alert('Por favor, preencha todos os campos!'); 
    }
  };

  return (
    <div className="despesas-container">
      <h2>Adicionar Despesa</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="number" 
          value={valor}
          onChange={(e) => setValor(Number(e.target.value))}
          placeholder="Valor da Despesa"
          required
        />
        <input 
          type="text" 
          value={detalhe}
          onChange={(e) => setDetalhe(e.target.value)}
          placeholder="Detalhe da Despesa"
          required
        />
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
};

export default Despesas;
