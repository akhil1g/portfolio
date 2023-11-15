import React from "react";
import { TypeAnimation } from 'react-type-animation';
import './intro.css';
import Self from "./image";
export default function Intro()
{
    return (
        <div className="intro-cont">
            <div className="intro-sect">
                <div className="introheading">
                    Hi there,
                </div>
                <div className="introheading2">I'm Akhil <div className="introcolor">Gupta</div></div>
                <div className="introtypewriter">
                    <TypeAnimation
                    sequence={[
                    "I'm a Programmer",1000,
                    "I'm a Web Developer",1000,
                    "I'm a Designer",1000,]}
                    speed={50}
                    repeat={Infinity}
                    style={{ fontSize: '2em' }}/>
                </div>
            </div>
            <div className="img-cont">
                <div className="img-sect">
                    <Self/>
                </div>
            </div>
        </div>
    );
}