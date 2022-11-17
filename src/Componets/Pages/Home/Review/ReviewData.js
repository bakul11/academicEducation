import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ReviewCart from './ReviewCart';

const ReviewData = ({ id }) => {
    const [review, setReview] = useState([]);

    //get all review 
    useEffect(() => {
        fetch(`https://academic-education.onrender.com/review/getAllReview/${id}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(result => {
                if (result?.success) {
                    setReview(result?.reviewData)
                }
            })
    }, [review])

    return (
        <div>
            {/* ===============show Review============== */}
            <div className="review">
                <div className="row gy-3">
                    {
                        review?.length === 0 ? <span>No Review...</span> : review?.map(review => <ReviewCart review={review} key={review?._id} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default ReviewData;