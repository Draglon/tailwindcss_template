import logoUrl from "@/assets/images/logo.svg";
import Logo from "@/components/Logo";
import Navigation from "@/components/Navigation";
import NavigationMobile from "@/components/NavigationMobile";
import Link from "@/components/Link";
import Button from "@/components/Button";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="flex items-center">
          <Logo className="mr-[90px]" src={logoUrl} />
          <Navigation />
        </div>
        <div className="flex items-center gap-x-[38px]">
          <Link className="hidden" href="/clients">Клиентам</Link>
          <Link className="hidden" href="/login">
            <Button className="min-w-[111px]" textClassName="pl-[4px]" kind="primary" size="medium">Войти</Button>
          </Link>
          <NavigationMobile />
        </div>
      </div>
    </header>
  );
}

export default Header;