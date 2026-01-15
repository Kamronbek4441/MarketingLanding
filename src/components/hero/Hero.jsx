import React from "react";
import "./Hero.css"

const Hero = () => {
  return (
    <div className="herosection" style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('/assets/buildings.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
      <div className="hero">
        <h3>МАРКЕТИНГ И АУТСОРСИНГ</h3>
        <h1>Привлечение клиентов на покупку недвижимости</h1>
        <h2>для застройщиков | строительных компаний | агентств</h2>
        <div className="imgtext5">
          <img src="/assets/arrowhero.png" alt="" />
          <h2>
            от 500 новых заявок и звонков в месяц <br /> наш средний результат в нише
          </h2>
        </div>
        <div className="btntext">
          <button>получить план</button>
          <h3>
            Ответьте на 7 вопросов за 2 минуты <br /> и получите четкий план действий <br /> с
            расчетами на zoom-консультации 
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Hero;
