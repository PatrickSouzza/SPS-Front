import { Navigate } from "react-router-dom";
import { AuthService } from "../services/AuthService";

export default function PrivateRoute({ children }) {
    
  return AuthService.isLoggedIn() ? children : <Navigate to="/login" />;
}
