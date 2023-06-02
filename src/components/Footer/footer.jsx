import logo from "../../assets/LOGO-B&W.svg";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <img
        src={logo}
        alt="Logo kasa en noir et blanc"
        className="logo_footer"
      />
      <p className="footer_text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
