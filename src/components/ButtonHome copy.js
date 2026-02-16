import React from "react";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import "./ButtonHome.css";

export default function ButtonHome() {
  const navigate = useNavigate();

  return (
    <button className="btn-home" onClick={() => navigate("/")}>
      <FaHome size={20} /> Home
    </button>
  );
}
