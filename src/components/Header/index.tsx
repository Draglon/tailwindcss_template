import Link from "next/link";

import logoUrl from "@/assets/images/logo.svg";
import Logo from "@/components/Logo";
import Navigation from "@/components/Navigation";
import Button from "@/components/Button";

const Header = () => {
  return (
    <header className="sticky top-0 inset-x-0 z-50 bg-white h-[84px]">
      <div className="flex items-center justify-between pt-[19px] pb-[20px] pl-[65px] pr-[59px]">
        <div className="flex items-center">
          <Logo className="mr-[90px]" src={logoUrl} />
          <Navigation />
        </div>
        <div className="flex items-center gap-x-[38px]">
          <Link href="/clients" className="font-medium text-sm text-link hover:text-link-hover">Клиентам</Link>
          <Link href="/login">
            <Button className="min-w-[111px]" textClassName="pl-[4px]" kind="primary" size="medium">Войти</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;