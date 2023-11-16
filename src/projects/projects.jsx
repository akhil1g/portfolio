import React from "react";
import './projects.css';
import Musicxon from './musicxon.jpg';
import Morse from './morse.jpg';
import Codetogether from './ct.jpg';
import PW from './pw.jpg';
import PCard from "./projectcard";
export default function Projects()
{
    return(
        <div className="projectcontainer">
            <div className="projectheading">Technical <span className="projectheading2">Works</span></div>
            <div className="projectinnercont">
            <div className="projecttext">Projects I have done so far...</div>
            <div className="projectouterbox">
            <div className="projectcard">
                <div className="pscroll">
                <PCard src={PW} heading={"Password Manager"} content={"Password Manager application is a cutting-edge technology that has been developed to address the growing concerns surrounding password security and management"
                 } link={"https://github.com/akhil1g/PasswordManager"}/>

                 <PCard src={Morse} content={"Morse code encoding and decoding website"} heading={"Morse Coder"}
                  link={"https://github.com/akhil1g/morse"}/>

                  <PCard src={Codetogether} heading={"Code Together"} content={"Coding website for NIT"} 
                  link={"https://github.com/adityarai0705/CodeTogether"} />

                  <PCard src={Musicxon} heading={"Musicxon"} content={"Music playing website...."} link={"https://github.com/akhil1g/Musixon"} />
            </div>
            <div className="pscroll">
                <PCard src={PW} heading={"Password Manager"} content={"Password Manager application is a cutting-edge technology that has been developed to address the growing concerns surrounding password security and management"
                 } link={"https://github.com/akhil1g/PasswordManager"}/>

                 <PCard src={Morse} content={"Morse code encoding and decoding website"} heading={"Morse Coder"}
                  link={"https://github.com/akhil1g/morse"}/>

                  <PCard src={Codetogether} heading={"Code Together"} content={"Coding website for NIT"} 
                  link={"https://github.com/adityarai0705/CodeTogether"} />

                  <PCard src={Musicxon} heading={"Musicxon"} content={"Music playing website...."} link={"https://github.com/akhil1g/Musixon"} />
            </div>
            </div>
            </div>
            </div>
        </div>
    );
}