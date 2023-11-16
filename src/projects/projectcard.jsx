import React from 'react';
import './projectcard.css';
import Git from './github.png';
const PCard = ({src,heading,content,link}) => {
  return (
    <main className='cardouter'>
      <div className="pcard">
        <img
          src={src}
          alt=""
          className='projectcardimg'
        />
        <div className="card-content">
          <h2 className='pcardheading'>{heading}</h2>
          <p className='pcardcontent'>
            {content}
          </p>
          <a href={link} className="pcardlink" target='blank'>
            <button className='pgit'>Github</button>
          </a>
        </div>
      </div>
    </main>
  );
};

export default PCard;
