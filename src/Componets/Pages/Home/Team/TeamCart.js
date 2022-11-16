import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import Zoom from 'react-reveal/Zoom';
import './TeamCart.css'

const TeamCart = ({ team }) => {
    const { name, photo, title, shortDis } = team;
    return (
        <div className='col-lg-3 col-md-6 col-sm-12 col-12'>
            <Zoom>
                <div className="main-team">
                    <div className="team-item-member">
                        <img src={photo} alt={name} className='img-fluid rounded' />
                    </div>
                    <div className="social-media-team bg-danger rounded text-center p-2">
                        <h5 className='text-capitalize text-light'>{name}</h5>
                        <h6 className='text-capitalize text-light mt-2 mb-2'>{title}</h6>
                        <p className='text-capitalize text-light mb-2'>{shortDis}</p>
                        <div className="profile-social-team">
                            <ul className='d-flex align-items-center justify-content-between w-50 mx-auto'>
                                <li><a href="#" target="_blank" ><FontAwesomeIcon icon={faFacebook} /></a></li>
                                <li><a href="#" target="_blank" ><FontAwesomeIcon icon={faTwitter} /></a></li>
                                <li><a href="#" target="_blank" ><FontAwesomeIcon icon={faLinkedin} /></a></li>
                                <li><a href="#" target="_blank" ><FontAwesomeIcon icon={faInstagram} /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Zoom>

        </div>
    );
};

export default TeamCart;