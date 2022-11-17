import { faEnvelope, faHandPointRight, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Slide } from 'react-reveal';
import { toast } from 'react-toastify';
import './Contact.css'


const contactData = [
    {
        contactLogo: faMapMarker,
        title: '6580 Allison Turnpike Creminfort, AL 32808-4509',
        background: 'success'
    },
    {
        contactLogo: faPhone,
        title: '+(123) 456-7890',
        background: 'danger'
    },
    {
        contactLogo: faEnvelope,
        title: 'contact@academic.com',
        background: 'primary'
    }
]

const Contact = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        fetch('https://academic-education.onrender.com/book/bookPost', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result?.success) {
                    toast.success(result?.message);
                    reset()
                } else {
                    if (result?.error.includes('duplicate key error collection')) {
                        toast.error('already use this email!')
                    }
                }

            })
    }

    return (
        <div className='contact-area'>
            <div className='contact-sec'>
                <div className="contact-title position-absolute start-50 top-50 translate-middle">
                    <h3 className='fw-bold text-light'>Contact with Us</h3>
                </div>
            </div>
            <div className='container contact'>
                <div className="row gy-2">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="row">
                            <Slide left>
                                <div className="heroTitle rounded pb-4 mt-5 ">
                                    <div className="contact-form">
                                        <div className="form-title mb-3 pt-3">
                                            <h2 className='fs-3 fw-bold'>Need Assistance? Please Complete The Contact Form</h2>
                                        </div>
                                        <div className="contact2 bg-danger rounded p-3 shadow-lg">
                                            <form onSubmit={handleSubmit(onSubmit)}>
                                                <div className="row gy-2">
                                                    <div className="col-lg-12">
                                                        <label htmlFor="nn" className='text-light pb-2'>Full Name</label>
                                                        <input {...register("fullName", { required: true })} className='form-control' id='nn' type='text' placeholder='Full Name' />
                                                        {errors.fullName && <span className='text-light'>This field is required</span>}
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <label htmlFor="mm" className='text-light pb-2'>Email</label>
                                                        <input {...register("email", { required: true })} className='form-control' id='mm' type='email' placeholder='Email Address' />
                                                        {errors.email && <span className='text-light'>This field is required</span>}
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <label htmlFor="pn" className='text-light pb-2'>Phone Number</label>
                                                        <input {...register("phone", { required: true })} className='form-control' id='pn' type='number' placeholder='Phone/Mobile' />
                                                        {errors.phone && <span className='text-light'>This field is required</span>}
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <button className="btn btn-success">Book Now <FontAwesomeIcon icon={faHandPointRight} className='ms-2' /></button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </Slide>
                        </div>
                    </div>
                    <div className="col-lg-5 offset-lg-1 col-md-6 col-sm-12 col-12">
                        <div className="contact-form" style={{ marginTop: '100px' }}>
                            <Slide right>
                                <div className="form-title mb-3 pt-3">
                                    <h2 className='fs-3 fw-bold'>Need Help?</h2>
                                </div>
                                <div className="cont">
                                    {
                                        contactData?.map(item => {
                                            return (
                                                <div className="contact-item">
                                                    <div className={`d-flex align-items-center sigle-contact-${item?.background}`}>
                                                        <div className="logo-sec me-2">
                                                            <FontAwesomeIcon icon={item?.contactLogo} className='text-light' />
                                                        </div>
                                                        <div className="single-title">
                                                            <h6 className='text-light'>{item?.title}</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>

                            </Slide>
                        </div>
                    </div>
                </div>
            </div>
            <div className="map">
                <h2 className='fs-3 fw-bold mb-3 text-center'>See Our Office in Google map</h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233668.1325193183!2d90.14865326276261!3d23.780714885631912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1668509859272!5m2!1sen!2sbd" className='w-100' style={{ height: '400px' }}></iframe>
            </div>
        </div>
    );
};

export default Contact;