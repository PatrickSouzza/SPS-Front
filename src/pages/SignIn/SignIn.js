import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/input";
import { AuthService } from "../../services/AuthService";
import './SignIn.css';

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await AuthService.login(username, password);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Erro no login');
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="logo">
          <img src="/logo.png" alt="SPS Group" />
        </div>
        <h2>Login</h2>

        <form onSubmit={handleSubmit} className="login-form">
          <Input label="Email" value={username} onChange={e => setUsername(e.target.value)} />
          <Input label="Senha" type="password" value={password} onChange={e => setPassword(e.target.value)} />

          <button type="submit">Entrar</button>

          {error && <p className="error">{error}</p>}
        </form>
      </div>
    </div>
  );
}
