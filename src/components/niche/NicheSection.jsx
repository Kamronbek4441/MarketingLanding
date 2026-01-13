import React from "react";
import "./NicheSection.css";

const NicheSection = () => {
  return (
    <div className="niche">
        <h1>Выберите вашу нишу</h1>
      <div className="overal">
        <div className="nicheSection">
          <img src="/assets/n1.jpg" alt="" />
        </div>
        <div className="nicheSection">
          <img src="/assets/n2.jpg" alt="" />
        </div>
        <div className="nicheSection">
          <img src="/assets/n3.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default NicheSection;
