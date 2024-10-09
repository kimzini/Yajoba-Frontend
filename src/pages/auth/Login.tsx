import { LoginHeader } from "../../components/Header";
import kakao from '../../assets/kakao.png';
// import google from '../../assets/google.png';
// import naver from '../../assets/naver.png';


export const Login = () => {
    return (
        <div className="flex w-screen h-screen">
            <LoginHeader />
            <div className="w-full flex gap-[10rem] p-[18rem] justify-center items-center">
                <div className="flex flex-col w-1/2 gap-[2rem]">
                    <div className="flex flex-col gap-[0.5rem]">
                        <span className="text-large24 text-neutral-0 font-heavy">로그인</span>
                        <span className="text-medium20 text-neutral-0 font-light">가입하신 아이디로 로그인해주세요</span>
                    </div>
                    <div className="flex w-4/5 flex-col gap-[1rem]">
                        <input placeholder="아이디" className="bg-primary-0 border border-neutral-80 rounded-xs p-3 text-neutral-0 text-small16" />
                        <input placeholder="비밀번호" className="bg-primary-0 border border-neutral-80 rounded-xs p-3 text-neutral-0 text-small16" />
                    </div>
                    <div className="flex w-4/5 flex-col gap-3">
                        <button className="flex w-full bg-secondary-dark items-center justify-center rounded-xs border border-neutral-80 p-2">
                            <span className="text-primary-0 text-small16">로그인</span>
                        </button>
                        <div className="flex items-center bg-kakaoyellow justify-center gap-[0.5rem] p-[0.4rem] rounded-xs">
                            <img className="m-1 w-[1.6rem]" src={kakao} alt="카카오 로고" />
                            <span className="text-neutral-0 text-center font-medium">카카오로 간편 로그인하기</span>
                            {/* <img className="w-[2.75rem] rounded-full border border-neutral-80" src={google} alt="구글 로고" />
                            <img className="w-[2.75rem]" src={naver} alt="네이버 로고" /> */}
                        </div>
                    </div>
                    
                </div>
                <div className="flex flex-col w-1/3 gap-[2rem]">
                    <div className="flex flex-col gap-[0.5rem]">
                        <span className="text-large24 text-neutral-0 font-heavy">회원가입</span>
                        <span className="text-medium20 text-neutral-0 font-light">아직 회원이 아니신가요?</span>
                    </div>
                    <a className="bg-secondary-dark rounded-xs p-2 justify-center text-center text-primary-0" href="/signup">
                        회원가입
                    </a>
                </div>
            </div>
        </div>
    );
};