import React from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const CourseAimation = () => {
    return (
        <div className="container">
            <div className="row gy-5">
                <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
                    <Skeleton count={8} />
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
                    <Skeleton count={8} />
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
                    <Skeleton count={8} />
                </div>
            </div>
        </div>
    );
};

export default CourseAimation;