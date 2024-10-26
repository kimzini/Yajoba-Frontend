import { HeaderWithoutSearch } from '../../components/Header';
import { ImageUploader } from './components/ImageUploader';
import { useState } from 'react';
import { CategoryDropdowns } from './components/Dropdown';
import { ProductInput } from './components/input/ProductInput';
import { TagInput } from './components/input/TagInput';
import { PriceInput } from './components/input/PriceInput';
import { ProductTextArea } from './components/textarea/ProductTextArea';
import { LocationInput } from './components/input/LocationInput';
import { DayInput } from './components/input/DayInput';

export const ProductCreatePage = () => {
  const [title, setTitle] = useState<string>('');
  const [productName, setProductName] = useState<string>('');
  const [tags, setTags] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [sido, setSido] = useState<string>('');
  const [sigungu, setSigungu] = useState<string>('');
  const [bname, setBname] = useState<string>('');
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [images, setImages] = useState<string[]>([]);

  const handleTagsChange = (newTags: string) => {
    setTags(newTags);
  };

  const handleImagesUpload = (newImages: string[]) => {
    setImages(newImages);
  };

  const handleSubmit = async () => {
    const formData = {
      title,
      productName,
      tags,
      description,
      price,
      sido,
      sigungu,
      bname,
      startDate: startDate ? startDate.toISOString().split('T')[0] : '',
      endDate: endDate ? endDate.toISOString().split('T')[0] : '',
      images,
    };

    // API
  };

  return (
    <div className="min-h-screen flex w-screen">
      {/* 토큰 받았냐 안 받았냐에 따라 헤더 다르게 나옴 */}
      <HeaderWithoutSearch />
      <div className="flex w-full flex-col px-[240px] py-[60px]">
        <div className="flex w-full border-b border-neutral-80 px-[1rem] pb-[2rem] pt-[4rem] text-xxlarge32 font-semibold text-neutral-0">
          상품 등록하기
        </div>
        <div className="flex w-full flex-col gap-[2rem] px-[0.5rem] py-[2rem]">
          <ProductInput
            title="제목"
            value={title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTitle(e.target.value)
            }
          />
          <ProductInput
            title="상품명"
            value={productName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setProductName(e.target.value)
            }
          />
          <TagInput onTagsChange={handleTagsChange} />
          <ImageUploader maxImages={10} onImagesChange={handleImagesUpload} />
          <PriceInput
            value={price}
            onChangePrice={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPrice(e.target.value)
            }
          />
          <CategoryDropdowns />
          <ProductTextArea
            value={description}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setDescription(e.target.value)
            }
          />
          <LocationInput
            title="위치"
            sido={sido}
            sigungu={sigungu}
            bname={bname}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const { name, value } = e.target;

              if (name === 'sido') {
                setSido(value);
              } else if (name === 'sigungu') {
                setSigungu(value);
              } else if (name === 'bname') {
                setBname(value);
              }
            }}
          />
          <DayInput
            startDate={startDate}
            endDate={endDate}
            onStartDateChange={(date: Date | null) => setStartDate(date)}
            onEndDateChange={(date: Date | null) => setEndDate(date)}
          />
          <button
            onClick={handleSubmit}
            className="mx-[1rem] mb-[5rem] mt-6 rounded-xs bg-secondary-100 px-4 py-3 text-medium18 text-white"
          >
            상품 등록
          </button>
        </div>
      </div>
    </div>
  );
};
