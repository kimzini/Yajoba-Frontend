import { ReactComponent as DefaultProfile } from '@/assets/defaultProfile.svg';
import { ReactComponent as Star } from '@/assets/star.svg';

export const ReviewCard = () => {
  return (
    <div className="flex space-x-[13px] px-[24px]">
      <div className="flex h-[45px] w-[45px] items-center justify-center rounded-full bg-neutral-80 p-[13px]">
        <DefaultProfile />
      </div>
      <div className="flex w-full flex-col space-y-2">
        <div className="flex justify-between">
          <div className="flex">
            <span className="mr-3 text-small16 font-semibold text-neutral-0">
              시험끝났다핑
            </span>
            <Star />
            <span className="font-regular ml-2 text-xsmall14 text-neutral-0">
              1.0
            </span>
          </div>
          <span className="font-regular text-xxsmall12 text-neutral-40">
            2024.09.27
          </span>
        </div>
        <span className="font-regular text-small16 text-neutral-30">
          시험이 이제 끝났으니까 열심히 퍼블리싱 해보자...
        </span>
      </div>
    </div>
  );
};
