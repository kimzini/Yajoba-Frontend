import { HeaderWithoutSearch } from '@/components/common/Header';
import { ContractInput } from './components/ContractInput'
import { useState } from "react";


export default function DefaultContractPage () {
    const [isChecked, setIsChecked] = useState(false);
    const handleAgreeClick = () => {
        setIsChecked(!isChecked); // 체크 상태 토글
      };
     // 체크박스 상태 관리
    return (
        <div className="flex flex-col items-center w-screen h-screen">
      <div
        className="fixed top-0 left-0 w-full h-screen bg-cover"
      />
      <div className="relative flex -ml-[100%]">
      <HeaderWithoutSearch />
      </div>
      <div className="flex flex-col w-[65%] h-[83.7%] justify-end items-center font-extrabold">
          
            <div
              
              className="flex w-full max-w-[800px] h-[500px] overflow-y-auto overflow-x-hidden rounded-[27.42px] transform transition duration-170 hover:scale-[1.01] z-0 p-10"
              style={{ boxShadow: '0px 3.8px 10.5px 0 rgba(0,0,0,0.35)', scrollMarginLeft:'1000px'}}
              
            >
              
      <ContractInput
      lender={'박명수'} 
      borrower={'유재석'} 
      itemName={'k2'} 
      specifications={'밀반입'} 
      quantity={2} 
      condition={'녹슬음'} 
      rentalEndDate={'2024.11.25'} 
      rentalPlace={'울집~'} 
      rentalDetailAddress={'캐슬파크a동3115호'} 
      returnDate={''} 
      returnPlace={''} 
      returnDetailAddress={''} 
      rentalFee={0} 
      paymentDate={''} 
      lateInterestRate={0} 
      latePenaltyRate={0} 
      damageCompensationRate={0} 
      createdDate={''} 
      />
      </div>
      </div>
      <div className="flex flex-col items-center justify-start pt-4 z-50 h-[16.3%]">
          <label className="flex items-center cursor-pointer ">
            
            <span className="text-lg hover:scale-[101%]">
              계약서의 내용을 동의하시겠습니까?
            </span>
            <input
              type="checkbox"
              checked={isChecked}
              onClick={handleAgreeClick} 
              className="w-5 h-5 ml-2 border-2 border-gray-400 rounded-lg text-[#357fff] hover:scale-[105%] cursor-pointer"
            />
          </label>

          {isChecked && ( // 체크 되었을 경우에만 완료버튼 클릭 가능, api호출하게 동작시킬 예정
            <button
              className="mt-4 px-6 py- bg-[#357fff] text-white rounded-lg  hover:scale-[105%]"
              onClick={() => alert("동의가 확인되었습니다.")}
            >
              <span className='text-[17px]'>완료</span>
            </button>
          )}
        </div>
      
      </div>

    );
}
