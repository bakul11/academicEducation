import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Zoom from 'react-reveal/Zoom';
import { useNavigate } from 'react-router-dom';


const BlogCart = ({ singleBlog }) => {
    const { title, titlePhoto, _id, postTime, userProfile, userName } = singleBlog;


    const navigate = useNavigate();

    const handleDetaile = () => {
        navigate(`/blogDetails/${_id}`)
    }

    return (
        <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
            <Zoom>
                <div className="shadow-lg course-item">
                    <div className="curse-logo">
                        <img src={titlePhoto} alt={title} className='img-fluid' onClick={handleDetaile} />
                    </div>
                    <div className="course-content p-3">
                        <h3 className='fw-bold fs-5 mt-2 mb-3' onClick={handleDetaile} style={{ cursor: 'pointer' }}>{title}</h3>
                        <h6 className='text-danger'><FontAwesomeIcon icon={faCalendar} /> Posted on {postTime}</h6>
                    </div>
                    <div className="blog-pro ps-3 pe-3 pb-3">
                        <p> <img src={userProfile} alt={userName} className='img-fluid rounded-pill' style={{ height: '50px', width: '50px' }} /> <span className='text-capitalize ms-2' style={{ fontWeight: '500' }}>{userName}</span></p>
                    </div>
                </div>
            </Zoom>
        </div>
    );
};

export default BlogCart;