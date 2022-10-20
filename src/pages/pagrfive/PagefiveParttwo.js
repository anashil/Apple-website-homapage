import React from 'react'
import './Pagefiveparttwo.css';
import itemfiveparttwo from "../../img/4th-img.png";
import applelogotwo from "../../img/apple-logo-new.png";
function PagefiveParttwo() {
  return (
    <div className='style-five-part-two'>
    <h2 style={{color:"white",marginLeft:"14rem",paddingTop:"4.3rem"}}><img src={applelogotwo} alt="firstPage" style={{marginBottom:".7rem"}}/> WATCH</h2>
    <div className='item-five-two'>
        <p style={{ color: "red",marginLeft:"17rem",fontWeight:"500" }}>SERIES 8</p>
        <p style={{ fontWeight: "500", fontSize: "1.5rem",color:"white",marginLeft:"11rem"}}>A healthy leap ahead.</p>
        <div className='a-item-five-two'>
            <a href='#' className='style-learn-more-five-two'> Learn more{">"} </a>
            <a href='#' className='style-learn-order-five-two' style={{marginLeft:"1.5rem"}}>Buy{">"}</a>
        </div>
    </div>
      <div className='img-style-five-part-two'>
                <img src={itemfiveparttwo} alt="firstPage" style={{ width: "25rem", height: "25rem" ,marginLeft:"6rem"}} />
            </div>
    </div>
  )
}

export default PagefiveParttwo
