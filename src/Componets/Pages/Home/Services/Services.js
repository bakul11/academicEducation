import { faBookMedical, faBusinessTime, faHandHoldingHeart, faMedkit, faPeopleGroup, faTrophy } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import ServicesCart from './ServicesCart';
import LightSpeed from 'react-reveal/LightSpeed';



const serviesData = [
    {
        id: "6370ced85ae56352c07f1f8c",
        logo: faBookMedical,
        title: "medicine",
        background: "success"
    },
    {
        id: "6370ced85ae56352c07f1f8d",
        logo: faMedkit,
        title: "Pharmacy",
        background: "primary"
    },
    {
        id: "6370ced85ae56352c07f1f8e",
        logo: faHandHoldingHeart,
        title: "Psychology",
        background: "warning"
    },
    {
        id: "6370ced85ae56352c07f1f8f",
        logo: faTrophy,
        title: "Economics",
        background: "info"
    },
    {
        id: "6370ced85ae56352c07f1f90",
        logo: faBusinessTime,
        title: "Business",
        background: "secondary"
    },
    {
        id: "6370ced85ae56352c07f1f91",
        logo: faPeopleGroup,
        title: "Politics",
        background: "danger"
    }
]

const Services = () => {
    return (
        <div className='container' style={{ marginTop: '100px', marginBottom: '120px' }}>
            <LightSpeed left>
                <div className="service-title text-center mb-5">
                    <h3 className='fw-bold'>Learn by Doing</h3>
                    <p>choose our best package and contact now</p>
                </div>
            </LightSpeed>
            <div className="servies">
                <div className="row gy-3">
                    {
                        serviesData?.map((service => <ServicesCart service={service} key={service?.id} />))
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;