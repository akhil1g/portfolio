import React from "react";
import './contact.css';
import Icon from "./Icon";
import LinkedIn from './icons/linkedinicon.png'
import Insta from './icons/instaicon.png'
import Leet from './icons/leeticon.png'
import CC from './icons/ccicon.jpg'
import Cf from './icons/cficon.png'
import At from './icons/aticon.png'
export default function Contact()
{
    return(
        <div className="contact-cont">
            <div className="contactcont1" >
                <div className="contactheading">Get In <div className="contactheading2">Touch</div></div>
                <div className="contactcontent">
                    Thankyou for visiting my portfolio !!
                </div>
                <div className="contcontentbox">
                    Reach out over the Socials : 
                </div>
                <div className="links">
                <div className="sociallinks">
                    <div className="icon">
                        <Icon src={Insta} link=""></Icon>
                        <Icon src={LinkedIn} onClick={()=> window.open("https://www.linkedin.com/in/akhil-g-131923136/", "_blank")}></Icon>
                    </div>
                </div>
                <div className="codinglinks">
                    <div className="icon">
                         <Icon src={Leet}></Icon>
                         <Icon src={At}></Icon>
                         <Icon src={CC}></Icon>
                         <Icon src={Cf}></Icon>
                    </div>
                </div>
                </div>
            </div>
            <div className="contactcont2">

            </div>
        </div>
    );
}