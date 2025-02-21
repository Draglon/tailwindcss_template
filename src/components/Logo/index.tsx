import Image from "next/image";

import logo from "@/assets/images/logo.svg";

const Logo = () => {
  return (
    <Image src={logo} alt="logo" width={127} height={17} />
  );
}

export default Logo;