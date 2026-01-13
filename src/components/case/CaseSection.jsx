import React from "react";
import "./CaseSection.css";

const CaseSection = () => {
  return (
    <section className="case-section">
      <div className="case-box">
        {/* HEADER */}
        <div className="case-header">
          <h3 className="case-title">Наши кейсы</h3>
          <img src="/assets/logo1.png" alt="logo" className="case-logo" />
        </div>

        {/* HR */}
        <div className="case-divider"></div>

        {/* CONTENT */}
        <div className="case-content">
          {/* LEFT */}
          <div className="case-left">
            <p className="big">
              За первый год работы <br />
              <strong>9 584 заявки</strong>
            </p>

            <p>
              по цене <strong>1 350 руб / шт</strong>
            </p>

            <p>
              и <strong>+3%</strong> конверсии <br />в продажу.
            </p>

            <button className="white-btn">
              ЧИТАЙТЕ КЕЙС ПОДРОБНЕЕ
            </button>
          </div>

          {/* MIDDLE */}
          <div className="case-middle">
            <h4>Задачи:</h4>
            <ul>
              <li>Увеличить конверсию в продажу</li>
              <li>Настроить стабильный поток заявок через интернет</li>
              <li>Ежемесячно выполнять план по лидам</li>
            </ul>
          </div>

          {/* RIGHT */}
          <div className="case-right">
            <h4>Работа:</h4>
            <div className="stats">
              <div><span>Рекламный бюджет</span><b>1 480 000 руб</b></div>
              <div><span>Визиты</span><b>43 370</b></div>
              <div><span>Заявки и звонки</span><b>800</b></div>
              <div><span>Продажи</span><b>40</b></div>
              <div><span>Сумма заказов</span><b>80 000 000 руб</b></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseSection;
