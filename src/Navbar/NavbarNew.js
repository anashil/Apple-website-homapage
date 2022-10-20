import React from 'react'
import "./Navbar.css";
import applelogonavbar from "../img/apple-logo-new.png";
import miniNav from "../img/mini-nav.png";
import search from "../img/search-nav.png";
function NavbarNew() {
  return (
    <div style={{position:"sticky"}}>
    <div className='nav-menu'>
      <img src={applelogonavbar} style={{width:"1.4rem",height:"2rem",marginTop:".5rem"}}/>
      <p>Store</p>
      <p>Mac</p>
      <p>iPad</p>
      <p>iPhone</p>
      <p>Watch</p>
      <p>AirPods</p>
      <p>TV & Home</p>
      <p>Only on Apple</p>
      <p>Accessories</p>
      <p>Support</p>
      <img src={miniNav} style={{width:"1.4rem",height:"1.5rem",marginTop:".8rem",marginLeft:"1.4rem"}}/>
      <img src={search} style={{width:"1.4rem",height:"2rem",marginTop:".7rem",marginLeft:"1.4rem"}}/>
      </div>
      </div>

  )
}

export default NavbarNew;
