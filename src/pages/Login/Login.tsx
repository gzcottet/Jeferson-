import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redireciona para a página de Despesas
    navigate('/despesas');
  };

  return (
    <div>
      <div className="navbar">
        <h1>Gerenciador de Orçamento</h1>
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/dashboard">Dashboard</a>
          <a href="/sobre">Sobre</a>
          <a href="/login">Login</a>
        </div>
      </div>
      <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
