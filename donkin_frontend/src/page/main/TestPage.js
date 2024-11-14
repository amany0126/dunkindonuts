import { useEffect, useState } from "react";
import Test from "../../test";

const TestPage=()=>{

    const [bannerStyle,setBannerStyle] = useState([
        {
            url: "https://www.dunkindonuts.co.kr/menu/view?cat=1&sub=1&id=5605",
            img: "/resources/img/TRASnuAzDDUWylEDcKeE8jrIc1f5sTUpBdIeECsH.png",
    
        },
        { 
            url: "https://www.dunkindonuts.co.kr/menu/viewProductCat?cat=3&sub=28&id=70",
            img: "/resources/img/ouqUlooZk8fmPnZIMxreXmPG6LAZ5hE6ANVJZ84E.png",
    
        },
        {
            url: "https://blog.naver.com/dunkin_kr/223580576950",
            img: "/resources/img/NhKu3wzNU0AOc48qysjJtksUVlbJS6bDLBjj7EEW.png",
    
        }
    ]);
    return(
        <>
        <div>
        <section
            className="bg-[url('/resources/images/main/top-bg.png')] relative overflow-hidden md:py-[33px] tab:pt-[clamp(11px,3.32vw,52px)] pb-[60px] tab:pb-[clamp(15px,4.3vw,63px)] md:px-[30px]">
            <div className="max-w-[1566px] mx-auto relative">
                
                <img
                    src="https://www.dunkindonuts.co.kr/build/assets/top-frame-ad543672.png"
                    
                    alt="banner"
                    className="absolute w-full h-full z-[1] pointer-events-none touch-none" />
                
              <Test item={bannerStyle}/>
            </div>
            <div
                className="md:absolute top-0 left-0 w-full h-full md:px-[clamp(15px,7.32vw,75px)] tab:px-[clamp(20px,5.46vw,80px)] md:py-[33px] tab:pt-[clamp(11px,3.32vw,52px)] tab:pb-[clamp(15px,4.3vw,63px)] pointer-events-none">
                <div
                    className="max-w-[1466px] flex justify-center md:justify-end mx-auto h-full md:py-[clamp(20px,2.73vw,40px)]">
                    <div
                        className="w-[87.6%] md:w-[39.5%] tab:w-[27%] xl:max-w-[372px] flex flex-col justify-center gap-[12px] tab:gap-[6px] xl:gap-[12px] pointer-events-auto">
                        <div
                            className="rounded-[32px] md:rounded-[clamp(10px,2.32vw,34px)] md:rounded-tr-[clamp(10px,3.82vw,56px)] aspect-[372/394] flex flex-col justify-center md:justify-start relative overflow-hidden">
                            <div className="h-full">
                                <div className="flex h-full" style={{transform: "translate3d(0px, 0px, 0px)"}}>
                                    <a
                                        className="block w-full flex-none h-full -ml-[1px] gtm-click"
                                        href="https://www.dunkindonuts.co.kr/menu/view?cat=1&sub=1&id=5605"
                                        target="_blank"
                                        data-gtm-click="클릭-탑배너도넛(떠먹는비요뜨초코링)"
                                        style={{backgroundColor: "rgb(234, 89, 4)"}}>
                                        <img
                                            src="/resources/img/zeQuV0ZGERklFPzVFrNjejhXgkRPRB3bzLGJhIAw.png"
                                            className="w-[78%] md:w-[74%] tab:w-[70%] xl:w-[78%] aspect-square mx-auto"/>
                                        <div className="text-center text-white">
                                            <div
                                                className="text-[clamp(10px,5.9vw,21px)] xs:text-[22px] md:text-[clamp(10px,2.2vw,22px)] tab:text-[clamp(17px,1.5vw,24px)] leading-none font-[DunkinSans] opacity-50 [&_.text-tiny]:text-[clamp(7px,4vw,17px)] [&_.text-tiny]:xs:text-[16px] md:[&_.text-tiny]:text-[clamp(10px,1.8vw,15px)] tab:[&_.text-tiny]:text-[clamp(13px,1.2vw,18px)] [&_.text-small]:text-[clamp(9px,4.5vw,19px)] [&_.text-small]:xs:text-[18px] md:[&_.text-small]:text-[clamp(10px,2vw,20px)] tab:[&_.text-small]:text-[clamp(14px,1.4vw,21px)]">
                                                <p>
                                                    <style type="text/css"></style>
                                                    <span className="text-tiny" style={{color: "rgb(255, 255, 255)"}}> viyott Yogurt Choco-Loops Donut</span>
                                                </p>
                                            </div>
                                            <div
                                                className="text-[clamp(10px,6.66vw,24px)] xs:text-[24px] md:text-[clamp(10px,2.53vw,26px)] tab:text-[clamp(10px,1.77vw,26px)] font-extrabold">
                                                <p>
                                                    <span className="text-tiny" style={{color: "rgb(255, 255, 255)"}}>떠먹는 비요뜨 초코링</span>
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div
                                className="absolute bottom-[2%] xs:bottom-[4%] tab:bottom-[3%] xl:bottom-[4%] left-1/2 -translate-x-1/2">
                                <div className="flex justify-center">
                                    <button type="button" className="px-[4px] py-[7px]">
                                        <div
                                            className="bg-white rounded-full h-[8px] transition-all w-[8px] opacity-40 !opacity-100 !w-[20px]"
                                            style={{backgroundColor: "rgb(133, 52, 20)"}}></div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-[12px] tab:space-y-[6px] xl:space-y-[12px]">
                            <div
                                className="rounded-[32px] md:rounded-[clamp(10px,2.32vw,34px)] aspect-[372/175] relative overflow-hidden">
                                <div>
                                    <div className="flex" style={{transform: "translate3d(0px, 0px, 0px)"}}>
                                        <a
                                            className="w-full flex-none flex pl-[24px] md:pl-[clamp(10px,1.91vw,28px)] py-[6px] pr-[12px] justify-between -ml-[1px] gtm-click"
                                            href="https://www.dunkindonuts.co.kr/menu/viewProductCat?cat=3&sub=28&id=70"
                                            target="_blank"
                                            data-gtm-click="클릭-탑배너굿즈(비요뜨초코링요거트쿨라타)"
                                            style={{backgroundColor:"rgb(157, 72, 53)"}}>
                                            <div
                                                className="text-white relative top-[22%] [&:has(.text-tiny)]:top-[15%] [&:has(.text-small)]:top-[18%]">
                                                <div
                                                    className="text-[clamp(10px,6.66vw,24px)] xs:text-[24px] md:text-[clamp(10px,2.34vw,24px)] tab:text-[clamp(10px,1.63vw,24px)] whitespace-pre-line font-[DunkinSans,Pretendard] font-extrabold leading-[1.2]">
                                                    <p>
                                                        <span className="text-tiny">비요뜨</span>
                                                    </p>
                                                    <p>
                                                        <span className="text-tiny">초코링 요거트</span>
                                                    </p>
                                                    <p>
                                                        <span className="text-tiny">쿨라타</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <img
                                                src="/resources/img/FMbe0J1fkBVfbqIskug0KYkNvAeLQycGn5xdJxKI.png"
                                                className="w-[49%] aspect-square"/></a>
                                    </div>
                                </div>
                                <div
                                    className="flex absolute bottom-[10%] md:bottom-[10%] xl:bottom-[12%] md:left-[clamp(10px,1.91vw,28px)] left-[24px]">
                                    <button type="button" className="px-[4px] py-[7px]">
                                        <div
                                            className="bg-white rounded-full h-[8px] transition-all w-[8px] opacity-40 !opacity-100 !w-[20px]"></div>
                                    </button>
                                </div>
                            </div>
                            <a
                                href="/dom"
                                className="gtm-click font-[DunkinSans] text-[min(6.66vw,24px)]  xs:text-[24px] md:text-[clamp(10px,2.34vw,24px)] tab:text-[clamp(10px,1.7vw,25px)] leading-[2.2] text-white rounded-full flex items-center justify-center gap-[16px] bg-destructive"
                                data-gtm-click="클릭-탑배너DOM">DUNKIN' OF MONTH
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="11"
                                    height="19"
                                    viewBox="0 0 11 19"
                                    fill="none">
                                    <path
                                        d="M2 16.5L9 9.5L2 2.5"
                                        stroke="white"
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
        </>
    );

};
export default TestPage