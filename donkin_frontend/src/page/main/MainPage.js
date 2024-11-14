import React,{ useState, useEffect } from 'react';
import MainSlideCall from "../../mainSlideCall"

const MainPage = () => {
    const [bannerStyle,setBannerStyle] = useState({
        1:{
            url: "https://www.dunkindonuts.co.kr/menu/view?cat=1&sub=1&id=5605",
            img: "/resources/img/TRASnuAzDDUWylEDcKeE8jrIc1f5sTUpBdIeECsH.png",
    
        },
        2:{ 
            url: "https://www.dunkindonuts.co.kr/menu/viewProductCat?cat=3&sub=28&id=70",
            img: "/resources/img/ouqUlooZk8fmPnZIMxreXmPG6LAZ5hE6ANVJZ84E.png",
    
        },
        3:{
            url: "https://blog.naver.com/dunkin_kr/223580576950",
            img: "/resources/img/NhKu3wzNU0AOc48qysjJtksUVlbJS6bDLBjj7EEW.png",
    
        }
    });
    const [mainstyle,setMainStyle] = useState({
        1:{
            url: "https://www.dunkindonuts.co.kr/menu/view?cat=2&sub=6&id=5599",
            img: "/resources/img/IY2VpwKsEYi3k2ETus8Ky2v1AI3kwOc3YHd1YvAo.png",
    
        },
        2:{ 
            url: "https://www.dunkindonuts.co.kr/menu/viewProductCat?cat=3&sub=28&id=69",
            img: "/resources/img/pdIlMhDlUn8klqC2v1S1FKqlIarhXrrCuE7Q3cTA.png",
    
        },
        3:{
            url: "https://www.dunkindonuts.co.kr/menu/viewProductCat?cat=3&sub=28&id=53",
            img: "/resources/img/aQcS9MEXyXtI6AX9arfCm87fY84ZtG5FJDcXhBZ1.png",
    
        },
        4:{
            url: "http://localhost:3000/menu?cat=3&sub=30",
            img: "/resources/img/xKvu7yR3FpO2QrTGNpNaRGYSVSDM9rmYQ0ZApvYY.png",
    
        },
        5:{
            url: "http://localhost:3000/menu/view?cat=6&sub=9&id=5426",
            img: "/resources/img/hc5PsZI7mjDQMQFLnHhvB4Nk1ZXfS27YLJpg0411.png",
    
        },
        6:{
            url: "http://localhost:3000/menu?cat=6",
            img: "/resources/img/Iye97gcX5yXehmyqYhx2FzAEZ2pu6vu33LJt5sBF.png",
    
        }
    });


  const [bannerOrder,mainorder,topBannerSet,mainBannerSet,slideFun] = MainSlideCall() ;
  const {onClickButton,onTopPlay,onMainPlay} =slideFun;
  
  //console.log(bannerStyle.constructor.assign.length)
    
    useEffect(()=>{        
        onTopPlay();
        onMainPlay();
    },[])
    


   
    return (
        <> < div > 
 
        <section
            className="bg-[url('/resources/images/main/top-bg.png')] relative overflow-hidden md:py-[33px] tab:pt-[clamp(11px,3.32vw,52px)] pb-[60px] tab:pb-[clamp(15px,4.3vw,63px)] md:px-[30px]">
            <div className="max-w-[1566px] mx-auto relative">
                
                <img
                    src="https://www.dunkindonuts.co.kr/build/assets/top-frame-ad543672.png"
                    
                    alt="banner"
                    className="absolute w-full h-full z-[1] pointer-events-none touch-none" />
                <div
                    className="w-full h-full rounded-[clamp(20px,6.48vw,95px)] shadow-[2px_2px_18px_#A88D76] overflow-hidden">
                    <div className={"flex w-full "+(topBannerSet?"chbannerContainer":"bannerContainer")} 
                    
                    //style={{transform: "translate3d(-4364.6px, 0px, 0px)"}}
                    // style={{transition: "transform 3s"}}

                >
                        <a
                            id='banner_href1'
                            className="block flex-none w-full h-full aspect-[1566/749] relative bannerInner1"
                            target="_blank"
                            href={bannerStyle[bannerOrder]["url"]}
                            //style={{transform: "translate3d(4377px, 0px, 0px)"}}
                            style={{transform: "translate3d(4377px, 0px, 0px)"}}
                            >
                            <img
                                id='banner_img1'
                                src = {bannerStyle[bannerOrder]["img"]}                  
                                alt="banner"
                                className="w-full h-full object-cover aspect-[1566/749]"/></a>  
                         <a
                            id='banner_href2'
                            className="block flex-none w-full h-full aspect-[1566/749] relative bannerInner2"
                            target="_blank"
                            href={bannerStyle[(bannerOrder===3?1:bannerOrder+1)]["url"]}
                            style={{transform: "translate3d(4377px, 0px, 0px)"}}
                            >
                            <img
                                id='banner_img2'
                                src = {bannerStyle[(bannerOrder===3?1:bannerOrder+1)]["img"]}                  
                                alt="banner"
                                className="w-full h-full object-cover aspect-[1566/749]"/></a>                     
                    </div>
                    {/* <div className="flex w-full" style={{transform: "translate3d(-4364.6px, 0px, 0px)",display : "inline"}}>
                        <a
                            id='banner_href'
                            className="block flex-none w-full h-full aspect-[1566/749] relative"
                            target="_blank"
                            href={bannerStyle[bannerOrder]["url"]}
                            style={{transform: "translate3d(4377px, 0px, 0px)"}}
                            >
                            <img
                                id='banner_img'
                                src = {bannerStyle[bannerOrder]["img"]}                  
                                alt="banner"
                                className="w-full h-full object-cover aspect-[1566/749]"/></a>             
                    </div> */}
                </div>
                <div className="absolute bottom-[42px] left-1/2 -translate-x-1/2">
                    <div className="flex justify-center">
                        <button type="button" className="px-[4px] py-[7px]" onClick={()=>{onClickButton(1,"top");}}>
                            <div className={"bg-white rounded-full h-[7px] transition-all w-[7px] opacity-40 "+(bannerOrder === 1?'!opacity-100 !w-[20px]':"")} ></div>
                        </button>
                        <button type="button" className="px-[4px] py-[7px]" onClick={()=>{onClickButton(2,"top");}}>
                            <div className={"bg-white rounded-full h-[7px] transition-all w-[7px] opacity-40 "+(bannerOrder === 2?'!opacity-100 !w-[20px]':"")} ></div>
                        </button>
                        <button type="button" className="px-[4px] py-[7px]"  onClick={()=>{onClickButton(3,"top");}}>
                            <div className={"bg-white rounded-full h-[7px] transition-all w-[7px] opacity-40 "+(bannerOrder === 3?'!opacity-100 !w-[20px]':"")}  ></div>
                        </button>
                    </div>
                </div>
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
       
        <section
            className="bg-cream pt-[clamp(50px,6.14vw,90px)] pb-[clamp(60px,6.83vw,100px)] text-espresso">
            <div className="text-center space-y-[12px]">
                <h2
                    className="text-primary font-[DunkinSans] text-center text-[clamp(20px,10vw,40px)] xs:text-[clamp(40px,3.41vw,50px)] leading-none">DUNKIN'
                    <br className="md:hidden"/>NEW & EVENT</h2>
                <h3 className="text-[clamp(14px,5vw,20px)] xs:text-[20px] leading-[1.2]">던킨의 다양한 혜택과 이벤트<br className="md:hidden"/>
                    그리고 신제품</h3>
            </div>
            <div className="max-w-[1464px] mx-auto relative md:mt-[20px]">
                <div
                    className="bg-gradient-to-r md:from-cream top-0 absolute w-[14%] h-full z-[1] cursor-pointer"></div>
                <div
                    className="bg-gradient-to-l md:from-cream right-0 top-0 absolute w-[14%] h-full z-[1]  cursor-pointer"></div>
                <div className="overflow-hidden py-[40px]">
               
                    <div className="flex" style={{transform: "translate3d(-5730.59px, 0px, 0px)"}}>
                        <a
                            className="ml-[clamp(30px,4.64vw,68px)] block w-full flex-none basis-[63%] mainBanner-s"
                            
                            href={mainstyle[mainorder]["url"]}
                            target="_blank"
                            style={{transform: "translate3d"+(mainBannerSet?"(4953px, 0px, 0px) ":"(5942px, 0px, 0px) "),transition:(mainBannerSet?"0.5s":"0s") }}>
                            <img
                                src={mainstyle[mainorder]["img"]}
                                alt="메인 배너 이미지"
                                className={"w-full object-cover aspect-[1016/448] rounded-[30px] transition-all duration-700 "+(mainBannerSet?"opacity-40":"scale-110")}/></a>
                                
                                
                        <a
                            className="ml-[clamp(30px,4.64vw,68px)] block w-full flex-none basis-[63%] mainBanner-r"
                            href={mainstyle[(mainorder===6?1:mainorder+1)]["url"]}
                            target="_self"
                            style={{transform: "translate3d"+(mainBannerSet?"(4952px, 0px, 0px) ":"(5942px, 0px, 0px) "),transition:(mainBannerSet?"0.5s":"0s") }}>
                            <img
                                src={mainstyle[(mainorder===6?1:mainorder+1)]["img"]}
                                alt="메인 배너 이미지"
                                className={"w-full object-cover aspect-[1016/448] rounded-[30px] transition-all duration-700 opacity-40"+(mainBannerSet?"scale-110":" ")}/></a>

                        <a  className="ml-[clamp(30px,4.64vw,68px)] block w-full flex-none basis-[63%]"></a>      
                        <a  className="ml-[clamp(30px,4.64vw,68px)] block w-full flex-none basis-[63%]"></a>
                        <a  className="ml-[clamp(30px,4.64vw,68px)] block w-full flex-none basis-[63%]"></a>

                        <a
                            className="ml-[clamp(30px,4.64vw,68px)] block w-full flex-none basis-[63%]"
                            href={mainstyle[(mainorder===1?6:mainorder-1)]["url"]}
                            target="_self"
                            style={{transform: "translate3d"+(mainBannerSet?"(-500px, 0px, 0px) ":"(0px, 0px, 0px)"),transition:(mainBannerSet?"0.5s":"0s") }}>
                            <img
                                src={mainstyle[(mainorder===1?6:mainorder-1)]["img"]}
                                alt="메인 배너 이미지"
                                className="w-full object-cover aspect-[1016/448] rounded-[30px] transition-all duration-700 opacity-40"/></a> 
                        <a
                            className="ml-[clamp(30px,4.64vw,68px)] block w-full flex-none basis-[63%] "
                            href={mainstyle[(mainorder===5?1:mainorder===6?2:mainorder+2)]["url"]}
                            target="_self"
                            style={{transform: "translate3d"+(mainBannerSet?"(997px, 0px, 0px) ":"(2000px, 0px, 0px)"),transition:(mainBannerSet?"0.5s":"0s") }}>
                            <img
                                src={mainstyle[(mainorder===5?1:mainorder===6?2:mainorder+2)]["img"]}
                                alt="메인 배너 이미지"
                                className="w-full object-cover aspect-[1016/448] rounded-[30px] transition-all duration-700 opacity-40"/></a> 
                           
                                
                    </div>
                </div>
                <div className="text-center md:mt-[13px]">
                {/* <button type='button' onClick={()=>{handleClick1()}}>aaa</button> */}
                    <div className="flex justify-center">
                        <button type="button" className="px-[4px] py-[7px]">
                            <div
                                className={"bg-espresso rounded-full h-[8px] transition-all w-[8px] opacity-40 "+(mainorder === 1&&"!opacity-100 !w-[20px] !bg-destructive")}onClick={()=>{onClickButton(1,"main");}} ></div>
                        </button>
                        <button type="button" className="px-[4px] py-[7px]">
                            <div
                                className={"bg-espresso rounded-full h-[8px] transition-all w-[8px] opacity-40 "+(mainorder === 2&&"!opacity-100 !w-[20px] !bg-destructive")} onClick={()=>{onClickButton(2,"main");}}></div>
                        </button>
                        <button type="button" className="px-[4px] py-[7px]">
                            <div
                                className={"bg-espresso rounded-full h-[8px] transition-all w-[8px] opacity-40 "+(mainorder === 3&&"!opacity-100 !w-[20px] !bg-destructive")} onClick={()=>{onClickButton(3,"main");}} > </div>
                        </button>
                        <button type="button" className="px-[4px] py-[7px]">
                            <div
                                className={"bg-espresso rounded-full h-[8px] transition-all w-[8px] opacity-40 "+(mainorder === 4&&"!opacity-100 !w-[20px] !bg-destructive")}onClick={()=>{onClickButton(4,"main");}} ></div>
                        </button>
                        <button type="button" className="px-[4px] py-[7px]">
                            <div
                                className={"bg-espresso rounded-full h-[8px] transition-all w-[8px] opacity-40 "+(mainorder === 5&&"!opacity-100 !w-[20px] !bg-destructive")} onClick={()=>{onClickButton(5,"main");}}></div>
                        </button>
                        <button type="button" className="px-[4px] py-[7px]">
                            <div
                                className={"bg-espresso rounded-full h-[8px] transition-all w-[8px] opacity-40 "+(mainorder === 6&&"!opacity-100 !w-[20px] !bg-destructive")} onClick={()=>{onClickButton(6,"main");}}></div>
                        </button>
                    </div>
                </div>
            </div>
        </section>
        <section
            className="pt-[clamp(50px,6.14vw,90px)] pb-[clamp(60px,6.83vw,100px)] xl:pb-[60px] text-espresso">
            <div className="text-center space-y-[12px]">
                <h2
                    className="text-primary font-[DunkinSans] text-[clamp(20px,10vw,40px)] xs:text-[clamp(40px,3.41vw,50px)] leading-none">DUNKIN' MENU</h2>
                <h3 className="text-[clamp(14px,5vw,20px)] xs:text-[20px] leading-[1.2]">던킨의 메뉴를 소개합니다</h3>
            </div>
            <div
                className="max-w-[1216px] relative mx-auto overflow-hidden md:px-[14px] box-content">
                <div className="">
                    <div className="flex ml-[-24px] py-[40px]">
                        <div
                            className="basis-[60%] md:basis-1/2 lg:basis-1/4 xl:basis-1/5 space-y-[24px] flex-none pl-[24px] first:ml-[20%] last:mr-[20%] md:first:ml-0 md:last:mr-0 group">
                            <a
                                className="block rounded-[20px] shadow-[3px_3px_10px_0_rgba(29,7,0,0.16)] bg-cream"
                                href="/menu?cat=1">
                                <div
                                    className="rounded-[20px] aspect-square"
                                    style={{backgroundColor: "rgb(250, 218, 177)"}}>
                                    <img
                                        src="/resources/img/gRkSxP5z807ENay6bbKOREDVW5NJ0hJ7YNXa5Tlq.png"
                                        className="w-full md:group-hover:scale-[1.08] transition-all duration-500"/></div>
                                <h4 className="font-[DunkinSans] text-[21px] text-center leading-[2.85]">DONUT</h4>
                            </a>
                        </div>
                        <div
                            className="basis-[60%] md:basis-1/2 lg:basis-1/4 xl:basis-1/5 space-y-[24px] flex-none pl-[24px] first:ml-[20%] last:mr-[20%] md:first:ml-0 md:last:mr-0 group">
                            <a
                                className="block rounded-[20px] shadow-[3px_3px_10px_0_rgba(29,7,0,0.16)] bg-cream"
                                href="/menu?cat=2">
                                <div
                                    className="rounded-[20px] aspect-square"
                                    style={{backgroundColor: "rgb(255, 234, 187)"}}>
                                    <img
                                        src="/resources/img/QzGxc0AKMuuv7b1JRO8I6d4RfWuVtM5cAD663ms1.png"
                                        className="w-full md:group-hover:scale-[1.08] transition-all duration-500"/></div>
                                <h4 className="font-[DunkinSans] text-[21px] text-center leading-[2.85]">FOOD</h4>
                            </a>
                        </div>
                        <div
                            className="basis-[60%] md:basis-1/2 lg:basis-1/4 xl:basis-1/5 space-y-[24px] flex-none pl-[24px] first:ml-[20%] last:mr-[20%] md:first:ml-0 md:last:mr-0 group">
                            <a
                                className="block rounded-[20px] shadow-[3px_3px_10px_0_rgba(29,7,0,0.16)] bg-cream"
                                href="/menu?cat=6">
                                <div
                                    className="rounded-[20px] aspect-square"
                                    style={{backgroundColor: "rgb(255, 228, 240)"}}>
                                    <img
                                        src="/resources/img/pPmy7omGxVGMkq4EwSAADgB3qyoe6SIgAShODcXu.png"
                                        className="w-full md:group-hover:scale-[1.08] transition-all duration-500"/></div>
                                <h4 className="font-[DunkinSans] text-[21px] text-center leading-[2.85]">COFFEE</h4>
                            </a>
                        </div>
                        <div
                            className="basis-[60%] md:basis-1/2 lg:basis-1/4 xl:basis-1/5 space-y-[24px] flex-none pl-[24px] first:ml-[20%] last:mr-[20%] md:first:ml-0 md:last:mr-0 group">
                            <a
                                className="block rounded-[20px] shadow-[3px_3px_10px_0_rgba(29,7,0,0.16)] bg-cream"
                                href="/menu?cat=3">
                                <div
                                    className="rounded-[20px] aspect-square"
                                    style={{backgroundColor: "rgb(225, 243, 249)"}}>
                                    <img
                                        src="/resources/img/LpNZkxygt26I32GtHk9ixw6knR3ckiq6FEbf5Q2n.png"
                                        className="w-full md:group-hover:scale-[1.08] transition-all duration-500"/></div>
                                <h4 className="font-[DunkinSans] text-[21px] text-center leading-[2.85]">BEVERAGE</h4>
                            </a>
                        </div>
                        <div
                            className="basis-[60%] md:basis-1/2 lg:basis-1/4 xl:basis-1/5 space-y-[24px] flex-none pl-[24px] first:ml-[20%] last:mr-[20%] md:first:ml-0 md:last:mr-0 group">
                            <a
                                className="block rounded-[20px] shadow-[3px_3px_10px_0_rgba(29,7,0,0.16)] bg-cream"
                                href="/menu?cat=5">
                                <div
                                    className="rounded-[20px] aspect-square"
                                    style={{backgroundColor: "rgb(236, 249, 239)"}}>
                                    <img
                                        src="/resources/img/i6PU3NgzqsOql3zLfbuRSpOxud5YOvv61hgyWWjL.png"
                                        className="w-full md:group-hover:scale-[1.08] transition-all duration-500"/></div>
                                <h4 className="font-[DunkinSans] text-[21px] text-center leading-[2.85]">SNACK & MORE</h4>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="bg-cream pt-[clamp(50px,6.14vw,90px)] pb-[60px] text-espresso">
            <div className="text-center space-y-[12px]">
                <h2
                    className="text-primary font-[DunkinSans] text-[clamp(20px,10vw,40px)] xs:text-[clamp(40px,3.41vw,50px)] leading-none">WITH DUNKIN'</h2>
                <h3 className="text-[clamp(14px,5vw,20px)] xs:text-[20px] leading-[1.2]">던킨을 더 가까이에서 만나보세요</h3>
            </div>
            <div
                className="max-w-[1092px] relative mx-auto md:px-[14px] box-content overflow-hidden">
                <div className="w-full py-[40px]">
                    <div className="ml-[-24px] md:ml-[-14px] lg:ml-[-24px] flex">
                        <div
                            className="basis-[73.3%] md:basis-1/3 flex-none pl-[24px] md:pl-[14px] lg:pl-[24px] first:ml-[13.35%] last:mr-[13.35%] md:first:ml-0 md:last:mr-0 group">
                            <a
                                href="/bannerOrder/catering"
                                className="overflow-hidden block rounded-[32px] shadow-[3px_3px_10px_0_rgba(29,7,0,0.16)] bg-white">
                                <div className="m-[8px] rounded-[24px] overflow-hidden">
                                    <img
                                        src="/resources/img/xOaIvXpQzyZkt4l2FWR2GHoTHFbsGRzcjScKREIs.png"
                                        className="w-full md:group-hover:scale-[1.09] transition-transform duration-500"/></div>
                                <div className="text-center space-y-[10px] py-[22px]">
                                    <h4 className="font-[DunkinSans] text-[36px] leading-[0.75]">bannerOrder</h4>
                                    <h5 className="text-[clamp(18px,1.36vw,20px)] font-bold">쉽고 빠르게 만나는 던킨</h5>
                                </div>
                            </a>
                        </div>
                        <div
                            className="basis-[73.3%] md:basis-1/3 flex-none pl-[24px] md:pl-[14px] lg:pl-[24px] first:ml-[13.35%] last:mr-[13.35%] md:first:ml-0 md:last:mr-0 group">
                            <a
                                href="/store"
                                className="overflow-hidden block rounded-[32px] shadow-[3px_3px_10px_0_rgba(29,7,0,0.16)] bg-white">
                                <div className="m-[8px] rounded-[24px] overflow-hidden">
                                    <img
                                        src="/resources/img/t07Fd2Pate3jjkJNhH2hgVq281dc6FWcH5HHfMQ1.png"
                                        className="w-full md:group-hover:scale-[1.09] transition-transform duration-500"/></div>
                                <div className="text-center space-y-[10px] py-[22px]">
                                    <h4 className="font-[DunkinSans] text-[36px] leading-[0.75]">STORE</h4>
                                    <h5 className="text-[clamp(18px,1.36vw,20px)] font-bold">나와 가장 가까운 던킨 찾기</h5>
                                </div>
                            </a>
                        </div>
                        <div
                            className="basis-[73.3%] md:basis-1/3 flex-none pl-[24px] md:pl-[14px] lg:pl-[24px] first:ml-[13.35%] last:mr-[13.35%] md:first:ml-0 md:last:mr-0 group">
                            <a
                                href="/brand/history"
                                className="overflow-hidden block rounded-[32px] shadow-[3px_3px_10px_0_rgba(29,7,0,0.16)] bg-white">
                                <div className="m-[8px] rounded-[24px] overflow-hidden">
                                    <img
                                        src="/resources/img/EfgOUZbTRZdtCLZFGmVaAEAnAPiW7mbtRE2SRl7u.png"
                                        className="w-full md:group-hover:scale-[1.09] transition-transform duration-500"/></div>
                                <div className="text-center space-y-[10px] py-[22px]">
                                    <h4 className="font-[DunkinSans] text-[36px] leading-[0.75]">BRAND</h4>
                                    <h5 className="text-[clamp(18px,1.36vw,20px)] font-bold">던킨이 전하고 싶은 이야기</h5>
                                </div>
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
export default MainPage;