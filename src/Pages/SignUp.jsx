import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Auth.css"; // Import CSS
import API from "../Api/axios";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // const handleSignup = (e) => {
  //   e.preventDefault(); // Prevent page reload
  //   console.log("Name:", name);
  //   console.log("Email:", email);
  //   console.log("Password:", password);
  //   //  setMessage("Signup Successful!"); // Dummy success message
  // };
  const handleSignup = async (e) => {
    e.preventDefault(); // Prevent page reload

    try {
      const response = await API.post("/signup", { name, email, password });

      // ✅ Show success message in an alert
      alert(response.data.message);

      // ✅ Clear input fields
      setName("");
      setEmail("");
      setPassword("");

      // ✅ Redirect to Login Page
      window.location.href = "/login"; // Or use React Router
    } catch (error) {
      alert("Signup failed! Try again."); // Show error alert
      console.error(error);
    }
  };

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
