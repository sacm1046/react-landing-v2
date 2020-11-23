import React from 'react';

const Card = ({ src, title, description, colorButton } ) => {

    return (
        <div className="col-12 col-md-6 col-lg-4 mb-3 mb-lg-0">
            <div className="card">
                <img src={src} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-center">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href="#" className={`btn btn-${colorButton} btn-block`}>+ Info</a>
                </div>
            </div>
        </div>
    )
}

export default Card;
