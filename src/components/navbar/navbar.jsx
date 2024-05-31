import React from "react";
import './navbar.css';
import Logo from "./logo";
import { HashLink } from "react-router-hash-link";

export default function Navbar()
{
    return (
        <div className="navcont">
            <Logo/>
            <div className="nav-heading-cont">
                <div className="nav-heading" >Akhil <div className="nav-heading2">Gupta</div></div>
            </div>
            <div className="nav-items">
                    <HashLink smooth className ="navitem" to='#about'>About</HashLink>
                    <HashLink smooth className ="navitem" to='#coding'>Coding</HashLink>
                    <HashLink smooth className ="navitem" to='#skills'>Skills</HashLink>
                    <HashLink smooth className ="navitem" to='#projects'>Projects</HashLink>
                    <HashLink smooth className ="navitem" to='#experience'>Experience</HashLink>
                    <HashLink smooth className ="navitem" to='#education'>Education</HashLink>
                    <HashLink smooth className ="navitem" to='#contact'>Contact</HashLink>
                </div>
        </div>
    );
}