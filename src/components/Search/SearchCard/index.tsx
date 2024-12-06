import { RentedChip } from '@/components/common/ProductStatusChip';
import { useNavigate } from 'react-router-dom';

export type SearchCardProps = {
  productNm: string;
  productPrice: number;
  productPlace: string;
  productImg: string;
  userImg: string;
  userNm: string;
};

export const SearchCard = ({
  productNm,
  productPrice,
  productPlace,
  productImg,
  userImg,
  userNm,
}: SearchCardProps) => {
  const formattedPrice = new Intl.NumberFormat().format(productPrice);
  const navigate = useNavigate();

  const handleProduct = () => {
    navigate('/product/1');
  };

  return (
    <div
      className="flex w-full cursor-pointer gap-[50px] rounded-[8px] bg-white"
      onClick={handleProduct}
    >
      <div className="relative">
        <img src={productImg} alt="product image" className="rounded-xs" />
        <RentedChip className="absolute left-0 top-0" />
      </div>
      <div className="flex flex-col py-[30px]">
        <span className="mb-[11px] text-large24 font-medium text-neutral-0">
          {productNm}
        </span>
        <span className="font-regular mb-[6px] text-small16 text-neutral-0">
          {formattedPrice}원
        </span>
        <span className="font-regular mb-[34px] text-xsmall14 text-neutral-60">
          {productPlace}
        </span>
        <div className="flex items-center gap-[7px]">
          <img
            src={userImg}
            alt="user image"
            className="h-[36px] w-[36px] rounded-full border"
          />
          <span className="text-xsmall14 font-medium text-neutral-0">
            {userNm}
          </span>
        </div>
      </div>
    </div>
  );
};
