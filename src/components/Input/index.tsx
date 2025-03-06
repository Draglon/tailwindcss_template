import clsx from 'clsx';

type InputProps = {
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
  errorClassName?: string;
  type?: "text" | "password" | "number" | "email" | "tel";
  size?: 'extra-small' | 'small' | 'medium' | 'large' | 'extra-large';
  kind?: 'primary' | 'primary-outline';
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
};

const Input = ({
  label,
  type = "text",
  kind="primary",
  size="extra-large",
  className,
  labelClassName,
  inputClassName,
  errorClassName,
  placeholder,
  disabled,
  error,
}: InputProps) => {
  const inputClass = clsx("block w-full bg-white border focus:outline-none text-input text-sm font-sans", {
    "input-primary": kind === "primary",
    "input-primary-outline": kind === "primary-outline",
    "h-[32px] rounded-[2px] px-2.5": size === "extra-small",
    "h-[36px] rounded-[4px] px-3": size === "small",
    "h-[45px] rounded-[3px] px-3.5": size === "medium",
    "h-[48px] rounded-[2px] px-4": size === "large",
    "h-[54px] rounded-[4px] px-7": size === "extra-large",
    "placeholder-input-placeholder": placeholder,
    "disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none": disabled,
    "invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500": error,
  }, inputClassName);

  const inputLabelClassName = clsx({
    // "btn-primary-text": kind === "primary",
    // "btn-primary-outline-text": kind === "primary-outline",
    // "text-[11px]": size === "extra-small",
    // "text-sm": size === "small" || size === "medium" || size === "large" || size === "extra-large",
  }, labelClassName);

  const inputErrorClassName = clsx({
    // "btn-primary-text": kind === "primary",
    // "btn-primary-outline-text": kind === "primary-outline",
    // "text-[11px]": size === "extra-small",
    // "text-sm": size === "small" || size === "medium" || size === "large" || size === "extra-large",
  }, errorClassName);

  return (
    <div className={className}>
      <label className={inputLabelClassName}>
        {label}
      </label>
      <input className={inputClass} type={type} placeholder={placeholder} />
      <div className={inputErrorClassName}>
        {error}
      </div>
    </div>
  );
}

export default Input;