import { useCallback, useEffect, useRef, useState } from "react";

const Test = ({item}) =>{
    // 더미데이터
    const indexRef= useRef(0)
    const slideRef= useRef()
    const [index,setIndex]= useState(0)

    const setOrder = useCallback((num) => {
        indexRef.current =num
        setIndex(num)
    }, []);


    const onPlay = ()=>{
        //console.log(type)
        slideRef.current = setInterval(() => {  
            console.log("Interval")   
          slideCall(indexRef.current===item.length-1?1:indexRef.current+1,500);
      },6500)
    }
    useEffect(()=>{        
        onPlay()
    },[])
    const [css, setCss] = useState(false);
    const slideCall = (num,time) =>{
        setCss(true)
        setTimeout(()=>{
            setCss(false)
            setOrder(num)
        },time)     
    };
        indexRef.current=0  
        let num = indexRef.current
        console.log(item[num]["url"])
        return(
                <>
                <div
                    className="w-full h-full rounded-[clamp(20px,6.48vw,95px)] shadow-[2px_2px_18px_#A88D76] overflow-hidden">
                <div className={"flex w-full "+(setCss?"chbannerContainer":"bannerContainer")} >
                    
                        <a
                            id='banner_href1'
                            className="block flex-none w-full h-full aspect-[1566/749] relative bannerInner1"
                            target="_blank"
                            href={item[index]["url"]}
                            style={{transform: "translate3d(4377px, 0px, 0px)"}}
                            >
                            <img
                                id='banner_img1'
                                src = {item[index]["img"]}                  
                                alt="banner"
                                className="w-full h-full object-cover aspect-[1566/749]"/></a>  
                         <a
                            id='banner_href2'
                            className="block flex-none w-full h-full aspect-[1566/749] relative bannerInner2"
                            target="_blank"
                            href={item[(index===item.length-1?1:num+1)]["url"]}
                            style={{transform: "translate3d(4377px, 0px, 0px)"}}
                            >
                            <img
                                id='banner_img2'
                                src = {item[(index===item.length-1?1:num+1)]["img"]}                  
                                alt="banner"
                                className="w-full h-full object-cover aspect-[1566/749]"/></a>                     
                    </div>
              
                </div>
                <div className="absolute bottom-[42px] left-1/2 -translate-x-1/2">
                    <div className="flex justify-center">.
                   { item.map((a,i) =>(
                        <button type="button" className="px-[4px] py-[7px]" onClick={()=>{indexRef.current=i}}>
                            <div className={"bg-white rounded-full h-[7px] transition-all w-[7px] opacity-40 "+(index === i?'!opacity-100 !w-[20px]':"")} ></div>
                        </button>
                    ))}
                    </div>
                </div>
                </>
            )
        
    }

export default Test;