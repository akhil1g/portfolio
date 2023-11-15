import React from "react";
import Skill from "./skill";
import './skills.css';
import ReactLogo from './icons/react-js-icon.png'
import HtmlLogo from './icons/html-icon.png'
import CssLogo from './icons/css-icon.png'
import JavascriptLogo from './icons/javascript-programming-language-icon.png'
import NodejsLogo from './icons/node-js-icon.png'
import ExpressjsLogo from './icons/express-js-icon.png'
import MongodbLogo from './icons/mongodb-icon.png'
import MysqlLogo from './icons/mysql-icon.png'
import CppLogo from './icons/c-plus-plus-programming-language-icon.png'
import CLogo from './icons/c-program-icon.png'
import GithubLogo from './icons/github-icon.png'
import GitLogo from './icons/git-icon.png'
import PostmanLogo from './icons/postman-icon.png'
import FigmaLogo from './icons//figma-icon.png'
export default function Skills()
{
    return(
        <div className="skillscont">
        <div className="skillheading">My <span className="skillheading2">Skills</span></div>
        <div className="outerskillbox">
        <div className="skilliconsbox">
            <div className="skillsinnerbox">
            <Skill source={ReactLogo} alt="react-js" title="React"  />
            <Skill source={HtmlLogo} alt="Html" title="HTML" />
            <Skill source={CssLogo} alt="CSS" title="CSS" />
            <Skill source={JavascriptLogo} alt="Javascript" title="javascript" />
            <Skill source={NodejsLogo} alt="nodejs" title="nodejs" />
            <Skill source={ExpressjsLogo} alt="expressjs" title="expressjs" />
            <Skill source={MongodbLogo} alt="mongodb" title="MongoDB" />
            <Skill source={MysqlLogo} alt="mySQL" title="mySQL" />
            <Skill source={CppLogo} alt="C++" title="C++" />
            <Skill source={CLogo} alt="C" title="C" />
            <Skill source={GithubLogo} alt="Github" title="Github" />
            <Skill source={GitLogo} alt="Git" title="Git" />
            <Skill source={FigmaLogo} alt="Figma" title="Figma" />
            <Skill source={PostmanLogo} alt="Postman" title="Postman" />
            </div>
        </div>
        </div>
        </div>
    );
}