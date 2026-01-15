import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <h1>6 причин доверить продвижение нам</h1>
      <div className="footer-section">
        <div className="foot">
          <img src="/assets/r1.jpg" alt="" />
          <h2>Комплексный подход</h2>
          <p>
            Фокусируемся на цели и проблемах, а под них подбираем инструменты
            продвижения.
          </p>
          <div className="blue-line"></div>
        </div>
        <div className="foot">
          <img src="/assets/r2.jpg" alt="" />
          <h2>Автоматизация бизнеса</h2>
          <p>
            Мы настраиваем системы аналитики и CRM, чтобы многие процессы в
            бизнесе не требовали вашего времени.
          </p>
          <div className="blue-line"></div>
        </div>
        <div className="foot">
          <img src="/assets/r3.jpg" alt="" />
          <h2>Результат уже в первые 14 дней</h2>
          <p>
            Мы не растягиваем работы и выполняем процессы параллельно, за счет
            чего вы получаете первых клиентов уже через неделю после старта.
          </p>
          <div className="blue-line"></div>
        </div>
        <div className="foot">
          <img src="/assets/r4.jpg" alt="" />
          <h2>Всегда на связи</h2>
          <p>
            Персональный менеджер будет сопровождать вас на всех этапах работ и
            отвечать на все вопросы.
          </p>
          <div className="blue-line"></div>
        </div>
        <div className="foot">
          <img src="/assets/r5.jpg" alt="" />
          <h2>Прозрачность работы</h2>
          <p>
            Регулярные отчеты и доступ к системам аналитики. Вы видите
            результаты в любой момент времени.
          </p>
          <div className="blue-line"></div>
        </div>
        <div className="foot">
          <img src="/assets/r6.jpg" alt="" />
          <h2>Работаем только в одной нише</h2>
          <p>
            И делаем это хорошо. Знаем, что сейчас актуально для продвижения
            застройщиков и жилых комплексов.
          </p>
          <div className="blue-line"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

// import React from "react";
// import "./Footer.css";

// const reasons = [
//   {
//     icon: "/assets/r1.jpg",
//     title: "Комплексный\nподход",
//     text: "Фокусируемся на цели и проблемах, а не просто подключаем инструменты продвижения.",
//   },
//   {
//     icon: "/assets/r2.jpg",
//     title: "Автоматизация\nбизнеса",
//     text: "Мы настраиваем системы аналитики и CRM, чтобы ничего не терялось в процессе.",
//   },
//   {
//     icon: "/assets/r3.jpg",
//     title: "Результат уже\nв первые 14 дней",
//     text: "Вы получаете первые заявки уже через две недели после запуска.",
//   },
//   {
//     icon: "/assets/r4.jpg",
//     title: "Всегда\nна связи",
//     text: "Персональный менеджер сопровождает вас на всех этапах работы.",
//   },
//   {
//     icon: "/assets/r5.jpg",
//     title: "Прозрачность\nработы",
//     text: "Регулярные отчёты и доступ к статистике в любое время.",
//   },
//   {
//     icon: "/assets/r6.jpg",
//     title: "Работаем только\nв одной нише",
//     text: "Глубоко понимаем рынок и особенности вашей аудитории.",
//   },
// ];

// const Footer = () => {
//   return (
//     <section className="reasons">
//       <h2>6 причин доверить продвижение нам</h2>

//       <div className="reasons-grid">
//         {reasons.map((item, i) => (
//           <div className="reason-card" key={i}>
//             <img src={item.icon} alt="" className="reason-icon" />
//             <h3>{item.title}</h3>
//             <p>{item.text}</p>
//             <div className="line"></div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Footer;
