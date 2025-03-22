import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css"; // Import CSS
import API, { googleLogin } from "../Api/axios";
import { useAuth } from "../Context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const { login } = useAuth(); //  Get login function from context

  const navigate = useNavigate(); // Navigation hook
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post("/login", { email, password });

      const { token, role, message } = response.data;

      login(token, role); // Use AuthContext login function

      alert(message); // Show success message
      setEmail("");
      setPassword("");

      // Navigate based on role
      if (role === "admin") navigate("/Admin");
      else if (role === "manager") navigate("/Manager");
      else navigate("/User");
    } catch (error) {
      console.error("❌ Login Error:", error.response?.data || error);
      alert(error.response?.data?.message || "Login failed! Try again.");
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form className="auth-form" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
      <button type="button" className="google-login-btn" onClick={googleLogin}>
        Login with Google
      </button>
    </div>
  );
};

export default Login;
