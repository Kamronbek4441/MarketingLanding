import React from "react";
import "./FunnelTable.css";

const FunnelTable = () => {
  return (
    <section className="funnel">
      <div className="funnel-container">
        <h2 className="funnel-title">
          Показываем результат<br />на всех этапах воронки.
        </h2>

        <div className="funnel-table">
          <img src="/assets/table.jpg" alt="Funnel table" />
        </div>
      </div>
    </section>
  );
};

export default FunnelTable;
