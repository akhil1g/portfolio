import React from "react";
import './navbar.css';
import Logo from "./logo";

export default function Navbar()
{
     function handleabout()
    {
        window.location.href='/about';
    }
    function hadleskills()
    {
        window.location.href='/skills';
    }
    function handleproj()
    {
        window.location.href='/projects';
    }
    function handleexp()
    {
        window.location.href='/experience';
    }
    function handleedu()
    {
        window.location.href='/education';
    }
    // function handlemain()
    // {
    //     window.location.href='/';
    // }
    function handlecoding(){
        window.location.href='/coding';
    }
    return (
        <div className="navcont">
            <Logo/>
            <div className="nav-heading-cont">
                <div className="nav-heading" >Akhil <div className="nav-heading2">Gupta</div></div>
            </div>
            <div className="nav-items">
                    <div className="navitem" onClick={handleabout}>About</div>
                    <div className="navitem" onClick={handlecoding}>Coding</div>
                    <div className="navitem" onClick={hadleskills}>Skills</div>
                    <div className="navitem" onClick={handleproj}>Projects</div>
                    <div className="navitem" onClick={handleexp}>Experience</div>
                    <div className="navitem" onClick={handleedu}>Education</div>
                    <div className="navitem">Contact Me</div>
                </div>
        </div>
    );
}