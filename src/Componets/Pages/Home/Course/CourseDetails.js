import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import swal from 'sweetalert';
import Review from '../Review/Review';
import ReviewData from '../Review/ReviewData';
import { Slide } from 'react-reveal';


const CourseDetails = () => {
    const [course, setCourse] = useState({});
    const [loadding, setlodding] = useState(true);
    const { id } = useParams();


    useEffect(() => {
        fetch(`http://localhost:5000/course/getSingle/${id}`)
            .then(res => res.json())
            .then(data => {
                if (data?.success) {
                    setCourse(data?.getID);
                    setlodding(false);
                }
            })
            .catch(err => {
                setlodding(true)
            })
    }, [id])

    //Handle Call Me 
    const handeCallMe = () => {
        swal('Call Me Now', '(123) 456-7890', 'success');
    }



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
                        <div className="course-detail position-relative">
                            <div className="logo-top">
                                <img src={course?.headPhoto} alt={course?.title} className='img-fluid w-100 d-block' style={{ height: '400px' }} />
                            </div>
                            <div className="logo-title-top position-absolute top-50 start-50 translate-middle">
                                <h3 className='fw-bold mb-3 fs-2 text-light logo-title'>{course?.title}</h3>
                            </div>
                        </div>
                        <div className='container' style={{ marginTop: "120px", marginBottom: "110px" }}>
                            <div className="row gy-5">
                                <div className="col-lg-8 col-md-6 col-sm-12 col-12">
                                    <Slide left>
                                        <div className="shadow p-2 rounded mb-2">
                                            <div className="logo">
                                                <img src={course?.headPhoto} alt={course?.title} style={{ borderRadius: '10px', height: '430px', width: '640px' }} className='img-fluid' />
                                                <h3 className='fw-bold mb-3 fs-5 mt-2'>{course?.title}</h3>
                                                <h4 className='mt-3 mb-2 fw-bold'>Course Features</h4>
                                                <p>{course?.discription}</p>
                                            </div>
                                            <div className="lecture mt-5">
                                                <h4 className='fw-bold fs-5 mb-2'> Lecturers  </h4>
                                                <div className="logo-teacher p-2 rounded d-flex align-items-center justify-content-between w-50 flex-wrap" style={{ background: "#1A2844" }}>
                                                    <div className="logo">
                                                        <img src={course?.userPhoto} alt={course?.userName} style={{ borderRadius: '5px', height: '70px', width: '70px' }} />
                                                    </div>
                                                    <div className="title mt-2">
                                                        <h5 className='text-light fs-6 text-capitalize'>{course?.userName}</h5>
                                                        <h6 className='text-light'>Teacher</h6>
                                                    </div>
                                                    <div className="join mt-2">
                                                        <button className="btn btn-danger" onClick={handeCallMe}>Join Now</button>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* ============Review================= */}
                                            <div className="review-sec mt-5 mb-5">
                                                <h4 className='mt-3 mb-2 fw-bold fs-5'>Student Reviews</h4>
                                                <ReviewData id={id} />
                                            </div>
                                            {/* =============Add review =============== */}
                                            <div className="review-box">
                                                <h4 className='mt-3 mb-2 fw-bold fs-5'>Leave a Comment</h4>
                                                <Review id={id} />
                                            </div>
                                        </div>
                                    </Slide>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                    <Slide right>
                                        <div className="shadow p-2 rounded">
                                            <div className="logo">
                                                <h4 className='fw-bold fs-5 mb-2'>Course Details</h4>
                                                <div className="lesson-sec">
                                                    <div class="accordion accordion-flush" id="accordionFlushExample">
                                                        <div class="accordion-item">
                                                            <h2 class="accordion-header" id="flush-headingOne">
                                                                <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                                    Class = 01
                                                                </button>
                                                            </h2>
                                                            <div id="flush-collapseOne" class="accordion-collapse collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                                <div class="accordion-body text-secondary">Lesson-1 : <FontAwesomeIcon icon={faLock} className='ms-5' /></div>
                                                                <div class="accordion-body text-secondary">Lesson-2 : <FontAwesomeIcon icon={faLock} className='ms-5' /></div>
                                                            </div>
                                                        </div>
                                                        <div class="accordion-item">
                                                            <h2 class="accordion-header" id="flush-headingTwo">
                                                                <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseOne">
                                                                    Class = 02
                                                                </button>
                                                            </h2>
                                                            <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                                                <div class="accordion-body text-secondary">Lesson-3 : <FontAwesomeIcon icon={faLock} className='ms-5' /></div>
                                                                <div class="accordion-body text-secondary">Lesson-4 : <FontAwesomeIcon icon={faLock} className='ms-5' /></div>
                                                            </div>
                                                        </div>
                                                        <div class="accordion-item">
                                                            <h2 class="accordion-header" id="flush-headingThree">
                                                                <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseOne">
                                                                    Class = 03
                                                                </button>
                                                            </h2>
                                                            <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                                                <div class="accordion-body text-secondary">Lesson-5 : <FontAwesomeIcon icon={faLock} className='ms-5' /></div>
                                                                <div class="accordion-body text-secondary">Lesson-6 : <FontAwesomeIcon icon={faLock} className='ms-5' /></div>
                                                            </div>
                                                        </div>
                                                        <div class="accordion-item">
                                                            <h2 class="accordion-header" id="flush-headingFour">
                                                                <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseOne">
                                                                    Class = 04
                                                                </button>
                                                            </h2>
                                                            <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                                                <div class="accordion-body text-secondary">Lesson-7 : <FontAwesomeIcon icon={faLock} className='ms-5' /></div>
                                                                <div class="accordion-body text-secondary">Lesson-8 : <FontAwesomeIcon icon={faLock} className='ms-5' /></div>
                                                            </div>
                                                        </div>
                                                        <div class="accordion-item">
                                                            <h2 class="accordion-header" id="flush-headingFive">
                                                                <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                                                    Class = 05
                                                                </button>
                                                            </h2>
                                                            <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                                                                <div class="accordion-body text-secondary">Lesson-9 : <FontAwesomeIcon icon={faLock} className='ms-5' /></div>
                                                                <div class="accordion-body text-secondary">Lesson-10 : <FontAwesomeIcon icon={faLock} className='ms-5' /></div>
                                                            </div>
                                                        </div>
                                                        <div class="accordion-item">
                                                            <h2 class="accordion-header" id="flush-headingSix">
                                                                <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                                                                    Class = 06
                                                                </button>
                                                            </h2>
                                                            <div id="flush-collapseSix" class="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                                                                <div class="accordion-body text-secondary">Lesson-11 : <FontAwesomeIcon icon={faLock} className='ms-5' /></div>
                                                                <div class="accordion-body text-secondary">Lesson-12 : <FontAwesomeIcon icon={faLock} className='ms-5' /></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="progress-bar-menu mt-5">
                                                <h4 className='fw-bold fs-5 mb-2'>Course Rating</h4>
                                                <div className="progress-item">
                                                    <p>5 Stars</p>
                                                    <div className="progress mt-2">
                                                        <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" aria-valuenow="2" aria-valuemin="0" aria-valuemax="100" style={{ width: '95%' }}>89%</div>
                                                    </div>
                                                </div>
                                                <div className="progress-item mt-3 mb-3">
                                                    <p>4 Stars</p>
                                                    <div className="progress mt-2">
                                                        <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ width: '70%' }}>75%</div>
                                                    </div>
                                                </div>
                                                <div className="progress-item mt-3 mb-3">
                                                    <p>3 Stars</p>
                                                    <div className="progress mt-2">
                                                        <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ width: '60%' }}>85%</div>
                                                    </div>
                                                </div>
                                                <div className="progress-item mt-3 mb-3">
                                                    <p>2 Stars</p>
                                                    <div className="progress mt-2">
                                                        <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ width: '50%' }}>50%</div>
                                                    </div>
                                                </div>
                                                <div className="progress-item mt-3 mb-3">
                                                    <p>1 Stars</p>
                                                    <div className="progress mt-2">
                                                        <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ width: '30%' }}>50%</div>
                                                    </div>
                                                </div>
                                            </div>
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

export default CourseDetails;