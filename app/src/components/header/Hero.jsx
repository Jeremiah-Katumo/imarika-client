import React from "react";
import '../../assets/css/main.css';

function Hero() {

    return (
        <>
        <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
            <div className="container" data-aos="fade-in">
                <h1>Welcome to Imarika DT</h1>
                <h2>We are team of ...</h2>
                <div className="d-flex align-items-center">
                    <i className="bx bxs-right-arrow-alt get-started-icon"></i>
                    <a href="#about" className="btn-get-started scrollto">Get Started</a>
                </div>
            </div>
        </section>
        </>
    )
}

export default Hero;