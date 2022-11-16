import React from 'react';
import PopularEvent from '../PopularEvent/PopularEvent';
import Blog from './Blog/Blog';
import Course from './Course/Course';
import Education from './Education/Education';
import Event from './Event/Event';
import HeroItem from './HeroItem/HeroItem';
import HeroSlide from './HeroSlide/HeroSlide';
import Services from './Services/Services';
import Skills from './Skills/Skills';
import Team from './Team/Team';


const Home = () => {
    return (
        <div>
            <HeroSlide />
            <HeroItem />
            <Course />
            <Services />
            <Education />
            <Skills />
            <PopularEvent />
            <Team />
            <Event />
            <Blog />
        </div>
    );
};

export default Home;