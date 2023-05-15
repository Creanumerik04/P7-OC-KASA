import "../styles/Header.css"
import logo from "../assets/LOGO.svg"

function Header(){
    return <div className="header">
        <img src={logo} alt="Kasa" className="logo-header" />
        <nav className="navigation">
        <a href="index.html" className="link-header accueil">Accueil</a>
        <a href="contact.html" className="link-header">A propos</a>
    </nav>
    </div>
}

export default Header