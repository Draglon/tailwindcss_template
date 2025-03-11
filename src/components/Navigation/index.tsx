import Link from "@/components/Link";

const Navigation = () => {
  return (
    <nav className="nav flex gap-[72px] pt-[7px] hidden">
      <Link href="/vacancies" className="nav__link">Вакансии</Link>
      <Link href="/cities" className="nav__link active">Города</Link>
      <Link href="/relocation" className="nav__link">О релокейте</Link>
      <Link href="/blog" className="nav__link indent-[-5px]">Блог</Link>
    </nav>
  );
}

export default Navigation;