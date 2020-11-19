import React from 'react';
import "./_styles.scss";
import Car1 from "../../assets/car-1.webp";
import { Link } from "react-router-dom";

const Transportation = () => {
    return (
        <section className="transportation">
            <div className="container">
                <div className="transportation__content">
                    <div className="transportation__left">
                        <h2 className="transportation__title title">
                        грузоперевозки по европе
                        </h2>
                        <p className="transportation__description description">
                        Страны Евросоюза, а также Украина, Белоруссия со всеми документами.
                        </p>
                        <Link className="transportation__link">
                            ПОДРОБНЕЕ
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Transportation;
