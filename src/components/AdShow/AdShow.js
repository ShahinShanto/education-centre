import React from 'react';
import HeaderPhoto from '../../images/Pic1-01.png';
import './AdShow.css';
const AdShow = () => {
    return (
        <div className="container-fluid bg mb-5 radious">
            <div className="py-5">
                <div class="row d-flex align-items-center d-flex justify-content-center text-white px-3">
                    <div class="col-lg-6">
                        <h1 >Start learning with our experts and give a new way to your career.</h1>
                        <h5 className="py-4">From a wide range of courses, you can select the best one for you.
                        </h5>
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-light" type="submit">Search</button>
                        </form>
                    </div>

                    <div class="col-lg-6 align-items-center justify-content-center">
                        <img className="img-fluid img2" src={HeaderPhoto} alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AdShow;