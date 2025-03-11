import Link from "@/components/Link";

const NavigationMobile = () => {
  return (
    <div className="hamburger-menu">
      <label className="hamburger-menu__btn" htmlFor="menu__toggle">
        <span className="hamburger-menu__btn-lines"></span>
      </label>
      <input className="hamburger-menu__checkbox" id="menu__toggle" type="checkbox" />

      <div className="hamburger-menu__mobile">
        <nav className="mobile-nav">
          <Link className="mobile-nav__link" href="/vacancies">Вакансии</Link>
          <Link className="mobile-nav__link" href="/cities">Города</Link>
          <Link className="mobile-nav__link" href="/relocation">О релокейте</Link>
          <Link className="mobile-nav__link" href="/blog">Блог</Link>
        </nav>
      </div>
    </div>
  );
}

export default NavigationMobile;