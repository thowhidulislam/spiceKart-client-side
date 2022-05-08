import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import spicesBanner1 from '../../../src/images/spices-banner-1.png'
import spicesBanner2 from '../../../src/images/spices-banner-2.png'
import spicesBanner3 from '../../../src/images/spices-banner-3.png'
import './Slider.css'

const Slider = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }
    return (
        <div className='slider-home' >
            <Carousel activeIndex={index} onSelect={handleSelect} >
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={spicesBanner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>100% Original Products</h3>
                        <p>10% Off On Spices</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-50"
                        src={spicesBanner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>All Organic Spices</h3>
                        <p>30% Off On All Products</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={spicesBanner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>The Choice of Chefs</h3>
                        <p>15% Off On Spices</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;