import React from "react";
import "./NicheSection.css";

const NicheSection = () => {
  return (
    <div className="niche">
      <h1>Выберите вашу нишу</h1>

      <div className="overal">
        {/* 1-block */}
        <div className="nicheSectionl">
          <div className="text1">
            <div className="t">
              <h3 className="white">
                Маркетинг <br /> для агентств <br /> недвижимости
              </h3>
            </div>
            <div className="t">
              <button>Заказать</button>
              <p>Подробнее</p>
            </div>
          </div>
          <div>
            <img src="/assets/family.png" alt="" />
          </div>
        </div>

        {/* 2-block */}
        <div className="nicheSection">
          <h3>Маркетинг для застройщиков и ЖК</h3>
          <img className="img1" src="/assets/building.png" alt="" />
        </div>

        {/* 3-block */}
        <div className="nicheSection">
          <h3>
            Маркетинг <br /> для строительных <br /> компаний
          </h3>
          <img src="/assets/house.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default NicheSection;

// import React from "react";
// import "./NicheSection.css";

// const NicheSection = () => {
//   const linebg = "/assets/line.png";

//   return (
//     <div className="niche">
//       <h1>Выберите вашу нишу</h1>
//       <div className="overal">
//         <div className="nicheSectionl">
//           <div className="text1">
//             <div className="t">
//               <h3 className="white">
//                 Маркетинг <br /> для агентств <br /> недвижимости
//               </h3>
//             </div>
//             <div className="t">
//               <button>Заказать</button>
//               <p>Подробнее</p>
//             </div>
//           </div>
//           <div>
//             <img src="/assets/family.png" alt="" />
//           </div>
//         </div>
//         <div className="nicheSection">
//           <h3>Маркетинг для застройщиков и ЖК</h3>

//             <img className="img1" src="/assets/building.png" alt="" />
//           </div>
//         </div>
//         <div className="nicheSection">
//           <h3>
//             Маркетинг <br /> для строительных <br /> компаний
//           </h3>
//           <img src="/assets/house.png" alt="" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NicheSection;
