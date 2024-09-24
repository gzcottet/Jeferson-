import React, { createContext, useState, ReactNode } from 'react';

// Definindo a interface para o contexto
interface FinanceContextType {
  receitas: { valor: number; detalhe: string }[];
  despesas: { valor: number; detalhe: string }[];
  addReceita: (receita: { valor: number; detalhe: string }) => void;
  addDespesa: (despesa: { valor: number; detalhe: string }) => void;
  totalReceitas: number;
  totalDespesas: number;
  saldo: number;
}

// Criando o contexto
export const FinanceContext = createContext<FinanceContextType | undefined>(undefined);

interface Props {
  children: ReactNode;
}

export const FinanceProvider: React.FC<Props> = ({ children }) => {
  const [receitas, setReceitas] = useState<{ valor: number; detalhe: string }[]>([]);
  const [despesas, setDespesas] = useState<{ valor: number; detalhe: string }[]>([]);

  const addReceita = (receita: { valor: number; detalhe: string }) => {
    setReceitas((prev) => [...prev, receita]);
  };

  const addDespesa = (despesa: { valor: number; detalhe: string }) => {
    setDespesas((prev) => [...prev, despesa]);
  };

  const totalReceitas = receitas.reduce((total, receita) => total + receita.valor, 0);
  const totalDespesas = despesas.reduce((total, despesa) => total + despesa.valor, 0);
  const saldo = totalReceitas - totalDespesas;

  return (
    <FinanceContext.Provider value={{ receitas, despesas, addReceita, addDespesa, totalReceitas, totalDespesas, saldo }}>
      {children}
    </FinanceContext.Provider>
  );
};
