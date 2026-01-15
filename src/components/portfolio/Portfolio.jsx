import React, { useState } from "react";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h1>Портфолио лендингов</h1>
      <div className="over-port">
        <div className="port">
          <img className="port-menu-img" src="/assets/icon.jpg" alt="" />
          <button>на сайт</button>
          <h3>Maison Rouge</h3>
          <img className="port-img" src="/assets/p1.png" alt="" />
        </div>
        <div className="port">
          <img className="port-menu-img" src="/assets/icon.jpg" alt="" />
          <button>на сайт</button>
          <h3>Капитал</h3>
          <img className="port-img" src="/assets/p2.png" alt="" />
        </div>
        <div className="port">
          <img className="port-menu-img" src="/assets/icon.jpg" alt="" />
          <button>на сайт</button>
          <h3>Новый Сельмаш</h3>
          <img className="port-img" src="/assets/p3.png" alt="" />
        </div>
        <div className="port">
          <img className="port-menu-img" src="/assets/icon.jpg" alt="" />
          <button>на сайт</button>
          <h3>Эксперты Ростова</h3>
          <img className="port-img" src="/assets/p4.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
