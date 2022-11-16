import React from 'react';

const ReviewCart = ({ review }) => {
    const { userPhoto, userName, discription } = review;
    return (
        <div className='col-lg-12'>
            <div className="d-flex align-items-center justify-cotnent-center flex-wrap p-2">
                <div className="review-user me-3">
                    <img src={userPhoto} alt={userName} className='img-fluid rounded' style={{ height: '95px', width: '95px' }} />
                </div>
                <div className="review-des mt-2">
                    <h5 className='text-capitalize mb-2'>{userName}</h5>
                    <p className='rounded bg-danger text-light d-inline ps-1 pe-1'>Excellent course!</p>
                    <p className='mt-2'>{discription}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCart;