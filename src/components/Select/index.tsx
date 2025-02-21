import clsx from 'clsx';

type SelectProps = {
  className?: string;
  labelClassName?: string;
  selectClassName?: string;
  errorClassName?: string;
  size?: 'extra-small' | 'small' | 'medium' | 'large' | 'extra-large';
  kind?: 'primary' | 'primary-outline';
  label?: string;
  placeholder?: string;
  options?: { label: string; value: string }[];
  error?: string;
};

const Select = ({ label = "", kind="primary", size, className, labelClassName, selectClassName, errorClassName, placeholder = "", options = [], error = "" }: SelectProps) => {
  const selectClass = clsx("w-full", {
    "input-primary": kind === "primary",
    "input-primary-outline": kind === "primary-outline",
    "h-[32px] rounded-[2px] px-2.5": size === "extra-small",
    "h-[36px] rounded-[4px] px-3": size === "small",
    "h-[45px] rounded-[3px] px-3.5": size === "medium",
    "h-[48px] rounded-[2px] px-4": size === "large",
    "h-[54px] rounded-[4px] px-7": size === "extra-large",
  }, selectClassName);

  const selectLabelClassName = clsx({
    // "input-primary-text": kind === "primary",
    // "input-primary-outline-text": kind === "primary-outline",
    // "text-[11px]": size === "extra-small",
    // "text-sm": size === "small" || size === "medium" || size === "large" || size === "extra-large",
  }, labelClassName);

  const selectErrorClassName = clsx({
    // "input-primary-text": kind === "primary",
    // "input-primary-outline-text": kind === "primary-outline",
    // "text-[11px]": size === "extra-small",
    // "text-sm": size === "small" || size === "medium" || size === "large" || size === "extra-large",
  }, errorClassName);

  return (
    <div className={className}>
      {label && (
        <label className={selectLabelClassName}>
          {label}
        </label>
      )}
      <select className={selectClass}>
        {placeholder && (
          <option hidden={true} defaultValue={placeholder}>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {label && (
        <div className={selectErrorClassName}>
          {error}
        </div>
      )}
    </div>
  );
}

export default Select;