import React,{useEffect,useState} from "react";
import './Carousel.css'
import Leet from './leetcode/Leetcode.jsx'
import CF from './cf/Codeforces.jsx'
import Components from "./Components.jsx";
const LC=function()
{
    return (
        <Leet/>
    )
}
const Carousel= function()
{
    const data=["1","2","3"];
    const [currIndex,setIndex]=useState(0);
    const infintescroll = function()
    {
        if(currIndex===data.length-1)
        {
            return setIndex(0);
        }
        return  setIndex(currIndex+1);
    }
    useEffect(function(){
        const interval=setInterval(()=>{infintescroll()},3000)
        return ()=>clearInterval(interval)
    })
    return (
        <div className="carousel-cont">
            {
                data.map(function(item,index){
                    return <h1 className="carousel-item" key={index} style={{transform:`translate(-${currIndex*100}%)`}}>{item}</h1>
                })
            }    
        </div>
    )
}
export default  Carousel;