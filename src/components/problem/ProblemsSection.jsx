import React from "react";
import "./ProblemsSection.css";

const ProblemsSection = () => {
  return (
    <div className="problemsection">
      <div className="problem">
        <h1>Много разрозненных подрядчиков</h1>
        <div className="textarrow">
          <img src="/assets/arrow.png" alt="" />
          <p>Теряете время на их погружение в проект и коммуникациях.</p>
        </div>
        <div className="textarrow">
          <img src="/assets/arrow.png" alt="" />
          <p>Теряете деньги на дополнительном административном персонале</p>
        </div>
        <div className="textarrow">
          <img src="/assets/arrow.png" alt="" />
          <p>Трудно найти профессионалов, и проверить их компетенции</p>
        </div>
        <div className="textarrow">
          <img src="/assets/arrow.png" alt="" />
          <p>Не знаете окупятся ли вложения в маркетинг</p>
        </div>
        <div className="textarrow">
          <img src="/assets/arrow.png" alt="" />
          <p>Сложно ставить задачи и контролировать исполнение</p>
        </div>
      </div>
      <div className="problem">
        <h1>Постоянно растут планы продаж</h1>
        <div className="textarrow">
          <img src="/assets/arrow.png" alt="" />
          <p>Высокая конкуренция, нет понимания, как продавать дороже</p>
        </div>
        <div className="textarrow">
          <img src="/assets/arrow.png" alt="" />
          <p>Длинный цикл сделки</p>
        </div>
        <div className="textarrow">
          <img src="/assets/arrow.png" alt="" />
          <p>Не понятно как сформировать сильное предложение</p>
        </div>
        <div className="textarrow">
          <img src="/assets/arrow.png" alt="" />
          <p>Какие каналы и инструменты эффективнее использовать</p>
        </div>
        <div className="textarrow">
          <img src="/assets/arrow.png" alt="" />
          <p>Трудно эффективно использовать бюджет</p>
        </div>
      </div>
    </div>
  );
};

export default ProblemsSection;
