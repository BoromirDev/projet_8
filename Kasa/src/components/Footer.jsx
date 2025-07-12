import "./Footer.css";
import logo from "../assets/Logo.svg";

function Footer() {
  return (
    <footer>
      <div>
      <img src={logo} alt="Logo" className="logo-footer"/>
      <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;