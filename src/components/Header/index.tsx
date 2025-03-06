import Link from "next/link";

import Logo from "@/components/Logo";
import Navigation from "@/components/Navigation";
import Button from "@/components/Button";

const Header = () => {
  return (
    <header className="sticky top-0 inset-x-0 z-50 bg-white">
      <div className="flex items-center justify-between py-5 px-16">
        <div className="flex items-center gap-20">
          <Logo />
          <Navigation />
        </div>
        <div className="flex items-center gap-x-9">
          <Link href="/clients" className="text-sm text-link hover:text-link-hover">
            Клиентам
          </Link>
          <Link href="/login">
            <Button className="min-w-28" kind="primary" size="medium">
              Войти
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;