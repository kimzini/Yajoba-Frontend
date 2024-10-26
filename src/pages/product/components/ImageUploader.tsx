import { useState, ChangeEvent } from 'react';
import { ReactComponent as Plus } from '@/assets/svgs/plus.svg';

interface ImageUploaderProps {
  maxImages?: number;
  onImagesChange: (newImages: string[]) => void;
}

export const ImageUploader = ({
  maxImages = 10,
  onImagesChange,
}: ImageUploaderProps) => {
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const newImages = Array.from(files).map((file) =>
        URL.createObjectURL(file),
      );
      if (uploadedImages.length + newImages.length <= maxImages) {
        const updatedImages = [...uploadedImages, ...newImages];
        setUploadedImages(updatedImages);
        onImagesChange(updatedImages);
      }
    }
  };

  return (
    <div className="flex flex-col gap-4 overflow-x-auto px-[1rem]">
      <span className="text-medium18 text-neutral-0">상품 사진</span>
      <div className="flex gap-[1rem]">
        {uploadedImages.map((image, index) => (
          <div
            key={index}
            className="flex max-h-[12rem] max-w-[12rem] items-center justify-center overflow-hidden rounded-sm border border-neutral-80 bg-neutral-100"
          >
            <img
              src={image}
              alt={`image ${index + 1}`}
              className="max-h-[12rem] max-w-[12rem] object-cover"
            />
          </div>
        ))}
        {uploadedImages.length < maxImages && (
          <label className="flex h-[12rem] w-[12rem] cursor-pointer flex-col items-center justify-center gap-[1rem] rounded-sm border border-neutral-80 bg-neutral-100">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
            <Plus />
            <span className="font-regular text-small16 text-neutral-40">
              {uploadedImages.length}/{maxImages}
            </span>
          </label>
        )}
      </div>
    </div>
  );
};
