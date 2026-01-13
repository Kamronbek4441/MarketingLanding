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
              Изучаем структуру вашего <br /> бизнеса и анализируем <br />
              ваше положение на рынке.
            </p>
          </div>
          <div>
            <p>
              Внедряем CRM-систему <br /> и аналитику
              для учета <br /> продаж и прибыли.
            </p>
          </div>
          <div className="d3">
            <p>
              Настраиваем рекламу в подходящих <br />
              рекламных каналах. Контролируем <br />
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
              Устанавливаем цели и точки <br />
              роста бизнеса. Готовим пошаговый <br />
              план по их достижению.
            </p>
          </div>
          <div>
            <p>
              Готовим к работе ваши <br /> страницы —
              сайты и профили <br /> в социальных сетях.
            </p>
          </div>
          <div>
            <p>
              Ежемесячно ставим цели <br />
              по прибыли и количеству <br />
              клиентов и отчитываемся <br />
              за их выполнение.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
