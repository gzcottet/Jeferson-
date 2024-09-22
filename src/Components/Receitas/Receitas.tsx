// src/components/Receitas/Receitas.tsx
import React, { useState } from 'react';
import './Receitas.css';

interface Transaction {
  id: number;
  description: string;
  amount: number;
  type: 'receita' | 'despesa';
}

interface ReceitasProps {
  transactions: Transaction[];
  setTransactions: React.Dispatch<React.SetStateAction<Transaction[]>>;
}

const Receitas: React.FC<ReceitasProps> = ({ transactions, setTransactions }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState<number>(0);

  const addReceita = (e: React.FormEvent) => {
    e.preventDefault();
    const newReceita: Transaction = {
      id: Date.now(),
      description,
      amount,
      type: 'receita',
    };
    setTransactions([...transactions, newReceita]);
    setDescription('');
    setAmount(0);
  };

  const deleteReceita = (id: number) => {
    setTransactions(transactions.filter(t => t.id !== id));
  };

  const receitas = transactions.filter(t => t.type === 'receita');

  return (
    <div className="receitas-container">
      <h2>Receitas</h2>
      <form onSubmit={addReceita}>
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
        <button type="submit">Adicionar Receita</button>
      </form>
      <ul>
        {receitas.map(receita => (
          <li key={receita.id}>
            {receita.description} - R${receita.amount}
            <button onClick={() => deleteReceita(receita.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Receitas;
