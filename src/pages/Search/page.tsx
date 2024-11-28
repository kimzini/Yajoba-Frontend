import { HeaderWithSearch } from '@/components/common/Header';
import { SearchCard } from '@/components/Search/SearchCard';
import bag from '@/assets/images/bag.png';
import profile from '@/assets/images/profile.png';

export const SearchPage = () => {
  return (
    <div className="min-h-screen flex w-screen flex-col">
      <HeaderWithSearch />
      <div className="mb-7 mt-[130px] flex w-full px-[217px]">
        <SearchCard
          productImg={bag}
          productNm="루이비통 가방"
          productPlace="인천광역시 연수구 아카데미로"
          productPrice={60000}
          userImg={profile}
          userNm="진우핑"
        />
      </div>
    </div>
  );
};
