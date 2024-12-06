export const RentedChip = ({ className = '' }) => {
  return (
    <div
      className={`flex items-center justify-center rounded-xs bg-[#26394E] px-[12px] py-1 text-xsmall14 font-medium text-neutral-100 ${className}`}
    >
      <span className="text-[#FED057]">대여중</span>
    </div>
  );
};

export const ReadyToRentChip = ({ className = '' }) => {
  return (
    <div
      className={`flex items-center justify-center rounded-xs bg-[#FED057] px-[12px] py-1 text-xsmall14 font-medium text-neutral-100 ${className}`}
    >
      <span className="text-[#26394E]">대여 가능</span>
    </div>
  );
};

export const PendingChip = ({ className = '' }) => {
  return (
    <div
      className={`flex items-center justify-center rounded-xs bg-[#26394E] px-[12px] py-1 text-xsmall14 font-medium text-neutral-100 ${className}`}
    >
      <span className="text-[#FED057]">예약중</span>
    </div>
  );
};

export const ClosedChip = ({ className = '' }) => {
  return (
    <div
      className={`flex items-center justify-center rounded-xs bg-[#FED057] px-[12px] py-1 text-xsmall14 font-medium text-neutral-100 ${className}`}
    >
      <span className="text-[#26394E]">대여 마감</span>
    </div>
  );
};
