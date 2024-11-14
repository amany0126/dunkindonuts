import { useCallback, useRef, useState } from "react";


const MainSlideCall = () =>{
    
    // const [slideData,setSlideData] =useState({})
    // const [state,setState]= useState(false)
    // const addSideData = useCallback((point,css,index,max) => {  
    //     setSlideData({
    //         ...slideData,
    //         [point] : {
    //                 point : point,
    //                 css : css,
    //                 index :index,
    //                 max : max,
    //         },
    //     })
    //     setState(true)
    // }, []);
    // //slideData["top"]["index"]=3

    // const select = (target)=>{
    //     console.log(slideData)
    //     console.log(slideData[target]["css"])
    // }
    // const changre = (target)=>{
    //     console.log(slideData)
    //     console.log(slideData[target]["css"]=true)
    // }
    // const bannerPlay = (target)=>{
    //     //console.log(type)
    //     slideData[target]["point"] = setInterval(() => {   
    //       callSlide(slideData[target]["index"] ===slideData[target]["max"] ?1:slideData[target]["index"]+1,500);
    //   },6500)
    // }
    // const changeBanner = (num,target)=>{
    //     //console.log(type)
    //     clearInterval(slideData[target]["point"])
    //     callSlide(num,target,500)
    //     bannerPlay(target)
      
    //     setTimeout(()=>{
    //         callSlide(num,target,500)
    //     },300)
        
    // };   

    // const callSlide = (num,target,time) =>{

    //     slideData[target]["css"]=true
    //     setTimeout(()=>{
    //         slideData[target]["css"]=false
    //         slideData[target]["index"]=num
    //     },time)     
    // };

    
        const [bannerOrder,setBanner] = useState(1);
        const bannerRef = useRef(1)
        const topbannerPlayRef = useRef();
        const mainbannerPlayRef = useRef();
         const [mainorder,setMaim] = useState(1);
         const MainRef = useRef(1)
        
        const [topBannerSet, setTopBannerSet] = useState(false);
        const [mainBannerSet, setMainBannerSet] = useState(false);



    const setOrder = useCallback((num,type) => {
        type==="top"?bannerRef.current =num: MainRef.current = num
        type==="top"?setBanner(num): setMaim(num)
  }, []);



    const onTopPlay = ()=>{
        //console.log(type)
        topbannerPlayRef.current = setInterval(() => {  
            console.log("Interval")   
        slideCall(bannerRef.current===3?1:bannerRef.current+1,"top",500);
    },6500)
    }
    const onMainPlay = ()=>{
        mainbannerPlayRef.current = setInterval(() => {  
            console.log("Interval")   
            slideCall(MainRef.current===6?1:MainRef.current+1,"main",500);
    },6500)  
    };
    
    const onClickButton= (num,type) =>{

        if(type==="top"){
            clearInterval(topbannerPlayRef.current)
            slideCall(num,type,500)
            onTopPlay()
        }else if(type==="main"){
            clearInterval(mainbannerPlayRef.current )
            slideCall(num,type,500)
            onMainPlay()
        }
        setTimeout(()=>{
            slideCall(num,type,500)
        },300)
    }
    
    const slideCall = (num,type,time) =>{
            type==="top"?setTopBannerSet(true):setMainBannerSet(true)
            setTimeout(()=>{
                type==="top"?setTopBannerSet(false):setMainBannerSet(false)
                setOrder(num,type);
            },time)     
        };
        return [
            bannerOrder,mainorder,topBannerSet,mainBannerSet,
            {onClickButton,onTopPlay,onMainPlay}];    
    };
 
    



export default MainSlideCall;