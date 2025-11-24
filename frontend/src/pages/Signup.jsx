import { useState } from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

export default function Signup() {
  const [name, setName] = useState("");
  const [lname, setLname] = useState("");
  const [codigo, setCodigo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup:", { name, lname, email, password });
  };

  return (
    <div className="auth-container">
      <form className="auth-box" onSubmit={handleSubmit}>
        <h2>Crear Cuenta</h2>

        <div
          style={{
            display: "flex",
            gap: "15px",
          }}
        >
          <div>
            <label>Nombres</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Apellidos</label>
            <input
              type="text"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
              required
            />
          </div>
        </div>

        <label>Código estudiantil</label>
        <input type="text"
        value={codigo}
        onChange={(e) => setCodigo(e.target.value)}
        required
        />

        <label>Correo electrónico</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Contraseña</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="auth-btn">
          Registrarse
        </button>

        <p className="auth-link">
          ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
        </p>
      </form>
    </div>
  );
}
