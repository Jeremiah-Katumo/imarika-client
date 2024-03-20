import React from 'react';
import '../../assets/css/main.css';
import Header from '../header/Header';
import TopBar from '../body/TopBar';
import Hero from '../header/Hero';
import Footer from '../footer/Footer';
import WhyUs from '../body/WhyUs';

function Main() {
    return (
        <>
        <TopBar />
        <Header />
        <Hero />
        <main id='main'>
            <WhyUs />
        </main>
        <Footer />
        </>
    )
}

export default Main;