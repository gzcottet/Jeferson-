import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FinanceProvider } from './context/FinanceContext';
import Dashboard from './pages/Dashboard/Dashboard';
import Home from './pages/Home/Home';
import Sobre from './pages/Sobre/Sobre';
import Login from './pages/Login/Login';
import Despesas from './Components/Dixpesas/Despesas'; // Certifique-se de que está importando o componente correto
import './App.css';

const App: React.FC = () => {
  return (
    <FinanceProvider>
      <Router>
        <nav className="navbar">
          <h2 className="navbar-logo">Gerenciador de Orçamento</h2>
          <ul className="navbar-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/sobre">Sobre</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/login" element={<Login />} />
          <Route path="/despesas" element={<Despesas />} /> {/* Rota para a página de Despesas */}
        </Routes>
      </Router>
    </FinanceProvider>
  );
};

export default App;
