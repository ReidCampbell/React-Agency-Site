import React, { Component } from "react";
import Menu from "./Menu";
import "./Menu.css";

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
                <div />
            </>
        );
    }
}

export default App;
