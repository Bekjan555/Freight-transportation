import React from "react";
import "./_styles.scss";
import aircraft from "../../assets/aircraft.svg";

const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <h2 className="title">услуги</h2>
        <div className="services__content">
          <div className="services__row row">
            <div className="services__item flex col-3">
              <div className="services__img">
                <img className="services__icon" src={aircraft} alt="" />
              </div>
              <h3 className="aircraft__title">Авиаперевозки</h3>
            </div>
            <div className="services__item flex col-3">
              <div className="services__img">
                <img className="services__icon" src={aircraft} alt="" />
              </div>
              <h3 className="aircraft__title">Авиаперевозки</h3>
            </div>
            <div className="services__item flex col-3">
              <div className="services__img">
                <img className="services__icon" src={aircraft} alt="" />
              </div>
              <h3 className="aircraft__title">Авиаперевозки</h3>
            </div>
            <div className="services__item flex col-3">
              <div className="services__img">
                <img className="services__icon" src={aircraft} alt="" />
              </div>
              <h3 className="aircraft__title">Авиаперевозки</h3>
            </div>
            <div className="services__item flex col-3">
              <div className="services__img">
                <img className="services__icon" src={aircraft} alt="" />
              </div>
              <h3 className="aircraft__title">Авиаперевозки</h3>
            </div>
            <div className="services__item flex col-3">
              <div className="services__img">
                <img className="services__icon" src={aircraft} alt="" />
              </div>
              <h3 className="aircraft__title">Авиаперевозки</h3>
            </div>
            <div className="services__item flex col-3">
              <div className="services__img">
                <img className="services__icon" src={aircraft} alt="" />
              </div>
              <h3 className="aircraft__title">Авиаперевозки</h3>
            </div>
            <div className="services__item flex col-3">
              <div className="services__img">
                <img className="services__icon" src={aircraft} alt="" />
              </div>
              <h3 className="aircraft__title">Авиаперевозки</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
