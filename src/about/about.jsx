import React from "react";
import './about.css';
import Abtimg from './akhil.JPG';
import { Reveal } from "../animations/Animations";
export default function About()
{
    return(
        <div className="aboutcont">
            <Reveal>
            <div className="abtheading">About <span className="abtheading2">Me</span></div>
            </Reveal>
            <div className="abtbox">
                <div className="abtinnerbox">
                <div className="abtimgcont">
                    <Reveal>
                    <img src={Abtimg} className="abtimg" alt=""></img>
                    </Reveal>
                </div>
                <div className="abtinfocont">
                    <div className="abtinfoh1">
                        <Reveal>
                        I'm Akhil Gupta
                        </Reveal>
                    </div>
                    <div className="abtinfoh2">
                        <Reveal>
                        Pre-Final Year ECE Grad at MNNIT-A
                        </Reveal>
                    </div>
                    <div className="abtinfoh3">
                        <Reveal>
                        Software Developer Intern at SAP Labs
                        </Reveal>
                    </div>
                    <div className="abtinfoh3">
                        <Reveal>
                        Web Developer and Programming Enthusiast
                        </Reveal>
                    </div>
                    <Reveal>
                    <button className="resume" onClick={()=> window.open("https://drive.google.com/file/d/1sBNIM0_zTI4ybbNIJZtVVfldoAdSjHUF/view", "_blank")}>Resume</button>
                    </Reveal>
                    <div></div>
                </div>
                </div>
            </div>
        </div>
    );
}