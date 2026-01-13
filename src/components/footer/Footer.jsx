import React from "react";
import "./Footer.css";

const reasons = [
  {
    icon: "/assets/r1.jpg",
    title: "Комплексный\nподход",
    text: "Фокусируемся на цели и проблемах, а не просто подключаем инструменты продвижения.",
  },
  {
    icon: "/assets/r2.jpg",
    title: "Автоматизация\nбизнеса",
    text: "Мы настраиваем системы аналитики и CRM, чтобы ничего не терялось в процессе.",
  },
  {
    icon: "/assets/r3.jpg",
    title: "Результат уже\nв первые 14 дней",
    text: "Вы получаете первые заявки уже через две недели после запуска.",
  },
  {
    icon: "/assets/r4.jpg",
    title: "Всегда\nна связи",
    text: "Персональный менеджер сопровождает вас на всех этапах работы.",
  },
  {
    icon: "/assets/r5.jpg",
    title: "Прозрачность\nработы",
    text: "Регулярные отчёты и доступ к статистике в любое время.",
  },
  {
    icon: "/assets/r6.jpg",
    title: "Работаем только\nв одной нише",
    text: "Глубоко понимаем рынок и особенности вашей аудитории.",
  },
];

const Footer = () => {
  return (
    <section className="reasons">
      <h2>6 причин доверить продвижение нам</h2>

      <div className="reasons-grid">
        {reasons.map((item, i) => (
          <div className="reason-card" key={i}>
            <img src={item.icon} alt="" className="reason-icon" />
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <div className="line"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Footer;
