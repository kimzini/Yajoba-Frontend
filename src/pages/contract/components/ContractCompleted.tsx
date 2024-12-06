import React from "react";
import { useState } from "react";

interface ContractProps {
  lender: string;
  borrower: string;
  itemName: string;
  specifications: string;
  quantity: number;
  condition: string;
  notes?: string;
  rentalEndDate: string;
  rentalPlace: string;
  rentalDetailAddress: string;
  returnDate: string;
  returnPlace: string;
  returnDetailAddress: string;
  rentalFee: number;
  paymentDate: string;
  lateInterestRate: number;
  latePenaltyRate: number;
  damageCompensationRate: number;
  createdDate: string;
}

export const ContractCompleted = ({
  lender,
  borrower,
  itemName,
  specifications,
  quantity,
  condition,
  notes,
  rentalEndDate,
  rentalPlace,
  rentalDetailAddress,
  returnDate,
  returnPlace,
  returnDetailAddress,
  rentalFee,
  paymentDate,
  lateInterestRate,
  latePenaltyRate,
  damageCompensationRate,
  createdDate,
}: ContractProps) => {
  const [formValues, setFormValues] = useState<ContractProps>({
    lender,
    borrower,
    itemName,
    specifications,
    quantity,
    condition,
    notes: notes || "",
    rentalEndDate,
    rentalPlace,
    rentalDetailAddress,
    returnDate,
    returnPlace,
    returnDetailAddress,
    rentalFee,
    paymentDate,
    lateInterestRate,
    latePenaltyRate,
    damageCompensationRate,
    createdDate,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  return (
    <div className="flex flex-col w-full h-full ">
          <div className="flex w-full h-[85%] justify-center items-center overflow-hidden">
          </div>
          
      <span className="text-3xl font-bold text-center mb-8">차용 계약서(차용인ver)</span>

      <p className="font-extrabold ">
        <strong className="">대여인:</strong> <span className="underline underline-offset-2">{lender}</span>
      </p>
      <p>
      <strong>차용인:</strong>{" "}
        <input
          type="text"
          name="borrower"
          value={formValues.borrower}
          onChange={handleInputChange}
          className="bg-transparent focus:outline-black outline-dashed outline-[1px]"
          style={{
            width: `${formValues.borrower.length + 3}ch`, // 입력 글자수에 따라 인풋필드 크기 변경하도록~
          }}
        />
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">물품 정보</h2>
      <table className="table-auto border-collapse border border-gray-400 w-full text-left mb-6">
    <thead>
      <tr>
        <th className="border border-gray-400 px-4 py-2">물품명</th>
        <th className="border border-gray-400 px-4 py-2">형식 및 규격</th>
        <th className="border border-gray-400 px-4 py-2">수량</th>
        <th className="border border-gray-400 px-4 py-2">상태</th>
        <th className="border border-gray-400 px-4 py-2">비고</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border border-gray-400 px-4 py-2 underline underline-offset-2">{itemName}</td>
        <td className="border border-gray-400 px-4 py-2 underline underline-offset-2">{specifications}</td>
        <td className="border border-gray-400 px-4 py-2 underline underline-offset-2">{quantity}</td>
        <td className="border border-gray-400 px-4 py-2 underline underline-offset-2">{condition}</td>
        <td className="border border-gray-400 px-4 py-2 ">{notes || "-"}</td>
      </tr>
    </tbody>
  </table>

      <p className="mt-4">
        차용인은 위 물품을 틀림없이 차용(임대)하였으며, 아래와 같이 이행할 것을 확약한다.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">제 1조(차용기간 및 장소)</h2>
      <p>
        1. 본 계약에 따라 대여인은 차용인에게{" "}
        <strong><span className="underline underline-offset-2">{rentalEndDate}</span></strong>까지 해당 물품을 임대해야 한다. 해당 물품의
        대여장소는 <strong><span className="underline underline-offset-2">{rentalPlace}</span></strong>로 정한다. 위 대여장소의 상세주소는 다음과
        같다.
      </p>
      <p>- 상세주소: <strong><span className="underline underline-offset-2">{rentalDetailAddress}</span></strong></p>

      <p className="mt-2">
        2. 본 계약에 따라 차용인은 임대기간 종료 후{" "}
        <strong><span className="underline underline-offset-2">{returnDate}</span></strong>까지 해당 물품을 대여인에게 반납해야 한다. 해당
        물품의 반납장소는 <strong><span className="underline underline-offset-2">{returnPlace}</span></strong>로 정한다. 위 반납장소의 상세주소는
        다음과 같다.
      </p>
      <p>- 상세주소: <strong><span className="underline underline-offset-2">{returnDetailAddress}</span></strong></p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">제 2조(임대료의 납부)</h2>
      <p>
        차용물품에 대한 임대료는 <strong><span className="underline underline-offset-2">{rentalFee.toLocaleString()}원</span></strong>으로
        정한다. 차용인은 <strong><span className="underline underline-offset-2">{paymentDate}</span></strong>에 임대료를 일시지급해야 하며, 연체
        시 차용인은 본 계약에 따른 불이익을 받을 수 있다.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">제 3조(지연손해금)</h2>
      <p>
        1. 차용인이 약정된 기일을 초과하여, 임대료 납부를 게을리하였을 경우 차용인은
        지연이자로써 일 <strong><span className="underline underline-offset-2">{lateInterestRate}%</span></strong>를 청구할 수 있다. 이에 차용인은
        이의 없이 본 조항에 따라야 한다.
      </p>
      <p className="mt-2">
        2. 차용인이 약정된 기일을 초과하여, 해당물품 반납을 게을리하였을 경우 지연손해금으로
        물품가액의 <strong><span className="underline underline-offset-2">{latePenaltyRate}%</span></strong>를 청구할 수 있다. 이제 차용인은
        이의 없이 본 조항에 따라야 한다.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">제 4조(위험부담 및 면책조항)</h2>
      <p>
        1. 차용인의 귀책사유로 본 계약 물품에 파손, 훼손 또는 멸실이 발생한 경우 차용인은
        신품 가격의 <strong><span className="underline underline-offset-2">{damageCompensationRate}%</span></strong>를 배상하여야 한다.
      </p>
      <p className="mt-2">
        2. 전항의 파손, 훼손 또는 멸실이 천재지변, 사변, 국가비상사태 등 불가항력으로 인한
        것일 경우 차용인은 배상책임을 면한다.
      </p>

      <p className="mt-6 font-bold text-center"><span className="underline underline-offset-2">{createdDate}</span></p>

      <div className="mt-8 text-center">
        <p className="mb-4">
          <strong>대여인:</strong> <span className="underline underline-offset-2">{lender}</span> (서명)
        </p>
        <p className="mb-8">
          <strong>차용인:</strong>{" "}
        <input
          type="text"
          name="lender"
          value={formValues.borrower}
          onChange={handleInputChange}
          className="bg-transparent focus:outline-black outline-dashed outline-[1px]"
          style={{
            width: `${formValues.borrower.length + 3}ch`, // 입력 글자수에 따라 인풋필드 크기 변경하도록~
          }}
        />(서명)
        </p>
      </div>
      
    </div>
  );
};

