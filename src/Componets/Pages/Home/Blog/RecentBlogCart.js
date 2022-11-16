import React from 'react';
import Zoom from 'react-reveal/Zoom';
import { useNavigate } from 'react-router-dom';


const RecentBlogCart = ({ singleBlog }) => {
    const { title, titlePhoto, _id } = singleBlog;


    const navigate = useNavigate();

    const handleDetaile = () => {
        navigate(`/blogDetails/${_id}`)
    }

    return (
        <div className='col-lg-12'>
            <Zoom>
                <div className="shadow-lg d-flex align-items-center">
                    <div className="blog-recent me-2">
                        <img src={titlePhoto} alt={title} className='img-fluid rounded' onClick={handleDetaile} style={{ height: '70px', width: '180px' }} />
                    </div>
                    <div className="blog-recent">
                        <h3 className='fw-bold fs-6 mt-2 mb-2' onClick={handleDetaile} style={{ cursor: 'pointer' }}>{title}</h3>
                    </div>
                </div>
            </Zoom>
        </div>
    );
};

export default RecentBlogCart;