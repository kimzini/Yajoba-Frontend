import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { useEffect, useState } from 'react';
import { ReactComponent as Dropdown } from '@/assets/svgs/dropdown.svg';
import { ReactComponent as RightArray } from '@/assets/svgs/rightarray.svg';

export const CategoryDropdowns = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [subCategories, setSubCategories] = useState<string[]>([]);
  const [minorCategories, setMinorCategories] = useState<string[]>([]);

  const [selectedMainCategory, setSelectedMainCategory] =
    useState('대분류 선택');
  const [selectedSubCategory, setSelectedSubCategory] = useState('중분류 선택');
  const [selectedMinorCategory, setSelectedMinorCategory] =
    useState('소분류 선택');

  // 대분류 목록 api 요청
  const fetchCategories = async () => {
    const mainCategoryData = ['가전제품']; // 나중에 api 요청
    setCategories(mainCategoryData);
  };

  // 중분류 목록 api 요청
  const fetchSubCategories = async (mainCategory: string) => {
    const subCategoryData =
      mainCategory === '가전제품' ? ['냉장고', '세탁기'] : [];
    setSubCategories(subCategoryData);
  };

  // 소분류 목록 api 요청
  const fetchMinorCategories = async (subCategory: string) => {
    const minorCategoryData =
      subCategory === '냉장고' ? ['미니 냉장고', '양문형 냉장고'] : [];
    setMinorCategories(minorCategoryData);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="flex flex-col gap-4 px-[1rem]">
      <span className="text-medium18 text-neutral-0">상품 카테고리</span>
      <div className="flex flex-wrap items-center gap-2 md:gap-4 lg:gap-8">
        {/* 대분류 */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="font-regular flex justify-between border border-neutral-80 bg-neutral-100 px-[3rem] py-[1.5rem] text-medium20 text-neutral-40">
              {selectedMainCategory}
              <Dropdown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-neutral-100 py-4 text-medium18 font-light text-neutral-30">
            {categories.map((category, index) => (
              <DropdownMenuItem
                key={index}
                onClick={() => {
                  setSelectedMainCategory(category);
                  setSelectedSubCategory('중분류 선택');
                  setSelectedMinorCategory('소분류 선택');
                  fetchSubCategories(category);
                }}
              >
                {category}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

       <RightArray />

        {/* 중분류 */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="font-regular flex justify-between border border-neutral-80 bg-neutral-100 px-[3rem] py-[1.5rem] text-medium20 text-neutral-40">
              {selectedSubCategory}
              <Dropdown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-neutral-100 py-4 text-medium18 font-light text-neutral-30">
            {subCategories.map((subCategory, index) => (
              <DropdownMenuItem
                key={index}
                onClick={() => {
                  setSelectedSubCategory(subCategory);
                  setSelectedMinorCategory('소분류 선택');
                  fetchMinorCategories(subCategory);
                }}
              >
                {subCategory}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <RightArray />

        {/* 소분류 */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="font-regular flex justify-between border border-neutral-80 bg-neutral-100 px-[3rem] py-[1.5rem] text-medium20 text-neutral-40">
              {selectedMinorCategory}
              <Dropdown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-neutral-100 py-4 text-medium18 font-light text-neutral-30">
            {minorCategories.map((minorCategory, index) => (
              <DropdownMenuItem
                key={index}
                onClick={() => setSelectedMinorCategory(minorCategory)}
              >
                {minorCategory}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
