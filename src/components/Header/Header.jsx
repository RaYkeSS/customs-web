import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="container header__container">
        <div className="logo">
          <a className="logo__link" href="#">
            <img className="logo__img" src="" alt="Logo" />
          </a>
        </div>
        <div>
          <ul className="nav">
            <li className="nav__item">
              <a className="link nav__link">Главная</a>
            </li>
            <li className="nav__item">
              <a className="link nav__link">Услуги</a>
            </li>
            <li className="nav__item">
              <a className="link nav__link">Этапы</a>
            </li>
            <li className="nav__item">
              <a className="link nav__link">О нас</a>
            </li>
            <li className="nav__item">
              <a className="link nav__link">Контакты</a>
            </li>
          </ul>
        </div>
        <div className="feedback">
          <a className="link feedback__link" href="tel:+7(914)963-86-50">
            +7(914)963-86-50
          </a>
          <button className="btn feedback__btn">Обратный звонок</button>
          <a className="feedback__link">Whats App</a>
        </div>
      </div>
    </header>
  );
}
