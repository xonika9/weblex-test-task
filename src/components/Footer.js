import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__links-container">
        <div className="footer__about">
          <h2 className="footer__heading">О компании</h2>
          <ul className="footer__about-links">
            <li>
              <a href="/#" className="footer__link">
                Партнёрская программа
              </a>
            </li>
            <li>
              <a href="/#" className="footer__link">
                Вакансии
              </a>
            </li>
          </ul>
        </div>
        <nav className="footer__nav">
          <h2 className="footer__heading">Меню</h2>
          <ul className="footer__nav-links">
            <li>
              <a href="/#" className="footer__link">
                Расчёт стоимости
              </a>
            </li>
            <li>
              <a href="/#" className="footer__link">
                Услуги
              </a>
            </li>
            <li>
              <a href="/#" className="footer__link">
                Виджеты
              </a>
            </li>
            <li>
              <a href="/#" className="footer__link">
                Интеграции
              </a>
            </li>
            <li>
              <a href="/#" className="footer__link">
                Наши клиенты
              </a>
            </li>
            <li>
              <a href="/#" className="footer__link">
                Благодарственные письма
              </a>
            </li>
            <li>
              <a href="/#" className="footer__link">
                Кейсы
              </a>
            </li>
            <li>
              <a href="/#" className="footer__link">
                Сертификаты
              </a>
            </li>
            <li>
              <a href="/#" className="footer__link">
                Блог на Youtube
              </a>
            </li>
            <li>
              <a href="/#" className="footer__link">
                Вопрос / Ответ
              </a>
            </li>
          </ul>
        </nav>
        <div className="footer__contacts">
          <h2 className="footer__heading">Контакты</h2>
          <a href="tel:+75555555555" className="footer__phone">
            +7 555 555-55-55
          </a>
          <ul className="footer__socials">
            <li>
              <a href="/#" className="footer__social">
                <img
                  src={require('../images/telegram-icon.png')}
                  alt="Telegram icon"
                />
              </a>
            </li>
            <li>
              <a href="/#" className="footer__social">
                <img
                  src={require('../images/viber-icon.png')}
                  alt="Viber icon"
                />
              </a>
            </li>
            <li>
              <a href="/#" className="footer__social">
                <img
                  src={require('../images/whatsapp-icon.png')}
                  alt="WhatsApp icon"
                />
              </a>
            </li>
          </ul>
          <a href="/#" className="footer__adress">
            Москва, Путевой проезд 3с1, к 902
          </a>
        </div>
      </div>
      <div className="footer__copyright-container">
        <p className="footer__copyright">©WELBEX 2022. Все права защищены.</p>
        <a className="footer__policy" href="/#">
          Политика конфиденциальности
        </a>
      </div>
    </footer>
  );
}

export default Footer;
