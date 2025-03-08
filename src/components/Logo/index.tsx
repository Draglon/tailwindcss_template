import Image from "next/image";
import clsx from "clsx";

type LogoProps = {
  className?: string;
  src: string;
}

const Logo = ({ className, src }: LogoProps) => {
  return (
    <div className={clsx("logo", className)}>
      <Image className="logo__img" src={src} alt="logo" width={127} height={17} />
    </div>
  );
}

export default Logo;