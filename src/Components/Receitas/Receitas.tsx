// src/components/Receita/Receita.tsx
import React, { useContext, useState } from 'react';
import { FinanceContext } from '../../context/FinanceContext'; 
import './Receita.css';

const Receita: React.FC = () => {
  const financeContext = useContext(FinanceContext); 
  const [valor, setValor] = useState<number | ''>(''); 
  const [detalhe, setDetalhe] = useState(''); 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 
    if (valor && detalhe && financeContext) {
      financeContext.addReceita({ valor: Number(valor), detalhe }); 
      setValor(''); 
      setDetalhe(''); 
    } else {
      alert('Por favor, preencha todos os campos!'); 
    }
  };

  return (
    <div className="nova-receita-container">
      <h2 className="titulo-receita">Controle de Receitas</h2>
      <p className="descricao-receita">Registre suas receitas do mês para monitorar sua renda:</p>
      <form className="form-receita" onSubmit={handleSubmit}>
        <label className="label-receita">Valor da Receita:</label>
        <input 
          type="number" 
          className="input-receita" 
          placeholder="Ex: 2000.00" 
          value={valor} 
          onChange={(e) => setValor(Number(e.target.value))} 
        />
        <label className="label-receita">Detalhe da Receita:</label>
        <input 
          type="text" 
          className="input-receita" 
          placeholder="Ex: Salário" 
          value={detalhe} 
          onChange={(e) => setDetalhe(e.target.value)} 
        />
        <button type="submit" className="botao-receita">Registrar Receita</button>
      </form>
    </div>
  );
};

export default Receita;
