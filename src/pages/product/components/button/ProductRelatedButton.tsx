import { ButtonHTMLAttributes } from "react";

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
