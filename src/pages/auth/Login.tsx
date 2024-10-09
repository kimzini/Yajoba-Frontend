import { LoginHeader } from '../../components/Header';
import kakao from '../../assets/kakao.png';
// import google from '../../assets/google.png';
// import naver from '../../assets/naver.png';

export const Login = () => {
  return (
    <div className="flex h-screen w-screen">
      <LoginHeader />
      <div className="flex w-full items-center justify-center gap-[10rem] p-[18rem]">
        <div className="flex w-1/2 flex-col gap-[2rem]">
          <div className="flex flex-col gap-[0.5rem]">
            <span className="font-heavy text-large24 text-neutral-0">
              로그인
            </span>
            <span className="text-medium20 font-light text-neutral-0">
              가입하신 아이디로 로그인해주세요
            </span>
          </div>
          <div className="flex w-4/5 flex-col gap-[1rem]">
            <input
              placeholder="아이디"
              className="rounded-xs border border-neutral-80 bg-primary-0 p-3 text-small16 text-neutral-0"
            />
            <input
              placeholder="비밀번호"
              className="rounded-xs border border-neutral-80 bg-primary-0 p-3 text-small16 text-neutral-0"
            />
          </div>
          <div className="flex w-4/5 flex-col gap-3">
            <button className="flex w-full items-center justify-center rounded-xs border border-neutral-80 bg-secondary-dark p-2">
              <span className="text-small16 text-primary-0">로그인</span>
            </button>
            <div className="flex items-center justify-center gap-[0.5rem] rounded-xs bg-kakaoyellow p-[0.4rem]">
              <img className="m-1 w-[1.6rem]" src={kakao} alt="카카오 로고" />
              <span className="text-center font-medium text-neutral-0">
                카카오로 간편 로그인하기
              </span>
              {/* <img className="w-[2.75rem] rounded-full border border-neutral-80" src={google} alt="구글 로고" />
                            <img className="w-[2.75rem]" src={naver} alt="네이버 로고" /> */}
            </div>
          </div>
        </div>
        <div className="flex w-1/3 flex-col gap-[2rem]">
          <div className="flex flex-col gap-[0.5rem]">
            <span className="font-heavy text-large24 text-neutral-0">
              회원가입
            </span>
            <span className="text-medium20 font-light text-neutral-0">
              아직 회원이 아니신가요?
            </span>
          </div>
          <a
            className="justify-center rounded-xs bg-secondary-dark p-2 text-center text-primary-0"
            href="/signup"
          >
            회원가입
          </a>
        </div>
      </div>
    </div>
  );
};
