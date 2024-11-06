import { HeaderWithoutSearch } from '@/components/Header';
import { ChatRoomListItem } from './components/ChatRoomList';
import profile from '@/assets/images/profile.png';
import { Message } from './components/Message';
import { useState } from 'react';

const chatData = [
  {
    name: '문재준',
    product: '노트북',
    imgSrc: profile,
    time: '03:56',
    recentMessage: '졸리다',
    chats: 1,
  },
  {
    name: '김진우',
    product: '에어팟',
    imgSrc: profile,
    time: '02:30',
    recentMessage: '안녕하세요!',
    chats: 3,
  },
];

const chatRooms = [
  {
    id: 0,
    name: '문재준',
    selfIntroduction: '배고프고 졸리고',
    imgSrc: profile,
    chatContent: [
      {
        date: '2024.09.27',
        content: '안녕하세여!',
        sender: '나',
        time: '02:30',
      },
      {
        date: '2024.09.27',
        content: '안녕하세여',
        sender: '문재준',
        time: '09:45',
      },
    ],
  },
  {
    id: 1,
    name: '김진우',
    selfIntroduction: '아무것도 하기 싫다',
    imgSrc: profile,
    chatContent: [
      {
        date: '2024.09.27',
        content: '안녕하세요!',
        sender: '김진우',
        time: '03:58',
      },
      {
        date: '2024.09.27',
        content: '안녕하세요!',
        sender: '나',
        time: '04:00',
      },
      {
        date: '2024.09.28',
        content: '안녕하세요!',
        sender: '나',
        time: '09:00',
      },
      {
        date: '2024.09.29',
        content: '안녕하세요!',
        sender: '김진우',
        time: '03:58',
      },
      {
        date: '2024.09.29',
        content: '안녕하세요!',
        sender: '나',
        time: '04:00',
      },
      {
        date: '2024.09.30',
        content: '안녕하세요!',
        sender: '김진우',
        time: '03:58',
      },
      {
        date: '2024.10.01',
        content: '안녕하세요!',
        sender: '나',
        time: '04:00',
      },
    ],
  },
];

export const ChatPage = () => {
  const [selectedRoomId, setSelectedRoomId] = useState<number | null>(
    chatRooms[0].id,
  );
  const selectedRoom =
    chatRooms.find((room) => room.id === selectedRoomId) || chatRooms[0];

  return (
    <div className="min-h-screen flex w-screen">
      <HeaderWithoutSearch />
      <div className="flex h-screen w-screen">
        <div className="flex w-1/4 flex-col border-r bg-white pt-[100px]">
          <span className="mb-[7px] ml-5 text-xlarge26 font-semibold text-neutral-0">
            Chat
          </span>
          <div className="flex h-full w-full flex-col">
            {chatData.length === 0 ? (
              <div className="flex h-full items-center justify-center">
                <span className="pb-12 text-small16 font-regular text-neutral-30">
                  채팅 내역이 없습니다
                </span>
              </div>
            ) : (
              chatData.map((chat, index) => (
                <ChatRoomListItem
                  key={index}
                  name={chat.name}
                  product={chat.product}
                  imgSrc={chat.imgSrc}
                  time={chat.time}
                  recentMessage={chat.recentMessage}
                  chats={chat.chats}
                  onClick={() => setSelectedRoomId(index)}
                />
              ))
            )}
          </div>
        </div>

        <div className="flex w-3/4 items-center justify-center bg-[#F7F7F7] pb-10 pt-[100px]">
          {chatData.length === 0 ? (
            <div className="flex flex-col items-center justify-center gap-6">
              <span className="text-medium18 font-regular text-neutral-30">
                Yajoba에서 다양한 상품을 경험해보세요!
              </span>
              <a
                href="/"
                className="font-regular rounded-[8px] bg-primary-100 px-[140px] py-3 text-small16 text-white"
              >
                상품 보러가기
              </a>
            </div>
          ) : (
            <Message
              name={selectedRoom.name}
              selfIntroduction={selectedRoom.selfIntroduction}
              imgSrc={selectedRoom.imgSrc}
              chatContent={selectedRoom.chatContent}
            />
          )}
        </div>
      </div>
    </div>
  );
};
