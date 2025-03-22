import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const ProtectedRoutes = ({ element, allowedRoles }) => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" />; // ✅ Redirect if not logged in
  if (!allowedRoles.includes(user.role)) return <Navigate to="/User" />; // Redirect unauthorized users

  return element;
};

export default ProtectedRoutes; // ✅ Ensure it's a default export
