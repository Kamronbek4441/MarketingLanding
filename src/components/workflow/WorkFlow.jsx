import React from "react";
import "./WorkFlow.css";

const Workflow = () => {
  return (
    <section className="workflow">
      <div className="workflow-container">
        <h2 className="workflow-title">Как мы работаем?</h2>

        {/* TOP TEXT */}
        <div className="workflow-top">
          <div>
            <p>
              Изучаем структуру вашего бизнеса и анализируем
              ваше положение на рынке.
            </p>
          </div>
          <div>
            <p>
              Внедряем CRM-систему и аналитику
              для учета продаж и прибыли.
            </p>
          </div>
          <div>
            <p>
              Настраиваем рекламу в подходящих
              рекламных каналах. Контролируем
              бюджеты и окупаемость вложений.
            </p>
          </div>
        </div>

        {/* TIMELINE IMAGE */}
        <div className="workflow-image">
          <img src="/assets/numbers.jpg" alt="workflow timeline" />
        </div>

        {/* BOTTOM TEXT */}
        <div className="workflow-bottom">
          <div>
            <p>
              Устанавливаем цели и точки
              роста бизнеса. Готовим пошаговый
              план по их достижению.
            </p>
          </div>
          <div>
            <p>
              Готовим к работе ваши страницы —
              сайты и профили в социальных сетях.
            </p>
          </div>
          <div>
            <p>
              Ежемесячно ставим цели
              по прибыли и количеству
              клиентов и отчитываемся
              за их выполнение.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
