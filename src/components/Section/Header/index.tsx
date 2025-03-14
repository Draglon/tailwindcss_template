import clsx from "clsx";

type SectionHeaderProps = {
  headerClassName?: string; 
  title: string;
  titleClassName?: string;
  description?: string;
  descriptionClassName?: string;
};

const SectionHeader = ({ headerClassName, title, titleClassName, description, descriptionClassName}: SectionHeaderProps) => {
  return (
    <header className={clsx("section__header", headerClassName)}>
      <h2 className={clsx("text-3xl font-bold mb-[10px]", titleClassName)}>
        {title}
      </h2>
      {description && (
        <p className={clsx("text-sm lg:text-base xl:text-lg font-light", descriptionClassName)}>
          {description}
        </p>
      )}
    </header>
  );
}

export default SectionHeader;