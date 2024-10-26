import { ButtonHTMLAttributes } from 'react';

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

interface NavigateButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const NavigateButton = ({
  children,
  ...buttonProps
}: NavigateButtonProps) => {
  return (
    <button
      className="flex items-center justify-center rounded-[8px] border border-neutral-40 bg-[#F7F7F7] px-9 py-3"
      {...buttonProps}
    >
      <span className="font-regular text-small16 text-neutral-10">
        {children}
      </span>
    </button>
  );
};

interface ProductRelatedButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const ProductRelatedButton = ({
  className,
  children,
  ...buttonProps
}: ProductRelatedButtonProps) => {
  return (
    <button
      className={`flex items-center justify-center rounded-[8px] border border-neutral-80 px-4 py-1 ${className}`}
      {...buttonProps}
    >
      <span className="font-regular text-xsmall14">{children}</span>
    </button>
  );
};
