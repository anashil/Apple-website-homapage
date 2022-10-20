import React from 'react';
import './pagefour.css';
import fouritem from '../../img/page-four-new.png';

function Pagefour() {
  return (
    <>
    <div className='style-page-four'>
    <div className='fourth-itrm-style'>
      <img src={fouritem} alt="fourPage" />
    </div>
    <div className='item-four'>
    <h2 style={{marginLeft:"21rem"}}>The Apple experience. Cinematic in every sense.</h2>
    <p style={{marginLeft:"38rem",color:"gray",fontWeight:"500",marginBottom:".5rem"}}>Available starting 11.4</p>
    <div className='style-link-four'>
        <a href="#"> Learn more{">"}</a>
        <a href="#" style={{marginLeft:"2rem"}}> Order now{">"}</a>
        </div>
    </div>
    </div>
    </>
  )
}

export default Pagefour
