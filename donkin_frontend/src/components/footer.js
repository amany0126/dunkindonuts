import React,{useState} from 'react';

const Footer = () => {

    const [box, setBox] = useState(0);

    return(
        <>
         <footer className="text-espresso ">
                    <div className="max-w-[1464px] mx-auto w-[87.6%] md:w-[95%] 2xl:w-full py-[clamp(32px,2.73vw,40px)] relative">
                        <div className="flex justify-between">
                            <div className="space-y-[10px] md:space-y-[25px] lg:max-w-[366px]">
                                <div className="h-[40px] lg:h-auto flex items-center">
                                    <img className="max-w-[33vw] w-[124px] md:w-auto" src="https://www.dunkindonuts.co.kr/build/assets/logo-11ac097b.svg" alt="DUNKIN"/>
                                </div>
                                <div className="text-[12px] flex flex-wrap gap-y-[6px]">
                                    <div className="w-full">서울특별시 서초구 남부순환로 2620(양재동 11-149번지)</div>
                                    <div className="w-full flex justify-between flex-wrap gap-x-[10px]">
                                        <div>사업자 등록번호 : 303-81-09535</div>
                                        <div>비알코리아(주) 대표이사 도세호</div>
                                    </div>
                                    <div className="w-full flex justify-between flex-wrap gap-x-[10px] md:pr-[16px]">
                                        <div>TEL : 080-555-3131</div>
                                        <div>개인정보관리책임자 : 심수연</div>
                                    </div>
                                    <div className="w-full">COPYRIGHT Ⓒ 2024 BRKOREA COMPANY. ALL RIGHTS RESERVED.</div>
                                </div>
                            </div>
                            <div className="w-[46.5%] hidden lg:block">
                                <ul className="flex justify-between">
                                    <li>
                                        <ul className="text-[12px] text-right">
                                            <li className="font-[DunkinSansENG,pretendard] font-black text-espresso/50 text-[14px] leading-none mb-[9px]">
                                                <a href="/brand/history" className="block">BRAND</a>
                                            </li>
                                            <li>
                                                <a href="/brand/history" className="leading-[1.83] block">HISTORY</a>
                                            </li>
                                            <li>
                                                <a href="/brand/story" className="leading-[1.83] block">DD COMMITMENT</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <ul className="text-[12px] text-right">
                                            <li className="font-[DunkinSansENG,pretendard] font-black text-espresso/50 text-[14px] leading-none mb-[9px]">
                                                <a href="/menu/all" className="block">MENU</a>
                                            </li>
                                            <li>
                                                <a href="/menu?cat=1" className="leading-[1.83] block">DONUT</a>
                                            </li>
                                            <li>
                                                <a href="/menu?cat=2" className="leading-[1.83] block">FOOD</a>
                                            </li>
                                            <li>
                                                <a href="/menu?cat=6" className="leading-[1.83] block">COFFEE</a>
                                            </li>
                                            <li>
                                                <a href="/menu?cat=3" className="leading-[1.83] block">BEVERAGE</a>
                                            </li>
                                            <li>
                                                <a href="/menu?cat=5" className="leading-[1.83] block">SNACK &amp;MORE</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <ul className="text-[12px] text-right">
                                            <li className="font-[DunkinSansENG,pretendard] font-black text-espresso/50 text-[14px] leading-none mb-[9px]">
                                                <a href="/event?flag=A" className="block">EVENT</a>
                                            </li>
                                            <li>
                                                <a href="/event?flag=A" className="leading-[1.83] block">프로모션</a>
                                            </li>
                                            <li>
                                                <a href="/event?flag=B" className="leading-[1.83] block">제휴혜택</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <ul className="text-[12px] text-right">
                                            <li className="font-[DunkinSansENG,pretendard] font-black text-espresso/50 text-[14px] leading-none mb-[9px]">
                                                <a href="/store" className="block">STORE</a>
                                            </li>
                                            <li>
                                                <a href="/store" className="leading-[1.83] block">매장 찾기</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <ul className="text-[12px] text-right">
                                            <li className="font-[DunkinSansENG,pretendard] font-black text-espresso/50 text-[14px] leading-none mb-[9px]">
                                                <a href="/order/catering" className="block">ORDER</a>
                                            </li>
                                            <li>
                                                <a href="/order/catering" className="leading-[1.83] block">케이터링</a>
                                            </li>
                                            <li>
                                                <a href="/order/delivery" className="leading-[1.83] block">딜리버리</a>
                                            </li>
                                            <li>
                                                <a href="/order/happyemarket" className="leading-[1.83] block">선물하기</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex justify-between items-end mt-[16px] md:mt-0">
                            <div className="flex divide-x divide-espresso/20 space-x-[12px] leading-[1.28] text-[14px]">
                                <a className="font-bold text-primary" href="https://www.dunkindonuts.co.kr/userLogin?redirect_url=%2F">로그인</a>
                                <a className="pl-[12px]" href="https://www.happypointcard.com/page/join/index.spc" target="_blank" title="회원가입 새 창으로 열기">회원가입</a>
                                <a className="pl-[12px]" href="https://www.dunkindonuts.co.kr/customer/voc">고객센터</a>
                            </div>
                            <ul className="opacity-50 flex md:justify-end gap-[16px]">
                                <li>
                                    <a href="https://dunkinhub.co.kr" target="_blank">
                                        <img src="https://www.dunkindonuts.co.kr/build/assets/sns_hub-6672600f.svg" alt="던킨허브"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/dunkin_kr" target="_blank">
                                        <img src="https://www.dunkindonuts.co.kr/build/assets/sns_instagram-2b751388.svg" alt="인스타그램"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/@DunkinDonutsKorea" target="_blank">
                                        <img src="https://www.dunkindonuts.co.kr/build/assets/sns_youtube-c3ae2245.svg" alt="유튜브"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://blog.naver.com/dunkin_kr" target="_blank">
                                        <img src="https://www.dunkindonuts.co.kr/build/assets/sns_blog-541a6e04.svg" alt="네이버 블로그"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="md:border-t border-espresso/20 mt-[12px] pt-[12px] flex justify-between md:items-center flex-col md:mt-[20px] md:pt-[20px] md:flex-row flex-wrap lg:flex-nowrap gap-x-[10px]">
                            <div className="lg:order-last">
                                <ul className="text-[14px] flex gap-y-[4px] gap-x-[16px] md:gap-x-[12px] flex-wrap lg:justify-end">
                                    <li>
                                        <a href="https://www.spc.co.kr/esg/report" target="_blank">윤리신고센터</a>
                                    </li>
                                    <li>
                                        <a href="http://www.happypointcard.com/serviceCenter/term1.spc" target="_blank">이용약관</a>
                                    </li>
                                    <li>
                                        <a className="text-destructive font-bold" href="https://www.dunkindonuts.co.kr/privacy">개인정보처리방침</a>
                                    </li>
                                    <li>
                                        <a href="https://www.dunkindonuts.co.kr/cctv">영상정보처리기기운영관리방침</a>
                                    </li>
                                    <li>
                                        <a href="https://www.dunkindonuts.co.kr/safety">안전보건경영방침</a>
                                    </li>
                                    <li>
                                        <a href="https://www.dunkindonuts.co.kr/denyemail">이메일무단수집거부</a>
                                    </li>
                                    <li>
                                        <a href="http://happy.spc.co.kr/" target="_blank">거래희망회사 사전등록</a>
                                    </li>
                                    <li>
                                        <a href="https://spc.recruiter.co.kr/" target="_blank">채용안내</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-[185px] max-w-[50vw] leading-[2.85] flex justify-between items-center absolute top-[32px] right-0 text-[14px] lg:static flex-none">
                                <div className="relative w-full">
                                    <ul className={"absolute left-0 pb-[40px] bottom-0 bg-white w-full rounded-[20px] transition-height ease-in-out duration-300 overflow-hidden "+(box===0?"h-0":"h-[280px] shadow-[0_0_20px_0_rgba(0,0,0,0.05)] outline-espresso/20 outline outline-1")} name='list' >
                                        <li>
                                            <a href="https://spc.co.kr" className="hover:text-primary block font-normal px-[20px] transition-colors" target="_blank" title="SPC그룹 새창으로 열기">SPC그룹</a>
                                        </li>
                                        <li>
                                            <a href="https://baskinrobbins.co.kr" className="hover:text-primary block font-normal px-[20px] transition-colors" target="_blank" title="배스킨라빈스 새창으로 열기">배스킨라빈스</a>
                                        </li>
                                        <li>
                                            <a href="https://paris.co.kr" className="hover:text-primary block font-normal px-[20px] transition-colors" target="_blank" title="파리바게뜨 새창으로 열기">파리바게뜨</a>
                                        </li>
                                        <li>
                                            <a href="https://www.caffe-pascucci.co.kr" className="hover:text-primary block font-normal px-[20px] transition-colors" target="_blank" title="파스쿠찌 새창으로 열기">파스쿠찌</a>
                                        </li>
                                        <li>
                                            <a href="https://www.happypointcard.com/" className="hover:text-primary block font-normal px-[20px] transition-colors" target="_blank" title="해피포인트 카드 새창으로 열기">해피포인트 카드</a>
                                        </li>
                                        <li>
                                            <a href="http://dunkin.alba.co.kr/job/brand/" className="hover:text-primary block font-normal px-[20px] transition-colors" target="_blank" title="던킨 아르바이트 새창으로 열기">던킨 아르바이트</a>
                                        </li>
                                    </ul>
                                    <button className={"px-[20px] flex justify-between w-full items-center relative z-[1] rounded-[20px] font-bold bg-white  "+(box===0?"outline-espresso/20 outline outline-1": "")} onClick={(box===0?()=>{setBox(1)}:()=>{setBox(0)})} name='but' >
                                        FAMILY SITE<img src="https://www.dunkindonuts.co.kr/build/assets/arrow-up-e7446570.svg" className="transition-transform duration-300" name='img' style={{transform: (box===0?"rotateX(180deg)":"")}} />
                                    </button>
                                </div>
                            </div>
                            <div className="mt-[12px] lg:mt-0 lg:hidden xl:block">
                                <img src="https://www.dunkindonuts.co.kr/build/assets/badge-112a9e02.svg" alt="badge"/>
                            </div>
                        </div>
                    </div>
                </footer>
        </>
    )
}

export default Footer
