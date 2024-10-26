import { ReactNode } from 'react';

interface ChipProps {
  children: ReactNode;
  bgColor: string;
}

export const ProductStatusChip = ({ children, bgColor }: ChipProps) => {
  return (
    <div
      className="flex items-center justify-center rounded-xs px-3 py-1 text-xsmall14 font-medium text-neutral-100"
      style={{ backgroundColor: bgColor }}
    >
      <span>{children}</span>
    </div>
  );
};