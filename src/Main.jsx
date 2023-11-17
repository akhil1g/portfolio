import React from "react";
import Coding from "./coding/coding";
import About from "./about/about";
import Edu from "./edu/edu";
import Exp from "./exp/exp";
import Skills from "./skills/skills";
import Intro from "./intro/intro";
import Projects from "./projects/projects";
export default function Main()
{
    return(
        <div>
            <Intro />
            <About />
            <Coding />
            <Skills />
            <Projects />
            <Exp />
            <Edu />
        </div>
    );
}