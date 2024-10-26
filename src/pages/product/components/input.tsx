import { ChangeEvent, useState } from 'react';
import { DayButton } from './button';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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

export const PriceInput = ({
  value,
  onChangePrice,
  selectedDay,
  onDayChange,
}: PriceInputProps) => {
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
          {['시간', '일', '주', '월'].map((day) => (
            <DayButton
              key={day}
              isChecked={selectedDay === day}
              onClick={() => onDayChange(day)}
            >
              {day}
            </DayButton>
          ))}
        </div>
      </div>
    </div>
  );
};

interface DayInputProps {
  startDate: Date | null;
  endDate: Date | null;
  onStartDateChange: (date: Date | null) => void;
  onEndDateChange: (date: Date | null) => void;
}

export const DayInput = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
}: DayInputProps) => {
  return (
    <div className="flex flex-col gap-4 px-[1rem]">
      <span className="text-medium18 text-neutral-0">대여 가능 기간</span>
      <div className="flex items-center gap-8">
        <div className="relative">
          <DatePicker
            selected={startDate ?? undefined}
            onChange={(date) => onStartDateChange(date)}
            selectsStart
            startDate={startDate ?? undefined}
            endDate={endDate ?? undefined}
            dateFormat="yyyy-MM-dd"
            className="flex items-center rounded-xs border border-neutral-80 bg-neutral-100 px-[1rem] py-[0.75rem] focus:outline-none"
          />
        </div>
        <span className="text-medium18 text-placeholder">~</span>
        <div className="relative">
          <DatePicker
            selected={endDate ?? undefined}
            onChange={(date) => onEndDateChange(date)}
            selectsEnd
            startDate={startDate ?? undefined}
            endDate={endDate ?? undefined}
            minDate={startDate ?? undefined}
            dateFormat="yyyy-MM-dd"
            className="flex items-center rounded-xs border border-neutral-80 bg-neutral-100 px-[1rem] py-[0.75rem] focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
};
