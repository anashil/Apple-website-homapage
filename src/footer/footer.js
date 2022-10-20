import { FooterMenu, FooterMenu5th } from "./footermenu"; 
import {FooterMenu2nd} from "./footermenu";
import { FooterMenu3rd } from "./footermenu";
import { FooterMenu4th } from "./footermenu";
import copyright from "../img/copyright.png";
import './footer.css'
import React from 'react'

function Footer() {
  return (
    <>
    <div className="footer-style">
        <div>
      {FooterMenu.map((item,index)=>{
        return (
            <p key={index}><a href={item.link} className={item.cName} id={item.cId}>{item.title}</a></p>
        )
      })}</div>
      <div style={{marginLeft:"4rem"}}>
      {FooterMenu2nd.map((item,index)=>{
        return (
            <p key={index}><a href={item.link} className={item.cName} id={item.cId}>{item.title}</a></p>
        )
      })}
      </div>
      <div style={{marginLeft:"4rem"}}>
      {FooterMenu3rd.map((item,index)=>{
        return (
            <p key={index}><a href={item.link} className={item.cName} id={item.cId}>{item.title}</a></p>
        )
      })}
      </div>
      <div style={{marginLeft:"4rem"}}>
      {FooterMenu4th.map((item,index)=>{
        return (
            <p key={index}><a href={item.link} className={item.cName} id={item.cId}>{item.title}</a></p>
        )
      })}
      </div>
      <div style={{marginLeft:"4rem"}}>
      {FooterMenu5th.map((item,index)=>{
        return (
            <p key={index}><a href={item.link} className={item.cName} id={item.cId}>{item.title}</a></p>
        )
      })}
      </div>
      
    </div>

    <div style={{marginLeft:"5rem",fontSize:"14px",borderBottom:"1px solid black"}}><p>More ways to shop. <span style={{color:"blue"}}>Find an Apple Store or other retailer</span> near you.Or call 1-800-MY-APPLE</p>
    </div>
    <div style={{marginLeft:"5rem",marginTop:".5rem",marginBottom:"1rem",fontSize:"14px"}}>Copyright <img src={copyright} style={{marginRight:".5rem",marginLeft:".5rem"}} /><span style={{marginRight:"4rem"}}>2022 Apple Inc. All rights reserved.   </span>   <span style={{borderRight:".5px solid black",paddingRight:"1rem"}}>Privacy Policy</span><span style={{borderRight:".5px solid black",paddingRight:"1rem",paddingLeft:"1rem"}}>Terms of Use</span><span style={{borderRight:".5px solid black",paddingRight:"1rem",paddingLeft:"1rem"}}>Sales and Refunds</span><span style={{borderRight:".5px solid black",paddingRight:"1rem",paddingLeft:"1rem"}}>Legal</span><span style={{marginRight:"8rem",paddingLeft:"1rem"}}>Site Map</span>United States</div>
    </>
  )
}

export default Footer
