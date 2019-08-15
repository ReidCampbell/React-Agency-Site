import React, { Component } from "react";
import "./Menu.css";

class Menu extends Component {
    render() {
        let visibility = "hide";
        let active = "hamburger hamburger--elastic inactive";
        let svgActive = "logo-btn inactive";

        if (this.props.menuVisibility) {
            visibility = "show";
            active = "hamburger hamburger--elastic active";
            svgActive = "logo-btn active";
        }

        return (
            <>
                <div className="nav-container">
                    <div className="hamburger-btn">
                        <button
                            type="button"
                            onMouseDown={this.props.handleMouseDown}
                            className={active}
                        >
                            <div class="hamburger-box">
                                <div class="hamburger-inner" />
                            </div>
                        </button>
                    </div>
                    <div className={svgActive}>
                        <a
                            className="header-logo"
                            aria-label="Return to homepage"
                            title="Return to homepage"
                            href="/#"
                        >
                            <svg
                                version="1.1"
                                id="Capa_1"
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                width="40px"
                                height="40px"
                                viewBox="0 0 501.21 501.21"
                            >
                                <path
                                    d="M498.212,159.954c-4.001-18.177-11.707-34.211-23.131-48.105c-11.231-13.899-25.262-24.699-42.109-32.408
		c-16.851-7.707-34.886-11.562-54.102-11.562H14.564l43.681,93.362L0,433.331h95.355l58.245-272.09h81.658l-58.245,272.09h95.356
		l58.245-272.09h48.253c10.656,0,18.555,3.136,23.695,9.419c5.338,6.09,6.762,14.465,4.291,25.125l-50.819,237.539h95.355
		l46.822-217.841C502.209,196.641,502.209,178.127,498.212,159.954z"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
                <div
                    id="flyoutMenu"
                    onMouseDown={this.props.handleMouseDown}
                    className={visibility}
                >
                    <div className="primary-nav">
                        <div className="primary-nav__links">
                            <nav>
                                <ul>
                                    <li>
                                        <h2>
                                            <a href="#">Home</a>
                                        </h2>
                                    </li>
                                    <li>
                                        <h2>
                                            <a href="#">Our Work</a>
                                        </h2>
                                    </li>
                                    <li>
                                        <h2>
                                            <a href="#">Careers</a>
                                        </h2>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Menu;
