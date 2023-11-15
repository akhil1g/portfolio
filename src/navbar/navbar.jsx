import React from "react";
import './navbar.css';
import Logo from "./logo";
export default function Navbar()
{
    return (
        <div className="navcont">
            <Logo/>
            <div className="nav-heading-cont">
                <div className="nav-heading">Akhil <div className="nav-heading2">Gupta</div></div>
            </div>
            <div className="nav-items">
                    <div className="navitem">About</div>
                    <div className="navitem">Skills</div>
                    <div className="navitem">Projects</div>
                    <div className="navitem">Experience</div>
                    <div className="navitem">Education</div>
                    <div className="navitem">Contact Me</div>
                </div>
        </div>
    );
}