import clsx from "clsx";
import { ReactNode } from "react";

import SectionHeader from "@/components/Section/Header";

type SectionProps = {
  className?: string;
  title: string;
  description?: string;
  children: ReactNode;
};

const Section = ({ className, title, description, children}: SectionProps) => {
  return (
    <section className={clsx("section", className)}>
      <div className="container container-xl container-lg container-md container-sm mx-auto">
        <SectionHeader title={title} description={description} />
        {children}
      </div>
    </section>
  );
}

export default Section;