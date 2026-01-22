import React from "react";
import "./WorkFlow.css";

const steps = [
  "Изучаем структуру вашего бизнеса и анализируем ваше положение на рынке.",
  "Внедряем CRM-систему и аналитику для учета продаж и прибыли.",
  "Настраиваем рекламу в подходящих рекламных каналах. Контролируем бюджеты и окупаемость вложений.",
  "Устанавливаем цели и точки роста бизнеса. Готовим пошаговый план по их достижению.",
  "Готовим к работе ваши страницы – сайт и профили в социальных сетях.",
  "Ежемесячно ставим цель по прибыли и количеству клиентов и отчитываемся за ее выполнение."
];

const Workflow = () => {
  return (
    <div className="workf">
      <h1>Как мы работаем?</h1>

      {/* ================= DESKTOP (ESKI HOLAT) ================= */}
      <div className="wrokflow desktop-only">
        <div className="work1">
          <div className="work"><p>{steps[0]}</p></div>
          <div className="work"><p>{steps[1]}</p></div>
          <div className="work"><p>{steps[2]}</p></div>
        </div>

        <div className="work2">
          <div className="steps-wrap">
            <div className="line full"></div>
            <div className="steps">
              <div className="step s1">01</div>
              <div className="step s2">02</div>
              <div className="step s3">03</div>
              <div className="step s4">04</div>
              <div className="step s5">05</div>
              <div className="step s6">06</div>
            </div>
          </div>
        </div>

        <div className="work3">
          <div className="flow"><p>{steps[3]}</p></div>
          <div className="flow"><p>{steps[4]}</p></div>
          <div className="flow"><p>{steps[5]}</p></div>
        </div>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="mobile-timeline">
        {steps.map((text, i) => (
          <div className="mobile-step" key={i}>
            <div className={`step s${i + 1}`}>
              {String(i + 1).padStart(2, "0")}
            </div>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workflow;


// import React from "react";
// import "./WorkFlow.css";

// const steps = [
//   "Изучаем структуру вашего бизнеса и анализируем ваше положение на рынке.",
//   "Внедряем CRM-систему и аналитику для учета продаж и прибыли.",
//   "Настраиваем рекламу в подходящих рекламных каналах. Контролируем бюджеты и окупаемость вложений.",
//   "Устанавливаем цели и точки роста бизнеса. Готовим пошаговый план по их достижению.",
//   "Готовим к работе ваши страницы – сайт и профили в социальных сетях.",
//   "Ежемесячно ставим цель по прибыли и количеству клиентов и отчитываемся за ее выполнение."
// ];

// const Workflow = () => {
//   return (
//     <div className="workf">
//       <h1>Как мы работаем?</h1>

//       {/* DESKTOP (eski holat) */}
//       <div className="wrokflow desktop-only">
//         {/* SENING ESKI KODING — O‘ZGARMAYDI */}
//       </div>

//       {/* MOBILE TIMELINE */}
//       <div className="mobile-timeline">
//         {steps.map((text, i) => (
//           <div className="mobile-step" key={i}>
//             <div className={`step s${i + 1}`}>
//               {String(i + 1).padStart(2, "0")}
//             </div>
//             <p>{text}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Workflow;


// // import React from "react";
// // import "./WorkFlow.css";

// // const Workflow = () => {
// //   return (
// //     <div className="workf">
// //       <h1>Как мы работаем?</h1>
// //       <div className="wrokflow">
// //         <div className="work1">
// //           <div className="work">
// //             <p>
// //               Изучаем структуру вашего бизнеса и анализируем ваше положение на
// //               рынке.
// //             </p>
// //           </div>
// //           <div className="work">
// //             <p>Внедряем CRM-систему и аналитику для учета продаж и прибыли.</p>
// //           </div>
// //           <div className="work">
// //             <p>
// //               Настраиваем рекламу в подходящих рекламных каналах. Контролируем
// //               бюджеты и окупаемость вложений.
// //             </p>
// //           </div>
// //         </div>
// //         <div className="work2">
// //           {/* TIMELINE IMAGE */}
// //           <div class="steps-wrap">
// //             <div class="line full"></div>

// //             <div class="steps">
// //               <div class="step s1">01</div>
// //               <div class="step s2">02</div>
// //               <div class="step s3">03</div>
// //               <div class="step s4">04</div>
// //               <div class="step s5">05</div>
// //               <div class="step s6">06</div>
// //             </div>
// //           </div>
// //         </div>
// //         <div className="work3">
// //           <div className="flow">
// //             <p>
// //               Устанавливаем цели и точки роста бизнеса. Готовим пошаговый план
// //               по их достижению.
// //             </p>
// //           </div>
// //           <div className="flow">
// //             <p>
// //               Готовим к работе ваши страницы – сайт и профили в социальных
// //               сетях.
// //             </p>
// //           </div>
// //           <div className="flow">
// //             <p>
// //               Ежемесячно ставим цель по прибыли и количеству клиентов и
// //               отчитываемся за ее выполнение.
// //             </p>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Workflow;
