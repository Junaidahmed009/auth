import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    const role = params.get("role");

    if (token && role) {
      // ✅ Save token in localStorage or sessionStorage
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);

      // ✅ Redirect based on role
      if (role === "admin") {
        navigate("/Admin");
      } else {
        navigate("/User");
      }
    } else {
      navigate("/");
    }
  }, [navigate]);

  return <div>Authenticating...</div>;
};

export default AuthSuccess;
