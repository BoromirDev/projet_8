import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../assets/Logo.svg";

function Header() {
  return (
    <header>
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <nav>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/a-propos">À Propos</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;