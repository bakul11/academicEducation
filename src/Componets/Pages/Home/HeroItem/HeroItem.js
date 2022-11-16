import { faAward, faBell, faGlobe, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import HeroItemCart from './HeroItemCart';
import './HeroItemCart.css'

const heroItemsData = [
    {
        logo: faUserGraduate,
        title: '10+ millon Graduate'
    },
    {
        logo: faGlobe,
        title: 'worldwide students'
    },
    {
        logo: faAward,
        title: 'Get certification'
    },
    {
        logo: faBell,
        title: '4 million students'
    }
]

const HeroItem = () => {
    return (
        <div className="container-fluid pt-4 pb-4 subHeroItem" style={{ background: '#1A2844' }}>
            <div className='container'>
                <div className="row gy-5">
                    {
                        heroItemsData?.map(hero => <HeroItemCart hero={hero} key={hero?.title} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default HeroItem;