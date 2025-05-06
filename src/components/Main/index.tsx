import Image from "next/image";
import clsx from "clsx";

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
import Title from "@/components/Title";
import Text from "@/components/Text";
import Paragraph from "@/components/Paragraph";

const Main = () => {
  return (
    <main className="main relative">
      <section className="section section--main bg-white h-[600px] md:h-[512px] lg:h-[638px] 2xl:h-[660px]">
        <div className="container container-xl container-lg container-md container-sm mx-auto px-[15px] relative z-20">
          <header className="pt-[158px] md:pt-[140px] lg:pt-[167px] 2xl:pt-[155px] mb-[22px] md:mb-[27px] lg:mb-[35px]">
            <Title className="text-center mb-[11px] md:mb-[21px] lg:mb-[29px] 2xl:mb-[26px]">
              <Text className="inline-block text-primary bg-man text-[27px]/[32px] indent-[-2px] md:text-[40px]/[100%] lg:text-[44px]/[99%] lg:indent-[1px] 2xl:text-5xl/[54.35px] 2xl:indent-[-18px]">Найди вакансию</Text>
              <Text className="block text-[27px]/[32px] indent-[-2px] md:text-[40px]/[100%] lg:text-[44px]/[99%] lg:indent-[1px]">и&nbsp;город своей мечты</Text>
            </Title>
            <Paragraph className="text-center">
              <Text className="inline-block text-sm/[136%] md:text-[15px]/[145%] lg:text-[16px]/[145%] lg:indent-[1px] 2xl:text-lg/[26px] 2xl:indent-[-18px]">
                Как подготовить себя и&nbsp;семью к&nbsp;переезду, <span className="block md:hidden" />что нужно знать о&nbsp;жизни<span className="hidden md:block" /> в&nbsp;новом городе, как подготовится к&nbsp;собеседованию
              </Text>
            </Paragraph>
          </header>
          <form className="flex flex-col md:flex-row md:items-center md:justify-center md:gap-[15px] lg:w-[744.8px] lg:ml-auto lg:mr-auto">
            <Input
              className="mb-[8px] md:mb-0 flex-[0_0_356.6px]"
              inputClassName="border-0 transition-shadow duration-300 shadow-[0px_4px_22px_rgba(0,0,0,0.07)] focus:shadow-[0px_4px_22px_rgba(189,203,231,1)]"
              type="text"
              placeholder="Вакансия"
              size="extra-large"
            />
            <Select
              className="mb-[16px] md:mb-0 md:flex-[0_0_280.5px]"
              selectClassName="border-0 transition-shadow duration-300 shadow-[0px_4px_22px_rgba(0,0,0,0.07)] focus:shadow-[0px_4px_22px_rgba(189,203,231,1)]"
              placeholder="Город"
              options={[
                { label: "Город 1", value: "1" },
                { label: "Город 2", value: "2" },
                { label: "Город 3", value: "3" },
              ]}
              size="extra-large"
            />
            <Button className="flex justify-center items-center m-auto flex-[0_0_200px] md:flex-[0_0_77.8px]" type="submit" kind="primary" size="extra-large">
              <i className="icon icon-search text-white text-[18px] block mt-2px" />
            </Button>
          </form>
        </div>
      </section>

      <Section
        className="section--gradient bg-grey-lightest pt-[51px]"
        headerClassName="2xl:mb-[30px]"
        titleClassName="text-white"
        descriptionClassName="text-white mb-[29px]"
        title="Вакансии"
        description={<>Вакансии, получившие больше всего<br className="block" /> откликов за&nbsp;неделю</>}
      >
        <div className="section__content">
          <nav className="section__nav flex justify-center">
            <Button className="w-[101px] 2xl:w-[127px]" textClassName="flex pt-[3px] inline-block" kind="warning" size="small">
              <i className="icon icon-fire text-[12px] ml-[2px] mr-[6px]"></i>
              Горящие
            </Button>
            <Button className="w-[101px] 2xl:w-[127px]" kind="secondary" size="small">
              Новые
            </Button>
          </nav>
          <section className="cards">
            {[{ active: true }, { active: false }, { active: false }, { active: false }].map((item, index) => (
              <article className="card" key={index}>
                <i className={clsx("card__mark icon", { "icon-mark-full": item.active, "icon-mark": !item.active })} />
                <div className="card__item">
                  <div className="card__image">
                    <Image src={rubyLogoUrl} alt="Company name logo" width="49" height="49" />
                  </div>
                </div>
                <div className="card__item">
                  <header className="card__header">
                    <Title className="card__title text-sm/[146%] text-[#3A3A3A]" level={3}>Senior Software Engineer (Full Stack)</Title>
                    <ul className="list">
                      <li className="list_item">
                        <Text className="text-xs/[138%] text-[#454545]"><i className="icon icon-city inline-block text-[14px] text-[#AEAEAE] text-center mr-[8px] w-[16px] h-[16px]"/>General VR Solutions</Text>
                      </li>
                      <li className="list_item">
                        <Text className="text-xs/[138%] text-[#454545]"><i className="icon icon-location inline-block text-[14px] text-[#AEAEAE] text-center mr-[8px] w-[16px] h-[16px]"/>Норвегия, Франфурт на Майне</Text>
                      </li>
                    </ul>
                  </header>
                  <div className="card__content">
                    <Paragraph className="card__text text-xs/[151%] text-[#474747]">
                      Our trading platform is loaded with features. Our easy-to-use interface, quick funding options...
                    </Paragraph>
                  </div>
                  <footer className="card__footer">
                    <Button className="font-roboto uppercase min-w-[96px] 2xl:min-w-[110px]" kind="primary-outline" size="extra-small">
                      Подробнее
                    </Button>
                  </footer>
                </div>
              </article>
            ))}
          </section>
          <footer className="section__footer mb-[60px] hidden">
            <Button className="min-w-[252px]" kind="primary-outline" size="large">
              Найти больше вакансий
            </Button>
          </footer>
        </div>
      </Section>

      <Section
        className="bg-grey-lightest hidden"
        title="Узнай все о городе своей мечты"
        description="Как подготовить себя и семью к переезду, что нужно знать о жизни в новом городе, как подготовится к собеседованию"
      >
        <section className="cards">
          {[{ active: true }, { active: false }, { active: false }, { active: false }].map((item, index) => (
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
                  <Button className="uppercase min-w-[110px]" kind="primary-outline" size="extra-small">
                    Подробнее
                  </Button>
                </footer>
              </div>
            </article>
          ))}
        </section>
        <footer className="section__footer">
          <Button className="min-w-[252px]" kind="primary-outline" size="large">
            Все города
          </Button>
        </footer>
      </Section>

      <Section
        className="section--gradient bg-grey-lightest hidden"
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
          <Button className="min-w-[252px]" kind="primary-outline" size="large">
            Узнать больше
          </Button>
        </footer>
      </Section>

      <Section
        className="hidden"
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
          <Button className="min-w-[252px]" kind="primary-outline" size="large">
            Читать все статьи
          </Button>
        </footer>
      </Section>

      <Section
        className="hidden"
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

      <Section
        className="bg-grey-lightest hidden"
        title="Что о нас говорят"
      >
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
        <footer className="section__footer hidden">
          <Button className="min-w-[252px]" kind="primary-outline" size="large">
            Читать все отзывы
          </Button>
        </footer>
      </Section>
    </main>
  );
}

export default Main;