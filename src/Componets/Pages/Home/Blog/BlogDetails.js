import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Slide } from 'react-reveal';
import RecentBlog from './RecentBlog';


const BlogDetails = () => {
    const [blog, setBlog] = useState({});
    const [loadding, setlodding] = useState(true);
    const { id } = useParams();


    useEffect(() => {
        fetch(`https://academic-education.onrender.com/blog/getSingleBlog/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data?.success) {
                    setBlog(data?.singlBlogid);
                    setlodding(false);
                }
            })
            .catch(err => {
                setlodding(true)
            })
    }, [id])



    return (
        <section style={{ marginTop: "10px" }}>
            {
                loadding ? <>
                    <div class="d-flex justify-content-center" style={{ marginTop: "100px" }}>
                        <div class="spinner-grow text-primary" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-grow text-secondary" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-grow text-success" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-grow text-danger" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-grow text-warning" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-grow text-info" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-grow text-dark" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </> :
                    <div className='container-fluid p-0 m-0'>
                        <div className="blog-detail position-relative">
                            <div className="logo-top">
                                <img src={blog?.titlePhoto} alt={blog?.title} className='img-fluid w-100 d-block' style={{ height: '400px' }} />
                            </div>
                            <div className="logo-title-top position-absolute top-50 start-50 translate-middle">
                                <h3 className='fw-bold mb-3 fs-2 text-light logo-title'>{blog?.title}</h3>
                            </div>
                        </div>
                        <div className='container' style={{ marginTop: "120px", marginBottom: "110px" }}>
                            <div className="row gy-5">
                                <div className="col-lg-7 col-md-12 col-sm-12 col-12">
                                    <Slide left>
                                        <div className="blog-profile d-flex align-items-center shadow-sm p-2 rounded">
                                            <div className="logo-blog me-2">
                                                <img src={blog?.userProfile} alt={blog?.userName} style={{ height: '50px', width: '50px' }} className='img-fluid rounded-pill' />
                                            </div>
                                            <div className="blog-title">
                                                <h5 className='fw-bold fs-6'>{blog?.userName}</h5>
                                                <p>Posted on  {blog?.postTime}</p>
                                            </div>
                                        </div>
                                        <div className="shadow p-2 rounded mb-2">
                                            <div className="logo">
                                                <h3 className='fw-bold mb-3 fs-3 mt-2'>{blog?.title}</h3>
                                                <img src={blog?.titlePhoto} alt={blog?.title} style={{ borderRadius: '10px', height: '430px', width: '640px' }} className='img-fluid' />
                                                <h4 className='mt-3 mb-2 fw-bold'>Blog Description</h4>
                                                <p>{blog?.discrition}</p>
                                            </div>
                                        </div>
                                    </Slide>
                                </div>
                                <div className="col-lg-4 offset-lg-1 col-md-12 col-sm-12 col-12">
                                    <Slide right>
                                        <div className="blog-sec">
                                            <RecentBlog />
                                        </div>
                                    </Slide>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </section>
    );
};

export default BlogDetails;