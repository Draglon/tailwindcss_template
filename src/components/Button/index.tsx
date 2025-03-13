import clsx from 'clsx';

type ButtonProps = {
  className?: string;
  textClassName?: string;
  type?: "button" | "submit" | "reset";
  kind: 'primary' | 'secondary' | 'primary-outline' | 'link';
  size?: 'extra-small' | 'small' | 'medium' | 'large' | 'extra-large';
  children?: React.ReactNode;
};

const Button = ({ children, type = "button", kind, size, className, textClassName }: ButtonProps) => {
  const buttonClass = clsx({
    "btn-primary": kind === "primary",
    "btn-primary-outline": kind === "primary-outline",
    "h-[28px] xl:h-[32px] rounded-[2px] px-2.5": size === "extra-small",
    "h-[32px] xl:h-[36px] rounded-[4px] px-3": size === "small",
    "h-[45px] rounded-[3px] px-3.5": size === "medium",
    "h-[48px] rounded-[2px] px-4": size === "large",
    "h-[54px] rounded-[5px] px-4.5": size === "extra-large",
  }, className);

  const buttonTextClassName = clsx("font-medium", {
    "btn-primary-text": kind === "primary",
    "btn-primary-outline-text": kind === "primary-outline",
    "text-[11px]": size === "extra-small",
    "text-xs xl:text-sm": size === "small",
    "text-sm": size === "medium" || size === "large" || size === "extra-large",
  }, textClassName);

  return (
    <button type={type} className={buttonClass}>
      {children && <span className={buttonTextClassName}>{children}</span>}
    </button>
  );
}

export default Button;