import React from "react";
import "./MarketingBlock.css";

const MarketingBlock = () => {
  return (
    <section className="marketing-block">
      <div className="marketing-container">
        {/* LEFT TEXT */}
        <div className="marketing-text">
          <p>
            Маркетинг для каждого бизнеса имеет свою специфику. Продажа
            недвижимости – чрезвычайно конкурентное направление, и мы знаем,
            как с ним работать.
          </p>
          <p>
            Чтобы успешно продавать на всех этапах: как на стадии
            строительства, так и уже сданных объектов.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="marketing-image">
          <img src="/assets/illustration.png" alt="marketing illustration" />
        </div>
      </div>
    </section>
  );
};

export default MarketingBlock;
