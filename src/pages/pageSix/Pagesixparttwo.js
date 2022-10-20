import React from 'react'
import imagefivetwo from "../../img/9th-pic.png"
import applelogo from "../../img/apple-logo.png";
import "./Pagesixparttwo.css";

function Pagesixparttwo() {
  return (
    <div className='pagesixparttwo-style'>
        <h1 style={{marginLeft:"15rem"}}><img src={applelogo} style={{marginBottom:"1rem"}} alt="firstPage" />
 Card</h1>
 <p style={{fontSize:"1.2rem",marginLeft:"12rem"}}>Get up to 3% Daily Cash back</p>
 <p style={{fontSize:"1.2rem",marginLeft:"15rem"}}> with every purchase.</p>
 <div className='style-a-five-two'>
        <a href='#'>Learn more{">"}</a>
        <a href='#' style={{marginLeft:"1rem"}}>Buy{">"}</a>
    </div>
       <div >
      <img src={imagefivetwo}  className="pagesixparttwoimg-style" alt="firstPage" />
    </div>
    </div>
  )
}

export default Pagesixparttwo
