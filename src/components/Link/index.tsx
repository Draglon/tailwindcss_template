import NextLink from "next/link";
import clsx from "clsx";

type LinkProps = {
  className?: string;
  href: string;
  children: string | React.ReactNode;
}

const Link = ({ className, href, children }: LinkProps) => {
  return (
    <NextLink className={clsx("font-medium text-sm text-link hover:text-link-hover", className)} href={href}>
      {children}
    </NextLink>
  );
}

export default Link;