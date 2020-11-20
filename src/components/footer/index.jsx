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
            <div className="footer__info">
                <p>123456, Санкт-Петербург, Невский пр-кт 127</p>
            <Link className="footer__link" href="#">sales@log.ru</Link>
            </div>
          <div className="footer__connection flex">
                <span>+7 (812) 344-56-65</span>
                <span>+7 (812) 344-56-65</span>
          </div>
          <Link className="footer__link ">Разработано - D-E-N.ru</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
