import { ChangeEvent, useRef } from 'react';

interface TextareaProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

export const ProductTextarea: React.FC<TextareaProps> = ({
  value,
  onChange,
}) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleInput = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  return (
    <div className="flex flex-col gap-4 px-[1rem]">
      <span className="text-medium18 text-neutral-0">상품 소개글</span>
      <textarea
        ref={textareaRef}
        value={value}
        onChange={onChange}
        onInput={handleInput}
        className="font-regular resize-none overflow-hidden rounded-xs border border-neutral-80 bg-neutral-100 px-[1rem] py-[1rem] text-small16 text-neutral-0 focus:outline-none"
        style={{ minHeight: '8rem' }}
      />
    </div>
  );
};
