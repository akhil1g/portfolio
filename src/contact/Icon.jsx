import React from "react";
import './icon.css'
export default function Icon({src,link})
{
    return (
        <img src={src} className="iconlink" onClick={()=>{window.open(link,"_blank")}} alt=""></img>
    );
}