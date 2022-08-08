import React from 'react';
import Footer from '../Shared/Footer';
import Testimonials from '../Testimonials/Testimonials';
import Banner from './Banner/Banner';
import Gallery from './Gallery/Gallery';

const Home = () => {
    return (
        <div>
            <Banner />
            <Gallery />
            <Testimonials />
            <Footer />
        </div>
    );
};

export default Home;