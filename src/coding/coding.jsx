import React from "react";
import './coding.css';
import Leet from "./leetcode/Leetcode";
import Codeforces from "./cf/Codeforces";
import { Reveal } from "../animations/Animations";
export default function Coding(){
    return(
        <div className="codingcont">
            <div className="cdheading">Coding <span className="cdheading2">Profiles</span></div>
            <div className="cdbox">
                <div className="cdinnerbox">
                    <Leet />
                    {/* <Codeforces /> */}
                </div>
            </div>
        </div>
    );
}