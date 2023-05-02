import React from 'react';

function Main() {
  return (
    <main className="content">
      <section className="hero">
        <div className="hero__heading">
          <h1 className="hero__title">
            Зарабатывайте больше
            <span className="hero__title_accent">с WELBEX</span>
          </h1>

          <p className="hero__text">Развиваем и контролируем продажи за вас</p>
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
              <p className="hero__feature-text">отдела продаж и CRM системы</p>
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
          <button className="hero__about-button">Получить консультацию</button>
        </div>
      </section>
    </main>
  );
}

export default Main;
