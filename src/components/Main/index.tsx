import Image from "next/image";

import search from "@/assets/images/icons/search.svg";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Select from "@/components/Select";

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

      <section className="section section-gradient">
        <div className="container container-xl container-lg container-md container-sm mx-auto">
          <header className="">
            <h2 className="text-2xl text-center font-bold text-white">
              Вакансии
            </h2>
            <p className="text-lg text-center font-light text-white">
              Вакансии, получившие больше всего откликов за неделю
            </p>
          </header>
        </div>
      </section>
    </main>
  );
}

export default Main;