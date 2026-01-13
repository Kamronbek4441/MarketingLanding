import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <header>
        <div class="container">
          <div class="logo-section">
            <div class="menu-toggle">
              <img src="./assets/toggle.jpg" alt="" />
            </div>
            <div class="logo">
              <img src="/assets/logo.jpg" alt="УПАКУЕМ.РФ" />
              <div class="company-text">
                <span>Маркетинговое агентство</span>
                <span>Маркетинг система продажи</span>
              </div>
            </div>
          </div>
          <nav class="nav-links">
            <ul>
              <li>
                <a href="#">УСЛУГИ</a>
              </li>
              <li>
                <a href="#">ОТРАСЛЕВЫЕ РЕШЕНИЯ</a>
              </li>
              <li>
                <a href="#">ПРОЕКТЫ</a>
              </li>
              <li>
                <a href="#">БЛОГ</a>
              </li>
              <li>
                <a href="#">КОМПАНИЯ</a>
              </li>
              <li>
                <a href="#">КОНТАКТЫ</a>
              </li>
            </ul>
          </nav>
          <div class="social-phone">
            <div class="social-icons">
              <img src="/assets/icons.jpg" alt="" />
            </div>
            <div class="phone">
              <a href="tel:88007007388">8 (800) 700-73-88</a>
              <a href="#" class="callback">
                ЗАКАЗАТЬ ЗВОНОК
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
