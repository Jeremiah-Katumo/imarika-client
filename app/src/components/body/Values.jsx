import React from "react";
import '../../assets/css/main.css';
import ValueOne from '../../assets/img/values-1.png';
import ValueTwo from '../../assets/img/values-2.png';
import ValueThree from '../../assets/img/values-3.png';
import ValueFour from '../../assets/img/values-4.png';

function Values() {

    return (
        <>
        <section id="values" class="values">
            <div class="container">

                <div class="row">
                <div class="col-md-6 d-flex align-items-stretch" data-aos="fade-up">
                    <div class="card" style={{background: ValueOne}}>
                    <div class="card-body">
                        <h5 class="card-title"><a href="card-title">Our Mission</a></h5>
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua.</p>
                        <div class="read-more"><a href="read-more"><i class="bi bi-arrow-right"></i> Read More</a></div>
                    </div>
                    </div>
                </div>
                <div class="col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="fade-up" data-aos-delay="100">
                    <div class="card" style={{background: ValueTwo}}>
                    <div class="card-body">
                        <h5 class="card-title"><a href="card-title">Our Plan</a></h5>
                        <p class="card-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem.</p>
                        <div class="read-more"><a href="read-more"><i class="bi bi-arrow-right"></i> Read More</a></div>
                    </div>
                    </div>
                </div>
                <div class="col-md-6 d-flex align-items-stretch mt-4" data-aos="fade-up" data-aos-delay="200">
                    <div class="card" style={{background: ValueThree}}>
                    <div class="card-body">
                        <h5 class="card-title"><a href="card-title">Our Vision</a></h5>
                        <p class="card-text">Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores.</p>
                        <div class="read-more"><a href="read-more"><i class="bi bi-arrow-right"></i> Read More</a></div>
                    </div>
                    </div>
                </div>
                <div class="col-md-6 d-flex align-items-stretch mt-4" data-aos="fade-up" data-aos-delay="300">
                    <div class="card" style={{background: ValueFour}}>
                    <div class="card-body">
                        <h5 class="card-title"><a href="card-title">Our Care</a></h5>
                        <p class="card-text">Nostrum eum sed et autem dolorum perspiciatis. Magni porro quisquam laudantium voluptatem.</p>
                        <div class="read-more"><a href="read-more"><i class="bi bi-arrow-right"></i> Read More</a></div>
                    </div>
                    </div>
                </div>
                </div>

            </div>
        </section>
        </>
    )
}

export default Values;