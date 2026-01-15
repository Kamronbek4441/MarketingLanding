import React from "react";
import "./WorkFlow.css";

const Workflow = () => {
  return (
    <div className="workf">
      <h1>Как мы работаем?</h1>
      <div className="wrokflow">
        <div className="work1">
          <div className="work">
            <p>
              Изучаем структуру вашего бизнеса и анализируем ваше положение на
              рынке.
            </p>
          </div>
          <div className="work">
            <p>Внедряем CRM-систему и аналитику для учета продаж и прибыли.</p>
          </div>
          <div className="work">
            <p>
              Настраиваем рекламу в подходящих рекламных каналах. Контролируем
              бюджеты и окупаемость вложений.
            </p>
          </div>
        </div>
        <div className="work2">
          {/* TIMELINE IMAGE */}
          <div class="steps-wrap">
            <div class="line full"></div>

            <div class="steps">
              <div class="step s1">01</div>
              <div class="step s2">02</div>
              <div class="step s3">03</div>
              <div class="step s4">04</div>
              <div class="step s5">05</div>
              <div class="step s6">06</div>
            </div>
          </div>
        </div>
        <div className="work3">
          <div className="flow">
            <p>
              Устанавливаем цели и точки роста бизнеса. Готовим пошаговый план
              по их достижению.
            </p>
          </div>
          <div className="flow">
            <p>
              Готовим к работе ваши страницы – сайт и профили в социальных
              сетях.
            </p>
          </div>
          <div className="flow">
            <p>
              Ежемесячно ставим цель по прибыли и количеству клиентов и
              отчитываемся за ее выполнение.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workflow;
