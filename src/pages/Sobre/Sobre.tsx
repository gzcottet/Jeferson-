// src/pages/Sobre/Sobre.tsx
import React from 'react';
import './Sobre.css';

const Sobre: React.FC = () => {
  return (
    <>
      <div className="sobre-container top-left">
        <h1>Sobre Nós</h1>
        <p>
          Bem-vindo ao Gerenciador de Orçamento Pessoal! Esta aplicação foi criada para ajudar você a
          gerenciar suas finanças de forma eficiente e intuitiva, permitindo um controle detalhado de
          suas receitas e despesas.
        </p>
      </div>

      <div className="sobre-container top-right">
        <h2>Quem Somos</h2>
        <p>
          O Gerenciador de Orçamento Pessoal foi desenvolvido por Guilherme Zantto, com o objetivo de
          proporcionar uma ferramenta simples e eficaz para o controle de renda e despesas mensais. Nossa
          missão é tornar a gestão financeira acessível a todos.
        </p>
      </div>

      <div className="sobre-container bottom-left">
        <h2>Contato</h2>
        <p>
          Para mais informações ou suporte, entre em contato conosco:
        </p>
      </div>

      <div className="sobre-container bottom-right">
        <ul>
          <li>Email: guilhermecottet36@gmail.com</li>
          <li>Whatsapp: (42) 99864-5414</li>
        </ul>
      </div>
    </>
  );
};

export default Sobre;
