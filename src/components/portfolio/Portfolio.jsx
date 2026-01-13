import React, { useState } from "react";
import "./Portfolio.css";

const data = [
  { title: "Maison Rouge", img: "/assets/p1.jpg" },
  { title: "Капитал", img: "/assets/p2.jpg" },
  { title: "Новый Сельмаш", img: "/assets/p3.jpg" },
  { title: "Эксперты Ростова", img: "/assets/p4.jpg" },
];

const Portfolio = () => {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prev) => (prev === 0 ? 0 : prev - 1));
  };

  const next = () => {
    setIndex((prev) =>
      prev === data.length - 4 ? prev : prev + 1
    );
  };

  return (
    <section className="portfolio">
      <h2>Портфолио лендингов</h2>

      <div className="slider">
        <button className="arrow left" onClick={prev}>‹</button>

        <div className="track">
          {data.slice(index, index + 4).map((item, i) => (
            <div className="card" key={i}>
              <div className="icon">≡</div>
              <button className="link">НА САЙТ</button>
              <p>{item.title}</p>
              <img src={item.img} alt={item.title} />
            </div>
          ))}
        </div>

        <button className="arrow right" onClick={next}>›</button>
      </div>
    </section>
  );
};

export default Portfolio;
