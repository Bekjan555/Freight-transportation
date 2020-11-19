import React from "react";
import "./_styles.scss";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about__content">
          <div className="row">
            <div className="col-6">
              <h2 className="title">О компании</h2>
              <p className="about__description">
                Lorem Ipsum - это текст-"рыба", часто используемый в печати и
                вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для
                текстов на латинице с начала XVI века. В то время некий
                безымянный печатник создал большую коллекцию размеров и форм
                шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem
                Ipsum не только успешно пережил без заметных изменений пять
                веков, но и перешагнул в электронный дизайн.
              </p>
            </div>
            <div className="col-6">
                <div className="about__item col-3"></div>
                <div className="about__item col-3"></div>
                <div className="about__item col-3"></div>
                <div className="about__item col-3"></div>
                <div className="about__item col-3"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
