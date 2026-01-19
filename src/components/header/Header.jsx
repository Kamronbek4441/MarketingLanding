import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="header">
      <div className="head1">
        <img src="/assets/logo.jpg" alt="" />

        <h2>
          Маркетинговое агенство <br /> Маркетинг система продажи
        </h2>

        <h1 className="margin">
          8 (800) 700-73-88 <br />
          <span className="grey">заказать звонок</span>
        </h1>

        {/* BURGER */}
        <div
          className={`burger ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* MENU */}
      <div className={`head2 ${open ? "show" : ""}`}>
        <h2 className="link1">Услуги</h2>
        <h2 className="link1">Отпаслевые Решения</h2>
        <h2 className="link1">Проекты</h2>
        <h2 className="link1">Блог</h2>
        <h2 className="link1">Компания</h2>
        <h2 className="link1">Контакты</h2>
      </div>
    </div>
  );
};

export default Header;


// import React from "react";
// import "./Header.css";

// const Header = () => {
//   return (
//     <div className="header">
//       <div className="head1">
//         <img src="/assets/logo.jpg" alt="" />
//         <h2>
//           Маркетинговое агенство <br /> Маркетинг система продажи
//         </h2>
//         <img src="/assets/icons.jpg" alt="" />
//         <h1 className="margin">
//           8 (800) 700-73-88 <br /> <span className="grey">заказать звонок</span>
//         </h1>
//       </div>
//       <div className="case-divider1"></div>
//       <div className="head2">
//         <h2 className="link1">Услуги</h2>
//         <h2 className="link1">Отпаслевые Решения</h2>
//         <h2 className="link1">Проекты</h2>
//         <h2 className="link1">Блог</h2>
//         <h2 className="link1">Компания</h2>
//         <h2 className="link1">Контакты</h2>
//       </div>
//     </div>
//   );
// };

// export default Header;
