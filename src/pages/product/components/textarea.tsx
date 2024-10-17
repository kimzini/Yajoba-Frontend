import { useRef } from "react";

export const ProductTextarea = () => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleInput = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  return (
    <div className="flex flex-col gap-4 px-[1rem]">
        <span className="text-medium18 text-neutral-0">상품 소개글</span>
        <textarea
            ref={textareaRef}
            onInput={handleInput} 
            className="bg-neutral-100 border border-neutral-80 rounded-xs text-small16 font-regular text-neutral-0 px-[1rem] py-[1rem] resize-none overflow-hidden focus:outline-none" 
            style={{ minHeight: "8rem" }} 
        />
    </div>
  );
};