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
            initialSlide: 0,
            fade: true
        };

        return (
            <div className="carousel-container">
                <Slider {...settings}>
                    <div className="slide">
                        <img
                            className="carousel-img"
                            src={require("./images/ms.png")}
                        ></img>
                    </div>
                    <div className="slide">
                        <img
                            className="carousel-img"
                            src={require("./images/icons.png")}
                        ></img>
                    </div>
                    <div className="slide">
                        <img
                            className="carousel-img"
                            src={require("./images/boxt.png")}
                        ></img>
                    </div>
                    <div className="slide">
                        <img
                            className="carousel-img"
                            src={require("./images/swt.png")}
                        ></img>
                    </div>
                    <div className="slide">
                        <img
                            className="carousel-img"
                            src={require("./images/maersk.png")}
                        ></img>
                    </div>
                </Slider>
            </div>
        );
    }
}
