"use client"
import clsx from 'clsx';
import { useState } from 'react';

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
  disabled?: boolean;
  error?: string;
};

const Select = ({
  label = "",
  kind="primary",
  size,
  className,
  labelClassName,
  selectClassName,
  errorClassName,
  placeholder = "",
  options = [],
  disabled = false,
  error = ""
}: SelectProps) => {
  const [value, setValue] = useState("");

  const selectClass = clsx("select appearance-none block w-full border focus:outline-none text-input text-sm font-sans", {
    "select--primary": kind === "primary",
    "select--primary-outline": kind === "primary-outline",
    "h-[32px] rounded-[2px] px-2.5": size === "extra-small",
    "h-[36px] rounded-[4px] px-3": size === "small",
    "h-[45px] rounded-[3px] px-3.5": size === "medium",
    "h-[48px] rounded-[2px] px-4": size === "large",
    "h-[54px] rounded-[4px] px-7": size === "extra-large",
    "text-input-placeholder": placeholder && !value,
    "disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none": disabled,
    "invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500": error,
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

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className={clsx("bg-white", className)}>
      {label && (
        <label className={selectLabelClassName}>
          {label}
        </label>
      )}
      <div className="relative">
        <select className={selectClass} onChange={handleChange}>
          {placeholder && (
            <option hidden value="" disabled selected>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <span className="select-arrow"></span>
      </div>
      {error && (
        <div className={selectErrorClassName}>
          {error}
        </div>
      )}
    </div>
  );
}

export default Select;