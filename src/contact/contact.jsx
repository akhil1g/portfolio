import React from "react";
import './contact.css';
import Icon from "./Icon";
import LinkedIn from './icons/linkedinicon.png'
import Insta from './icons/instaicon.png'
import Leet from './icons/leeticon.png'
import CC from './icons/ccicon.jpg'
import Cf from './icons/cficon.png'
import At from './icons/aticon.png'
import { Reveal } from "../animations/Animations";
export default function Contact()
{
    return(
        <div className="contactouterbox">
        <div className="contact-cont">
            <div className="contactcont1" >
                <div className="contactheading">
                    <Reveal>
                    Get In 
                    </Reveal>
                    <div className="contactheading2"><Reveal>Touch</Reveal></div></div>
                <div className="contactcontent">
                    <Reveal>
                    Thankyou for visiting my portfolio !!
                    </Reveal>
                </div>
                <div className="contcontentbox">
                    Reach out over the Socials : 
                </div>
                <div className="links">
                <div className="sociallinks">
                    <div className="icon">
                        <Icon src={Insta} link="https://www.linkedin.com/in/akhil-g-131923136/"></Icon>
                        <Icon src={LinkedIn} link="https://www.linkedin.com/in/akhil-g-131923136/"></Icon>
                    </div>
                </div>
                <div className="codinglinks">
                    <div className="icon">
                         <Icon src={Leet} link="https://leetcode.com/akhilg11/"></Icon>
                         <Icon src={At} link="https://atcoder.jp/users/akhilg11"></Icon>
                         <Icon src={CC} link="https://www.codechef.com/users/akhilg1"></Icon>
                         <Icon src={Cf} link="https://codeforces.com/profile/akhilg11"></Icon>
                    </div>
                </div>
                
                </div>
                <div className="visitcounter">
                    <div className="counter">
                        <div className="counterheading">Visits : </div>
                        <a href="https://www.freecounterstat.com" title="visitor counter">
                        <img src="https://counter7.optistats.ovh/private/freecounterstat.php?c=wul5fge6c5uayk582g799mwxr9pe59p1"
                        border="0" title="visitor counter" alt="visitor counter" className="counticon">
                        </img>
                        </a>
                    </div>
                </div>
            </div>
            <div className="contactcont2">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3601.278796931854!2d81.86555637522166!3d25.495746877520016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399ab500530f1849%3A0xbd9a0dfb98c4ed34!2sTandon%20Hostel!5e0!3m2!1sen!2sin!4v1703676304410!5m2!1sen!2sin" 
                    style={{border : "0" , borderRadius : "20px"}} 
                    allowfullscreen=""
                    width="100%" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade"
                    title="1"
                    >
                    </iframe>
            </div>
        </div>
        </div>
    );
}