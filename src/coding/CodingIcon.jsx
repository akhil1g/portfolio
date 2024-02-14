import React from "react";
import './codingicon.css'
export default function CodingIcon({src,link})
{
    return(
        <div>
            <img src={src} onClick={()=>{window.open(link,"_blank")}} alt="" className="codingicon"></img>
        </div>
    );
}