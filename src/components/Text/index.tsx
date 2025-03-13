import clsx from "clsx";

type TextProps = {
  className?: string;
  children: string | React.ReactNode;
}

const Text = ({ className, children }: TextProps) => {
  return (
    <span className={clsx("", className)}>
      {children}
    </span>
  );
}

export default Text;