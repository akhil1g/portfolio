import React from "react";
import './exp.css';
import Sap from './saplabs.jfif';
import MnnitEce from './mnnitece.webp'
import { Reveal } from "../animations/Animations";
export default function Exp()
{
    return(
        <div className="expcont">
            <div className="expheading">Experi<span className="expheading2">ence</span></div>
            <Reveal>
            <div className="timeline">
                <div className="expbox expleftbox">
                    <img className="expimg" src={MnnitEce} alt=""></img>
                    <div className="exptextbox">
                        <h2>Electronics Society MNNIT</h2>
                        <small>Dec 2023-Present</small>
                        <p>Web team member of Electronics Society</p>
                        <span className="leftboxarrow"></span>
                    </div>
                </div>
                <div className="expbox exprightbox">
                    <img className="expimg" src={Sap} alt=""></img>
                    <div className="exptextbox">
                        <h2>SAP Labs Inc.</h2>
                        <small>May 2024-July 2024</small>
                        <p>Software Developer Intern at SAP Labs. Not started</p>
                        <span className="rightboxarrow"></span>
                    </div>
                </div>
            </div>
            </Reveal>
        </div>
    );
}