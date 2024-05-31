import React, { useEffect, useState } from "react";
import Coding from "./components/coding/coding";
import About from "./components/about/about";
import Edu from "./components/edu/edu";
import Exp from "./components/exp/exp";
import Skills from "./components/skills/skills";
import Intro from "./components/intro/intro";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";
import Navbar from "./components/navbar/navbar";
import './Main.css'
export default function Main()
{
    const [backtotop,setBackToTop]=useState(false);
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100)
                {
                    setBackToTop(true);
                }
            else
            {
                setBackToTop(false);
            }
        })
    },[])
    const scrollUp=()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }
    return(
        <div>
            <Navbar/>
            <Intro />
            <About />
            <Coding />
            <Skills />
            <Projects />
            <Exp />
            <Edu />
            <Contact />
            {backtotop&&(
                <button className="scrolltotopbtn" onClick={scrollUp}>^</button>
            )}
        </div>
    );
}