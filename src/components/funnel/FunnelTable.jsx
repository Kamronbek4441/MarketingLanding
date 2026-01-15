import React from "react";
import "./FunnelTable.css";

const FunnelTable = () => {
  return (
    <section className="funnel">
      <h2 className="funnel-title">
        Показываем результат <br /> на всех этапах воронки.
      </h2>

      <div className="funnel-wrapper">
        {/* LEFT INFO */}
        <div className="funnel-info">
          <p>27₽ средняя цена перехода</p>
          <p>1% конверсия на заявку</p>
          <p>60% дошли до показа</p>
          <p>7% конверсия в продажу</p>
          <p>2 247 530 ₽ средний чек</p>
        </div>

        {/* NO STRATEGY */}
        <div className="funnel-column light">
          <h4 className="column-title">Нет стратегии</h4>

          <div className="row">
            <span>Рекламный бюджет в месяц</span>
            <strong>500 000 ₽</strong>
          </div>

          <div className="row">
            <span>Переходы на сайт</span>
            <strong>14 356</strong>
          </div>

          <div className="row">
            <span>Звонки / заявки</span>
            <strong>143</strong>
          </div>

          <div className="row">
            <span>Посмотрели объект</span>
            <strong>84</strong>
          </div>

          <div className="row">
            <span>Купили товар</span>
            <strong>6</strong>
          </div>

          <div className="row">
            <span>Выручка</span>
            <strong className="blue">13.5 млн ₽</strong>
          </div>
        </div>

        {/* WITH STRATEGY */}
        <div className="funnel-column dark">
          <h4 className="column-title">Есть маркетинговая стратегия</h4>

          <div className="row dark">500 000 ₽</div>
          <div className="row dark">18 519</div>
          <div className="row dark">455</div>
          <div className="row dark">273</div>
          <div className="row dark">57</div>
          <div className="row dark big">128 млн ₽</div>
        </div>

        {/* RIGHT NOTES */}
        <div className="funnel-notes">
          <p>+4 163 перехода за счет внедрения стратегии</p>
          <p>+312 заявок за счет понятного сайта</p>
          <p>
            +51 продажа за счет выстраивания бизнес-логики,
            внедрения CRM и скриптов продаж
          </p>
          <p className="profit">+114.5 млн ₽ к выручке</p>
        </div>
      </div>
    </section>
  );
};

export default FunnelTable;
