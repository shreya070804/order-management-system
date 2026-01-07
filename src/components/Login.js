import React, { useState } from "react";
import "./Login.css";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    setLoading(true);

    // Simulate API delay
    setTimeout(() => {
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("userEmail", email);
      localStorage.setItem(
        "userRole",
        email.includes("admin") ? "ADMIN" : "USER"
      );

      setLoading(false);
      onLogin();
    }, 1200);
  };

  const toggleDarkMode = () => {
    const value = !darkMode;
    setDarkMode(value);
    localStorage.setItem("darkMode", value);
  };

  return (
    <div className={`login-page ${darkMode ? "dark" : ""}`}>
      <div className="login-card">
        <div className="login-header">
          <h2>Welcome Back 👋</h2>
          <button className="theme-btn" onClick={toggleDarkMode}>
            {darkMode ? "☀" : "🌙"}
          </button>
        </div>

        <p className="subtitle">Login to manage your orders</p>

        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="password-box">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "🙈" : "👁️"}
          </span>
        </div>

        <button onClick={handleLogin} disabled={loading}>
          {loading ? <span className="spinner"></span> : "Login"}
        </button>

        <div className="hint">
          <p>
            Admin → <b>admin@gmail.com</b>
          </p>
          <p>
            User → <b>user@gmail.com</b>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;