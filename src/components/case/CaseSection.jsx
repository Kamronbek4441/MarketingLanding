import React from "react";
import "./CaseSection.css";

const CaseSection = () => {
  return (
    <div className="casebody">
      <div className="caseSection">
        <div className="case1">
          <div className="caseover">
            <h2>Наши кейсы</h2>
          </div>
          <div className="caseover">
            <img src="/assets/caselogo.png" alt="" />
          </div>
        </div>
        <div className="line"></div>
        <div className="case2">
          <div className="case">
            <h2>За первый год работы 9 584 заявки</h2>
            <h2>по цене 1 350 руб / шт</h2>
            <h2>и +3% конверсии в продажу.</h2>
            <button>читайте кейс подробнее</button>
          </div>
          <div className="case">
            <h3>Задачи:</h3>
            <p>Увеличить конверсию в продажу</p>
            <p>Настроить стабильный поток заявок через интернет</p>
            <p>Ежемесячно выполнять план по лидам</p>
          </div>
          <div className="case">
            <h3>Работа:</h3>
            <p>Рекламный бюджет</p>
            <p>Визиты</p>
            <p>Заявки и звонки</p>
            <p>Продажи</p>
            <p>Сумма заказов</p>
          </div>
          <div className="case5">
            <p>1 480 000 руб</p>
            <p>43 370</p>
            <p>800</p>
            <p>40</p>
            <p>80 000 000 руб</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseSection;
