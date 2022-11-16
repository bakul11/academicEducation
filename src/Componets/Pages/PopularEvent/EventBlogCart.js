import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Zoom from 'react-reveal/Zoom';
import { useNavigate } from 'react-router-dom';


const EventBlogCart = ({ singleBlog }) => {
    const { title, titlePhoto, _id, postTime } = singleBlog;


    const navigate = useNavigate();

    const handleDetaile = () => {
        navigate(`/blogDetails/${_id}`)
    }

    return (
        <div className='col-lg-12'>
            <Zoom>
                <div className="shadow-lg events-item d-flex bg-light p-2 rounded">
                    <div className="curse-logo me-2">
                        <img src={titlePhoto} alt={title} className='img-fluid rounded' onClick={handleDetaile} style={{ height: '120px', width: '220px' }} />
                    </div>
                    <div className="event-content">
                        <h3 className='fw-bold fs-5 mb-2' onClick={handleDetaile} style={{ cursor: 'pointer' }}>{title}</h3>
                        <h6 className='text-danger'><FontAwesomeIcon icon={faCalendar} /> Posted on {postTime}</h6>
                        <button className="btn btn-success mt-2" onClick={handleDetaile}>Joint Event</button>
                    </div>
                </div>
            </Zoom>
        </div>
    );
};

export default EventBlogCart;