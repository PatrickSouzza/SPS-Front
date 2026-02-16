import React from "react";
import { useNavigate } from "react-router-dom";
import { AuthService } from "../../services/AuthService";
import './Home.css';
import { FaUsers, FaPlus, FaSignOutAlt } from "react-icons/fa"; 

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    AuthService.logout();
    navigate("/login");
  };

  return (
    <div className="home-page">
      <div className="home-card">
        <div className="logo">
          <img src="/logo.png" alt="SPS Group" />
        </div>

        <div className="button-list">
          <button onClick={() => navigate("/users")}>
            <FaUsers /> Active Users
          </button>
          <button onClick={() => navigate("/users/create")}>
            <FaPlus /> Create User
          </button>
          <button onClick={handleLogout} className="logout-btn">
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
