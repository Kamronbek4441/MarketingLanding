import React from "react";
import "./ZoomSection.css";

const ZoomSection = () => {
  return (
    <div className="zoomsection">
      <div className="zoom">
        <h1>Хотите такой результат?</h1>
        <h3>Есть два варианта первого шага:</h3>
        <div className="textnumber">
          <img src="/assets/z1.png" alt="" />
          <p>
            Закажите аудит маркетинга по свободной цене. Мы найдем для вас точки
            роста и вы самостоятельно оцените работу.
          </p>
        </div>
        <button>заказать аудит</button>
      </div>
      <div className="zoom">
        <img src="/assets/zoom.png" alt="" />
        <div className="textnumber">
          <img src="/assets/z2.png" alt="" />
          <p>
            Запишитесь на zoom-консультацию. Составим дорожную карту с планом
            действий и расчетами. 
          </p>
        </div>
        <button>записаться на zoom</button>
      </div>
    </div>
  );
};

export default ZoomSection;
