import { ChangeEvent, useState } from 'react';
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

interface TagInputProps {
  onTagsChange: (tags: string) => void;
}

export const TagInput = ({ onTagsChange }: TagInputProps) => {
  const [inputValue, setInputValue] = useState('');
  const [tags, setTags] = useState<string[]>([]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddTag = () => {
    const trimmedValue = inputValue.trim();
    if (trimmedValue && !tags.includes(`#${trimmedValue}`) && tags.length < 6) {
      const newTag = `#${trimmedValue}`;
      const updatedTags = [...tags, newTag];
      setTags(updatedTags);
      onTagsChange(updatedTags.join(','));
      setInputValue('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    const updatedTags = tags.filter((tag) => tag !== tagToRemove);
    setTags(updatedTags);
    onTagsChange(updatedTags.join(','));
  };

  return (
    <div className="flex flex-col gap-4 px-[1rem]">
      <span className="text-medium18 text-neutral-0">태그</span>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <div
            key={index}
            className="flex items-center rounded-md bg-neutral-100 px-2 py-1 text-neutral-0"
          >
            <span>{tag}</span>
            <button
              onClick={() => handleRemoveTag(tag)}
              className="ml-2 text-secondary-40"
            >
              ×
            </button>
          </div>
        ))}
        {tags.length < 6 && (
          <div className="flex items-center">
            <input
              className="font-regular rounded-xs border border-neutral-80 bg-neutral-100 px-[0.75rem] py-[0.75rem] text-small16 text-neutral-0 focus:outline-none"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="태그 입력"
            />
            <button
              onClick={handleAddTag}
              className="ml-2 h-full rounded-md bg-secondary-100 px-4 text-white"
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

interface LocationInputProps {
  title: string;
  sido: string;
  sigungu: string;
  bname: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const LocationInput = ({
  title,
  sido,
  sigungu,
  bname,
  onChange,
}: LocationInputProps) => {
  return (
    <div className="flex flex-col gap-4 px-[1rem]">
      <span className="text-medium18 text-neutral-0">{title}</span>
      <div className="flex space-x-5">
        <input
          name="sido"
          className="font-regular rounded-xs border border-neutral-80 bg-neutral-100 px-[1rem] py-[0.75rem] text-small16 text-neutral-0 focus:outline-none"
          value={sido}
          onChange={onChange}
          placeholder="시/도"
        />
        <input
          name="sigungu"
          className="font-regular rounded-xs border border-neutral-80 bg-neutral-100 px-[1rem] py-[0.75rem] text-small16 text-neutral-0 focus:outline-none"
          value={sigungu}
          onChange={onChange}
          placeholder="시/군/구"
        />
        <input
          name="bname"
          className="font-regular rounded-xs border border-neutral-80 bg-neutral-100 px-[1rem] py-[0.75rem] text-small16 text-neutral-0 focus:outline-none"
          value={bname}
          onChange={onChange}
          placeholder="읍/면/동"
        />
      </div>
    </div>
  );
};

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
