import React from "react";
import './coding.css';
import Leet from "./leetcode/Leetcode";
import Carousel from "./Carousel";
import LC from './icons/lc.png'
import CC from './icons/ccicon.jpg'
import CF from './icons/cficon.png'
import AT from './icons/aticon.png'
import CN from './icons/cn.png'
import CodingIcon from "./CodingIcon";
export default function Coding(){
    return(
        <div className="codingcont">
            <div className="cdheading">Coding <span className="cdheading2">Profiles</span></div>
            <div className="cdbox">
                <div className="cdinnerbox">
                    <Leet />
                </div>
            </div>
            <div className="codingouter">
            <div id="cards">
                <div class="card">
                    <div class="card-content">
                    <CodingIcon src={LC} link="https://leetcode.com/akhilg11/"></CodingIcon>
                    </div>
                </div>
                <div class="card">
                    <div class="card-content">
                    <CodingIcon src={CC} link="https://www.codechef.com/users/beinggojo"></CodingIcon>
                    </div>
                </div>
                <div class="card">
                    <div class="card-content">
                    <CodingIcon src={CF} link="https://codeforces.com/profile/akhilg11"></CodingIcon>
                    </div>
                </div>
                <div class="card">
                    <div class="card-content">
                    <CodingIcon src={AT} link="https://atcoder.jp/users/akhilg11"></CodingIcon>
                    </div>
                </div>
                <div class="card">
                    <div class="card-content">
                    <CodingIcon src={CN} link="https://www.codingninjas.com/studio/profile/9094318e-3f54-454a-95e2-0f7c1ea575ff"></CodingIcon>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}