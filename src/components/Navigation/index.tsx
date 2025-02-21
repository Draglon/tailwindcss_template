import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="nav flex gap-16">
      <Link href="/vacancies" className="nav__link font-light text-sm text-link hover:text-link-hover">Вакансии</Link>
      <Link href="/cities" className="nav__link font-light text-sm text-link hover:text-link-hover">Города</Link>
      <Link href="/relocation" className="nav__link font-light text-sm text-link hover:text-link-hover">О релокейте</Link>
      <Link href="/blog" className="nav__link font-light text-sm text-link hover:text-link-hover">Блог</Link>
    </nav>
  );
}

export default Navigation;