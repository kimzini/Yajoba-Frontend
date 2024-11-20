import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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
  