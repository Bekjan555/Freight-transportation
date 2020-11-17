import React from 'react';
import './_styles.scss';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.svg"


const header = () => {
    return (
        <header className="header">
            <div className="header__top">
                <div className="container">
                    <div className="header__top__left">
                        <a href="" className="header__top__language"></a>
                        <a href="" className="header__top__language"></a>
                        <a href="" className="header__top__language"></a>
                    </div>
                    <span className="header__top__number">8 (800) 123-45-67</span>
                    <a href="#" className="header__top__link">sales@log.ru</a>
                </div>
            </div>
            <div className="header__bottom">
                <div className="container">
                    <div className="header__bottom__left">
                        
                    </div>
                    <nav className="header__bottom__nav nav">
                        <ul className="nav__menu">
                            <li className="nav__item"><Link to="#" className="nav__link">услуги</Link></li>
                            <li className="nav__item"><Link to="#" className="nav__link">О компании</Link></li>
                            <li className="nav__item"><Link to="#" className="nav__link">вакансии</Link></li>
                            <li className="nav__item"><Link to="#" className="nav__link">контакты</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default header;
