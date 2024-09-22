// src/pages/Dashboard/Dashboard.tsx
import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

interface Transaction {
  id: number;
  description: string;
  amount: number;
  type: 'receita' | 'despesa';
}

const Dashboard: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [description, setDescription] = useState<string>('');
  const [amount, setAmount] = useState<number>(0);
  const [type, setType] = useState<'receita' | 'despesa'>('receita');
  const [totalReceitas, setTotalReceitas] = useState<number>(0);
  const [totalDespesas, setTotalDespesas] = useState<number>(0);
  const [saldo, setSaldo] = useState<number>(0);

  useEffect(() => {
    // Carregar dados do Local Storage ao iniciar
    const dados = localStorage.getItem('transactions');
    if (dados) {
      setTransactions(JSON.parse(dados));
    }
  }, []);

  useEffect(() => {
    // Salvar dados no Local Storage sempre que transactions mudar
    localStorage.setItem('transactions', JSON.stringify(transactions));

    // Calcular totais
    const receitas = transactions
      .filter(t => t.type === 'receita')
      .reduce((acc, curr) => acc + curr.amount, 0);
    const despesas = transactions
      .filter(t => t.type === 'despesa')
      .reduce((acc, curr) => acc + curr.amount, 0);
    setTotalReceitas(receitas);
    setTotalDespesas(despesas);
    setSaldo(receitas - despesas);
  }, [transactions]);

  const addTransaction = (e: React.FormEvent) => {
    e.preventDefault();
    if (description.trim() === '' || amount <= 0) {
      alert('Por favor, preencha todos os campos corretamente.');
      return;
    }
    const newTransaction: Transaction = {
      id: Date.now(),
      description,
      amount,
      type,
    };
    setTransactions([...transactions, newTransaction]);
    setDescription('');
    setAmount(0);
  };

  const deleteTransaction = (id: number) => {
    const updatedTransactions = transactions.filter(t => t.id !== id);
    setTransactions(updatedTransactions);
  };

  // Dados para o gráfico
  const data = [
    { name: 'Receitas', value: totalReceitas },
    { name: 'Despesas', value: totalDespesas },
  ];

  const COLORS = ['#4caf50', '#ff4d4d'];

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <div className="resumo">
        <div className="resumo-item">
          <h3>Total de Receitas</h3>
          <p>R$ {totalReceitas.toFixed(2)}</p>
        </div>
        <div className="resumo-item">
          <h3>Total de Despesas</h3>
          <p>R$ {totalDespesas.toFixed(2)}</p>
        </div>
        <div className="resumo-item saldo">
          <h3>Saldo</h3>
          <p>R$ {saldo.toFixed(2)}</p>
        </div>
      </div>

      <div className="formulario">
        <h2>Adicionar Transação</h2>
        <form onSubmit={addTransaction}>
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
          <select value={type} onChange={e => setType(e.target.value as 'receita' | 'despesa')}>
            <option value="receita">Receita</option>
            <option value="despesa">Despesa</option>
          </select>
          <button type="submit">Adicionar</button>
        </form>
      </div>

      <div className="lista-transacoes">
        <h2>Transações</h2>
        {transactions.length === 0 ? (
          <p>Nenhuma transação adicionada.</p>
        ) : (
          <ul>
            {transactions.map(transaction => (
              <li key={transaction.id} className={transaction.type}>
                <span>{transaction.description}</span>
                <span>R$ {transaction.amount.toFixed(2)}</span>
                <button onClick={() => deleteTransaction(transaction.id)}>Excluir</button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="grafico">
        <h2>Distribuição de Receitas e Despesas</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip formatter={(value: number) => `R$ ${value.toFixed(2)}`} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
