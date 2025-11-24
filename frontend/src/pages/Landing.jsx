import "./Landing.css";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="landing-container">
      <header className="landing-header">
        <h1 className="landing-subtitle">Bienvenido a E-SQL</h1>
        <p className="landing-subtitile">Evaluador SQL en linea.</p>

        <div className="landing-buttons">
          <Link to="/login" className="landing-btn primary">
            Iniciar Sesión
          </Link>
          <Link to="/signup" className="landing-btn secondary">
            Registrarse
          </Link>
        </div>
      </header>
    </div>
  );
}
