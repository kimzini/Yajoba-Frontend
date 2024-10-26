import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    isChecked: boolean;
  }
  
  export const DayButton = ({
    isChecked,
    onClick,
    children,
    ...buttonProps
  }: ButtonProps) => {
    return (
      <button
        className={`font-regular items-center justify-center rounded-xs border p-[1rem] text-small16 ${
          isChecked
            ? 'border-primary-100 bg-primary-10 text-primary-100'
            : 'border-neutral-80 bg-neutral-100 text-placeholder'
        }`}
        onClick={onClick}
        {...buttonProps}
      >
        {children}
      </button>
    );
  };