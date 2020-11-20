import React from "react";
import "./_styles.scss";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content flex">
          <img src={logo} alt="" />
        </div>
        <p>123456, Санкт-Петербург, Невский пр-кт 127</p>
        <Link href="#">sales@log.ru</Link>
        <span>+7 (812) 344-56-65</span>
        <span>+7 (812) 344-56-65</span>
        <Link>Разработано - D-E-N.ru</Link>
      </div>
    </footer>
  );
};

export default Footer;
