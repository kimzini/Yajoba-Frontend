import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import { useEffect, useState } from "react";
import dropdown from "@/assets/dropdown.svg";
import rightarray from "@/assets/rightarray.svg";

export const CategoryDropdowns = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [subCategories, setSubCategories] = useState<string[]>([]);
  const [minorCategories, setMinorCategories] = useState<string[]>([]);
  
  const [selectedMainCategory, setSelectedMainCategory] = useState("대분류 선택");
  const [selectedSubCategory, setSelectedSubCategory] = useState("중분류 선택");
  const [selectedMinorCategory, setSelectedMinorCategory] = useState("소분류 선택");

  // 대분류 목록 api 요청
  const fetchCategories = async () => {
    const mainCategoryData = ["가전제품"]; // 나중에 api 요청
    setCategories(mainCategoryData);
  }

  // 중분류 목록 api 요청
  const fetchSubCategories = async (mainCategory: string) => {
    const subCategoryData = mainCategory === "가전제품" ? ["냉장고", "세탁기"] : [];
    setSubCategories(subCategoryData);
  }

  // 소분류 목록 api 요청
  const fetchMinorCategories = async (subCategory: string) => {
    const minorCategoryData = subCategory === "냉장고" ? ["미니 냉장고", "양문형 냉장고"] : [];
    setMinorCategories(minorCategoryData);
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="flex flex-col gap-4 px-[1rem]">
      <span className="text-medium18 text-neutral-0">상품 카테고리</span>
      <div className="flex flex-wrap gap-2 md:gap-4 lg:gap-8 items-center">
        {/* 대분류 */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="font-regular border border-neutral-80 bg-neutral-100 px-[4rem] py-[1.5rem] text-neutral-40 text-medium20 flex justify-between">
              {selectedMainCategory}
              <img src={dropdown} alt="dropdown" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="font-light bg-neutral-100 py-4 text-neutral-30 text-medium18">
            {categories.map((category, index) => (
              <DropdownMenuItem
                key={index}
                onClick={() => {
                  setSelectedMainCategory(category);
                  setSelectedSubCategory("중분류 선택");
                  setSelectedMinorCategory("소분류 선택");
                  fetchSubCategories(category);
                }}
              >
                {category}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <img src={rightarray} alt="next"/>
        
        {/* 중분류 */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="font-regular border border-neutral-80 bg-neutral-100 px-[4rem] py-[1.5rem] text-neutral-40 text-medium20 flex justify-between">
              {selectedSubCategory} 
              <img src={dropdown} alt="dropdown" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="font-light bg-neutral-100 py-4 text-neutral-30 text-medium18">
            {subCategories.map((subCategory, index) => (
              <DropdownMenuItem
                key={index}
                onClick={() => {
                  setSelectedSubCategory(subCategory); 
                  setSelectedMinorCategory("소분류 선택"); 
                  fetchMinorCategories(subCategory);
                }}
              >
                {subCategory}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <img src={rightarray} alt="next"/>
        
        {/* 소분류 */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="font-regular border border-neutral-80 bg-neutral-100 px-[4rem] py-[1.5rem] text-neutral-40 text-medium20 flex justify-between">
              {selectedMinorCategory}
              <img src={dropdown} alt="dropdown" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="font-light bg-neutral-100 py-4 text-neutral-30 text-medium18">
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
  )
}