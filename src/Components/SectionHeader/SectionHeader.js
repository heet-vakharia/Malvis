import React from 'react';
import './SectionHeader.scss';
import Hero from './Hero/Hero'

//Navbar
import Navbar from './Navbar/Navbar'
import './Navbar/Navbar.scss'
const SectionHeader = () => {

    return (
        <div>
            <Navbar/>
            <Hero/>
        </div>
    );
};

export default SectionHeader;
