import React from "react";
import "./FeatureContent.css";

const FeatureContent = () => {
    return (
        <div class="feature-container">
            <div class="row">
                <div class="column">
                    <div class="left-column">
                        <h1>Content</h1>
                        <p>content</p>
                        <button>Find Out More</button>
                    </div>
                </div>
                <div class="column">
                    <div class="right-column">
                        <img src={require("./images/circle.png")} width={150} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureContent;
