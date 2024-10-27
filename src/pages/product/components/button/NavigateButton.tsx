import { ButtonHTMLAttributes } from "react";

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