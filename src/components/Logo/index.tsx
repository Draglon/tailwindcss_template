import Image from "next/image";
import clsx from "clsx";

type LogoProps = {
  className?: string;
  src: string;
}

const Logo = ({ className, src }: LogoProps) => {
  return (
    <div className={clsx("logo", className)}>
      <Image className="logo__img block h-[15xp] w-[118px]" src={src} alt="logo" />
    </div>
  );
}

export default Logo;