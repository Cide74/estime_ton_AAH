import React from "react";
import { Link } from "react-router-dom";

//import "./style.scss";

const Footer = () => {
  //ecrire le code ici
  return (
    <div className="footer">
      <nav className="footer__nav">
        <ul className="footer__ul">
          <li className="footer__li">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="footer__li">
            <Link to="/about">A propos</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Footer;
