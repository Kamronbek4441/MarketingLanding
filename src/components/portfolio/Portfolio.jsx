import React, { useState } from "react";
import "./Portfolio.css";

const initialPorts = [
  { title: "Maison Rouge", img: "/assets/p1.png" },
  { title: "Капитал", img: "/assets/p2.png" },
  { title: "Новый Сельмаш", img: "/assets/p3.png" },
  { title: "Эксперты Ростова", img: "/assets/p4.png" },
];

const Portfolio = () => {
  const [ports, setPorts] = useState(initialPorts);
  const [isSliding, setIsSliding] = useState(false);
  const [direction, setDirection] = useState("next");

  const slideNext = () => {
    if (isSliding) return;
    setDirection("next");
    setIsSliding(true);
    setTimeout(() => {
      setPorts((prev) => [...prev.slice(1), prev[0]]);
      setIsSliding(false);
    }, 500); // transition duration
  };

  const slidePrev = () => {
    if (isSliding) return;
    setDirection("prev");
    setIsSliding(true);
    setTimeout(() => {
      setPorts((prev) => [prev[prev.length - 1], ...prev.slice(0, -1)]);
      setIsSliding(false);
    }, 500);
  };

  return (
    <div className="portfolio">
      <h1>Портфолио лендингов</h1>
      <div className="over-port">
        {/* Chap tugma */}
        <img
          src="/assets/left.png"
          alt="left"
          className="arrow"
          onClick={slidePrev}
        />

        {/* Portlar konteyneri */}
        <div className="port-wrapper">
          <div
            className={`port-track ${direction} ${isSliding ? "sliding" : ""}`}
          >
            {ports.map((port, index) => (
              <div className="port" key={index}>
                <img className="port-menu-img" src="/assets/icon.jpg" alt="" />
                <button>на сайт</button>
                <h3>{port.title}</h3>
                <img className="port-img" src={port.img} alt={port.title} />
              </div>
            ))}
          </div>
        </div>

        {/* O‘ng tugma */}
        <img
          src="/assets/right.png"
          alt="right"
          className="arrow"
          onClick={slideNext}
        />
      </div>
    </div>
  );
};

export default Portfolio;


// import React, { useState } from "react";
// import "./Portfolio.css";

// const initialPorts = [
//   { title: "Maison Rouge", img: "/assets/p1.png" },
//   { title: "Капитал", img: "/assets/p2.png" },
//   { title: "Новый Сельмаш", img: "/assets/p3.png" },
//   { title: "Эксперты Ростова", img: "/assets/p4.png" },
// ];

// const Portfolio = () => {
//   const [ports, setPorts] = useState(initialPorts);
//   const [isSliding, setIsSliding] = useState(false);
//   const [direction, setDirection] = useState("next");

//   const slideNext = () => {
//     if (isSliding) return;
//     setDirection("next");
//     setIsSliding(true);
//     setTimeout(() => {
//       setPorts((prev) => [...prev.slice(1), prev[0]]);
//       setIsSliding(false);
//     }, 500); // transition duration
//   };

//   const slidePrev = () => {
//     if (isSliding) return;
//     setDirection("prev");
//     setIsSliding(true);
//     setTimeout(() => {
//       setPorts((prev) => [prev[prev.length - 1], ...prev.slice(0, -1)]);
//       setIsSliding(false);
//     }, 500);
//   };

//   return (
//     <div className="portfolio">
//       <h1>Портфолио лендингов</h1>
//       <div className="over-port">
//         <img src="/assets/left.png" alt="left" className="arrow" onClick={slidePrev} />

//         <div className="port-wrapper">
//           <div
//             className={`port-track ${direction} ${isSliding ? "sliding" : ""}`}
//           >
//             {ports.map((port, index) => (
//               <div className="port" key={index}>
//                 <img className="port-menu-img" src="/assets/icon.jpg" alt="" />
//                 <button>на сайт</button>
//                 <h3>{port.title}</h3>
//                 <img className="port-img" src={port.img} alt={port.title} />
//               </div>
//             ))}
//           </div>
//         </div>

//         <img src="/assets/right.png" alt="right" className="arrow" onClick={slideNext} />
//       </div>
//     </div>
//   );
// };

// export default Portfolio;


// import React, { useState } from "react";
// import "./Portfolio.css";

// const Portfolio = () => {
//   return (
//     <div className="portfolio">
//         <h1>Портфолио лендингов</h1>
//       <div className="over-port">
//         <img src="/assets/left.png" alt="" />
//         <div className="port">
//           <img className="port-menu-img" src="/assets/icon.jpg" alt="" />
//           <button>на сайт</button>
//           <h3>Maison Rouge</h3>
//           <img className="port-img" src="/assets/p1.png" alt="" />
//         </div>
//         <div className="port">
//           <img className="port-menu-img" src="/assets/icon.jpg" alt="" />
//           <button>на сайт</button>
//           <h3>Капитал</h3>
//           <img className="port-img" src="/assets/p2.png" alt="" />
//         </div>
//         <div className="port">
//           <img className="port-menu-img" src="/assets/icon.jpg" alt="" />
//           <button>на сайт</button>
//           <h3>Новый Сельмаш</h3>
//           <img className="port-img" src="/assets/p3.png" alt="" />
//         </div>
//         <div className="port">
//           <img className="port-menu-img" src="/assets/icon.jpg" alt="" />
//           <button>на сайт</button>
//           <h3>Эксперты Ростова</h3>
//           <img className="port-img" src="/assets/p4.png" alt="" />
//         </div>
//         <img src="/assets/right.png" alt="" />
//       </div>
//     </div>
//   );
// };

// export default Portfolio;
