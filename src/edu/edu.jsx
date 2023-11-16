import React from "react";
import './edu.css';
import Mnnit from './mnnit.jfif';
import St from './stjs1.jfif';
export default function Edu()
{
     function handleonclick1()
    {
        window.open("https://academics.mnnit.ac.in/new","_blank");
    }
    function handleonclick2(){
        window.open("https://stjosephsschooldibi.in/","_blank");
    }
    return(
        <div className="educont">
            <div className="eduheading">Educa<span className="eduheading2">tion</span></div>
            <div className="edubox">
                <div className="edubox1" onClick={handleonclick1}>
                    <div className="clglogo">
                    <img src={Mnnit} className="edulogo"></img>
                    </div>
                    <div className="clginfo">
                    <div className="clgheading">Motilal Nehru National Institute Of Technology</div>
                    <div className="clgdegree">Bachelor of Technology</div>
                    <div className="clgbranch">Electronics and Communication Engineering</div>
                    <div className="clgcpi">CPI : 8.17 (4th Semester)</div>
                    <div className="clgyear">2021-Present</div>
                    </div>
                </div>
            </div>
            <div className="edubox">
                <div className="edubox1" onClick={handleonclick2}>
                    <div className="clglogo">
                    <img src={St} className="edulogo"></img>
                    </div>
                    <div className="clginfo">
                    <div className="clgheading">St. Joseph's Sr. Sec. School, NTPC Dibiyapur</div>
                    <div className="clgdegree">Intermediate : 95% (2018-2019)</div>
                    <div className="clgbranch">High School : 87.5%(2016-2017)</div>
                    </div>
                </div>
            </div>
            <div className="edubottom"></div>
        </div>
    );
}