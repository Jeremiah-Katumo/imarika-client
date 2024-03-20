import React from "react";
import '../../assets/css/main.css';

function Footer() {

    return (
        <>
        <footer id="footer">

            <div className="footer-top">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-3 col-md-6 footer-contact">
                            <h3>Imarika</h3>
                            <p>
                                A108 Adam Street <br/>
                                New York, NY 535022<br/>
                                United States <br/>
                                <strong>Phone:</strong> +1 5589 55488 55<br/>
                                <strong>Email:</strong> info@example.com<br/>
                            </p>
                        </div>
                        

                        <div className="col-lg-2 col-md-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><i className="bx bx-chevron-right"></i> <a href="/">Home</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#about">About us</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#services">Services</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#termsofservice">Terms of service</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#privacypolicy">Privacy policy</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Our Services</h4>
                            <ul>
                                <li><i className="bx bx-chevron-right"></i> <a href="#web">Web Design</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#web">Web Development</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#product">Product Management</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#marketing">Marketing</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#graphic">Graphic Design</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-4 col-md-6 footer-newsletter">
                            <h4>Join Our Newsletter</h4>
                            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                            <form action="" method="post">
                                <input type="email" name="email" /><input type="submit" value="Subscribe" />
                            </form>
                        </div>

                    </div>
                </div>
            </div>
            

            <div className="container d-lg-flex py-4">

                <div className="me-lg-auto text-center text-lg-start">
                    <div className="copyright">
                        &copy; Copyright <strong><span>Flexor</span></strong>. All Rights Reserved
                    </div>
                    <div className="credits">
                        Designed by <a href="jereny.com/">JKatush</a>
                    </div>
                </div>
                <div className="social-links text-center text-lg-right pt-3 pt-lg-0">
                    <a href="http://twitter.com" className="twitter"><i className="bx bxl-twitter"></i></a>
                    <a href="http://facebook.com" className="facebook"><i className="bx bxl-facebook"></i></a>
                    <a href="http://instagram.com" className="instagram"><i className="bx bxl-instagram"></i></a>
                    <a href="google.com" className="google-plus"><i className="bx bxl-skype"></i></a>
                    <a href="linkedin.com" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                </div>
            </div>
        </footer>
        </>
    );
}

export default Footer;