import React from "react";
import "./ZoomSection.css";

const ZoomSection = () => {
  return (
    <section className="zoom-section">
      <div className="container">
        {/* Left */}
        <div className="left">
          <h2>Хотите такой результат?</h2>
          <p className="subtitle">Есть два варианта первого шага:</p>

          <div className="item">
            <div className="number">1</div>
            <div className="content">
              <p>
                Закажите аудит маркетинга по свободной цене. Мы найдём для вас
                точки роста и вы самостоятельно оцените работу.
              </p>
              <button className="btn">ЗАКАЗАТЬ АУДИТ</button>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="right">
          <div className="zoom-logo"><img src="/assets/zoom.jpg" alt="" /></div>

          <div className="item">
            <div className="number">2</div>
            <div className="content">
              <p>
                Запишитесь на zoom-консультацию. Составим дорожную карту с
                планом действий и расчётами.
              </p>
              <button className="btn">ЗАПИСАТЬСЯ НА ZOOM</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZoomSection;
