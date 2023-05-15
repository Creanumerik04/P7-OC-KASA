import "../styles/Banner.css"
import logo from "../assets/LOGO.svg"

function Banner(){
    return <div className="banner">
        <img src={logo} alt="Kasa" className="logo-banner"></img>
        <nav className="navigation">
        <a href="index.html" className="link-banner">Accueil</a>
        <a href="contact.html" className="link-banner">A propos</a>
    </nav>
    </div>
}

export default Banner