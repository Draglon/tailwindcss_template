import Link from "next/link";

import logoUrl from "@/assets/images/logo_white.svg";
import Logo from "@/components/Logo";
import Button from "@/components/Button";

const Footer = () => {
  return (
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center hidden">
      <div className="">
        <Logo src={logoUrl} />
        <div>
          <div>
            <h3>Aitrelocate</h3>
            <ul className="flex gap-2">
              <li><Link href="">Блог</Link></li>
              <li><Link href="">Каталог вакансий</Link></li>
              <li><Link href="">О релокейте</Link></li>
              <li><Link href="">Города</Link></li>
            </ul>
          </div>
          <div>
            <h3>ПОМОЩЬ</h3>
            <ul className="flex gap-2">
              <li><Link href="">Для соискателя</Link></li>
              <li><Link href="">Для работодателя</Link></li>
              <li><Link href="">Служба поддержки</Link></li>
            </ul>
          </div>
          <div>
            <h3>Документы</h3>
            <ul className="flex gap-2">
              <li><Link href="">Соглашения</Link></li>
              <li><Link href="">Правила оказания услуг</Link></li>
              <li><Link href="">Наши партнеры</Link></li>
            </ul>
          </div>
        </div>

        <div>
          <h4>Присоединяйтесь к нам в социальных сетях:</h4>
          <ul className="flex gap-2">
            <li><Link href="">Facebook</Link></li>
            <li><Link href="">Twitter</Link></li>
            <li><Link href="">Telegram</Link></li>
            <li><Link href="">Instagram</Link></li>
          </ul>
          <div>
            <h4>Свяжитесь с нами</h4>
            <div>
              <input type="email" placeholder="Ваш email" />
              <Button type="submit" kind="primary" size="medium">Отправить</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <p className="text-sm text-gray-500">
          Сейчас на сайте 1010 вакансий и 116150 резюме, в среднем 10 откликов на вакансию
        </p>
      </div>
      <div className="">
        <p className="text-sm text-gray-500">
          Все права защищены. Любое копирование материалов разрешено только с согласия правообладателей. По всем вопросам обращайтесь:info@aitrelocate.me
        </p>
      </div>
    </footer>
  );
}

export default Footer;