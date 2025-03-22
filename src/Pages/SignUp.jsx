import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Auth.css"; // Import CSS
import API from "../Api/axios";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = async (e) => {
    // preventDefault() stops the reload, so you can handle submission using JavaScript instead.
    e.preventDefault();

    try {
      const response = await API.post("/signup", { name, email, password });
      alert(response.data.message);
      setName("");
      setEmail("");
      setPassword("");
      window.location.href = "/login"; // Or use React Router
    } catch (error) {
      alert("Signup failed! Try again."); // Show error alert
      console.error(error);
    }
  };
  //A form is a box where users enter information (like name, email, password) and send it to the server.
  return (
    <div className="auth-container">
      <h2>Signup</h2>
      <form className="auth-form" onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
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
        <button type="submit">Signup</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default SignUp;
