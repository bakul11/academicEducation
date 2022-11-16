import { faHandPointRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useState } from 'react';
import { Slide } from 'react-reveal';
import edu1 from '../../../../images/edu1.jpg'
import edu2 from '../../../../images/edu2.jpg'
import './Education.css'


const Education = () => {
    const [show, setShow] = useState(false);

    const subPara = "The other virtues practice in succession by Franklin were silence, order, resolution, frugality, industry, sincerity, Justice, moderation, cleanliness, tranquility, chastity and humility. For the summary order he followed a little scheme of employing his time each day Commitment is something that comes from understanding that everything has its price and then having the willingness to pay that price."

    return (
        <div className='container' style={{ marginTop: '120px' }}>
            <div className="row gy-5">
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <Slide right>
                        <div className="edu-logo">
                            <div className="edu1">
                                <img src={edu2} alt="logo" className='img-fluid' style={{ height: '430px' }} />
                            </div>
                            <div className="edu2">
                                <img src={edu1} alt="logo" className='img-fluid' style={{ height: '300px' }} />
                            </div>
                        </div>
                    </Slide>
                </div>
                <div className="col-lg-5 offset-lg-1 col-md-6 col-sm-12 col-12">
                    <Slide left>
                        <div className="edu-logo mt-5">
                            <h2 className='fw-bold'>Higher Education Begins Start Here</h2>
                            <h6 className='mt-3 mb-4'>Commitment is something that comes from understanding that everything has its price and then having the willingness to pay that price.</h6>
                            <p>{show ? subPara : subPara.slice(0, 150)}</p>
                            <button className="btn btn-success mt-3" onClick={() => setShow(!show)}>Read More <FontAwesomeIcon icon={faHandPointRight} className='ms-2' /></button>
                        </div>
                    </Slide>
                </div>
            </div>
        </div>
    );
};

export default Education;