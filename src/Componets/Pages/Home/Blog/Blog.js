import React, { useEffect, useState } from 'react';
import LightSpeed from 'react-reveal/LightSpeed';
import CourseAimation from '../../../Animation/CourseAimation';
import BlogCart from './BlogCart';

const Blog = () => {
    const [blog, setBlog] = useState([]);
    const [loadding, setlodding] = useState(true);




    useEffect(() => {
        fetch('http://localhost:5000/blog/getAllBlog')
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
                <div className="curse-title text-center mb-5">
                    <h3 className='fw-bold'>Latest Articles</h3>
                    <p>Check out our latest blog posts, articles, client success stories and essential announcement</p>
                </div>
            </LightSpeed>
            <div className="curse">
                <div className="row gy-5">
                    {
                        blog?.map(singleBlog => <BlogCart singleBlog={singleBlog} key={singleBlog?._id} />)

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
        </div>
    );
};

export default Blog;