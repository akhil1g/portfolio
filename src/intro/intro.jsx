import React from "react";
import { TypeAnimation } from 'react-type-animation';
import './intro.css';
import Self from "./image";
import { Reveal } from "../animations/Animations";
export default function Intro()
{
    return (
        <div className="intro-cont">
            <div className="intro-sect">
                <Reveal>
                <div className="introheading">
                    Hi there,
                </div>
                </Reveal>
                <Reveal>
                <div className="introheading2">I'm Akhil <span className="introcolor">Gupta</span></div>
                </Reveal>
                <Reveal>
                <div className="introtypewriter">
                    <TypeAnimation
                    sequence={[
                    "I'm a Programmer",1000,
                    "I'm a Web Developer",1000
                    ,]}
                    speed={50}
                    repeat={Infinity}
                    style={{ fontSize: '2em' }}/>
                </div>
                </Reveal>
            </div>
            <div className="img-cont">
                <div className="img-sect">
                    <Self/>
                </div>
            </div>
        </div>
    );
}