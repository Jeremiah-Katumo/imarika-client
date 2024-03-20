import React from 'react';
import '../../assets/css/main.css';
import Header from '../header/Header';
import TopBar from '../body/TopBar';
import Hero from '../header/Hero';
import Footer from '../footer/Footer';
import WhyUs from '../body/WhyUs';
import AboutUs from '../body/AboutUs';
import Values from '../body/Values';
import Services from '../body/Services';
import Testimonials from '../body/Testimonials';
import ContactUs from '../body/ContactUs';

function Main() {
    return (
        <>
        <TopBar />
        <Header />
        <Hero />
        <main id='main'>
            <WhyUs />
            <AboutUs />
            <Services />
            <Values />
            <Testimonials />
            <ContactUs />
        </main>
        <Footer />
        </>
    )
}

export default Main;