import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import LightSpeed from 'react-reveal/LightSpeed';
import CourseAimation from '../../../Animation/CourseAimation';
import BlogCart from './BlogCart';
import RecentBlogCart from './RecentBlogCart';

const RecentBlog = () => {
    const [blog, setBlog] = useState([]);
    const [loadding, setlodding] = useState(true);




    useEffect(() => {
        fetch('https://academic-education.onrender.com/blog/getAllBlog')
            .then(res => res.json())
            .then(data => {
                if (data?.success) {
                    setBlog(data?.getALlBlog);
                    setlodding(false);
                }
            })
            .catch(err => {
                setlodding(true)
            })
    }, [blog])


    return (
        <div className='container' style={{ marginTop: "120px", marginBottom: "110px" }}>
            <LightSpeed left>
                <div className="curse-title mb-5">
                    <h3 className='fw-bold'>Recent Blog</h3>
                </div>
            </LightSpeed>
            <div className="curse">
                <div className="row gy-3">
                    {
                        blog?.map(singleBlog => <RecentBlogCart singleBlog={singleBlog} key={singleBlog?._id} />)

                    }
                </div>
                <div className="loaading">
                    {
                        loadding ? <>
                            <CourseAimation />
                        </> : ""
                    }
                </div>
            </div>

            <div className="floow-us mt-5">
                <hr />
                <div className="blog-social">
                    <h3 className='mb-3 fs-4 fw-bold'>Follow Us</h3>
                    <ul className='d-flex align-items-center justify-content-between w-50'>
                        <li><a href="#" target="_blank" ><FontAwesomeIcon icon={faFacebook} className='text-dark fs-4' /></a></li>
                        <li><a href="#" target="_blank" ><FontAwesomeIcon icon={faTwitter} className='text-dark fs-4' /></a></li>
                        <li><a href="#" target="_blank" ><FontAwesomeIcon icon={faLinkedin} className='text-dark fs-4' /></a></li>
                        <li><a href="#" target="_blank" ><FontAwesomeIcon icon={faInstagram} className='text-dark fs-4' /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default RecentBlog;