import React, { Component } from "react";

import "./Header.css";

class Header extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         videoURL:
    //             "https://raw.githubusercontent.com/youtube/api-samples/master/java/src/main/resources/sample-video.mp4"
    //     };
    // }

    render() {
        return (
            <>
                <header className="page-header">
                    <div className="hero">
                        <div className="logo-img">
                            <h1>LOGO</h1>
                            {/* <img src={require("./images/header-logo.svg")} /> */}
                        </div>
                        <h1 className="hero-heading">
                            <div className="heading-container">
                                <div className="panel">
                                    Inspirational Slogan
                                </div>
                            </div>
                        </h1>

                        <div className="video video-container">
                            <video class="background-video" loop autoPlay muted>
                                <source
                                    src={require("./images/header.mp4")}
                                    type="video/mp4"
                                />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </header>
            </>
        );
    }
}

export default Header;

// <header class="page__header">
//     <div class="hero">
//         <div class="hero__logo" />
//         <h1 class="text--1 hero__heading">
//             <div class="container">
//                 <div class="panel">Making what matters</div>
//             </div>
//         </h1>
//         <div class="video video--visible video--cover">
//             <video
//                 class="video__media"
//                 playsinline=""
//                 autoplay=""
//                 loop=""
//                 src="//videos.ctfassets.net/v5uu2lmfdpgf/EeVpi08oM0kiokQmwSWs0/9abb960fac50160cd1fc257ac73ff5c3/WEB_BANNER_SELECTS_demo.mp4"
//                 type="video/mp4"
//             />
//         </div>
//     </div>
// </header>;
