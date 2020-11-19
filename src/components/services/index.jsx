import React from 'react';
import "./_styles.scss";
import aircraft from "../../assets/aircraft.svg";


const Services = () => {
    return (
        <section className="services">
            <div className="container">
                <h2 className="services__title title">
                    услуги
                </h2>
                <div className="services__content">
                    <div className="services__row row">
                        <div className="col-3"> <img src={aircraft} alt=""/><h3 className="aircraft__title"></h3></div>
                        <div className="col-3"> <img src={aircraft} alt=""/></div>
                        <div className="col-3"> <img src={aircraft} alt=""/></div>
                        <div className="col-3"> <img src={aircraft} alt=""/></div>
                        <div className="col-3"> <img src={aircraft} alt=""/></div>
                        <div className="col-3"> <img src={aircraft} alt=""/></div>
                        <div className="col-3"> <img src={aircraft} alt=""/></div>
                        <div className="col-3"> <img src={aircraft} alt=""/></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;
