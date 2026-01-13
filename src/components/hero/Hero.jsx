import React from "react";
import "./Hero.css"

const Hero = () => {
  const heroBg = "/assets/buildings.jpg"; 

  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        // width: "100%",
        // height: "100vh",
        display: "flex",
        alignItems: "flex-start",
        // justifyContent: "center",
      }}
    >
      <div
        className="hero-overlay"
        style={{
          backgroundColor: "rgba(0,0,0,0.5)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          className="hero-content"
          style={{
            color: "#fff",
            textAlign: "left",
            maxWidth: "700px",
            padding: "20px",
          }}
        >
          <p className="hero-subtitle">МАРКЕТИНГ И АУТСОРСИНГ</p>
          <h1 className="hero-title">
            Привлечение клиентов <br /> на покупку недвижимости
          </h1>
          <p className="hero-description">
            для застройщиков | строительных компаний | агентств
          </p>
          <p className="hero-stats">
            от 500 новых заявок и звонков в месяц <br />
            наш средний результат в нише
          </p>
          <div className="hero-buttons">
            <button className="hero-button-primary">ПОЛУЧИТЬ ПЛАН</button>
            <span className="hero-button-text">
              Ответьте на 7 вопросов за 2 минуты и получите четкий план действий
              с расчетами на zoom-консультации
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


// import React from 'react'
// import "./Hero.css"

// const Hero = () => {
//   return (
//     <section className="hero-section">
//       <div className="hero-overlay">
//         <div className="hero-content">
//           <p className="hero-subtitle">МАРКЕТИНГ И АУТСОРСИНГ</p>
//           <h1 className="hero-title">
//             Привлечение клиентов <br /> на покупку недвижимости
//           </h1>
//           <p className="hero-description">
//             для застройщиков | строительных компаний | агентств
//           </p>
//           <p className="hero-stats">
//             от 500 новых заявок и звонков в месяц <br />
//             наш средний результат в нише
//           </p>
//           <div className="hero-buttons">
//             <button className="hero-button-primary">ПОЛУЧИТЬ ПЛАН</button>
//             <span className="hero-button-text">
//               Ответьте на 7 вопросов за 2 минуты и получите четкий план действий
//               с расчетами на zoom-консультации
//             </span>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Hero
