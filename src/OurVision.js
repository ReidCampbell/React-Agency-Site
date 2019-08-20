import React from "react";
import "./OurVision.css";

const OurVision = () => {
    return (
        <>
            <div class="container">
                <div class="panel">
                    <h2 class="text--6 section-header">Our vision</h2>
                    <div class="statement">
                        <p class="text--3 statement__primary">
                            I like it, but can the snow look a little warmer the
                            target audience is males and females aged zero and
                            up, yet I need a website. How much will it cost, or
                            submit your meaningless business jargon to be used
                            on the site!
                        </p>
                    </div>
                </div>
            </div>
            <figure className="feature-image">
                <div className="picture picture-inline">
                    <img src={require("./images/office.jpg")} />
                </div>
            </figure>
        </>
    );
};

export default OurVision;
