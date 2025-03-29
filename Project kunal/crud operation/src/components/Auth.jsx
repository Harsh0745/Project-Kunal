import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/api";
import "../styles.css";

const Auth = () => {
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("cityslicka");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await login(email, password);
      localStorage.setItem("token", data.token);
      navigate("/users");
    } catch (err) {
      setError(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleLogin}>
        <input type="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
        <button className="login-btn" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Auth;
