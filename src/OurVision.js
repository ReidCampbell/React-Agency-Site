import React from "react";
import "./OurVision.css";
import websiteData from "./websiteData";

const OurVision = () => {
    return (
        <>
            <div class="container">
                <div class="panel">
                    <h2 class="text--6 section-header">Our vision</h2>
                    <div class="statement">
                        <p class="text--3 statement__primary">
                            {websiteData.ourVision}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurVision;
