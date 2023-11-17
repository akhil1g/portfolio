import React from "react";
import './coding.css';
import Leet from "./leetcode/Leetcode";
export default function Coding(){
    return(
        <div className="codingcont">
            <div className="cdheading">Coding <span className="cdheading2">Profiles</span></div>
            <div className="cdbox">
                <div className="cdinnerbox">
                    <Leet />
                </div>
            </div>
        </div>
    );
}