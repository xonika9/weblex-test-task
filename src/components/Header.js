import React from 'react';

function Header() {
  return (
    <header className="header">
      <a href="/#">
        <img
          src={require('../images/logo.png')}
          alt=""
          className="header__logo"
        />
      </a>
      <div className="header__links">
        <nav className="header__nav">
          <ul className="header__nav-menu">
            <li>
              <a href="/#" className="header__nav-link">
                Услуги
              </a>
            </li>
            <li>
              <a href="/#" className="header__nav-link">
                Виджеты
              </a>
            </li>
            <li>
              <a href="/#" className="header__nav-link">
                Интеграции
              </a>
            </li>
            <li>
              <a href="/#" className="header__nav-link">
                Кейсы
              </a>
            </li>
            <li>
              <a href="/#" className="header__nav-link">
                Сертификаты
              </a>
            </li>
          </ul>
          <ul className="header__nav-menu_mobile">
            <li>
              <a href="/#" className="header__nav-link">
                Услуги
              </a>
            </li>
            <li>
              <a href="/#" className="header__nav-link">
                Виджеты
              </a>
            </li>
            <li>
              <a href="/#" className="header__nav-link">
                Интеграции
              </a>
            </li>
            <li>
              <a href="/#" className="header__nav-link">
                Кейсы
              </a>
            </li>
          </ul>
        </nav>
        <div className="header__contacts">
          <a href="tel:+75555555555" className="header__contacts-phone">
            +7 555 555-55-55
          </a>
          <ul className="header__contacts-socials">
            <li>
              <a href="/#" className="header__contacts-social">
                <img
                  src={require('../images/telegram-icon.png')}
                  alt="Telegram icon"
                />
              </a>
            </li>
            <li>
              <a href="/#" className="header__contacts-social">
                <img
                  src={require('../images/viber-icon.png')}
                  alt="Viber icon"
                />
              </a>
            </li>
            <li>
              <a href="/#" className="header__contacts-social">
                <img
                  src={require('../images/whatsapp-icon.png')}
                  alt="WhatsApp icon"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
