import React from 'react'
import './pagefivePartone.css'
import itemfivepartone from "../../img/3rd-img.png";
import applelogo from "../../img/apple-logo.png";

function PagefivePartOne() {
    return (
        <div className='style-five-part-one'>
            <h2 ><img src={applelogo} alt="firstPage" style={{ marginLeft: "19rem",marginBottom:"1rem"}} /> WATCH</h2>
            <div className='item-five'>
                <p style={{ color: "red",marginLeft:"4rem",fontWeight:"600" }}>ULTRA</p>
                <p style={{ fontWeight: "500", fontSize: "1.5rem"}}>Adventure awaits</p>
                <div className='a-item-five'>
                    <a href='#' className='style-learn-more-five'> Learn more{">"} </a>
                    <a href='#' className='style-learn-order-five' style={{marginLeft:"1.5rem"}}>Buy{">"}</a>
                </div>
            </div>
            <div className='img-style-five-part-one'>
                <img src={itemfivepartone} alt="firstPage" style={{ width: "41rem", height: "15rem" }} />
            </div>
        </div>
    )
}

export default PagefivePartOne
