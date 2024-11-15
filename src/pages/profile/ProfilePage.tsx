import { HeaderWithSearch } from '@/components/Header';
import profile from '@/assets/images/profile.png';
import { ProductCard } from '@/components/ProductCard';
import { ReactComponent as SelfIntroduction } from '@/assets/svgs/selfIntroduction.svg';
import { ReactComponent as Bag } from '@/assets/svgs/bag.svg';
import { ReactComponent as Cart } from '@/assets/svgs/cart.svg';
import { ReactComponent as EditProfile } from '@/assets/svgs/editProfile.svg';
import product1 from '@/assets/images/product1.jpeg';
import product2 from '@/assets/images/product2.jpeg';
import product3 from '@/assets/images/product3.jpeg';
import product4 from '@/assets/images/product4.jpeg';
import product5 from '@/assets/images/product5.jpeg';
import { ProfileStatusChip } from '@/components/ProfileStatusChip';
import { useState } from 'react';
import { ProfileModifyModal } from '@/components/Modal/ProfileModifyModal';

const products = [
  {
    name: '맥북 프로 실버',
    imageSrc: product1,
    status: '대여중',
  },
  {
    name: '자전거',
    imageSrc: product2,
    status: '대여 마감',
  },
  {
    name: '아이폰 14 Pro',
    imageSrc: product3,
    status: '예약중',
  },
  {
    name: '에어팟 맥스',
    imageSrc: product4,
    status: '대여 가능',
  },
  {
    name: '에어팟',
    imageSrc: product5,
    status: '대여 가능',
  },
];

export const ProfilePage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen relative flex w-screen">
      <HeaderWithSearch />
      <div className="w-full flex-col px-[240px] py-[120px]">
        <div className="mb-[35px] flex items-center">
          <img
            src={profile}
            alt="profile"
            className="mr-[40px] h-[180px] w-[180px] rounded-full border p-3"
          />
          <div className="w-full flex-col">
            <div className="flex justify-between">
              <div className="flex gap-3">
                <div className="mb-[4px] text-xxlarge32 font-semibold text-neutral-0">
                  지니핑
                  <span className="self-center pl-[3px] text-xlarge26 font-semibold text-placeholder">
                    님
                  </span>
                </div>
                <EditProfile onClick={() => setIsModalOpen(true)} />
              </div>
              <div className="flex gap-5">
                <ProfileStatusChip title="대여상품" number={8} />
                <ProfileStatusChip title="예약상품" number={10} />
                <ProfileStatusChip title="작성후기" number={16} />
              </div>
            </div>

            {isModalOpen && (
              <ProfileModifyModal setIsModalOpen={setIsModalOpen} />
            )}

            <div className="flex gap-1">
              <SelfIntroduction />
              <span className="font-regular text-xsmall16 text-neutral-40">
                집 가고 싶어요
              </span>
            </div>
          </div>
        </div>
        <div className="mb-[40px] flex-col">
          <div className="mb-[25px] border-b border-t border-neutral-80 p-3">
            <div className="flex items-center justify-center gap-2">
              <Bag />
              <span className="text-center text-medium18 font-semibold text-neutral-0">
                지니핑님 상품
              </span>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {products.map((product, index) => (
                <ProductCard
                  key={index}
                  name={product.name}
                  imageSrc={product.imageSrc}
                  status={product.status}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="mb-[40px] flex-col">
          <div className="mb-[25px] border-b border-t border-neutral-80 p-3">
            <div className="flex items-center justify-center gap-2">
              <Cart />
              <span className="text-center text-medium18 font-semibold text-neutral-0">
                대여중인 상품
              </span>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {products.map((product, index) => (
                <ProductCard
                  key={index}
                  name={product.name}
                  imageSrc={product.imageSrc}
                  status={product.status}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
