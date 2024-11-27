export const RentedChip = () => {
    return (
      <div className="flex items-center justify-center rounded-xs bg-[#FFDEDA] px-3 py-1 text-xsmall14 font-medium text-neutral-100">
        <span className="text-[#F94832]">대여중</span>
      </div>
    );
  };
  
  export const ReadyToRentChip = () => {
    return (
      <div className="flex items-center justify-center rounded-xs bg-[#DCF3E9] px-3 py-1 text-xsmall14 font-medium text-neutral-100">
        <span className="text-[#00D179]">대여 가능</span>
      </div>
    );
  };
  
  export const PendingChip = () => {
    return (
      <div className="flex items-center justify-center rounded-xs bg-[#D2DCFF] px-3 py-1 text-xsmall14 font-medium text-neutral-100">
        <span className="text-[#305DFF]">예약중</span>
      </div>
    );
  };
  
  export const ClosedChip = () => {
    return (
      <div className="flex items-center justify-center rounded-xs bg-[#EEC8FF] px-3 py-1 text-xsmall14 font-medium text-neutral-100">
        <span className="text-[#C341FF]">대여 마감</span>
      </div>
    );
  };
  