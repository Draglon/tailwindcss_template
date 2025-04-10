import Link from "next/link";

import logoUrl from "@/assets/images/logo_white.svg";
import Logo from "@/components/Logo";
// import Button from "@/components/Button";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <Logo className="inline-block m-auto w-[127px] h-[17px] mb-[46px]" src={logoUrl} />
        <div className="flex flex-wrap">
          <div className="text-left pr-[15px] mb-[44px] w-1/2">
            <h3 className="text-white text-[13px]/[100%] xl:text-[14px]/[100%] font-bold opacity-60 uppercase mb-[26px]">Aitrelocate</h3>
            <ul className="flex flex-col gap-[15px]">
              <li><Link className="text-white text-[13px]/[100%] xl:text-[15px]/[100%] font-medium opacity-90 hover:opacity-60" href="#">Блог</Link></li>
              <li><Link className="text-white text-[13px]/[100%] xl:text-[15px]/[100%] font-medium opacity-90 hover:opacity-60" href="#">Каталог вакансий</Link></li>
              <li><Link className="text-white text-[13px]/[100%] xl:text-[15px]/[100%] font-medium opacity-90 hover:opacity-60" href="#">О релокейте</Link></li>
              <li><Link className="text-white text-[13px]/[100%] xl:text-[15px]/[100%] font-medium opacity-90 hover:opacity-60" href="#">Города</Link></li>
            </ul>
          </div>
          <div className="text-left pr-[15px] mb-[44px] w-1/2">
            <h3 className="text-white text-[13px]/[100%] xl:text-[14px]/[100%] font-bold opacity-60 uppercase mb-[26px]">ПОМОЩЬ</h3>
            <ul className="flex flex-col gap-[15px]">
              <li><Link className="text-white text-[13px]/[100%] xl:text-[15px]/[100%] font-medium opacity-90 hover:opacity-60" href="#">Для соискателя</Link></li>
              <li><Link className="text-white text-[13px]/[100%] xl:text-[15px]/[100%] font-medium opacity-90 hover:opacity-60" href="#">Для работодателя</Link></li>
              <li><Link className="text-white text-[13px]/[100%] xl:text-[15px]/[100%] font-medium opacity-90 hover:opacity-60" href="#">Служба поддержки</Link></li>
            </ul>
          </div>
          <div className="text-left pr-[15px] mb-[44px]">
            <h3 className="text-white text-[13px]/[100%] xl:text-[14px]/[100%] font-bold opacity-60 uppercase mb-[26px]">Документы</h3>
            <ul className="flex flex-col gap-[15px]">
              <li><Link className="text-white text-[13px]/[100%] xl:text-[15px]/[100%] font-medium opacity-90 hover:opacity-60" href="#">Соглашения</Link></li>
              <li><Link className="text-white text-[13px]/[100%] xl:text-[15px]/[100%] font-medium opacity-90 hover:opacity-60" href="#">Правила оказания услуг</Link></li>
              <li><Link className="text-white text-[13px]/[100%] xl:text-[15px]/[100%] font-medium opacity-90 hover:opacity-60" href="#">Наши партнеры</Link></li>
            </ul>
          </div>
        </div>

        <div className="">
          <div className="">
            <h4 className="text-left text-white text-[14px]/[100%] xl:text-[14px]/[100%] font-bold opacity-90">Свяжитесь с нами</h4>
            <div className="">
              <input type="email" placeholder="Ваш email" />
            </div>
          </div>
          <div className="">
            <h4 className="text-left text-white text-[13px]/[100%] xl:text-[14px]/[100%] font-bold opacity-90 mb-[16px]">Присоединяйтесь к нам<br className="hidden md:block"/>в социальных сетях:</h4>
            <ul className="flex justify-center gap-[30px]">
              <li>
                <Link className="flex justify-center items-center bg-white rounded-full w-[39px] h-[39px]" href="#">
                  <i className="icon icon-facebook"/>
                </Link>
              </li>
              <li>
                <Link className="flex justify-center items-center bg-white rounded-full w-[39px] h-[39px]" href="#">
                  <i className="icon icon-vk"/>
                </Link>
              </li>
              <li>
                <Link className="flex justify-center items-center bg-white rounded-full w-[39px] h-[39px]" href="#">
                  <i className="icon icon-twitter"/>
                </Link>
              </li>
              <li>
                <Link className="flex justify-center items-center bg-white rounded-full w-[39px] h-[39px]" href="#">
                  <i className="icon icon-instagram"/>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="">
          <p className="hidden lg:block text-sm/[100%] font-middle opacity-90">
            Сейчас на сайте 1010 вакансий и 116150 резюме, в среднем 10 откликов на вакансию
          </p>
        </div>

        <div className="">
          <p className="text-center text-white text-[10px]/[151%] md:text-[12px]/[100%] opacity-40">
            Все права защищены. Любое копирование материалов разрешено только с согласия правообладателей. По всем вопросам обращайтесь:info@aitrelocate.me
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;