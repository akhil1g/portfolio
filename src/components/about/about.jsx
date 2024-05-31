import React from "react";
import './about.css';
import Abtimg from './akhil.JPG';
import { Reveal } from "../../animations/Animations";
export default function About()
{
    return(
        <section className="aboutcont" id="about">
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
                        👋  I'm Akhil Gupta
                        </Reveal>
                    </div>
                    <div className="abtinfoh2">
                        <Reveal>
                        📝 Pre-Final Year ECE Grad at MNNIT-A
                        </Reveal>
                    </div>
                    <div className="abtinfoh3">
                        <Reveal>
                        💼 Upcoming Software Developer Intern
                        </Reveal>
                    </div>
                    <div className="abtinfoh3">
                        <Reveal>
                        ⚡ Electronics Society Web Team Member
                        </Reveal>
                    </div>
                    <div className="abtinfoh3">
                        <Reveal>
                       🔭 Astro Club Coordinator 
                        </Reveal>
                    </div>
                    <div className="abtinfoh3">
                        <Reveal>
                        👨‍💻 Web Developer and Programming Enthusiast
                        </Reveal>
                    </div>
                    <Reveal>
                    <button className="resume" onClick={()=> window.open("https://drive.google.com/file/d/1X5nLKdmqQzsZpuiNvyxSueH3YvDV8jiH/view?usp=drive_linkw", "_blank")}>Resume</button>
                    </Reveal>
                    <div></div>
                </div>
                </div>
            </div>
        </section>
    );
}