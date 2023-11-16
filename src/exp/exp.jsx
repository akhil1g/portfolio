import React from "react";
import './exp.css';
import Sap from './saplabs.jfif';
export default function Exp()
{
    return(
        <div className="expcont">
            <div className="expheading">Experi<span className="expheading2">ence</span></div>
            <div className="timeline">
                <div className="expbox expleftbox">
                    <img className="expimg" src={Sap}></img>
                    <div className="exptextbox">
                        <h2>SAP Labs Inc.</h2>
                        <small>May 2024-July 2024</small>
                        <p>Software Developer Intern at SAP Labs. Not started</p>
                        <span className="leftboxarrow"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}