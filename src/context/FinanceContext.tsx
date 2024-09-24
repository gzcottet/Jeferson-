// src/context/FinanceContext.tsx
import React, { createContext, useState, ReactNode } from 'react';

interface Receita {
  valor: number;
  detalhe: string;
}

interface Despesa {
  valor: number;
  detalhe: string;
}

interface FinanceContextType {
  receitas: Receita[];
  despesas: Despesa[];
  addReceita: (receita: Receita) => void;
  addDespesa: (despesa: Despesa) => void;
  totalReceitas: number;
  totalDespesas: number;
  saldo: number;
}

// Inicialização do contexto
export const FinanceContext = createContext<FinanceContextType | undefined>(undefined);

export const FinanceProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [receitas, setReceitas] = useState<Receita[]>([]);
  const [despesas, setDespesas] = useState<Despesa[]>([]);

  const addReceita = (receita: Receita) => {
    setReceitas([...receitas, receita]);
  };

  const addDespesa = (despesa: Despesa) => {
    setDespesas([...despesas, despesa]);
  };

  const totalReceitas = receitas.reduce((acc, curr) => acc + curr.valor, 0);
  const totalDespesas = despesas.reduce((acc, curr) => acc + curr.valor, 0);
  const saldo = totalReceitas - totalDespesas;

  return (
    <FinanceContext.Provider value={{ receitas, despesas, addReceita, addDespesa, totalReceitas, totalDespesas, saldo }}>
      {children}
    </FinanceContext.Provider>
  );
};
