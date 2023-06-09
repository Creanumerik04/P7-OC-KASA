import "./Header.css";
import logo from "../../assets/LOGO.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo orange Kasa" className="logoKasa" />
      <nav>
        <Link to="/" className="linkNav">
          Accueil
        </Link>
        <Link to="/about" className="linkNav">
          A propos
        </Link>
      </nav>
    </header>
  );
}
