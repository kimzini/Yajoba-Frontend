import { HeaderWithoutSearch } from "../../components/Header";
import { DayInput, PriceInput, ProductInput } from "./components/input";
import { ProductTextarea } from "./components/textarea";
import { ImageUploader } from "./components/ImageUploader";

export const ProductCreatePage = () => {
  return(
    <div className="flex h-screen w-screen">
        {/* 토큰 받았냐 안 받았냐에 따라 헤더 다르게 나옴 */}
      <HeaderWithoutSearch />
      <div className="flex flex-col w-full px-[16rem] py-[5.5rem]">
        <div className="flex w-full border-b border-neutral-80 text-xxlarge32 font-semibold text-neutral-0 px-[1rem] pt-[4rem] pb-[2rem]">
          상품 등록하기
        </div>
        <div className="flex flex-col w-full px-[0.5rem] py-[2rem] gap-[2rem]">
          <ProductInput title="제목" />
          <ImageUploader maxImages={10} />
          <ProductInput title="상품명" />
          <ProductTextarea />
          <PriceInput />
          <ProductInput title="위치" />
          <DayInput />
        </div>
      </div>
    </div>
  );
};