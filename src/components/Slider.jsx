import React from 'react'
import { Carousel } from 'react-bootstrap'

export default function Slider() {
    return (
        <>
            <Carousel style={{"height": "600px"}}>
                <Carousel.Item style={{"height": "600px"}}>
                    <img 
                    src="https://i.pinimg.com/564x/ab/a8/40/aba84049818f9e61a1c7982cefa0403a.jpg" 
                    alt="carousel-img" 
                    className='d-block w-100'
                    />
                <Carousel.Caption>
                    <h3>Web Developer Blog</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{"height": "600px"}}>
                    <img 
                    src="https://i.pinimg.com/564x/31/3d/66/313d66494fc822eaeba8bdaa4a5190cd.jpg" 
                    alt="carousel-img" 
                    className='d-block w-100'
                    />
                <Carousel.Caption>
                    <h3>Web Developer Blog</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{"height": "600px"}}>
                    <img 
                    src="https://i.pinimg.com/564x/4f/c6/69/4fc669ff44221bea3761cdeaaa4468a9.jpg" 
                    alt="carousel-img" 
                    className='d-block w-100'
                    />
                <Carousel.Caption>
                    <h3>Web Developer Blog</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            
        </>
    )
}
