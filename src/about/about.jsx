import React from "react";
import './about.css';
import Abtimg from './akhil.JPG';
export default function About()
{
    return(
        <div className="aboutcont">
            <div className="abtheading">About <span className="abtheading2">Me</span></div>
            <div className="abtbox">
                <div className="abtinnerbox">
                <div className="abtimgcont">
                    <img src={Abtimg} className="abtimg"></img>
                </div>
                <div className="abtinfocont">
                    <div className="abtinfoh1">
                        I'm Akhil Gupta
                    </div>
                    <div className="abtinfoh2">
                        Pre-Final Year ECE Grad at MNNIT-A
                    </div>
                    <div className="abtinfoh3">
                        Software Developer Inter at SAP Labs
                    </div>
                    <div className="abtinfoh3">
                        Web Developer and Programming Enthusiast
                    </div>
                    <button className="resume">Resume</button>
                    <div></div>
                </div>
                </div>
            </div>
        </div>
    );
}