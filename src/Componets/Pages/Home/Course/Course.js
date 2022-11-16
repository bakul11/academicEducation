import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CourseCart from './CourseCart';
import LightSpeed from 'react-reveal/LightSpeed';
import CourseAimation from '../../../Animation/CourseAimation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons';

const Course = () => {
    const [course, setCourse] = useState([]);
    const [loadding, setlodding] = useState(true);
    const [showCourse, setShowCourse] = useState(false);


    useEffect(() => {
        fetch('http://localhost:5000/course/getCourse')
            .then(res => res.json())
            .then(data => {
                if (data?.success) {
                    setCourse(data?.getAllCourse);
                    setlodding(false);
                }
            })
            .catch(err => {
                setlodding(true)
            })
    }, [course])


    return (
        <div className='container' style={{ marginTop: "120px", marginBottom: "110px" }}>
            <LightSpeed left>
                <div className="curse-title text-center mb-5">
                    <h3 className='fw-bold'>Our Popular Courses</h3>
                </div>
            </LightSpeed>
            <div className="curse">
                <div className="row gy-5">
                    {
                        showCourse ? <h3 className='text-center mt-3 mb-3 fw-bold text-danger'>No course available in this moments!</h3> : course?.map(singleCourse => <CourseCart singleCourse={singleCourse} key={singleCourse?._id} />)

                    }
                </div>
                <div className="showCourse text-center mt-3">
                    <button className="btn btn-success" onClick={() => setShowCourse(!showCourse)}>See All Popular Courses <FontAwesomeIcon icon={faHandPointRight} className='ms-2' /></button>
                </div>
                <div className="loaading">
                    {
                        loadding ? <>
                            <CourseAimation />
                            <div className="mt-5 mb-5"></div>
                            <CourseAimation />
                        </> : ""
                    }
                </div>
            </div>
        </div>
    );
};

export default Course;