import clsx from "clsx";
import { ReactNode } from "react";

import SectionHeader from "@/components/Section/Header";

type SectionProps = {
  className?: string;
  headerClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  title: string;
  description?: string;
  children: ReactNode;
};

const Section = ({ className, headerClassName, titleClassName, descriptionClassName, title, description, children}: SectionProps) => {
  return (
    <section className={clsx("section", className)}>
      <div className="section__wrapper">
        <SectionHeader
          headerClassName={headerClassName}
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