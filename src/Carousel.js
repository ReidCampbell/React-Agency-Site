import React, { Component } from "react";
import Slider from "react-slick";
import "./Carousel.css";

export default class Responsive extends Component {
    render() {
        var settings = {
            dots: true,
            arrows: false,
            infinite: false,
            dotsClass: "slick-dots ss",
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0
        };
        return (
            <div className="carousel-container">
                <Slider {...settings}>
                    <div className="slide">
                        <h3>1</h3>
                    </div>
                    <div className="slide">
                        <h3>2</h3>
                    </div>
                    <div className="slide">
                        <h3>3</h3>
                    </div>
                    <div className="slide">
                        <h3>4</h3>
                    </div>
                    <div className="slide">
                        <h3>5</h3>
                    </div>
                </Slider>
            </div>
        );
    }
}
