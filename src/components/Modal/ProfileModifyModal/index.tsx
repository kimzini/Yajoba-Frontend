import { ReactComponent as DefaultProfile } from '@/assets/svgs/defaultProfile.svg';
import { useEffect, useRef, useState } from 'react';
import profile from '@/assets/images/profile.png';
import SignatureCanvas from 'react-signature-canvas';

type ModalProps = {
  setIsModalOpen: (isOpen: boolean) => void;
};

export const ProfileModifyModal = ({ setIsModalOpen }: ModalProps) => {
  const [nickname, setNickname] = useState<string>('');
  const [introduction, setIntroduction] = useState<string>('');
  const [profileImage, setProfileImage] = useState<File | string | null>(null);

  const sigCanvas = useRef<SignatureCanvas>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.size <= 10 * 1024 * 1024) {
      setProfileImage(file);
    }
  };

  const clearSignature = () => {
    sigCanvas.current?.clear();
  };

  useEffect(() => {
    const fetchProfileData = async () => {
      const mockData = {
        nickname: '지니핑',
        introduction: '집 가고 싶어요',
        profileImage: profile,
      };

      setNickname(mockData.nickname);
      setIntroduction(mockData.introduction);
      setProfileImage(mockData.profileImage);
    };

    fetchProfileData();
  }, []);

  const handleSubmit = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30">
      <div className="flex flex-col rounded-[12px] bg-white px-[80px] py-[60px] shadow-lg">
        <div className="mb-[30px] flex">
          <div className="mr-[80px] flex flex-col gap-[20px]">
            <div className="flex h-[180px] max-h-[180px] w-[180px] max-w-[180px] self-start rounded-full border border-neutral-60">
              {profileImage ? (
                typeof profileImage === 'string' ? (
                  <img
                    src={profileImage}
                    alt="Profile Preview"
                    className="rounded-full object-cover"
                  />
                ) : (
                  <img
                    src={URL.createObjectURL(profileImage)}
                    alt="Profile Preview"
                    className="rounded-full object-cover"
                  />
                )
              ) : (
                <DefaultProfile
                  width="80"
                  height="82"
                  viewBox="0 0 18 20"
                  className="m-[50px] self-center text-neutral-0"
                />
              )}
            </div>
            <label className="border-grayscale-70 mb-2 flex w-fit cursor-pointer items-center justify-center self-center rounded-[5px] border px-[14px] py-[6px] text-center">
              <span className="text-xsmall14 text-neutral-20">
                프로필 이미지 업로드
              </span>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>
          </div>

          <div className="flex w-[300px] flex-col gap-4">
            <div className="flex-col">
              <span className="text-medium18 font-bold text-neutral-0">
                닉네임
              </span>
              <input
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                className="text-small15 mt-2 w-full rounded-[5px] border border-neutral-60 bg-white p-[10px] font-regular text-neutral-10 outline-none"
              />
            </div>

            <div className="flex-col">
              <span className="text-medium18 font-bold text-neutral-0">
                소개글
              </span>
              <textarea
                value={introduction}
                onChange={(e) => setIntroduction(e.target.value)}
                className="text-small15 mt-2 w-full resize-none rounded-[5px] border border-neutral-60 bg-white p-[10px] font-regular text-neutral-10 outline-none"
              />
            </div>
          </div>
        </div>

        <div className="mb-[30px] flex-col">
          <span className="text-medium18 font-bold text-neutral-0">
            전자 서명
          </span>
          <button
            onClick={clearSignature}
            className="ml-3 text-xxsmall12 text-neutral-30 underline"
          >
            서명 지우기
          </button>
          <div className="mt-2 w-full rounded-[5px] border border-neutral-60">
            <SignatureCanvas
              ref={sigCanvas}
              penColor="black"
              canvasProps={{
                width: 600,
                height: 120,
                className: 'signatureCanvas',
                style: { width: "100%" },
              }}
            />
          </div>
        </div>

        <div
          className="text-medium16 w-full rounded-[5px] bg-secondary-70 p-3 text-center font-light text-neutral-100"
          onClick={handleSubmit}
        >
          프로필 수정하기
        </div>
      </div>
    </div>
  );
};
