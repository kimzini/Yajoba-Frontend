interface ChipProps {
  title: string;
  number: number;
}

export const ProfileStatusChip = ({ title, number }: ChipProps) => {
  return (
    <div className="flex max-h-[40px] items-center justify-center rounded-xs bg-neutral-90 px-[17px]">
      <span className="text-xxsmall14 mr-3 font-medium text-neutral-30">
        {title}
      </span>
      <span className="text-xsmall16 font-semibold text-neutral-0">
        {number}
      </span>
    </div>
  );
};
