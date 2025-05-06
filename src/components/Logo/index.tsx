import Image from "next/image";

type LogoProps = {
  className?: string;
  src: string;
}

const Logo = ({ className, src }: LogoProps) => {
  return (
    <div className={className}>
      <Image className="block pt-[4px] md:w-[137px] md:pt-[8px]" src={src} alt="logo" />
    </div>
  );
}

export default Logo;