import React, { Component } from "react";
import "./FeatureImage.css";

class FeatureImage extends Component {
    render() {
        const { imgUrl } = this.props;
        return (
            <div className="feature-image">
                <div className="picture picture-inline">
                    <img src={imgUrl} />
                </div>
            </div>
        );
    }
}

export default FeatureImage;
