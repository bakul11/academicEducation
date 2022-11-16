import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Zoom from 'react-reveal/Zoom';
import { useNavigate } from 'react-router-dom';
import './ServicesCart.css'

const ServicesCart = ({ service }) => {
    const { logo, title, background, id } = service;

    const navigate = useNavigate();
    const handleDetailsServices = () => {
        navigate(`/courseDetails/${id}`);
    }

    return (
        <div className='col-lg-2 col-md-4 col-sm-6 col-12 '>
            <Zoom>
                <div className={`text-center service-items service-${background}`} onClick={handleDetailsServices}>
                    <FontAwesomeIcon icon={logo} className='text-light' size='3x' />
                    <h5 className='text-light text-capitalize mt-2'>{title}</h5>
                </div>
            </Zoom>
        </div>

    );
};

export default ServicesCart;