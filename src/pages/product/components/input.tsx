import { useState } from 'react';
import calendar from '../../../assets/calendar.svg';
import { DayButton } from './button';

interface InputProps {
  title: string;
}

export const ProductInput = ({ title }: InputProps) => {
  return (
    <div className="flex flex-col gap-4 px-[1rem]">
      <span className="text-medium18 text-neutral-0">{title}</span>
      <input className="font-regular rounded-xs border border-neutral-80 bg-neutral-100 px-[0.75rem] py-[0.75rem] text-small16 text-neutral-0 focus:outline-none" />
    </div>
  );
};

export const PriceInput = () => {
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [isFocused, setIsFocused] = useState(false); // input 포커스 여부 관리

  const handleDayClick = (day: string) => {
    setSelectedDay(day);
  };

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
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <span className="font-regular text-placeholder text-small16">원</span>
        </div>

        <div className="flex gap-[0.6rem]">
          <DayButton
            isChecked={selectedDay === '시간'}
            onClick={() => {
              handleDayClick('시간');
            }}
          >
            시간
          </DayButton>
          <DayButton
            isChecked={selectedDay === '일'}
            onClick={() => {
              handleDayClick('일');
            }}
          >
            일
          </DayButton>
          <DayButton
            isChecked={selectedDay === '주'}
            onClick={() => {
              handleDayClick('주');
            }}
          >
            주
          </DayButton>
          <DayButton
            isChecked={selectedDay === '월'}
            onClick={() => {
              handleDayClick('월');
            }}
          >
            월
          </DayButton>
        </div>
      </div>
    </div>
  );
};

export const DayInput = () => {
  return (
    <div className="flex flex-col gap-4 px-[1rem]">
      <span className="text-medium18 text-neutral-0">대여 가능 기간</span>
      <div className="flex items-center justify-center gap-10">
        <div className="flex w-1/2 items-center justify-between rounded-xs border border-neutral-80 bg-neutral-100 px-[1rem] py-[0.75rem]">
          <input className="font-regular bg-neutral-100 text-small16 text-neutral-0 focus:outline-none" />
          <img src={calendar} alt="calendar" />
        </div>

        <span className="text-medium18 text-placeholder">~</span>

        <div className="flex w-1/2 items-center justify-between rounded-xs border border-neutral-80 bg-neutral-100 px-[1rem] py-[0.75rem]">
          <input className="font-regular bg-neutral-100 text-small16 text-neutral-0 focus:outline-none" />
          <img src={calendar} alt="calendar" />
        </div>
      </div>
    </div>
  );
};
