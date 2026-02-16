import React, { useState, useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import UserService from "../../services/UserService";
import HomeButton from "../../components/ButtonHome";
import './UserCreate.css';

export function userLoader({ params }) {
  return { userId: params.userId };
}

export default function EditUser() {
  const { userId } = useLoaderData();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("user");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadUser() {
      setError("");
      try {
        const data = await UserService.get(userId);
        setName(data.name);
        setEmail(data.email);
        setRole(data.type);
      } catch (err) {
        console.error(err);
        setError(err.response?.data?.message || "Erro ao carregar usuário");
      }
    }

    loadUser();
  }, [userId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!name || !email) {
      setError("Preencha todos os campos");
      return;
    }

    try {
      await UserService.update(userId, { name, email, type: role, password });
      navigate("/users");
    } catch (err) {
      console.error(err.response?.data);
      if (err.response && err.response.status === 403) {
        setError("Você não tem permissão para editar usuários");
      } else {
        setError(err.response?.data?.message || "Erro ao atualizar usuário");
      }
    }
  };

  return (
    <div className="create-user-wrapper">
      <HomeButton />
      <div className="create-user-card">
        <h2>Editar Usuário</h2>

        {error && <p className="error">{error}</p>}

        <form onSubmit={handleSubmit}>
          <label>Nome:</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} />

          <label>Email:</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} />

          <label>Role:</label>
          <select value={role} onChange={e => setRole(e.target.value)}>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>

          <button type="submit">Salvar</button>
        </form>
      </div>
    </div>
  );
}
