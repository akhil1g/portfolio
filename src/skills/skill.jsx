import React from "react";
import './skill.css'
export default function Skill({source,alt,title})
{
    return (
        <img src={source} alt={alt} title={title} className="skillicon"></img>
    );
}