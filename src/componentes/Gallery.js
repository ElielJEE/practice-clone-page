import React,{ useState } from 'react';
import { SliderData } from './SliderData';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './Gallery.css';


const Gallery = ({ slides }) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length
    let leftSum = 0
    
    const nextImage = () => {
        const container = document.getElementById('container');
        setCurrent(current === length - 1 ? 0 : current + 1)
        container.style.transition = '.5s ease all'
        container.style.transform = `translateX(${current === length - 1 ? 20 : 20 - (60 * (current + 1))}%)`
    }
    
    const prevImage = () => {
        const container = document.getElementById('container');
        setCurrent(current === 0 ? length - 1 : current - 1)
        container.style.transform = `translateX(${current === 0 ? 20 - (60 * (length - 1)) : 20 - (60 * (current - 1))}%)`
    }

    console.log(current)

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null
    }

    return (
        <div className="gallery-container">
            <div className="header-gallery">
                <h1>Gallery</h1>
                <hr className="small"/>
            </div>
            <section className="slider">
                <FiChevronLeft className="left-arrow" onClick={prevImage}/>
                <FiChevronRight className="right-arrow" onClick={nextImage}/>
                <div className="slides-content">
                    <div className="slides" id="container">
                        {SliderData.map((slide, index) => {
                            return (
                                <div className={index === current ? 'slide active' : 'slide'} style={{left: `${index > 0 ? leftSum = leftSum + (0 + 60) : 0}%`}} key={index}>
                                    <img src={slide.image} alt="slide-img" className="image"/>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Gallery;