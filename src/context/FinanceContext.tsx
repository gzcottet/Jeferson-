import React, { createContext, useState } from 'react';

interface Despesa {
  valor: number;
  detalhe: string;
}

interface Receita {
  valor: number;
  detalhe: string;
}

interface FinanceContextType {
  addDespesa: (despesa: Despesa) => void;
  addReceita: (receita: Receita) => void;
  totalReceitas: number;
  totalDespesas: number;
  saldo: number;
}

// Cria o contexto com um valor padrão indefinido
export const FinanceContext = createContext<FinanceContextType | undefined>(undefined);

export const FinanceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [despesas, setDespesas] = useState<Despesa[]>([]);
  const [receitas, setReceitas] = useState<Receita[]>([]);

  const addDespesa = (despesa: Despesa) => {
    setDespesas((prevDespesas) => [...prevDespesas, despesa]);
  };

  const addReceita = (receita: Receita) => {
    setReceitas((prevReceitas) => [...prevReceitas, receita]);
  };

  // Calcular totais
  const totalReceitas = receitas.reduce((total, receita) => total + receita.valor, 0);
  const totalDespesas = despesas.reduce((total, despesa) => total + despesa.valor, 0);
  const saldo = totalReceitas - totalDespesas;

  return (
    <FinanceContext.Provider value={{ addDespesa, addReceita, totalReceitas, totalDespesas, saldo }}>
      {children}
    </FinanceContext.Provider>
  );
};
