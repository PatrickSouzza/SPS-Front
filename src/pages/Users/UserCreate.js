import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserService from "../../services/UserService";
import HomeButton from "../../components/ButtonHome";
import './UserCreate.css';

export default function CreateUser() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("user");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !password) {
      setError("Preencha todos os campos");
      return;
    }

    try {
      await UserService.create({ name, email, type: role, password });
      navigate("/users");
    } catch (err) {
      console.error(err.response?.data);
      if (err.response && err.response.status === 403) {
        setError("Você não tem permissão para criar usuários");
      } else {
        setError(err.response?.data?.message || "Erro ao criar usuário");
      }
    }
  };

  return (
    <div className="create-user-wrapper">
      <HomeButton />
      <div className="create-user-card">
        <h2>Criar Usuário</h2>
        <form onSubmit={handleSubmit}>
          {error && <p className="error">{error}</p>}

          <label>Nome:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label>Role:</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>

          <button type="submit">Salvar</button>
        </form>
      </div>
    </div>
  );
}
