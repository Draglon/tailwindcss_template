import Image from "next/image";

import search from "@/assets/images/icons/search.svg";
import iconBridgeUrl from "@/assets/images/icons/bridge.svg";
// import iconBridgeActiveUrl from "@/assets/images/icons/bridge_active.svg";
import photoUrl from "@/assets/images/photo_1.png";
import rubyLogoUrl from "@/assets/images/photo_2.png";
import image_1 from "@/assets/images/image_1.png";
import image_2 from "@/assets/images/image_2.png";
import image_3 from "@/assets/images/image_3.png";

import Button from "@/components/Button";
import Input from "@/components/Input";
import Select from "@/components/Select";
import Section from "@/components/Section";

const Main = () => {
  return (
    <main className="main">
      <section className="section h-[744px] bg-white">
        <div className="container container-xl container-lg container-md container-sm mx-auto">
          <div className="pt-[110px]">
            <h1 className="text-center text-5xl font-bold mb-8">
              <span className="text-primary block">Найди вакансию</span>
              <span className="block">и город своей мечты</span>
            </h1>
            <p className="text-center text-lg font-light mb-11">
              <span className="block">Как подготовить себя и семью к переезду, что нужно знать о жизни</span>
              <span className="block">в новом городе, как подготовится к собеседованию</span>
            </p>
          </div>
          <div>
            <div className="flex items-center justify-center gap-[15px]">
              <Input className="w-[350px]" type="text" placeholder="Вакансия" size="extra-large" />
              <Select
                className="w-[350px]"
                placeholder="Город"
                options={[
                  { label: "Город 1", value: "1" },
                  { label: "Город 2", value: "2" },
                  { label: "Город 3", value: "3" },
                ]}
                size="extra-large"
              />
              <Button className="flex items-center justify-center w-[78px]" type="submit" kind="primary" size="extra-large">
                <Image src={search} alt="search" width={18} height={18} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Section
        className="section--gradient"
        title="Вакансии"
        description="Вакансии, получившие больше всего откликов за неделю"
      >
        <div className="section__content">
          <nav className="section__nav flex gap-[20px] mb-[20px]">
            <Button className="w-[127px]" kind="primary" size="small">Горящие</Button>
            <Button className="w-[127px]" kind="primary" size="small">Новые</Button>
          </nav>
          <section className="cards">
            {[1,2,3,4].map((_, index) => (
              <article className="card" key={index}>
                <div className="card__left-side">
                  <div className="card__image">
                    <Image src={rubyLogoUrl} alt="Company name logo" width="49" height="49" />
                  </div>
                </div>
                <div className="card__right-side">
                  <header className="card__header">
                    <h3 className="card__title">Senior Software Engineer (Full Stack)</h3>
                    <ul>
                      <li>General VR Solutions</li>
                      <li>Норвегия, Франфурт на Майне</li>
                    </ul>
                  </header>
                  <div className="card__content">
                    <p className="card__text">
                      Our trading platform is loaded with features. Our easy-to-use interface, quick funding options...
                    </p>
                  </div>
                  <footer className="card__footer">
                    <Button kind="primary-outline">
                      Подробнее
                    </Button>
                  </footer>
                </div>
              </article>
            ))}
          </section>
          <footer className="section__footer">
            <Button kind="primary-outline">
              Найти больше вакансий
            </Button>
          </footer>
        </div>
      </Section>

      <Section
        title="Узнай все о городе своей мечты"
        description="Как подготовить себя и семью к переезду, что нужно знать о жизни в новом городе, как подготовится к собеседованию"
      >
        <section className="cards">
          {[1,2,3,4].map((_, index) => (
            <article className="card" key={index}>
              <div className="card__item">
                <div className="card__image">
                  <Image src={iconBridgeUrl} alt="Company name logo" width="49" height="49" />
                </div>
              </div>
              <div className="card__item">
                <header className="card__header">
                  <h3 className="card__title">Лондон</h3>
                </header>
                <div className="card__content">
                  <p className="card__text">785 открытых вакансий</p>
                </div>
                <footer className="card__footer">
                  <Button kind="primary-outline">
                    Подробнее
                  </Button>
                </footer>
              </div>
            </article>
          ))}
        </section>
        <footer className="section__footer">
          <Button kind="primary-outline">
            Все города
          </Button>
        </footer>
      </Section>

      <Section
        className="section--gradient"
        title="Всё о релокейте"
        description="Как подготовить себя и семью к переезду, что нужно знать о жизни в новом городе, как подготовится к собеседованию"
      >
        <section className="cards">
          {[1, 2, 3].map((_, index) => (
            <article className="card" key={index}>
              <div className="card__item">
                <header className="card__header">
                  <h3 className="card__title">С чего начать при переезде и подготовка</h3>
                </header>
                <div className="card__content">
                  <ul className="">
                    <li><a href="">Поиск ваканчий по сервису</a></li>
                    <li><a href="">Горящие вакансии</a></li>
                    <li><a href="">Дорогостоящие вакансии</a></li>
                    <li><a href="">Дорогостоящие вакансии</a></li>
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </section>
        <footer className="section__footer">
          <Button kind="primary-outline">
            Узнать больше
          </Button>
        </footer>
      </Section>

      <Section
        title="Блог"
        description="Наши эксперты помогут вам своими лучшими статьями"
      >
        <section className="cards">
          {[{image: image_1, label: "Опыт"}, {image: image_2, label: "Вдоховение"}, {image: image_3, label: "Обучение"}].map((item, index) => (
            <article className="card" key={index}>
              <div className="card__item">
                <Image src={item.image} alt="Company name logo" width="370" height="140" />
              </div>
              <div className="card__item">
                <header className="card__header card__header--mark">
                  <label className="card__label">{item.label}</label>
                  <h3 className="card__title">Топ 5 профессий на релокейт или как найти</h3>
                </header>
                <div className="card__content">
                  <p className="card__text">Регистрация в Bürgeramt у меня была в таком виде так: я нашел адрес районного...</p>
                  <div className="">
                    <span className="">12 мин</span>
                    <a className="" href="#">Читать далее</a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>
        <footer className="section__footer">
          <Button kind="primary-outline">
            Читать все статьи
          </Button>
        </footer>
      </Section>

      <Section
        title="Хочешь получать лучшие статьи от Aitrelocate раз в неделю?"
        description="Подпишись на рассылку Aitrelocate"
      >
        <div className="form">
          <div className="form__item">
            <Input type="email" placeholder="Email" />
            <Button type="submit" kind="primary">
              Подписаться
            </Button>
          </div>
          <div className="form__item">
            <input type="checkbox" id="agree" />
            <label htmlFor="agree">Я согласен с условиями обработкиперсональных данных</label>
          </div>
        </div>
      </Section>

      <Section title="Что о нас говорят">
        <div className="slider">
          <a className="slider__arrow slider__arrow--left" role="button" />
          <a className="slider__arrow slider__arrow--right" role="button" />

          <div className="slider__container">
            {[{image: photoUrl, btnHidden: false}, {image: photoUrl, btnHidden: true}, {image: photoUrl, btnHidden: false}].map((item, index) => (
              <article className="card" key={index}>
                <div className="card__item">
                  <div className="card__image">
                    <Image src={item.image} alt="photo" width="39" height="39" />
                  </div>
                  <div className="card__header">
                    <h3 className="card__title">Сергей Серцеед</h3>
                    <p className="card__text">QA engeneer</p>
                  </div>
                </div>
                <div className="card__item">
                  <div className="card__content">
                    <p className="card__text">
                      What I like about Relocate is that you get carefully selected jobs in different countries.
                      What’s more, all the potential employers are ready to help you with relocation...
                    </p>
                    {item.btnHidden && (
                      <Button type="button" className="card__read-more" kind="link">
                        Читать полный отзыв
                      </Button>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        <footer className="section__footer">
          <Button kind="primary-outline">
            Читать все отзывы
          </Button>
        </footer>
      </Section>
    </main>
  );
}

export default Main;