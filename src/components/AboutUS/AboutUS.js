import React from 'react';
import Client1 from '../../images/user-1.png';
import Client2 from '../../images/user-2.png';
import Client3 from '../../images/user-3.png';
import AboutUSPic from '../../images/1.png';
import './AboutUS.css';

const AboutUS = () => {
    return (
        <div>
            <div className="container-fluid mb-5 radious">
                <div className="py-5 bg">
                    <div className="row d-flex align-items-center d-flex justify-content-center text-white px-3">
                        <div className="col-lg-6 ps-5">
                            <h1 >ABOUT US</h1>
                            <p className="py-4 ">Come with us, we also teach children about the basic values of human beings as honesty, kindness, generosity, courage, freedom, equality and respect. Learn to celebrate diversity in a spirit of understanding and tolerance and develop a positive regard and awareness of other people. They are taught the values and responsibilities needed to become active members of the community...
                            </p>
                        </div>

                        <div className="col-lg-6 align-items-center justify-content-center">
                            <img className="img-fluid img2" src={AboutUSPic} alt="" />
                        </div>
                    </div>
                </div>
                <div className="container text-center">
                    <h1 className="fw-bolder my-5">What our students have to say</h1>
                    <div className="row row-cols-1 row-cols-md-3 pb-5 g-4 ">
                        <div className="col ">
                            <div className="card h-100 text-center shadow brdr">
                                <div className="text-center px-5 pt-5 pb-2 ">
                                    <img src={Client1} className="card-img-top img-width " alt="..." />
                                </div>
                                <div className="card-body fw-bold">
                                    <p className="card-text text-secondary px-4 fw-light">I like their courses. Learned lot of things.
                                    </p>
                                    <div className="pb-3">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star-half-alt"></i>
                                    </div>
                                    <p className="card-text text-primary">Shahin
                                    </p>
                                    <p className="card-text pb-4">Graphic Designer
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 text-center shadow brdr">
                                <div className="text-center px-5 pt-5 pb-2">
                                    <img src={Client2} className="card-img-top img-width " alt="..." />
                                </div>
                                <div className="card-body fw-bold">
                                    <p className="card-text text-secondary px-4 fw-light"> Their courses
                                        are top-notch. I am very happy with their service.
                                    </p>
                                    <div className="pb-3">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </div>
                                    <p className="card-text text-primary">Nauroz
                                    </p>
                                    <p className="card-text pb-4">Engineer
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 text-center shadow brdr">
                                <div className="text-center px-5 pt-5 pb-2">
                                    <img src={Client3} className="card-img-top img-width " alt="..." />
                                </div>
                                <div className="card-body fw-bold">
                                    <p className="card-text text-secondary px-4 fw-light">I am so happy with their service. I recommend their courses.
                                    </p>
                                    <div className="pb-3">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star-half-alt"></i>
                                        <i className="far fa-star"></i>
                                    </div>
                                    <p className="card-text text-primary">Tahsin Rafi
                                    </p>
                                    <p className="card-text pb-4">Businessman
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="flex1 card2">
                    <div className="text-center">
                        <i className="fas fa-graduation-cap icon"></i>
                        <h1 className="text-followers">96%</h1>
                        <h4 className="text-followers2">Graduates</h4>
                    </div>
                    <div className="text-center">
                        <i className="fas fa-chalkboard-teacher icon"></i>
                        <h1 className="text-followers">30+</h1>
                        <h4 className="text-followers2"> Instructors</h4>
                    </div>
                    <div className="text-center">
                        <i className="fas fa-user-graduate icon"></i>
                        <h1 className="text-followers">5948</h1>
                        <h4 className="text-followers2">Students</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUS;