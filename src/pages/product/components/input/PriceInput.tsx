import { ChangeEvent, useState } from "react";

interface PriceInputProps {
    value: string;
    onChangePrice: (e: ChangeEvent<HTMLInputElement>) => void;
  }
  
  export const PriceInput = ({ value, onChangePrice }: PriceInputProps) => {
    const [isFocused, setIsFocused] = useState(false);
  
    return (
      <div className="flex flex-col gap-4 px-[1rem]">
        <span className="text-medium18 text-neutral-0">가격</span>
        <div className="flex gap-[1.3rem]">
          <div
            className={`w-50 border ${
              isFocused ? '' : 'border-neutral-80'
            } items-end justify-between rounded-xs bg-neutral-100 px-[1rem] py-[0.75rem]`}
          >
            <input
              className="font-regular bg-neutral-100 text-small16 text-neutral-0 focus:outline-none"
              value={value}
              onChange={onChangePrice}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            <span className="font-regular text-small16 text-placeholder">원</span>
          </div>
        </div>
      </div>
    );
  };