import React, { useContext, useState } from 'react';
import { FinanceContext } from '../../context/FinanceContext';
import './Despesas.css';

const Despesas: React.FC = () => {
  const financeContext = useContext(FinanceContext);
  const [valor, setValor] = useState<string>(''); // Mudar para string
  const [detalhe, setDetalhe] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const valorNumber = Number(valor); // Converter o valor apenas no momento da submissão

    if (valorNumber > 0 && detalhe && financeContext) {
      financeContext.addDespesa({ valor: valorNumber, detalhe });
      setValor('');
      setDetalhe('');
    } else {
      alert('Por favor, preencha todos os campos corretamente!');
    }
  };

  return (
    <div className="despesas-container">
      <h2 className="titulo-despesas">Adicionar Despesas</h2>
      <p className="descricao-despesas">Preencha os detalhes da despesa abaixo:</p>
      <form className="form-despesas" onSubmit={handleSubmit}>
        <label className="label-despesas">Valor da Despesa:</label>
        <input
          type="number"
          className="input-despesas"
          value={valor}
          onChange={(e) => setValor(e.target.value)} // Armazenar como string
          placeholder="Valor da Despesa"
        />
        <label className="label-despesas">Detalhe da Despesa:</label>
        <input
          type="text"
          className="input-despesas"
          value={detalhe}
          onChange={(e) => setDetalhe(e.target.value)}
          placeholder="Detalhe da Despesa"
        />
        <button type="submit" className="botao-despesas">Adicionar Despesa</button>
      </form>
    </div>
  );
};

export default Despesas;
