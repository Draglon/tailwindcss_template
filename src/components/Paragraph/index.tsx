import clsx from "clsx";

type ParagraphProps = {
  className?: string;
  children: string | React.ReactNode;
}

const Paragraph = ({ className, children }: ParagraphProps) => {
  return (
    <p className={clsx("", className)}>
      {children}
    </p>
  );
}

export default Paragraph;