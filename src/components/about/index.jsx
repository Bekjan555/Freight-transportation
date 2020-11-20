import React from "react";
import "./_styles.scss";
import car2 from "../../assets/car-2.webp";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about__content">
          <div className="about__row row">
            <div className="col-5">
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
            <div className="about__list row">
              <div className="about__item flex-align-center">
                <h3 className="text-big">48</h3>
                <p className="text-medium">офисов</p>
                <span className="text-small">В Европе и СНГ</span>
              </div>
              <div className="about__item flex-align-center">
                <h3 className="text-big">361</h3>
                <p className="text-medium">грузовиков</p>
                <span className="text-small">Volvo, Scania</span>
              </div>
              <div className="about__item flex-align-center">
                <img src={car2} alt="" />
              </div>
              <div className="about__item flex-align-center">
                <img src={car2} alt="" />
              </div>
              <div className="about__item flex-align-center">
                <h3 className="text-big">1500</h3>
                <p className="text-medium">сотрудников</p>
                <span className="text-small">профессионалов</span>
              </div>
            </div>
          </div>
          <div className="block">
              
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
