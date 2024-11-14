import React ,{useState}from 'react';
import SubMenu from './SubMenu';


function menuShow(menu){
    if(menu==="BRAND" || menu==="MENU"  || menu==="EVENT" || menu==="ORDER"){
        return "on"
    }else{
        return "off"  
    }
}
const Header = () => {
    const [menu, setMenu] = useState()
    const [event,setEvent] = useState()

    const UiMouseOver = () => {
        setMenu(menu)
      };
      const UiMouseOut = () => {
        event.target.dataset.state = "closed";
        event.target.ariaExpanded= false;
        setMenu('No')
      };

    const handleMouseOver = (e) => {
        e.target.dataset.state = "open";
        e.target.ariaExpanded= true;
        
        setMenu(e.target.innerHTML)
        setEvent(e)
        
        if(menuShow(menu)==="on"){
        }
      };
      const handleMouseOut = (e) => {
        event.target.dataset.state = "closed";
        event.target.ariaExpanded= false;
        setMenu('No')
        if(menuShow(menu)==="on"){
        }
      };
    return (
            <>     
                < header className = "font-[DunkinSans] h-[clamp(60px,6.284vw,92px)] sticky top-0 text-espresso md:px-[10px] z-[60] bg-[url(&#x27;/resources/images/common/header_bg.png&#x27;)] bg-bottom lg:shadow-[0_0_20px_0_rgba(29,7,0,0.3)]"  > 
                    <div className="w-full max-w-[1464px] mx-auto h-full relative flex justify-between items-center">
                        <nav
                            aria-label="Main"
                            data-orientation="horizontal"
                            dir="ltr"
                            className="relative z-10 w-full" >
                            <div>
                                <ul
                                    data-orientation="horizontal"
                                    className="group flex flex-1 list-none flex-col w-full md:flex-row items-center space-x-0 justify-between gap-0"
                                    dir="ltr">
                                    <li className="flex-[1_1_33.3%]">
                                        <ul className="flex justify-between">
                                            <li onMouseOver={handleMouseOver}>
                                                <a href="/dom" className="block">
                                                    <button
                                                        id="radix-:r0:-trigger-radix-:r1:"
                                                        data-state="closed"
                                                        aria-expanded="false"
                                                        aria-controls="radix-:r0:-content-radix-:r1:"
                                                        className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 transition-colors hover:text-destructive focus:text-destructive focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 group bg-transparent text-[clamp(16px,1.36vw,20px)] data-[state=open]:bg-transparent font-black font-[DunkinSansENG,pretendard]"
                                                        data-radix-collection-item=""
                                                       
                                                        >
                                                        DUNKIN’ OF MONTH
                                                    </button>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/brand/history " className="block ">
                                                    <button
                                                        id="radix -: r0: -trigger-radix -: r2: "
                                                        data-state="closed "
                                                        aria-expanded="false "
                                                        aria-controls="radix -: r0: -content-radix -: r2: "
                                                        className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 transition-colors hover:text-destructive focus:text-destructive focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 group bg-transparent text-[clamp(16px,1.36vw,20px)] data-[state=open]:bg-transparent font-black font-[DunkinSansENG,pretendard]"
                                                        data-radix-collection-item=""
                                                        onMouseOver={handleMouseOver} 
                                                        >BRAND
                                                    </button>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/menu/all " className="block ">
                                                    <button
                                                        id="radix -: r0: -trigger-radix -: r3: "
                                                        data-state="closed "
                                                        aria-expanded="false "
                                                        aria-controls="radix -: r0: -content-radix -: r3: "
                                                         className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 transition-colors hover:text-destructive focus:text-destructive focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 group bg-transparent text-[clamp(16px,1.36vw,20px)] data-[state=open]:bg-transparent font-black font-[DunkinSansENG,pretendard]"
                                                        data-radix-collection-item=""
                                                        onMouseOver={handleMouseOver} 
                                                        >MENU
                                                    </button>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="w-auto flex-[1_1_26 % ] xl: flex-none "  > 
                                        <h1 className="lg: h-auto ">
                                            <span className="hidden ">DUNKIN'
                                            </span>
                                            <a href="/" className="z-30 relative ">
                                                <img
                                                    src="resources\img\logo-bc30d2d8.png"
                                                    alt="DUNKIN'"
                                                    className="h-[clamp(60px,6.55vw,96px)] relative"/>
                                            </a>
                                        </h1>
                                    </li>
                                    <li className="flex-[1_1_33.3%]"  >
                                        <ul className="flex justify-between ">
                                            <li>
                                                <a href="/event?flag=A" className="block">
                                                    <button
                                                        id="radix-:r0:-trigger-radix-:r4:"
                                                        data-state="closed"
                                                        aria-expanded="false"
                                                        aria-controls="radix-:r0:-content-radix-:r4:"
                                                        className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 transition-colors hover:text-destructive focus:text-destructive focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 group bg-transparent text-[clamp(16px,1.36vw,20px)] data-[state=open]:bg-transparent font-black font-[DunkinSansENG,pretendard]"
                                                        data-radix-collection-item=""
                                                        onMouseOver={handleMouseOver} 
                                                        >EVENT
                                                    </button>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/store" className="block">
                                                    <button
                                                        id="radix-:r0:-trigger-radix-:r5:"
                                                        data-state="closed"
                                                        aria-expanded="false"
                                                        aria-controls="radix-:r0:-content-radix-:r5:"
                                                        className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 transition-colors hover:text-destructive focus:text-destructive focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 group bg-transparent text-[clamp(16px,1.36vw,20px)] data-[state=open]:bg-transparent font-black font-[DunkinSansENG,pretendard]"
                                                        data-radix-collection-item=""
                                                        onMouseOver={handleMouseOver} 
                                                        >STORE
                                                    </button>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/order/catering" className="block">
                                                    <button
                                                        id="radix-:r0:-trigger-radix-:r6:"
                                                        data-state="closed"
                                                        aria-expanded="false"
                                                        aria-controls="radix-:r0:-content-radix-:r6:"
                                                        className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 transition-colors hover:text-destructive focus:text-destructive focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 group bg-transparent text-[clamp(16px,1.36vw,20px)] data-[state=open]:bg-transparent font-black font-[DunkinSansENG,pretendard]"
                                                        data-radix-collection-item=""
                                                        onMouseOver={handleMouseOver} 
                                                        >ORDER
                                                    </button>
                                                </a>
                                            </li>
                                            <li className="flex items-center">
                                                <a
                                                    className="block w-[clamp(70px,7.5vw,120px)] h-auto aspect-[120/36]"
                                                    href="/franchise">
                                                    <button
                                                        type="button"
                                                        role="switch"
                                                        aria-checked="false"
                                                        data-state="unchecked"
                                                        value="on"
                                                        className="peer inline-flex shrink-0 cursor-pointer items-center rounded-full shadow-[0px_3px_5px_0px_rgba(0,0,0,0.15)_inset,0px_-2px_4px_0px_rgba(158,143,126,0.60),0px_2px_4px_0px_#FFF] transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-destructive w-full h-full p-[clamp(2px,0.3vw,4px)] relative [&amp;>div]:font-[DunkinSansENG,pretendard] [&amp;>div]:text-white [&amp;>div]:tracking-tight [&amp;>div]:absolute">
                                                        <div
                                                            className="font-black text-[clamp(11px,1.1vw,18.5px)] left-[calc(clamp(5px,1.46vw,28px)+10px)] z-[1]">창업문의
                                                        </div>
                                                        <div
                                                            className="text-[clamp(12px,1.1vw,21px)] left-[calc(clamp(7px,0.63vw,10px)-clamp(0px,0.05vw,4px))] z-[-1]">BRAND
                                                        </div>
                                                        <span
                                                            data-state="unchecked"
                                                            className="relative pointer-events-none block h-auto w-[clamp(12px,1.46vw,28px)] aspect-square rounded-full bg-background shadow-lg ring-0 transition duration-300 data-[state=checked]:translate-x-[calc(clamp(70px,7.5vw,120px)-clamp(12px,1.46vw,28px)-clamp(2px,0.3vw,4px)*2)] data-[state=unchecked]:translate-x-0"></span>
                                                    </button>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                
                            <div
                                className="fixed left-0 top-[clamp(60px,6.284vw,92px)] w-full flex justify-center group " onMouseOut={UiMouseOut} onMouseOver={UiMouseOver} >
                                  <SubMenu menu={menu} />   
                                </div>
                        </nav>
                    </div>
                </header>
            </>
            )
}

export default Header