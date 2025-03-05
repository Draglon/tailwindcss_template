type SectionHeaderProps = {
  title: string;
  description?: string;
};

const SectionHeader = ({ title, description}: SectionHeaderProps) => {
  return (
    <header>
      <h2 className="text-2xl text-center font-bold text-white">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-center font-light text-white">
          {description}
        </p>
      )}
    </header>
  );
}

export default SectionHeader;