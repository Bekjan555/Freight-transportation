import React from "react";
import "./_styles.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import location from "../../assets/location.svg"

const Header = () => {
  return (
    <header className="header">
      <div className="header__top">
        <div className="container">
          <div className="header__top__wrapper flex">
            <div className="header__top__left flex">
              <a href="" className="header__top__language">
                РУС
              </a>
              <a href="" className="header__top__language">
                ENG
              </a>
              <a href="" className="header__top__language">
                FR
              </a>
            </div>
            <span className="header__top__number">8 (800) 123-45-67</span>
            <a href="#" className="header__top__link">
              sales@log.ru
            </a>
          </div>
        </div>
      </div>
      <div className="header__bottom">
        <div className="container">
          <div className="header__bottom__wrapper flex">
            <div className="header__bottom__left flex">
              <img src={logo} alt="" />
              <img src={location} alt="" />
              <p className="header__bottom__left__text">Наши офисы</p>
            </div>
            <nav className="header__bottom__nav nav">
              <ul className="nav__menu flex">
                <li className="nav__item">
                  <Link to="#" className="nav__link">
                    услуги
                  </Link>
                </li>
                <li className="nav__item">
                  <Link to="#" className="nav__link">
                    О компании
                  </Link>
                </li>
                <li className="nav__item">
                  <Link to="#" className="nav__link">
                    вакансии
                  </Link>
                </li>
                <li className="nav__item">
                  <Link to="#" className="nav__link">
                    контакты
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
