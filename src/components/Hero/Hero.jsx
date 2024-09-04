import "./Hero.scss";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__container">
        <h1 className="hero__title">Таможенное оформление</h1>
        <p className="hero__text">
          Оказываем услуги по таможенному оформлению на любых таможнях
          Российской Федерации - работаем ежедневно и при необходимости
          круглосуточно!
        </p>
        <button className="btn hero__btn">Консультация</button>
      </div>
    </section>
  );
}
