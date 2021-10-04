import React, { useEffect, useState } from 'react';
import Services from '../Services/Services';

const FeatureCourse = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('./CourseData.JSON')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])

    return (
        <div>
            <div className="container">
                <h1 className="text-center mb-5">Get Choice of Your Course</h1>
                <div className="row row-cols-1 row-cols-md-3 g-4">

                    {
                        courses.map(data => <Services key={data.key} data={data}></Services>)
                    }
                </div>
            </div>

        </div>
    );
};

export default FeatureCourse;