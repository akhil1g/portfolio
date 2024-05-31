import React from "react";
import './projects.css';
import Musicxon from './images/musicxon.jpg';
import Morse from './images/morse.jpg';
import Codetogether from './images/ct.jpg';
import PW from './images/pw.jpg';
import Chrome from "./images/chrome.webp";
import Githereum from "./images/ethereum.jpeg"
import VoiceAnalyzer from "./images/audio.webp"
import PCard from "./projectcard";
export default function Projects()
{
    return(
        <section className="projectcontainer" id="projects">
            <div className="projectheading">My <span className="projectheading2">Works</span></div>
            <div className="projectinnercont">
            <div className="projecttext">Projects I have done so far...</div>
            <div className="projectouterbox">
            <div className="projectcard">
                <div className="pscroll">
                <PCard src={PW} heading={"Password Manager"} content={"Password Manager application is a cutting-edge technology that has been developed to address the growing concerns surrounding password security and management"
                 } link={"https://github.com/akhil1g/PasswordManager"}/>

                <PCard src={Chrome} heading={"TabHub"} content={"Chrome tab manager extension which helps users to manage all their chrome tabs efficiently"
                 } link={"https://github.com/akhil1g/TabManager"}/>

                <PCard src={Githereum} heading={"Githereum"} content={"Solve Github issues , get rewarded ! Make your commits earn for you !"
                 } link={"https://github.com/ishavishwakarma29/HACK36_7.0"}/>

                 <PCard src={Morse} content={"Morse code encoding and decoding website - ECE Core Project"} heading={"Morse Coder"}
                  link={"https://github.com/akhil1g/morse"}/>

                 <PCard src={VoiceAnalyzer} content={"Voice Gender Analyzer website - ECE Core Project"} heading={"Voice Analyzer"}
                  link={"https://github.com/akhil1g/Voice-Gender-Analyzer"}/>

                  <PCard src={Codetogether} heading={"Code Together"} content={"Coding website for NIT"} 
                  link={"https://github.com/adityarai0705/CodeTogether"} />

                  <PCard src={Musicxon} heading={"Musicxon"} content={"Music playing website...."} link={"https://github.com/akhil1g/Musixon"} />
            </div>
            <div className="pscroll">
                <PCard src={PW} heading={"Password Manager"} content={"Password Manager application is a cutting-edge technology that has been developed to address the growing concerns surrounding password security and management"
                 } link={"https://github.com/akhil1g/PasswordManager"}/>
                 
                 <PCard src={Chrome} heading={"TabHub"} content={"Chrome tab manager extension which helps users to manage all their chrome tabs efficiently"
                 } link={"https://github.com/akhil1g/TabManager"}/>

                 <PCard src={Githereum} heading={"Githereum"} content={"Solve Github issues , get rewarded ! Make your commits earn for you !"
                 } link={"https://github.com/ishavishwakarma29/HACK36_7.0"}/>

                 <PCard src={Morse} content={"Morse code encoding and decoding website - ECE Core Project"} heading={"Morse Coder"}
                  link={"https://github.com/akhil1g/morse"}/>

                 <PCard src={VoiceAnalyzer} content={"Voice Gender Analyzer website - ECE Core Project"} heading={"Voice Analyzer"}
                  link={"https://github.com/akhil1g/Voice-Gender-Analyzer"}/>

                  <PCard src={Codetogether} heading={"Code Together"} content={"Coding website for NIT"} 
                  link={"https://github.com/adityarai0705/CodeTogether"} />

                  <PCard src={Musicxon} heading={"Musicxon"} content={"Music playing website...."} link={"https://github.com/akhil1g/Musixon"} />
            </div>
            </div>
            </div>
            </div>
        </section>
    );
}