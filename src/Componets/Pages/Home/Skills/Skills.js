import React from 'react';
import { Slide } from 'react-reveal';
import part1 from '../../../../images/clients/part1.svg'
import part2 from '../../../../images/clients/part2.svg'
import part3 from '../../../../images/clients/part3.svg'



const Skills = () => {
    return (
        <div className='container' style={{ marginTop: '200px', marginBottom: '120px' }}>
            <div className="row gy-5">
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <Slide right>
                        <h2 className='fw-bold'>Let's Have a Look at Our <br /> Activity and Skills</h2>
                        <p className='text-secondary mt-3 mb-3'>Along with your plans, you should consider developing an action orientation that will keep you motivated to move forward at all times.</p>
                        <div className="patner">
                            <h5 className='fw-bold mb-3'>Our Partners</h5>
                            <div className="partner-logo d-flex align-items-center justify-content-between flex-wrap">
                                <img src={part1} alt="logo" className='img-fluid mt-3 ' style={{ height: '45px' }} />
                                <img src={part2} alt="logo" className='img-fluid mt-3' style={{ height: '45px' }} />
                                <img src={part3} alt="logo" className='img-fluid mt-3' style={{ height: '45px' }} />
                            </div>
                        </div>
                    </Slide>
                </div>
                <div className="col-lg-5 offset-lg-1 col-md-6 col-sm-12 col-12">
                    <Slide left>
                        <div className="program-progress">
                            <div className="progress-item">
                                <h5>Design</h5>
                                <div className="progress mt-2">
                                    <div className="progress-bar bg-danger" role="progressbar" aria-valuenow="2" aria-valuemin="0" aria-valuemax="100" style={{ width: '80%' }}>89%</div>
                                </div>
                            </div>
                            <div className="progress-item mt-3 mb-3">
                                <h5>Development</h5>
                                <div className="progress mt-2">
                                    <div className="progress-bar bg-danger" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ width: '70%' }}>75%</div>
                                </div>
                            </div>
                            <div className="progress-item mt-3 mb-3">
                                <h5>Support</h5>
                                <div className="progress mt-2">
                                    <div className="progress-bar bg-danger" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ width: '85%' }}>85%</div>
                                </div>
                            </div>
                            <div className="progress-item">
                                <h5>Marketing</h5>
                                <div className="progress mt-2">
                                    <div className="progress-bar bg-danger" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ width: '50%' }}>50%</div>
                                </div>
                            </div>
                        </div>
                    </Slide>
                </div>
            </div>
        </div>
    );
};

export default Skills;