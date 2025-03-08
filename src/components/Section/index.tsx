import clsx from "clsx";
import { ReactNode } from "react";

import SectionHeader from "@/components/Section/Header";

type SectionProps = {
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  title: string;
  description?: string;
  children: ReactNode;
};

const Section = ({ className, titleClassName, descriptionClassName, title, description, children}: SectionProps) => {
  return (
    <section className={clsx("section", className)}>
      <div className="container container-xl container-lg container-md container-sm mx-auto px-[15px] relative">
        <SectionHeader
          title={title}
          titleClassName={titleClassName}
          description={description}
          descriptionClassName={descriptionClassName}
        />
        {children}
      </div>
    </section>
  );
}

export default Section;