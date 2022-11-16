import { faBookOpen, faStar, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './CourseCart.css'
import Zoom from 'react-reveal/Zoom';
import { useNavigate } from 'react-router-dom';


const CourseCart = ({ singleCourse }) => {
    const { title, price, oldPrice, userName, userPhoto, rating, student, lesson, headPhoto, _id } = singleCourse;


    const navigate = useNavigate();

    const handleDetaile = () => {
        navigate(`/courseDetails/${_id}`)
    }

    return (
        <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
            <Zoom>
                <div className="shadow-lg course-item">
                    <div className="curse-logo">
                        <img src={headPhoto} alt={title} className='img-fluid' onClick={handleDetaile} />
                    </div>
                    <div className="course-content p-3">
                        <div className="user-pro">
                            <p> <img src={userPhoto} alt={userName} className='img-fluid' /> <span className='text-capitalize ms-2' style={{ fontWeight: '500' }}>{userName}</span></p>
                        </div>
                        <h3 className='fw-bold fs-5 mt-2 mb-2' onClick={handleDetaile} style={{ cursor: 'pointer' }}>{title}</h3>
                        <p>{

                            rating === 1 ? <>
                                <FontAwesomeIcon icon={faStar} className='text-warning' />
                                <FontAwesomeIcon icon={faStar} className='text-warning' />
                                <FontAwesomeIcon icon={faStar} className='text-warning' />
                                <FontAwesomeIcon icon={faStar} className='text-warning' />
                                <FontAwesomeIcon icon={faStar} className='text-secondary' />
                            </> : rating === 4 ? <>
                                <FontAwesomeIcon icon={faStar} className='text-warning' />
                                <FontAwesomeIcon icon={faStar} className='text-warning' />
                                <FontAwesomeIcon icon={faStar} className='text-warning' />
                                <FontAwesomeIcon icon={faStar} className='text-secondary' />
                                <FontAwesomeIcon icon={faStar} className='text-secondary' />
                            </> : rating === 2 ? <>
                                <FontAwesomeIcon icon={faStar} className='text-warning' />
                                <FontAwesomeIcon icon={faStar} className='text-warning' />
                                <FontAwesomeIcon icon={faStar} className='text-secondary' />
                                <FontAwesomeIcon icon={faStar} className='text-secondary' />
                                <FontAwesomeIcon icon={faStar} className='text-secondary' />
                            </> : ""

                        }</p>
                        <div className="extra-cointent-course d-flex align-items-center justify-content-between mt-2">
                            <div className="student">
                                <p className='text-secondary'><FontAwesomeIcon icon={faUser} /> {student} students</p>
                            </div>
                            <div className="student">
                                <p className='text-secondary'><FontAwesomeIcon icon={faBookOpen} /> {lesson} Lessons</p>
                            </div>
                            <div className="student">
                                <p><del>${oldPrice}</del> <span className='text-danger'>${price}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </Zoom>
        </div>
    );
};

export default CourseCart;