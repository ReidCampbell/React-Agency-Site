import React, { Component } from "react";
import Slider from "react-slick";
import "./Carousel.css";

export default class Responsive extends Component {
    render() {
        var settings = {
            dots: true,
            arrows: true,
            infinite: false,
            dotsClass: "slick-dots ss",
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0
            // customPaging: i => (
            //     <div
            //         style={{
            //             width: "30px",
            //             backgroundColor: "black"
            //         }}
            //     >
            //         {i + 1}
            //     </div>
            // )
            // responsive: [
            //     {
            //         breakpoint: 1024,
            //         settings: {
            //             slidesToShow: 1,
            //             slidesToScroll: 1,
            //             infinite: true,
            //             dots: true
            //         }
            //     },
            //     {
            //         breakpoint: 600,
            //         settings: {
            //             slidesToShow: 1,
            //             slidesToScroll: 1,
            //             initialSlide: 0
            //         }
            //     },
            //     {
            //         breakpoint: 480,
            //         settings: {
            //             slidesToShow: 1,
            //             slidesToScroll: 1
            //         }
            //     }
            // ]
        };
        return (
            <div className="carousel-container">
                <Slider {...settings}>
                    <div className="slide">
                        <h3>1</h3>
                    </div>
                    <div>
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
                    <div className="slide">
                        <h3>6</h3>
                    </div>
                    <div className="slide">
                        <h3>7</h3>
                    </div>
                    <div className="slide">
                        <h3>8</h3>
                    </div>
                </Slider>
            </div>
        );
    }
}
