import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';


const slideImages = [
    {
        url: '../../Images/breakfast/breakfast1.png',
        caption: 'Slide 1'
    },
    {
        url: '../../Images/2e123c1ab1e31167e08ac8a52daa377a.png',
        caption: 'Slide 2'
    },
    {
        url: '/img/breakfast3.png',
        caption: 'Slide 3'
    },
];

const Slideshow = () => {
    return (
        <div className="slide-container">
            <Slide>
                {slideImages.map((slideImage, index) => (
                    <div className="each-slide" key={index}>
                        <div style={{ 'backgroundImage': `url(${slideImage?.url})` }}>
                            <span>{slideImage.caption}</span>
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    )
}

export default Slideshow;