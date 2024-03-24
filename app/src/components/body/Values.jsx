import React from "react";
import '../../assets/css/main.css';
import ValueOne from '../../assets/img/values-1.png';
import ValueTwo from '../../assets/img/values-2.png';
import ValueThree from '../../assets/img/values-3.png';
import ValueFour from '../../assets/img/values-4.png';

function Values() {
    // Information for each card
    const cardInfo = [
        {
            title: 'Our Mission',
            text: 'Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua.',
            image: ValueOne
        },
        {
            title: 'Our Plan',
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem.',
            image: ValueTwo
        },
        {
            title: 'Our Vision',
            text: 'Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores.',
            image: ValueThree
        },
        {
            title: 'Our Care',
            text: 'Nostrum eum sed et autem dolorum perspiciatis. Magni porro quisquam laudantium voluptatem.',
            image: ValueFour
        }
    ];

    return (
        <section id="values" className="values">
            <div className="container">
                <div className="row">
                    {cardInfo.map((card, index) => (
                        <div className="col-md-6 d-flex align-items-stretch mt-4" data-aos="fade-up" key={index}>
                            <div className="card" style={{backgroundImage: `url(${card.image})`}}>
                                <div className="card-body">
                                    <h5 className="card-title">{card.title}</h5>
                                    <p className="card-text">{card.text}</p>
                                    <div className="read-more"><a href="read-more"><i className="bi bi-arrow-right"></i> Read More</a></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Values;
