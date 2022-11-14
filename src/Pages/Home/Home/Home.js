import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards.js/InfoCards';
import Services from '../Services/Services';
import DentalCare from '../DentalCare/DentalCare';
import MakeApponment from '../MakeAppoinment/MakeApponment';
import Testimonial from "../Testimonial/Testimonial";
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <DentalCare></DentalCare>
            <MakeApponment></MakeApponment>
            <Testimonial></Testimonial>
            <Contact></Contact>
        </div>
    );
};

export default Home;