import React from 'react';
import './Footer.css'
import logo from '../../../images/footerLogo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarker, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <section>
            <div className='footer-section'>
                <div className="container">
                    <div className="row gy-5">
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="footer-item">
                                <Link to='/'>
                                    <img src={logo} alt="footer logo" className='img-fluid' style={{ height: '60px' }} />
                                </Link>
                                <p className='text-light mt-3 mb-3'>The best way is to develop and follow a plan. Start with your goals in mind and then work backward to develop the plan.</p>
                                <div className="footer-social">
                                    <h3 className='text-light mb-3 fs-4'>Follow Us</h3>
                                    <ul className='d-flex align-items-center justify-content-between w-50'>
                                        <li><a href="#" target="_blank" ><FontAwesomeIcon icon={faFacebook} className='text-light fs-4' /></a></li>
                                        <li><a href="#" target="_blank" ><FontAwesomeIcon icon={faTwitter} className='text-light fs-4' /></a></li>
                                        <li><a href="#" target="_blank" ><FontAwesomeIcon icon={faLinkedin} className='text-light fs-4' /></a></li>
                                        <li><a href="#" target="_blank" ><FontAwesomeIcon icon={faInstagram} className='text-light fs-4' /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-12 col-12">
                            <div className="footer-item">
                                <h3 className='text-light mb-3 fs-5 fw-bold'>Category</h3>
                                <div className="fotMenu2">
                                    <li><a href="#" target="_blank">Economics</a></li>
                                    <li><a href="#" target="_blank">natural</a></li>
                                    <li><a href="#" target="_blank">architecture</a></li>
                                    <li><a href="#" target="_blank">Eletrical</a></li>
                                    <li><a href="#" target="_blank">Biological</a></li>
                                    <li><a href="#" target="_blank">Psychology</a></li>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-12 col-12">
                            <div className="footer-item">
                                <h3 className='text-light mb-3 fs-5 fw-bold'>Useful Link</h3>
                                <div className="fotMenu2">
                                    <li><a href="#" target="_blank">Home</a></li>
                                    <li><a href="#" target="_blank">About us</a></li>
                                    <li><a href="#" target="_blank">event</a></li>
                                    <li><a href="#" target="_blank">cousrse</a></li>
                                    <li><a href="#" target="_blank">Privacy Policy</a></li>
                                    <li><a href="#" target="_blank">contact us</a></li>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="footer-item">
                                <h3 className='text-light mb-3 fs-5 fw-bold'>Contact Us</h3>
                                <p className='text-light mt-3 mb-3'>Helped thousands of clients to find the right property for their needs.</p>

                                <div className="extra-cotact">
                                    <p className='text-light'><FontAwesomeIcon icon={faMapMarker} className='text-danger me-2' /> 6580 Allison Turnpike Creminfort, AL 32808-4509</p>
                                    <p className='text-light mt-3 mb-3'><FontAwesomeIcon icon={faPhoneAlt} className='text-danger me-2' /> +(123) 456-7890</p>
                                    <p className='text-light'><FontAwesomeIcon icon={faEnvelope} className='text-danger me-2' /> contact@academic.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright text-center p-3" style={{ background: '#1A2844' }}>
                <p className='text-light'>©Copyright {date} academic All Rights Reserved</p>
            </div>
        </section>
    );
};

export default Footer;