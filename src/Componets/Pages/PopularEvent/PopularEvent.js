import React from 'react';
import EventBlog from './EventBlog';
import EventRegister from './EventRegister';
import './PopularEvent.css'

const PopularEvent = () => {
    return (
        <div className='mainEvent'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-5 col-sm-12 col-12">
                        <EventRegister />
                    </div>
                    <div className="col-lg-6 col-md-7 col-sm-12 col-12">
                        <EventBlog />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularEvent;