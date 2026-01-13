import React from "react";
import "./ProblemsSection.css";

const ProblemsSection = () => {
  return (
    <section className="problems">
      <div className="problems-container">
        {/* LEFT COLUMN */}
        <div className="problems-column">
          <h3 className="problems-title">
            Много разрозненных<br />подрядчиков
          </h3>

          <ul className="problems-list">
            <li>
              <span className="arrow">→</span>
              Теряете время на их погружение в проект и коммуникациях
            </li>
            <li>
              <span className="arrow">→</span>
              Теряете деньги на дополнительном административном персонале
            </li>
            <li>
              <span className="arrow">→</span>
              Трудно найти профессионалов и проверить их компетенции
            </li>
            <li>
              <span className="arrow">→</span>
              Не знаете окупятся ли вложения в маркетинг
            </li>
            <li>
              <span className="arrow">→</span>
              Сложно ставить задачи и контролировать исполнение
            </li>
          </ul>
        </div>

        {/* RIGHT COLUMN */}
        <div className="problems-column">
          <h3 className="problems-title">
            Постоянно растут<br />планы продаж
          </h3>

          <ul className="problems-list">
            <li>
              <span className="arrow">→</span>
              Высокая конкуренция, нет понимания, как продавать дороже
            </li>
            <li>
              <span className="arrow">→</span>
              Длинный цикл сделки
            </li>
            <li>
              <span className="arrow">→</span>
              Не понятно как сформировать сильное предложение
            </li>
            <li>
              <span className="arrow">→</span>
              Какие каналы и инструменты эффективнее использовать
            </li>
            <li>
              <span className="arrow">→</span>
              Трудно эффективно использовать бюджет
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
