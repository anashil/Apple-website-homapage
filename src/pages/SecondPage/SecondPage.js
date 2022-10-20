import React from 'react'
import Second from '../../img/new-3rd.png';
import mini from '../../img/new-2.png';
import './Secondpage.css';
function SecondPage() {
  return (
    <div className='style-2nd'>
        <div className='items-style'>
        <h1 className='style-iphone'>iPad Pro</h1>
        <h5 className='mini'>Supercharged by <img src={mini} alt="firstPage" /></h5>
        <h6 className='style-available-second'>Available starting 10.26</h6>
        <div className='a-item'>       
        <a href='#' className='style-learn-more'> Learn more {">"} </a>
        <a href='#' className='style-learn-order'>Order now {">"}</a>
        </div>

        </div>
        <div className='img-style'>
      <img src={Second} alt="firstPage" />
      </div>
    </div>
  )
}

export default SecondPage
