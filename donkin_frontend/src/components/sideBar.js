const SideBar=()=>{
    return(
        <>
           <div
    className="fixed bottom-[clamp(16px,2.73vw,40px)] right-[clamp(16px,2.73vw,40px)] w-[clamp(55px,4.98vw,73px)] space-y-[clamp(12px,1.09vw,16px)] z-10">
    <div
        className="bg-primary rounded-[clamp(9px,0.81vw,12px)] shadow-[0_0_12px_0_rgba(29,7,0,0.2)] text-white text-center">
        <button
            type="button"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="radix-:r7:"
            data-state="closed"
            className="w-full relative block py-[clamp(10px,0.95vw,14px)] space-y-[clamp(6px,0.54vw,8px)] after:w-[27.3%] after:h-[1px] after:absolute after:bg-white after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:rounded-full">
            <img
                src="https://www.dunkindonuts.co.kr/build/assets/search_white-939e6c46.svg"
                alt="제품찾기"
                className="mx-auto w-[49.4%]"/>
                <div className="text-[clamp(10px,0.88vw,13px)] font-bold leading-none">제품찾기</div>
            </button>
            <a
                href="/franchise"
                className="relative block py-[clamp(10px,0.95vw,14px)] space-y-[clamp(6px,0.54vw,8px)] after:w-[27.3%] after:h-[1px] after:absolute after:bg-white after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:rounded-full">
                <img
                    src="https://www.dunkindonuts.co.kr/build/assets/floating_franchise-60965c73.svg"
                    alt="창업문의"
                    className="mx-auto w-[49.4%]" />
                    <div className="text-[clamp(10px,0.88vw,13px)] font-bold leading-none">창업문의</div>
                </a>
                <a
                    href="/nutrition"
                    className="block py-[clamp(10px,0.95vw,14px)] space-y-[clamp(6px,0.54vw,8px)]">
                    <img
                        src="https://www.dunkindonuts.co.kr/build/assets/floating_nutrition-45dfde2a.svg"
                        alt="영양정보"
                        className="mx-auto w-[49.4%]"/>
                        <div className="text-[clamp(10px,0.88vw,13px)] font-bold leading-none">영양정보</div>
                    </a>
                </div>
                <button
                    className="w-full bg-white aspect-square rounded-[clamp(9px,0.81vw,12px)] flex justify-center items-center shadow-[0_0_12px_0_rgba(29,7,0,0.2)]"
                    onClick={()=>{window.scrollTo({ top: 0, behavior: "smooth" })}}
                    >
                    
                    <img
                        src="https://www.dunkindonuts.co.kr/build/assets/go_to_top_arrow-e5b0e3d3.svg"
                        alt="맨 위로"
                        className="w-[28.7%] h-full"/></button>
                </div>
        
        </>
    )

}
export default SideBar