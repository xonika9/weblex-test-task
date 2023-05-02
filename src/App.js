import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <a href="#">
          <img
            src={require('./images/logo.png')}
            alt=""
            className="header__logo"
          />
        </a>
        <div className="header__links">
          <nav className="header__nav">
            <ul className="header__nav-menu">
              <li>
                <a href="#" className="header__nav-link">
                  Услуги
                </a>
              </li>
              <li>
                <a href="#" className="header__nav-link">
                  Виджеты
                </a>
              </li>
              <li>
                <a href="#" className="header__nav-link">
                  Интеграции
                </a>
              </li>
              <li>
                <a href="#" className="header__nav-link">
                  Кейсы
                </a>
              </li>
              <li>
                <a href="#" className="header__nav-link">
                  Сертификаты
                </a>
              </li>
            </ul>
            <ul className="header__nav-menu_mobile">
              <li>
                <a href="#" className="header__nav-link">
                  Услуги
                </a>
              </li>
              <li>
                <a href="#" className="header__nav-link">
                  Виджеты
                </a>
              </li>
              <li>
                <a href="#" className="header__nav-link">
                  Интеграции
                </a>
              </li>
              <li>
                <a href="#" className="header__nav-link">
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
                <a href="#" className="header__contacts-social">
                  <img
                    src={require('./images/telegram-icon.png')}
                    alt="Telegram icon"
                  />
                </a>
              </li>
              <li>
                <a href="#" className="header__contacts-social">
                  <img
                    src={require('./images/viber-icon.png')}
                    alt="Viber icon"
                  />
                </a>
              </li>
              <li>
                <a href="#" className="header__contacts-social">
                  <img
                    src={require('./images/whatsapp-icon.png')}
                    alt="WhatsApp icon"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <main className="content">
        <section className="hero">
          <div className="hero__heading">
            <h1 className="hero__title">
              Зарабатывайте больше
              <span className="hero__title_accent">с WELBEX</span>
            </h1>

            <p className="hero__text">
              Развиваем и контролируем продажи за вас
            </p>
          </div>
          <div className="hero__about">
            <h2 className="hero__about-title">
              Вместе с&nbsp;
              <span className="hero__about-title_accent">
                бесплатной консультацией
              </span>
              &nbsp;мы дарим:
            </h2>
            <ul className="hero__features">
              <li>
                <h3 className="hero__feature-title">Виджеты</h3>
                <p className="hero__feature-text">30 готовых решений</p>
              </li>
              <li>
                <h3 className="hero__feature-title">Dashboard</h3>
                <p className="hero__feature-text">
                  с показателями вашего бизнеса
                </p>
              </li>
              <li>
                <h3 className="hero__feature-title">Skype Аудит</h3>
                <p className="hero__feature-text">
                  отдела продаж и CRM системы
                </p>
              </li>
              <li>
                <h3 className="hero__feature-title">35 дней</h3>
                <p className="hero__feature-text">использования CRM</p>
              </li>
            </ul>
            <ul className="hero__features_mobile">
              <li>
                <p className="hero__feature-text">
                  <span className="hero__feature_accent">—</span> Skype Аудит
                </p>
              </li>

              <li>
                <p className="hero__feature-text">
                  <span className="hero__feature_accent">—</span> 30 виджетов
                </p>
              </li>
              <li>
                <p className="hero__feature-text">
                  <span className="hero__feature_accent">—</span> Dashboard
                </p>
              </li>
              <li>
                <p className="hero__feature-text">
                  <span className="hero__feature_accent">—</span> Месяц AmoCRM
                </p>
              </li>
            </ul>
            <button className="hero__about-button">
              Получить консультацию
            </button>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="footer__links-container">
          <div className="footer__about">
            <h2 className="footer__heading">О компании</h2>
            <ul className="footer__about-links">
              <li>
                <a href="#" className="footer__link">
                  Партнёрская программа
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Вакансии
                </a>
              </li>
            </ul>
          </div>
          <nav className="footer__nav">
            <h2 className="footer__heading">Меню</h2>
            <ul className="footer__nav-links">
              <li>
                <a href="#" className="footer__link">
                  Расчёт стоимости
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Услуги
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Виджеты
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Интеграции
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Наши клиенты
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Благодарственные письма
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Кейсы
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Сертификаты
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Блог на Youtube
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
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
                <a href="#" className="footer__social">
                  <img
                    src={require('./images/telegram-icon.png')}
                    alt="Telegram icon"
                  />
                </a>
              </li>
              <li>
                <a href="#" className="footer__social">
                  <img
                    src={require('./images/viber-icon.png')}
                    alt="Viber icon"
                  />
                </a>
              </li>
              <li>
                <a href="#" className="footer__social">
                  <img
                    src={require('./images/whatsapp-icon.png')}
                    alt="WhatsApp icon"
                  />
                </a>
              </li>
            </ul>
            <a href="#" className="footer__adress">
              Москва, Путевой проезд 3с1, к 902
            </a>
          </div>
        </div>
        <div className="footer__copyright-container">
          <p className="footer__copyright">©WELBEX 2022. Все права защищены.</p>
          <a className="footer__policy" href="#">
            Политика конфиденциальности
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
