import React,{useEffect} from 'react';




const SubMenu = ({menu}) => {
    // const divStyle = {
    //     --radix-navigation-menu-viewport-width: "1519px",
    //     --radix-navigation-menu-viewport-height: "80px"
    // }
  
    
    useEffect(() =>{
        document.getElementById('BRAND').className = "origin-top-center relative bg-white/80 backdrop-blur-md w-full overflow-hidden data-[state=open]:animate-header-down data-[state=closed]:animate-header-up";
            document.getElementById('MENU').className = "origin-top-center relative bg-white/80 backdrop-blur-md w-full overflow-hidden data-[state=open]:animate-header-down data-[state=closed]:animate-header-up";
            document.getElementById('EVENT').className = "origin-top-center relative bg-white/80 backdrop-blur-md w-full overflow-hidden data-[state=open]:animate-header-down data-[state=closed]:animate-header-up";
            document.getElementById('ORDER').className = "origin-top-center relative bg-white/80 backdrop-blur-md w-full overflow-hidden data-[state=open]:animate-header-down data-[state=closed]:animate-header-up";
        if(menu==="BRAND" || menu==="MENU"  || menu==="EVENT" || menu==="ORDER"){
            document.getElementById(menu).className =""
        }else if(menu==="MENU"){
            document.getElementById(menu).className =""
        }else if( menu==="EVENT"){
            document.getElementById(menu).className =""
        }else if(menu==="ORDER"){
            document.getElementById(menu).className =""
        }else if(menu==="No"){
            document.getElementById('BRAND').className = "origin-top-center relative bg-white/80 backdrop-blur-md w-full overflow-hidden data-[state=open]:animate-header-down data-[state=closed]:animate-header-up";
            document.getElementById('MENU').className = "origin-top-center relative bg-white/80 backdrop-blur-md w-full overflow-hidden data-[state=open]:animate-header-down data-[state=closed]:animate-header-up";
            document.getElementById('EVENT').className = "origin-top-center relative bg-white/80 backdrop-blur-md w-full overflow-hidden data-[state=open]:animate-header-down data-[state=closed]:animate-header-up";
            document.getElementById('ORDER').className = "origin-top-center relative bg-white/80 backdrop-blur-md w-full overflow-hidden data-[state=open]:animate-header-down data-[state=closed]:animate-header-up";
        }
    },[menu])
   
    return(
        <>
            <div style={{backgroundColor : 'white'}}>
                <div
                    id='BRAND'
                    data-state="open"
                    data-orientation="horizontal"
                    className="origin-top-center relative bg-white/80 backdrop-blur-md w-full overflow-hidden data-[state=open]:animate-header-down data-[state=closed]:animate-header-up"
                    style={{backgroundColor : 'white'}}
                    //style={{ "--radix-navigation-menu-viewport-width":"1519px" ,"--radix-navigation-menu-viewport-height": "80px"}}
                    >                   
                    <div
                        id="radix-:r0:-content-radix-:r2:"
                        aria-labelledby="radix-:r0:-trigger-radix-:r2:"
                        data-motion="from-start"
                        data-orientation="horizontal"
                        className="left-0 top-0 w-full md:absolute"
                        dir="ltr">
                        <div className="flex items-center  w-full" style={{paddingLeft: "272.988px",backgroundColor : 'white',overflow:"hidden"}}>
                            <a
                                href="/brand/history"
                                className={"text-[18px] px-4 py-2 text-espresso font-extrabold font-sans h-[60px] lg:h-[80px] flex items-center hover:text-destructive transition opacity-0 "+(menu!=='BRAND'?"":"animate-header-item-up")}
                                style={{animationDuration:(menu==='BRAND'?"0.35s":""),animationDelay:(menu==='BRAND'?"0.1s":"")}}
                                //"animation-duration: 0.35s; animation-delay: 0.1s;"
                                data-tabindex=""
                                tabIndex="-1">HISTORY</a>
                            <a
                                href="/brand/story"
                                className={"text-[18px] px-4 py-2 text-espresso font-extrabold font-sans h-[60px] lg:h-[80px] flex items-center hover:text-destructive transition opacity-0 "+(menu!=='BRAND'?"":"animate-header-item-up")}
                                style={{animationDuration:(menu==='BRAND'?"0.35s":""),animationDelay:(menu==='BRAND'?"0.2s":"")}}
                                // style="animation-duration: 0.35s; animation-delay: 0.2s;"
                                data-tabindex=""
                                tabIndex="-1">DD COMMITMENT</a>
                        </div>
                    </div>
                </div>
                <div
                    id='MENU'
                    data-state="open"
                    data-orientation="horizontal"
                    className="origin-top-center relative bg-white/80 backdrop-blur-md w-full overflow-hidden data-[state=open]:animate-header-down data-[state=closed]:animate-header-up"
                    //style={{ "--radix-navigation-menu-viewport-width":"1519px" ,"--radix-navigation-menu-viewport-height": "80px"}}
                    style={{backgroundColor : 'white'}}>
                    <div
                        id="radix-:r0:-content-radix-:r3:"
                        aria-labelledby="radix-:r0:-trigger-radix-:r3:"
                        data-orientation="horizontal"
                        className="left-0 top-0 w-full md:absolute"
                        dir="ltr">
                        <div className="flex items-center  w-full" style={{paddingLeft: "386.875px",backgroundColor : 'white',overflow:"hidden"}}>
                            <a
                                href="/menu?cat=1"
                                className={"text-[18px] px-4 py-2 text-espresso font-extrabold font-sans h-[60px] lg:h-[80px] flex items-center hover:text-destructive transition opacity-0 "+(menu!=='MENU'?"":"animate-header-item-up")}
                                // style="animation-duration: 0.35s; animation-delay: 0.1s;"
                                style={{animationDuration:(menu==='MENU'?"0.35s":""),animationDelay:(menu==='MENU'?"0.1s":"")}}
                                data-tabindex=""
                                tabIndex="-1">DONUT</a>
                            <a
                                href="/menu?cat=2"
                                className={"text-[18px] px-4 py-2 text-espresso font-extrabold font-sans h-[60px] lg:h-[80px] flex items-center hover:text-destructive transition opacity-0 "+(menu!=='MENU'?"":"animate-header-item-up")}
                                // style="animation-duration: 0.35s; animation-delay: 0.2s;"
                                style={{animationDuration:(menu==='MENU'?"0.35s":""),animationDelay:(menu==='MENU'?"0.2s":"")}}
                                data-tabindex=""
                                tabIndex="-1">FOOD</a>
                            <a
                                href="/menu?cat=6"
                                className={"text-[18px] px-4 py-2 text-espresso font-extrabold font-sans h-[60px] lg:h-[80px] flex items-center hover:text-destructive transition opacity-0 "+(menu!=='MENU'?"":"animate-header-item-up")}
                                // style="animation-duration: 0.35s; animation-delay: 0.3s;"
                                style={{animationDuration:(menu==='MENU'?"0.35s":""),animationDelay:(menu==='MENU'?"0.3s":"")}}
                                data-tabindex=""
                                tabIndex="-1">COFFEE</a>
                            <a
                                href="/menu?cat=3"
                                className={"text-[18px] px-4 py-2 text-espresso font-extrabold font-sans h-[60px] lg:h-[80px] flex items-center hover:text-destructive transition opacity-0 "+(menu!=='MENU'?"":"animate-header-item-up")}
                                // style="animation-duration: 0.35s; animation-delay: 0.4s;"
                                style={{animationDuration:(menu==='MENU'?"0.35s":""),animationDelay:(menu==='MENU'?"0.4s":"")}}
                                data-tabindex=""
                                tabIndex="-1">BEVERAGE</a>
                            <a
                                href="/menu?cat=5"
                                className={"text-[18px] px-4 py-2 text-espresso font-extrabold font-sans h-[60px] lg:h-[80px] flex items-center hover:text-destructive transition opacity-0 "+(menu!=='MENU'?"":"animate-header-item-up")}
                                // style="animation-duration: 0.35s; animation-delay: 0.5s;"
                                style={{animationDuration:(menu==='MENU'?"0.35s":""),animationDelay:(menu==='MENU'?"0.5s":"")}}
                                data-tabindex=""
                                tabIndex="-1">SNACK &amp; MORE</a>
                        </div>
                    </div>
                </div>
                <div
                    id='EVENT'
                    data-state="open"
                    data-orientation="horizontal"
                    className="origin-top-center relative bg-white/80 backdrop-blur-md w-full overflow-hidden data-[state=open]:animate-header-down data-[state=closed]:animate-header-up"
                    //style={{ "--radix-navigation-menu-viewport-width":"1519px" ,"--radix-navigation-menu-viewport-height": "80px"}}
                    style={{backgroundColor : 'white'}}>
                    <div
                        id="radix-:r0:-content-radix-:r4:"
                        aria-labelledby="radix-:r0:-trigger-radix-:r4:"
                        data-orientation="horizontal"
                        className="left-0 top-0 w-full md:absolute"
                        dir="ltr">
                        <div
                            className="flex items-center justify-end w-full"
                            style={{paddingRight:" calc(100% - 1139.62px)",backgroundColor : 'white',overflow:"hidden"}}>
                            <a
                                href="/event?flag=A"
                                className={"text-[18px] px-4 py-2 text-espresso font-extrabold font-sans h-[60px] lg:h-[80px] flex items-center hover:text-destructive transition opacity-0 "+(menu!=='EVENT'?"":"animate-header-item-up")}
                                // style="animation-duration: 0.35s; animation-delay: 0.1s;"
                                style={{animationDuration:(menu==='EVENT'?"0.35s":""),animationDelay:(menu==='EVENT'?"0.1s":"")}}
                                >프로모션</a>
                            <a
                                href="/event?flag=B"
                                className={"text-[18px] px-4 py-2 text-espresso font-extrabold font-sans h-[60px] lg:h-[80px] flex items-center hover:text-destructive transition opacity-0 "+(menu!=='EVENT'?"":"animate-header-item-up")}
                                // style="animation-duration: 0.35s; animation-delay: 0.2s;"
                                style={{animationDuration:(menu==='EVENT'?"0.35s":""),animationDelay:(menu==='EVENT'?"0.2s":"")}}
                                >제휴혜택</a>
                        </div>
                    </div>
                </div>
                <div
                    id='ORDER'
                    data-state="open"
                    data-orientation="horizontal"
                    className="origin-top-center relative bg-white/80 backdrop-blur-md w-full overflow-hidden data-[state=open]:animate-header-down data-[state=closed]:animate-header-up"
                    //style={{ "--radix-navigation-menu-viewport-width":"1519px" ,"--radix-navigation-menu-viewport-height": "80px"}}
                    style={{backgroundColor : 'white'}}>
                    <div
                        id="radix-:r0:-content-radix-:r6:"
                        aria-labelledby="radix-:r0:-trigger-radix-:r6:"
                        data-orientation="horizontal"
                        className="left-0 top-0 w-full md:absolute"
                        dir="ltr">
                        <div
                            className="flex items-center justify-end w-full"
                            style={{paddingRight:" calc(100% - 1363.64px)",backgroundColor : 'white',overflow:"hidden"}}>
                            <a
                                href="/order/catering"
                                className={"text-[18px] px-4 py-2 text-espresso font-extrabold font-sans h-[60px] lg:h-[80px] flex items-center hover:text-destructive transition opacity-0 "+(menu!=='ORDER'?"":"animate-header-item-up")}
                                // style="animation-duration: 0.35s; animation-delay: 0.1s;"
                                style={{animationDuration:(menu==='ORDER'?"0.35s":""),animationDelay:(menu==='ORDER'?"0.1s":"")}}
                                >케이터링</a>
                            <a
                                href="/order/delivery"
                                className={"text-[18px] px-4 py-2 text-espresso font-extrabold font-sans h-[60px] lg:h-[80px] flex items-center hover:text-destructive transition opacity-0 "+(menu!=='ORDER'?"":"animate-header-item-up")}
                                // style="animation-duration: 0.35s; animation-delay: 0.2s;"
                                style={{animationDuration:(menu==='ORDER'?"0.35s":""),animationDelay:(menu==='ORDER'?"0.2s":"")}}
                                >딜리버리</a>
                            <a
                                href="/order/happyemarket"
                                className={"text-[18px] px-4 py-2 text-espresso font-extrabold font-sans h-[60px] lg:h-[80px] flex items-center hover:text-destructive transition opacity-0 "+(menu!=='ORDER'?"":"animate-header-item-up")}
                                // style="animation-duration: 0.35s; animation-delay: 0.3s;"
                                style={{animationDuration:(menu==='ORDER'?"0.35s":""),animationDelay:(menu==='ORDER'?"0.s":"")}}
                                >선물하기</a>
                        </div>
                    </div>
                </div>
                </div>
        </>
    )

}
export default SubMenu;