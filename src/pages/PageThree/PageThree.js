import React from 'react';
import './PageThree.css';
import item from '../../img/first-new.png';

function PageThree() {
  return (
    <>
    <div className='style-item'>
      <div className='img-style'>
      <img src={item} alt="firstPage"  style={{marginLeft:"6rem"}}/>
    </div>
    <h1 className='style-ipad'>iPad</h1>
    <p className='style-lovable'>Lovable, Drawable, Magical.</p>
    <p className='style-available'>Available starting 10.26</p>
    <div className='style-link1'>
    <a href='#'>Learn more{">"}</a>
    <a href='#' style={{marginLeft:"2rem"}}> {" "} Order Now{">"}</a>
    </div>
    </div>
    </>
  )
}

export default PageThree
