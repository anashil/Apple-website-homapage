import React from 'react';
import page from '../../img/FirstImg.png';
import './Pageone.css';


function PageOne() {
  return (
    <>
    <h1 className='style-iPhone'>iPhone 14</h1>
    <p className='style-Big-and-bigger'>Big and bigger.</p>
    <div className='style-link'>
    <a href='#' className='style-learn-more'> Learn more {">"} </a>
    <a href='#' className='style-learn-buy'>Buy {">"}</a>
    </div>
    <div className='img-style'>
      <img src={page} alt="firstPage" />
    </div>
    </>
  )
}

export default PageOne
