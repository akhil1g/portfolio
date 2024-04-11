import './Leetcode.css';
import ProgressBar from "@ramonak/react-progress-bar";
import { CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Logo from './leetcode.ico'
import { CiStar } from "react-icons/ci";
import { FiAward } from "react-icons/fi";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import React,{useEffect, useState} from 'react';

function Leet(){
    const [totalq,settotalq]=useState('');
    const [solvedq,setsolvedq] =useState('');
    const [totaleasy,settotaleasy]=useState("");
    const [easysolved,seteasysolved]=useState('');
    const [totalmedium,settotalmed]=useState('');
    const [solvedmed,setsolvedmed]=useState('');
    const [totalhard,settotalhard]=useState("");
    const [solvedhard,setsolvedhard]=useState("");
    const [rep,setrep]=useState("");
    const [circularval,setcircularval]=useState("");
    const [easyval,seteasyval]=useState("");
    const [medval,setmedval] =useState("");
    const [hardval,sethardval]=useState("");

    async function setCard(){
        const req=await fetch("https://leetcodestats.cyclic.app/akhilg11");
        const data=await req.json();
        settotalq(data.totalQuestions);
        setsolvedq(data.totalSolved);
        settotaleasy(data.totalEasy);
        seteasysolved(data.easySolved);
        settotalmed(data.totalMedium);
        setsolvedmed(data.mediumSolved);
        settotalhard(data.totalHard);
        setsolvedhard(data.hardSolved);
        setrep(data.reputation);
        setCVal();

    }
    function setCVal()
    {
        const per=parseInt(solvedq*100)/parseInt(totalq);
        setcircularval(per);
        const per1=parseInt(easysolved*100)/parseInt(totaleasy);
        seteasyval(per1);
        const per2=parseInt(solvedmed*100)/parseInt(totalmedium);
        setmedval(per2);
        const per3=parseInt(solvedhard*100)/parseInt(totalhard);
        sethardval(per3);
    }
    
    useEffect(function(){
        setCard();
        // Temp();
    })
    return (
        <div className="main" onClick={()=>{window.open("https://leetcode.com/akhilg11/","_blank")}}> 
            <div className='head'>
                <img 
                    className='leet-img'
                    src={Logo} 
                    style={{ width:28, height:28}}
                    alt="logo"/>
                LeetCode
            </div>
            <div className="title">
                Solved Problems
            </div>
            <div className="content">
                <div className="circle-progress">
                    <CircularProgressbar 
                        value={circularval} 
                        text={solvedq}
                        minValue={0}
                        maxValue={100}
                       
                        styles={{
                            root: {},
                            path: {
                                stroke: `rgba(250,164,11)`,
                                strokeLinecap: 'butt',
                                transition: 'stroke-dashoffset 0.5s ease 0s',
                                transform: 'rotate(0.25turn)',
                                transformOrigin: 'center center',
                            },
                            trail: {
                                stroke: 'rgb(240,248,255)',
                                transform: 'rotate(0.25turn)',
                                transformOrigin: 'center center',
                            },
                            text: {
                                fill: 'rgba(250,164,11)',
                                fontSize: '20px',
                            },
                        }}
                    />
                </div>
                <div className="bar-progress">
                    <div className='sub'>
                        <div className='sub-sub'>
                            <div>Easy</div>
                            <div>{easysolved}/{totaleasy}</div>
                        </div>
                        <ProgressBar 
                            completed={easyval}
                            maxCompleted={100}
                            baseBgColor={'#294D35'}
                            bgColor={'#00B8A3'}
                            height={10}
                            labelColor={'#00B8A3'}
                        />
                    </div>
                    <div className='sub'>
                        <div className='sub-sub'>
                            <div>Medium</div>
                            <div>{solvedmed}/{totalmedium}</div>
                        </div>
                        <ProgressBar
                            completed={medval}
                            maxCompleted={100}
                            baseBgColor={'#5E4E26'}
                            bgColor={'#FFC01E'}
                            height={10}
                            labelColor={'#FFC01E'}
                        />
                    </div>
                    <div className='sub'>
                        <div className='sub-sub'>
                            <div>Hard</div>
                            <div>{solvedhard}/{totalhard}</div>
                        </div>
                        <ProgressBar
                            completed={hardval}
                            maxCompleted={100}
                            baseBgColor={'#5A302F'}
                            bgColor={'#EF4743'}
                            height={10}
                            labelColor={'#EF4743'}
                        />
                    </div>
                </div>
            </div>
            <div className="details">
                <CiStar 
                    className='det-img'
                />
                <div className='det-sub'>
                    <div>Contest Rating</div>
                    <div>1880</div>
                </div>
            </div>
            <div className="details">
                <FiAward 
                    className='det-img'
                />
                <div className='det-sub'>
                    <div>Max Rating </div>
                    <div>1880</div>
                </div>
                
            </div>
            <div className="details">
                <IoShieldCheckmarkOutline
                    className='det-img'
                />
                <div className='det-sub'>
                    <div>Attended </div>
                    <div>29</div>
                </div>
                
            </div>
        </div>
    );
}

export default Leet;