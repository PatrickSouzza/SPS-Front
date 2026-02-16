import React, { useContext } from "react";
import { LoaderContext } from "../contexts/LoaderContext";
import './Loader.css';

export default function Loader() {
  const { loading } = useContext(LoaderContext);

  if (!loading) return null;

  return (
    <div className="loader-overlay">
      <div className="loader"></div>
    </div>
  );
}