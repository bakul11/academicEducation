import React, { useEffect, useState } from 'react';
import LightSpeed from 'react-reveal/LightSpeed';
import EventBlogCart from './EventBlogCart';

const EventBlog = () => {
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
        <div className='container'>
            <LightSpeed left>
                <div className="curse-title mb-5">
                    <h3 className='text-light fw-bold'>Latest Events</h3>
                    <p className='text-light'>Success isn’t really that difficult. There is a significant portion of the population</p>
                </div>
            </LightSpeed>
            <div className="curse">
                <div className="row gy-3">
                    {
                        blog?.map(singleBlog => <EventBlogCart singleBlog={singleBlog} key={singleBlog?._id} />)

                    }
                </div>
                <div className="loaading">
                    {
                        loadding ? <>
                            <span>Loadding Event...</span>
                        </> : ""
                    }
                </div>
            </div>
        </div>
    );
};

export default EventBlog;