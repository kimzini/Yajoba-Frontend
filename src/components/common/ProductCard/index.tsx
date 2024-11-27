import { ClosedChip, PendingChip, ReadyToRentChip, RentedChip } from "../ProductStatusChip";

interface CardProps {
    name: string;
    imageSrc: string;
    status: string;
}
  
  export const ProductCard = ({ name, imageSrc, status }: CardProps) => {
    let StatusChip;
  
    switch (status) {
      case '대여중':
        StatusChip = <RentedChip />;
        break;
      case '대여 마감':
        StatusChip = <ClosedChip />;
        break;
      case '대여 가능':
        StatusChip = <ReadyToRentChip />;
        break;
      case '예약중':
        StatusChip = <PendingChip />;
        break;
      default:
        StatusChip = null;
    }
  
    return (
      <div className="h-[220px] w-[230px] flex-col overflow-hidden rounded-[8px] border p-4">
        <div className="mb-[13px] flex items-center justify-between">
          {StatusChip}
          <span className="text-xsmall16 font-semibold text-neutral-30">
            {name}
          </span>
        </div>
        <img
          src={imageSrc}
          alt={name}
          className="h-[140px] w-[210px] rounded-[4px] object-cover"
        />
      </div>
    );
  };
  