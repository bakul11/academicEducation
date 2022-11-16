import { faHandPointRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './EventCart.css'
import Zoom from 'react-reveal/Zoom';
import { useState } from 'react';



const EventCart = ({ event }) => {
    const { title, discription, eventLogo, background } = event;
    const [showEvent, setShowEvent] = useState(false);

    return (
        <div className={`col-lg-6 col-md-12 com-sm-12 col-12 event-item d-flex align-items-center p-5 event-${background}`}>
            <Zoom>
                <div className="event-logo">
                    <div className="subLogo bg-light rounded-pill position-relative" style={{ height: '130px', width: '130px' }}>
                        <FontAwesomeIcon icon={eventLogo} className='text-center position-absolute top-50 start-50 translate-middle' size='5x' />
                    </div>
                </div>
                <div className="event-dis ms-3">
                    <h3 className='fw-bold text-light'>{title}</h3>
                    <p className='text-light mt-2 mb-2'>{showEvent ? discription : discription.slice(0, 130)}</p>
                    <button className="btn btn-light" style={{ fontWeight: '500' }} onClick={() => setShowEvent(!showEvent)}>{showEvent ? <span>Show Less</span> : <span>Read More</span>}<FontAwesomeIcon icon={faHandPointRight} className='ms-2' /></button>
                </div>
            </Zoom>

        </div>
    );
};

export default EventCart;