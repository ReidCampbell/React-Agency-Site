import React, { Component } from "react";

import "./Header.css";

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videoURL:
                "https://raw.githubusercontent.com/youtube/api-samples/master/java/src/main/resources/sample-video.mp4"
        };
    }

    render() {
        return (
            <div class="video-container">
                <video id="background-video" loop autoPlay>
                    <source src={this.state.videoURL} type="video/mp4" />
                    <source src={this.state.videoURL} type="video/ogg" />
                    Your browser does not support the video tag.
                </video>
            </div>
        );
    }
}

export default Header;
