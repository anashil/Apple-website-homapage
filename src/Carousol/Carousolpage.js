import image1 from "../img/carousel1.png";
import image2 from "../img/carousel2.png";
import image3 from "../img/carousel3.png";
import image4 from "../img/carousel4.png";
import image5 from "../img/carousel5.png";
import image7 from "../img/carousel7.png";
import image8 from "../img/carousel8.png";
import image9 from "../img/carousel9.png";
import image10 from "../img/carousel10.png";
import image11 from "../img/carousel11.png";

import Carousel from 'react-bootstrap/Carousel';

function IndividualInterval() {
  return (
    <Carousel style={{marginTop:"1.5rem"}}>
      <Carousel.Item interval={800}>
        <img
        
          src={image1} 
          alt="First slide"
          style={{marginBottom:"3rem",width:"100%"}}
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={800}>
        <img
          style={{marginBottom:"3rem",width:"100%"}}
          src={image2}
          alt="Second slide"
       
        />
        
      </Carousel.Item>
      <Carousel.Item interval={800}>
        <img
         
          src={image3}
          alt="Third slide"
          style={{marginBottom:"3rem",width:"100%"}}
        />
        
      </Carousel.Item>
      <Carousel.Item interval={800}> 
        <img
          
          src={image4}
          alt="Third slide"
          style={{marginBottom:"3rem",width:"100%"}}
        />
        
        
      </Carousel.Item>
      <Carousel.Item interval={800}>
        <img
    
          src={image5}
          alt="Third slide"
          style={{marginBottom:"3rem",width:"100%"}}
        />
        
        
      </Carousel.Item>
      <Carousel.Item interval={800}>
        <img
      
          src={image7}
          alt="Third slide"
          style={{marginBottom:"3rem",width:"100%"}}
        /></Carousel.Item>
        <Carousel.Item interval={800}>
        <img
         
          src={image8}
          alt="Third slide"
          style={{marginBottom:"3rem",width:"100%"}}
        />  
      </Carousel.Item>
      <Carousel.Item interval={800}>
        <img
          
          src={image9}
          alt="Third slide"
          style={{marginBottom:"3rem",width:"100%"}}
        />  
      </Carousel.Item>
      <Carousel.Item interval={800}>
        <img
          
          src={image10}
          alt="Third slide"
          style={{marginBottom:"3rem",width:"100%"}}
        />  
      </Carousel.Item>
      <Carousel.Item interval={800}>
        <img
        
          src={image11}
          alt="Third slide"
          style={{marginBottom:"3rem",width:"100%"}}
        />  
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualInterval;