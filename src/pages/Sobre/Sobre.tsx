// src/pages/Sobre/Sobre.tsx
import React from 'react';
import './Sobre.css';

const Sobre: React.FC = () => {
  return (
    <div className="sobre-container">
      <h1>Sobre Nós</h1>
      <p>
        Bem-vindo ao Gerenciador de Orçamento Pessoal! Esta aplicação foi criada para ajudar você a
        gerenciar suas finanças de forma eficiente e intuitiva.
      </p>
      <h2>Quem Somos</h2>
      <p>
        O Gerenciador de Orçamento Pessoal foi desenvolvido por Gustavo Delfino, com o objetivo de
        proporcionar uma ferramenta simples e eficaz para o controle de renda e despesas mensais.
      </p>
      <h2>Contato</h2>
      <p>
        Para mais informações ou suporte, entre em contato conosco:
      </p>
      <ul>
        <li>Email: gmdelfino@minha.fag.edu.br</li>
        <li>Telefone: (45) 988282546</li>
      </ul>
    </div>
  );
};

export default Sobre;

