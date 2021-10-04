import React from 'react';
import pic1 from '../../images/b1.jpg';
import pic2 from '../../images/b2.jpg';
import pic3 from '../../images/b3.jpg';
import pic4 from '../../images/b4.jpg';
import pic5 from '../../images/b5.jpg';
import pic6 from '../../images/b6.jpg';

const Blog = () => {
    return (
        <div className="container">
            <h1 className="text-center mb-4"> Articles</h1>
            <div className="card mb-3 shadow">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={pic1} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Iceland’s volcano timelapse</h5>
                            <p className="card-text">The term minimalism is also used to describe a trend in design and architecture where in the subject is reduced to its n...</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            <button className="btn btn-secondary mt-4 ">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3 shadow">
                <div className="row g-0 ">
                    <div className="col-md-4">
                        <img src={pic2} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Iceland’s volcano timelapse</h5>
                            <p className="card-text">The term minimalism is also used to describe a trend in design and architecture where in the subject is reduced to its n...</p>
                            <p className="card-text"><small className="text-muted">Last updated 16 hours ago</small></p>
                            <button className="btn btn-secondary mt-4">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3 shadow">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={pic3} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Iceland’s volcano timelapse</h5>
                            <p className="card-text">The term minimalism is also used to describe a trend in design and architecture where in the subject is reduced to its n...</p>
                            <p className="card-text"><small className="text-muted">Last updated 2 days ago</small></p>
                            <button className="btn btn-secondary mt-4 ">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3 shadow">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={pic4} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Iceland’s volcano timelapse</h5>
                            <p className="card-text">The term minimalism is also used to describe a trend in design and architecture where in the subject is reduced to its n...</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 days ago</small></p>
                            <button className="btn btn-secondary mt-4 ">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3 shadow">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={pic5} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Iceland’s volcano timelapse</h5>
                            <p className="card-text">The term minimalism is also used to describe a trend in design and architecture where in the subject is reduced to its n...</p>
                            <p className="card-text"><small className="text-muted">Last updated 1 week ago</small></p>
                            <button className="btn btn-secondary mt-4 ">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3 shadow">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={pic6} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Iceland’s volcano timelapse</h5>
                            <p className="card-text">The term minimalism is also used to describe a trend in design and architecture where in the subject is reduced to its n...</p>
                            <p className="card-text"><small className="text-muted">Last updated 2 weeks ago</small></p>
                            <button className="btn btn-secondary mt-4 ">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;