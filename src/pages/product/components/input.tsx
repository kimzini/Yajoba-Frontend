import { ChangeEvent, useState } from 'react';
import calendar from '../../../assets/calendar.svg';
import { DayButton } from './button';

interface InputProps {
  title?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const ProductInput = ({ title, value, onChange }: InputProps) => {
  return (
    <div className="flex flex-col gap-4 px-[1rem]">
      <span className="text-medium18 text-neutral-0">{title}</span>
      <input
        className="font-regular rounded-xs border border-neutral-80 bg-neutral-100 px-[0.75rem] py-[0.75rem] text-small16 text-neutral-0 focus:outline-none"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

interface PriceInputProps {
  value: string;
  onChangePrice: (e: ChangeEvent<HTMLInputElement>) => void;
  selectedDay: string;
  onDayChange: (selectedDay: string) => void;
}

export const PriceInput: React.FC<PriceInputProps> = ({
  value,
  onChangePrice,
  selectedDay,
  onDayChange,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="flex flex-col gap-4 px-[1rem]">
      <span className="text-medium18 text-neutral-0">가격</span>
      <div className="flex gap-[1.3rem]">
        <div
          className={`max-w-[15rem] border ${
            isFocused ? '' : 'border-neutral-80'
          } items-end justify-between rounded-xs bg-neutral-100 px-[1rem] py-[1rem]`}
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

        <div className="flex gap-[0.6rem]">
          <DayButton
            isChecked={selectedDay === '시간'}
            onClick={() => onDayChange('시간')}
          >
            시간
          </DayButton>
          <DayButton
            isChecked={selectedDay === '일'}
            onClick={() => onDayChange('일')}
          >
            일
          </DayButton>
          <DayButton
            isChecked={selectedDay === '주'}
            onClick={() => onDayChange('주')}
          >
            주
          </DayButton>
          <DayButton
            isChecked={selectedDay === '월'}
            onClick={() => onDayChange('월')}
          >
            월
          </DayButton>
        </div>
      </div>
    </div>
  );
};

interface RentalPeriod {
  start: string;
  end: string;
}

interface DayInputProps {
  rentalPeriod: RentalPeriod;
  onPeriodChange: (start: string, end: string) => void;
}

export const DayInput: React.FC<DayInputProps> = ({
  rentalPeriod,
  onPeriodChange,
}) => {
  const handleStartDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    onPeriodChange(e.target.value, rentalPeriod.end);
  };

  const handleEndDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    onPeriodChange(rentalPeriod.start, e.target.value);
  };

  return (
    <div className="flex flex-col gap-4 px-[1rem]">
      <span className="text-medium18 text-neutral-0">대여 가능 기간</span>
      <div className="flex items-center justify-center gap-10">
        <div className="flex w-1/2 items-center justify-between rounded-xs border border-neutral-80 bg-neutral-100 px-[1rem] py-[0.75rem]">
          <input
            className="font-regular bg-neutral-100 text-small16 text-neutral-0 focus:outline-none"
            value={rentalPeriod.start}
            onChange={handleStartDateChange}
          />
          <img src={calendar} alt="calendar" />
        </div>

        <span className="text-medium18 text-placeholder">~</span>

        <div className="flex w-1/2 items-center justify-between rounded-xs border border-neutral-80 bg-neutral-100 px-[1rem] py-[0.75rem]">
          <input
            className="font-regular bg-neutral-100 text-small16 text-neutral-0 focus:outline-none"
            value={rentalPeriod.end}
            onChange={handleEndDateChange}
          />
          <img src={calendar} alt="calendar" />
        </div>
      </div>
    </div>
  );
};
