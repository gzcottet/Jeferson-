import React, { createContext, useState } from 'react';

interface FinanceContextType {
  addDespesa: (despesa: { valor: number; detalhe: string }) => void;
  addReceita: (receita: { valor: number; detalhe: string }) => void;
  totalReceitas: number;
  totalDespesas: number;
  saldo: number;
}

export const FinanceContext = createContext<FinanceContextType | undefined>(undefined);

export const FinanceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [despesas, setDespesas] = useState<{ valor: number; detalhe: string }[]>([]);
  const [receitas, setReceitas] = useState<{ valor: number; detalhe: string }[]>([]);

  const addDespesa = (despesa: { valor: number; detalhe: string }) => {
    setDespesas([...despesas, despesa]);
  };

  const addReceita = (receita: { valor: number; detalhe: string }) => {
    setReceitas([...receitas, receita]);
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
