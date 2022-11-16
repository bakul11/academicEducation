import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Zoom from 'react-reveal/Zoom';


const HeroItemCart = ({ hero }) => {
    const { logo, title } = hero;
    return (
        <div className='col-lg-3 col-md-6 col-sm-12 col-12'>
            <Zoom>
                <div className="d-flex align-items-center">
                    <div className="logo-sec">
                        <FontAwesomeIcon icon={logo} size='3x' className='text-light' />
                    </div>
                    <div className="title-sec ms-2">
                        <h5 className='text-light text-capitalize'>{title}</h5>
                    </div>
                </div>
            </Zoom>
        </div>
    );
};

export default HeroItemCart;