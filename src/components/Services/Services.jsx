import "./Services.scss";

export default function Services() {
  return (
    <section className="services">
      <div className="container">
        <h2 className="title">Основные услуги</h2>
        <p className="text services__text">
          Мы помогаем по всем вопросам, связанным с таможней: оказываем услуги
          таможенного представителя и внешнеторгового агента.
        </p>
        <div className="services__wrapper">
          <div className="services__card">
            <h3 className="services__caption">
              УСЛУГИ ТАМОЖЕННОГО ПРЕДСТАВИТЕЛЯ
            </h3>
            <p className="services__subtext">
              Услуга таможенного оформления грузов из Китая комплексная,
              включает в себя подготовку сопроводительной документации,
              заполнение деклараций и уплату обязательных сборов и пошлин.
              Процедура обязательна при пересечении грузом границы или смене
              таможенного режима.
            </p>
          </div>
          <div className="services__card">
            <h3 className="services__caption">Аутсорсинг ВЭД</h3>
            <p className="services__subtext">
              Можем полностью взять на себя внешнеэкономическую деятельность:
              от переговоров с поставщиком до продажи товаров, или подключаться
              на том этапе, где клиенту нужна помощь
            </p>
          </div>
          <div className="services__card">
            <h3 className="services__caption">
              Берем на себя все обязанности по ВЭД
            </h3>
            <p className="services__subtext">
              Поможем приобрести импортный товар без рисков и с минимальными
              затратами.
            </p>
          </div>
          <div className="services__card">
            <h3 className="services__caption">
              УСЛУГИ МЕЖДУНАРОДНОГО ЭКСПЕДИТОРА
            </h3>
            <p className="services__subtext">
              Обеспечим оптимальную по цене и скорости доставку груза до места
              назначения
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
