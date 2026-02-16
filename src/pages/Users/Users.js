import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserService from "../../services/UserService";
import HomeButton from "../../components/ButtonHome";
import "./Users.css";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function loadUsers() {
      setError("");
      try {
        const data = await UserService.list();
        setUsers(data);
      } catch (err) {
        console.error(err);
        if (err.response?.status === 403) {
          setError("Acesso negado: você não tem permissão para ver os usuários.");
        } else {
          setError("Erro ao carregar usuários.");
        }
      }
    }

    loadUsers();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Deseja realmente deletar este usuário?")) return;

    try {
      await UserService.delete(id);
      setUsers(users.filter(u => u.id !== id));
    } catch (err) {
      console.error(err);
      if (err.response?.status === 403) {
        setError("Acesso negado: você não tem permissão para deletar usuários.");
      } else {
        setError("Erro ao deletar usuário.");
      }
    }
  };

  return (
    <div className="users-wrapper">
      <HomeButton />
      <div className="users-card">
        <h1>Usuários</h1>

        {error ? (
          <p className="error">{error}</p>
        ) : (
          <table className="users-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.type}</td>
                  <td>
                    <button onClick={() => navigate(`/users/${user.id}`)}>Edit</button>
                    <button onClick={() => handleDelete(user.id)} className="delete-btn">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
