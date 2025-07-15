// src/components/AdminRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/auth";

const AdminRoute = ({ children }) => {
  const [auth] = useAuth();

  const isAdmin = auth?.user?.email?.toLowerCase() === "admin@gmail.com";

  return isAdmin ? children : <Navigate to="/" replace />;
};

export default AdminRoute;
