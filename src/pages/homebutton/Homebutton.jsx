import React from "react";
import "./homebutton.css"
import { Reveal } from "../../animations/Animations";
export default function Homebutton(){
    return (
        <div className="homebuttonouterbox">
            <Reveal>
            <button onClick={()=>{window.location.href="/"}} className="homebutton">Back To Home</button>
            </Reveal>
        </div>
    )
}