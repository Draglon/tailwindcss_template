import clsx from "clsx";

type TitleProps = {
  className?: string;
  level?: number;
  children: string | React.ReactNode;
}

const Title = ({ className, level, children }: TitleProps) => {
  switch(level) {
    case 6:
      return <h6 className={clsx("font-bold", className)}>{children}</h6>
    case 5:
      return <h5 className={clsx("font-bold", className)}>{children}</h5>
    case 4:
      return <h4 className={clsx("font-bold", className)}>{children}</h4>
    case 3:
      return <h3 className={clsx("font-bold", className)}>{children}</h3>
    case 2:
      return <h2 className={clsx("font-bold", className)}>{children}</h2>
    default:
      return <h1 className={clsx("font-bold", className)}>{children}</h1>
  }
}

export default Title;