import React from 'react';
import {Carousel} from 'react-bootstrap';
import beach from './beach.JPEG'
import './style.css'
import mount from './mounts.jpg'
import greece from './greece.jpg'
// import logo from 'park.jpg'
 
// const MyCarousel = () => {

class MyCarousel extends React.Component {

render () {  
return (
    <Carousel>
  <Carousel.Item>
    <img
      className="pic d-block"
      src= {greece}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="pic d-block"
      src= {mount}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="pic d-block"
      src= {beach}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
)
}
}

export default MyCarousel;
