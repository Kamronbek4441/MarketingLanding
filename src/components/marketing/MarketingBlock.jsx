import React from "react";
import "./MarketingBlock.css";

const MarketingBlock = () => {
  return (
    <div className="block">
      <div className="marketingblock">
        <div className="market">
          <p>
            Маркетинг для каждого бизнеса имеет свою специфику. Продажа
            недвижимости - чрезвычайно конкурентное направление, и мы знаем, как
            с ним работать. Чтобы успешно продавать на всех этапах: как на
            стадии строительства, так и уже сданных объектов.
          </p>
        </div>
        <div className="market">
          <img src="/assets/graph.png" alt="" />
          <img src="/assets/girl.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default MarketingBlock;
