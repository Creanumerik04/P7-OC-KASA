import "../styles/Header.css";
import logo from "../assets/LOGO.svg";

export default function Header() {
    return (
        <div className="header">
            <nav>
                <img src={logo} alt="Logo orange Kasa" className="logo_kasa" />
                <section className="navbar">
                    
                </section>
            </nav>
        </div>
    )
}
