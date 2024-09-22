// src/pages/Login/Login.tsx
import React from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Aqui você implementaria a lógica de autenticação
    // Após autenticar, redirecionar para o dashboard
    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <button onClick={handleLogin}>Login com Google</button>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Senha" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
