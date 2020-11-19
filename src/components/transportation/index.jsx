import React from "react";
import "./_styles.scss";
import Car1 from "../../assets/car-1.webp";
import { Link } from "react-router-dom";
import arrowPrev from "../../assets/arrow-prev.svg";
import arrowNext from "../../assets/arrow-next.svg";

const Transportation = () => {
  return (
    <section className="transportation">
      <div className="container">
        <div className="transportation__content flex">
          <div className="transportation__left col-3 row">
            <h2 className="transportation__title title">
              грузоперевозки по европе
            </h2>
            <p className="transportation__description description">
              Страны Евросоюза, а также Украина, Белоруссия со всеми
              документами.
            </p>
            <Link className="transportation__link">ПОДРОБНЕЕ</Link>
          </div>
          <div className="transportation__right">
            <img src={Car1} alt="" />
            <button className="transportation__arrow arrow__next">
                след <img className="arrow__img__next " src={arrowNext} alt=""/>
            </button>
            <button className="transportation__arrow arrow__prev">
                <img className="arrow__img__prev" src={arrowPrev} alt=""/> Назад 
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transportation;
