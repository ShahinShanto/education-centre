import React, { useEffect, useState } from 'react';
import HeaderPhoto from '../../images/Pic1-01.png';
import LatestCourse from '../LatestCourse/LatestCourse';
import './Home.css';
const Home = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('./CourseData.JSON')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])
    return (
        <div className="container-fluid mb-5 radious">
            <div className="py-5 bg">
                <div className="row d-flex align-items-center d-flex justify-content-center text-white px-3">
                    <div className="col-lg-6">
                        <h1 >Start learning with our experts and give a new way to your career.</h1>
                        <h5 className="py-4">From a wide range of courses, you can select the best one for you.
                        </h5>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-light" type="submit">Search</button>
                        </form>
                    </div>

                    <div className="col-lg-6 align-items-center justify-content-center">
                        <img className="img-fluid img2" src={HeaderPhoto} alt="" />
                    </div>
                </div>
            </div>
            <section className="container">
                <h1 className="text-center mt-5"> Feature Courses</h1>
                <div className="row row-cols-1 row-cols-md-3 g-3">

                    {
                        courses.slice(0, 6).map(data => <LatestCourse key={data.key} data={data}></LatestCourse>)
                    }
                </div>
            </section>
        </div>
    );
};

export default Home;