import { useState } from "react";
import { Link } from "react-router-dom";
import "./Auth.css";
import axios from "axios";

export default function Signup() {
  const [name, setName] = useState("");
  const [lname, setLname] = useState("");
  const [codigo, setCodigo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mesagge, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    //console.log("Signup:", { name, lname, email, password });

    try {
      const response = await axios.post(
        "https://roble-api.openlab.uninorte.edu.co/auth/:dbName",
        {
          name: name,
          lname: lname,
          codigo: codigo,
          email: email,
          password: password,
        }
      );

      setMessage(response.data.mesagge + ". Ahora puedes iniciar sesión.");
    } catch (error) {
      const errorMsg =
        error.response?.data?.detail || "Error al conectar con el servidor.";
      setMessage(errorMsg);
    }
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
        <input
          type="text"
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}
          required
        />

        <label>Correo electrónico</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="ejemplo123@uninorte.edu.co"
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
        <p style={{ color: "black" }}>{mesagge}</p>

        <p className="auth-link">
          ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
        </p>
      </form>
    </div>
  );
}
