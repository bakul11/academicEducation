import { faBookOpen, faTrophy } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import EventCart from './EventCart';

const eventData = [
    {
        title: 'Prize Giving Ceremony',
        discription: 'We all carry a lot of baggage, thanks to our upbringing. The majority of people carry with them, an entire series of self-limiting beliefs that will absolutely stop, and hold them back from, success.',
        eventLogo: faTrophy,
        background: "primary"
    },
    {
        title: 'E-Learning Program',
        discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora a, omnis minima deserunt autem quas dolorem accusamus ratione quod reprehenderit facilis non perspiciatis? Illo labore magni quasi quia dicta',
        eventLogo: faBookOpen,
        background: "danger"
    }
]

const Event = () => {
    return (
        <div className='container-fluid' style={{ marginTop: '100px', marginBottom: '100px' }}>
            <div className="event-sec">
                <div className="row">
                    {
                        eventData?.map(event => <EventCart event={event} key={event?.title} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Event;