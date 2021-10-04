import React from 'react';
import './Services.css'

const Services = (props) => {
    const { instructor, description, price, rating, duration, img } = props.data;
    console.log(props.data);
    return (
        <div className="">
            <div className="col">
                <div className="card brdr shadow ">
                    <img src={img} className="card-img-top p-3" style={{ height: '15rem' }} alt="..." />
                    <div className="card-body">
                        <h4 className="card-title">{description}</h4>
                        <h5 className="card-text">By- {instructor}</h5>
                        <p className="card-text">Duration: {duration}</p>
                        <div className="d-flex justify-content-between">
                            <p className="card-text">Rating: <i className="fas fa-star"></i> {rating}</p>
                            <p className="card-text">Price: ${price}</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <button className="btn btn-secondary ">Add to Cart</button>
                            <button className="btn btn-primary ">Course Details</button>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    );
};

export default Services;