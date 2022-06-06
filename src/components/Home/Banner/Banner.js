import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    const imgsone = 'https://i.ibb.co/TvDBKqH/kat-sazonova-i8-DMKt-Myf-WM-unsplash.jpg'; const imgstwo = 'https://i.ibb.co/XYp6b6z/kat-sazonova-4-ORys-Ij-H-m-Y-unsplash.jpg'
    const imgsthree = 'https://i.ibb.co/Mn8P2YC/egor-myznik-GKLm-Vfc-Xl0o-unsplash.jpg'
    return (
        <>

            <Carousel fade>
                <Carousel.Item className='bannermargin'>
                    <img
                        className="d-block w-100 "
                        src={imgsone}
                        alt="First slide"
                    />
                    <Carousel.Caption className='bannerAnimation'>
                        <h3 >First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={imgstwo}
                        alt="Second slide"
                    />

                    <Carousel.Caption className='bannerAnimation'>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={imgsthree}
                        alt="Third slide"
                    />

                    <Carousel.Caption className='bannerAnimation'>
                        <h3 >Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;