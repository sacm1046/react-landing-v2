import React from 'react';
import FirstSlider from '../static/bici1.jpg';
import SecondSlider from '../static/bici2.jpg';

const Slider = () => {
    return (
        <div id="carousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={FirstSlider} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={SecondSlider} className="d-block w-100" alt="..." />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}

export default Slider
