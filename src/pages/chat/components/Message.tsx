import { ReactComponent as Exit } from '@/assets/svgs/exit.svg';

interface Message {
  date: string;
  content: string;
  sender: string;
  time: string;
}

interface MessageProps {
  name: string;
  selfIntroduction: string;
  imgSrc: string;
  chatContent: Message[];
}

export const Message = ({
  name,
  selfIntroduction,
  imgSrc,
  chatContent,
}: MessageProps) => {
  return (
    <div className="flex h-[650px] w-[800px] flex-col rounded-[16px] bg-white shadow-lg">
      <div className="flex w-full items-center justify-between rounded-t-[16px] bg-white py-4 px-6">
        <div className="flex items-center">
          <img
            src={imgSrc}
            alt="profile"
            className="mr-5 h-[60px] w-[60px] rounded-full border"
          />
          <div className="flex flex-col gap-[3px]">
            <span className="text-medium24 font-medium text-neutral-0">
              {name}
            </span>
            <span className="font-regular text-xxsmall12 text-neutral-40">
              {selfIntroduction}
            </span>
          </div>
        </div>
        <Exit className="cursor-pointer" />
      </div>
      <div className="flex-grow overflow-y-auto">
        {chatContent.map((message, index) => (
          <div key={index}>
            {index === 0 || chatContent[index - 1].date !== message.date ? (
              <div className="flex w-full justify-center">
                <span className="mb-6 mt-7 text-xsmall14 font-medium text-neutral-50">
                  {message.date}
                </span>
              </div>
            ) : null}

            <div
              className={`mb-5 flex flex-col ${message.sender === '나' ? 'mr-[20px] items-end' : 'ml-[20px] items-start'}`}
            >
              <div className="flex gap-2">
                {message.sender === '나' && (
                  <span className="font-regular self-end text-xxsmall10 text-neutral-50">
                    {message.time}
                  </span>
                )}

                <div
                  className={`rounded-[8px] px-[15px] py-[7px] ${message.sender === '나' ? 'bg-primary-100' : 'bg-neutral-80'}`}
                >
                  <p className="font-regular text-xxsmall12 text-neutral-0">
                    {message.content}
                  </p>
                </div>

                {message.sender !== '나' && (
                  <span className="font-regular self-end text-xxsmall10 text-neutral-50">
                    {message.time}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full rounded-b-[16px] border-t px-4 py-3">
        <div className="flex justify-between">
          <input
            placeholder="채팅을 입력해주세요"
            className="font-regular mr-5 flex-grow text-xsmall14 text-neutral-30 outline-none"
          />
          <button className="font-regular rounded-[8px] bg-primary-100 px-5 py-1 text-xsmall14 text-white">
            전송
          </button>
        </div>
      </div>
    </div>
  );
};
