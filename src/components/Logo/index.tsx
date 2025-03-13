import Image from "next/image";

type LogoProps = {
  className?: string;
  src: string;
}

const Logo = ({ className, src }: LogoProps) => {
  return (
    <div className={className}>
      <Image className="block w-full h-full" src={src} alt="logo" />
    </div>
  );
}

export default Logo;