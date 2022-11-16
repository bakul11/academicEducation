import React from 'react';
import PopularEvent from '../PopularEvent/PopularEvent';

const EventPages = () => {
    return (
        <div className='sub-event' style={{ marginTop: '130px' }}>
            <div className="event-title-sb text-center mb-5">
                <h3 className='fw-bold'>Our Polular Events</h3>
                <p>Please Joint To our Events</p>
            </div>
            <PopularEvent />
        </div>
    );
};

export default EventPages;