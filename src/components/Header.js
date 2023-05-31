import "../styles/Header.css";
import logo from "../assets/LOGO.svg";

export default function Header() {
    return (
        <header className="header">
            <img src={logo} alt="Logo orange Kasa" className="logo_kasa" />
            <nav>
                <a href="." className="linkNav accueil">Accueil</a>
                <a href="." className="linkNav">A propos</a>
            </nav>
        </header>
    )
}
