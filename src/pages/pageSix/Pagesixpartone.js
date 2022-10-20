import React from 'react';
import pagesixpartoneimg from "../../img/5th-img.png";
import './Pagesixpartone.css';

function Pagesixpartone() {
  return (
    <div  className="pagesixpartone-style"> 
    <h1 style={{color:"white",marginLeft:"12rem",paddingTop:"6rem"}}>AirPods Pro</h1>   
    <h5 style={{color:"white",marginLeft:"10.5rem"}}>Rebuilt from the sound up.</h5>
    <div className='style-a-five'>
        <a href='#'>Learn more{">"}</a>
        <a href='#' style={{marginLeft:"1rem"}}>Buy{">"}</a>
    </div>
    <br/>
        <div >
      <img src={pagesixpartoneimg} className="pagesixpartoneimg-style" alt="firstPage" />
    </div>
    </div>

  )
}

export default Pagesixpartone
