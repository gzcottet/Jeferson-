// src/components/Despesas/Despesas.tsx
import React, { useState } from 'react';
import './Despesas.css';

interface Transaction {
  id: number;
  description: string;
  amount: number;
  type: 'receita' | 'despesa';
}

interface DespesasProps {
  transactions: Transaction[];
  setTransactions: React.Dispatch<React.SetStateAction<Transaction[]>>;
}

const Despesas: React.FC<DespesasProps> = ({ transactions, setTransactions }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState<number>(0);

  const addDespesa = (e: React.FormEvent) => {
    e.preventDefault();
    const newDespesa: Transaction = {
      id: Date.now(),
      description,
      amount,
      type: 'despesa',
    };
    setTransactions([...transactions, newDespesa]);
    setDescription('');
    setAmount(0);
  };

  const deleteDespesa = (id: number) => {
    setTransactions(transactions.filter(t => t.id !== id));
  };

  const despesas = transactions.filter(t => t.type === 'despesa');

  return (
    <div className="despesas-container">
      <h2>Despesas</h2>
      <form onSubmit={addDespesa}>
        <input
          type="text"
          placeholder="Descrição"
          value={description}
          onChange={e => setDescription(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={e => setAmount(Number(e.target.value))}
          required
        />
        <button type="submit">Adicionar Despesa</button>
      </form>
      <ul>
        {despesas.map(despesa => (
          <li key={despesa.id}>
            {despesa.description} - R${despesa.amount}
            <button onClick={() => deleteDespesa(despesa.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Despesas;
