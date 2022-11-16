import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './HeroSlide.css';
import { useForm } from 'react-hook-form';
import { Slide } from 'react-reveal';
import { toast } from 'react-toastify';

const HeroSlide = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        fetch('http://localhost:5000/book/bookPost', {
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
        <div className='container-fluid hero_slide' style={{ marginTop: '100px' }}>
            <div className="container">
                <div className="row gy-5">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                        <Slide right>
                            <div className="heroTitle mt-5">
                                <h2 className='text-light fw-bold fs-1 hero'>Personal Education <br /> Lifetime Success</h2>
                                <p className='text-light mb-3 mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod reprehenderit praesentium ratione illum optio incidunt ullam.</p>
                                <button className="btn btn-danger">Book Now <FontAwesomeIcon icon={faHandPointRight} className='ms-2' /></button>
                            </div>
                        </Slide>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="row">
                            <Slide left>
                                <div className="col-lg-9 mx-auto heroTitle bg-danger rounded pb-4 mt-5 bigHero">
                                    <div className="heroform">
                                        <div className="form-title mb-3 pt-3">
                                            <h2 className='text-light fs-4'>Get Started Here</h2>
                                            <p className='text-light'>The new way to find & book a high-quality sitter.</p>
                                        </div>
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
                            </Slide>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default HeroSlide;