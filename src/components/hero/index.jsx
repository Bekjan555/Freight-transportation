import React from 'react';
import "./_styles.scss";
import mouse from  "../../assets/mouse.svg";


const  Hero = () => {
    return (
        <section className="hero flex">
            <div className="container">
                <div className="hero__box flex">
                    <h1 className="box__title">
                    Грузовые перевозки
                    </h1>
                    <p className="box__description">
                    Перевозка крупногабаритных грузов по России и Европе. Полное экспедирование, страхование, упаковка и хранение грузов
                    </p>
                </div>
                <img src={mouse} alt="" className="hero__mouse"/>
            </div>
        </section>
    )
}

export default Hero;
