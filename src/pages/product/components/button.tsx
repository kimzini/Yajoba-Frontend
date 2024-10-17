interface ButtonProps {
  isChecked: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

export const DayButton: React.FC<ButtonProps> = ({
  isChecked,
  onClick,
  children,
}) => {
  return (
    <button
      className={`font-regular items-center justify-center rounded-xs border p-[1rem] text-small16 ${
        isChecked
          ? 'border-primary bg-primary-10 text-primary'
          : 'border-neutral-80 bg-neutral-100 text-placeholder'
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
