import React, { Component } from "react";
import Menu from "./Menu";
import Header from "./Header";
import "./Menu.css";
import OurVision from "./OurVision";
import FeatureContent from "./FeatureContent";
import WhatWeDo from "./WhatWeDo";
import Carousel from "./Carousel";
import FeatureImage from "./FeatureImage";
import Footer from "./Footer";

class App extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            visible: false
        };

        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    handleMouseDown(e) {
        this.toggleMenu();

        e.stopPropagation();
    }

    toggleMenu() {
        this.setState({
            visible: !this.state.visible
        });
    }

    render() {
        return (
            <>
                <Menu
                    handleMouseDown={this.handleMouseDown}
                    menuVisibility={this.state.visible}
                />
                <div className="page-container">
                    <div className="header">
                        <div className="header-container">
                            <Header />
                        </div>
                    </div>
                    <OurVision />
                    <FeatureImage imgUrl={require("./images/office.jpg")} />
                    <FeatureContent />
                    <WhatWeDo />
                    <Carousel />
                    <FeatureImage imgUrl={require("./images/coffee.jpg")} />
                    <WhatWeDo />
                    <Footer />
                </div>
            </>
        );
    }
}

export default App;
