import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
    render() {
        let locationData = this.props.websiteData;
        const baseUrl = "../../components/assets/images/";
        return (
            <div className="footer">
                <div className="footer-container">
                    <div className="footer-panel">
                        <div className="footer-grid">
                            <div className="footer-contact">
                                <h2 className="footer-header">Let's Talk</h2>
                                <p>
                                    General enquiries:
                                    <br />
                                    <a
                                        href="mailto:hello@digital.com"
                                        rel="external"
                                        className="footer-link"
                                    >
                                        <strong>
                                            {locationData.email[0].general}
                                        </strong>
                                    </a>
                                </p>
                                <p>
                                    New Business:
                                    <br />
                                    <a
                                        href="mailto:opportunities@digital.com"
                                        rel="external"
                                        className="footer-link"
                                    >
                                        <strong>
                                            {locationData.email[0].business}
                                        </strong>
                                    </a>
                                </p>
                            </div>
                            <div className="footer-newsletter">
                                <div className="newsletter">
                                    <h2 className="text--4 newsletter-title">
                                        Sign up
                                    </h2>
                                    <form
                                        className="newsletter-form"
                                        method="POST"
                                        action="#"
                                    >
                                        <p className="newsletter-copy">
                                            Sign up for our weekly edit of
                                            digital trends and insights from top
                                            industry thought leaders.
                                        </p>
                                        <div className="field">
                                            <label for="email-input">
                                                {/* Enter your email */}
                                            </label>
                                            <input
                                                id="email-input"
                                                className="newsletter-input"
                                                type="email"
                                                name="MERGE0"
                                                required=""
                                                value={this.props.searchString}
                                                onchange={this.handleChange}
                                                placeholder="Enter your email"
                                            />
                                        </div>
                                        <p className="newsletter-submit">
                                            <span className="cta cta-default">
                                                <button
                                                    type="submit"
                                                    className="button cta-target"
                                                >
                                                    <span className="cta-text">
                                                        Submit
                                                        <svg
                                                            width="44px"
                                                            height="100%"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 34 21"
                                                            focusable="false"
                                                            tabIndex="-1"
                                                        />
                                                    </span>
                                                </button>
                                            </span>
                                        </p>
                                    </form>
                                </div>
                            </div>
                            <div className="footer-offices">
                                {locationData.offices &&
                                    locationData.offices.map((item, i) => {
                                        return (
                                            <div
                                                key={i}
                                                className="footer-office"
                                            >
                                                <div className="office">
                                                    <div className="office-secondary">
                                                        <div className="picture picture--inline picture--loaded">
                                                            <picture className="picture-asset">
                                                                <img
                                                                    src={require(`./images/${item.OfficeLocation.toLowerCase()}.jpg`)}
                                                                    alt=""
                                                                    className="picture-img"
                                                                />
                                                            </picture>
                                                        </div>
                                                    </div>
                                                    <div className="office-primary">
                                                        <h3 className="text--4 office-name">
                                                            {
                                                                item.OfficeLocation
                                                            }
                                                        </h3>
                                                        <p className="office-address">
                                                            {item.OfficeAddress}
                                                        </p>
                                                        <p className="office-details">
                                                            <a
                                                                href={`tel:#{item.PhoneNumber}`}
                                                                rel="external"
                                                            >
                                                                {
                                                                    item.OfficeNumber
                                                                }
                                                            </a>
                                                        </p>
                                                        <p className="office-directions">
                                                            <svg
                                                                width="20"
                                                                height="22"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 15 22"
                                                                focusable="false"
                                                                tabIndex="-1"
                                                            >
                                                                <path
                                                                    fill="inherit"
                                                                    d="M0 7.79003c0 3.916 7.06279 13.48273 7.06279 13.48273s7.06279-9.56673
        7.06279-13.48273c0-3.91723-3.1468-7.06279-7.0628-7.06279C3.1468.72724 0 3.8728
        0 7.79004zm3.8522-.00123c0-1.79728 1.41207-3.21058 3.21059-3.21058 1.79728 0
        3.21058 1.41206 3.21058 3.21058 0 1.79852-1.4133 3.21058-3.21058 3.21058-1.79729
        0-3.21058-1.41206-3.21058-3.21058z"
                                                                />
                                                            </svg>
                                                            <a
                                                                href={
                                                                    item.DirectionUrl
                                                                }
                                                                rel="external"
                                                                className="office-link"
                                                            >
                                                                Get directions
                                                            </a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                            </div>
                            <div className="footer-row">
                                <div className="footer-social">
                                    <div className="social-links">
                                        <a
                                            href="https://twitter.com/"
                                            rel="external"
                                            className="social-links-link"
                                            aria-label="Twitter"
                                            title="Twitter"
                                        >
                                            <svg
                                                width="20"
                                                height="20"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 21 18"
                                                focusable="false"
                                                tabIndex="-1"
                                            >
                                                <path
                                                    fill="inherit"
                                                    d="M18.526149,2.84573162 C19.4160944,2.28412538 20.0989611,1.39361548 20.41944,0.332803698 C19.5861948,0.85410949
        18.6654341,1.23111368 17.6830428,1.43521595 C16.899102,0.551206125 15.7786582,0 14.5386512,0 C12.1597112,0 10.231907,
        2.03452261 10.231907,4.54355048 C10.231907,4.89975444 10.2676528,5.2468583 10.3416094,5.57836198 C6.762106,5.38855987
        3.58813171,3.58153979 1.46187709,0.83070923 C1.09086107,1.50411671 0.878851911,2.28412538 0.878851911,3.11613462 C0.878851911,
        4.69175213 1.63937313,6.08276759 2.7955626,6.89917666 C2.08927628,6.8757764 1.42489875,6.6690741 0.843106181,6.33107035
        L0.843106181,6.38697097 C0.843106181,8.58919544 2.32717028,10.4261158 4.30058109,10.8421205 C3.93819334,10.9487217 3.55854904,
        11.0020222 3.1641134,11.0020222 C2.88677584,11.0020222 2.61560134,10.9747219 2.35428773,10.9214213 C2.90156718,12.7258414
        4.49286846,14.041456 6.37876387,14.0765564 C4.90332805,15.29597 3.04578271,16.021378 1.02799789,16.021378 C0.680401479,16.021378
        0.336502905,16.0018778 0,15.9589773 C1.9068498,17.2472916 4.17115689,18 6.60433175,18 C14.5300229,18 18.8614193,11.0761231
        18.8614193,5.07135635 C18.8614193,4.87375415 18.858954,4.67745197 18.8503258,4.48374982 C19.6921993,3.8428427 20.4243705,3.0420338
        21,2.13072367 C20.2271527,2.49212769 19.3963726,2.73653041 18.526149,2.84573162 Z"
                                                />
                                            </svg>
                                        </a>

                                        <a
                                            href="https://www.linkedin.com/"
                                            rel="external"
                                            className="social-links-link"
                                            aria-label="LinkedIn"
                                            title="LinkedIn"
                                        >
                                            <svg
                                                width="22"
                                                height="22"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 22 22"
                                                focusable="false"
                                                tabIndex="-1"
                                            >
                                                <path
                                                    fill="inherit"
                                                    d="M1.50447,6.41311 L5.40263,6.41311 L5.40263,19.99871 L1.50447,19.99871 L1.50447,6.41311 Z M3.35419,4.7138 L3.32596,4.7138 C1.91486,4.7138 1,3.67525 1,2.3601 C1,1.01807 1.94191,0 3.38123,0 C4.81938,0 5.70367,1.0155 5.7319,2.35626 C5.7319,3.6714 4.81939,4.71379 3.3542,4.71379 L3.35419,4.7138 Z M21,20 L16.57973,20 L16.57973,12.96837 C16.57973,11.12819 15.88829,9.87322 14.36783,9.87322 C13.20484,9.87322 12.55809,10.71968 12.25706,11.53797 C12.14416,11.82994 12.16181,12.23844 12.16181,12.64823 L12.16181,20 L7.78269,20 C7.78269,20 7.83913,7.54514 7.78269,6.41311 L12.16181,6.41311 L12.16181,8.54527 C12.42051,7.61301 13.81985,6.28249 16.05291,6.28249 C18.82339,6.2825 21,8.23793 21,12.44462 L21,20 Z"
                                                />
                                            </svg>
                                        </a>
                                        <a
                                            href="https://instagram.com/"
                                            rel="external"
                                            className="social-links-link"
                                            aria-label="Instagram"
                                            title="Instagram"
                                        >
                                            <svg
                                                width="24"
                                                height="24"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                focusable="false"
                                                tabIndex="-1"
                                            >
                                                <path
                                                    fill="inherit"
                                                    d="M12,0 C8.74,0 8.333,0.015 7.053,0.072 C5.775,0.132 4.905,0.333 4.14,0.63 C3.351,0.936 2.681,1.347 2.014,2.014 C1.347,2.681 0.935,3.35 0.63,4.14 C0.333,4.905 0.131,5.775 0.072,7.053 C0.012,8.333 0,8.74 0,12 C0,15.26 0.015,15.667 0.072,16.947 C0.132,18.224 0.333,19.095 0.63,19.86 C0.936,20.648 1.347,21.319 2.014,21.986 C2.681,22.652 3.35,23.065 4.14,23.37 C4.906,23.666 5.776,23.869 7.053,23.928 C8.333,23.988 8.74,24 12,24 C15.26,24 15.667,23.985 16.947,23.928 C18.224,23.868 19.095,23.666 19.86,23.37 C20.648,23.064 21.319,22.652 21.986,21.986 C22.652,21.319 23.065,20.651 23.37,19.86 C23.666,19.095 23.869,18.224 23.928,16.947 C23.988,15.667 24,15.26 24,12 C24,8.74 23.985,8.333 23.928,7.053 C23.868,5.776 23.666,4.904 23.37,4.14 C23.064,3.351 22.652,2.681 21.986,2.014 C21.319,1.347 20.651,0.935 19.86,0.63 C19.095,0.333 18.224,0.131 16.947,0.072 C15.667,0.012 15.26,0 12,0 Z M12,2.16 C15.203,2.16 15.585,2.176 16.85,2.231 C18.02,2.286 18.655,2.48 19.077,2.646 C19.639,2.863 20.037,3.123 20.459,3.542 C20.878,3.962 21.138,4.361 21.355,4.923 C21.519,5.345 21.715,5.98 21.768,7.15 C21.825,8.416 21.838,8.796 21.838,12 C21.838,15.204 21.823,15.585 21.764,16.85 C21.703,18.02 21.508,18.655 21.343,19.077 C21.119,19.639 20.864,20.037 20.444,20.459 C20.025,20.878 19.62,21.138 19.064,21.355 C18.644,21.519 17.999,21.715 16.829,21.768 C15.555,21.825 15.18,21.838 11.97,21.838 C8.759,21.838 8.384,21.823 7.111,21.764 C5.94,21.703 5.295,21.508 4.875,21.343 C4.306,21.119 3.915,20.864 3.496,20.444 C3.075,20.025 2.806,19.62 2.596,19.064 C2.431,18.644 2.237,17.999 2.176,16.829 C2.131,15.569 2.115,15.18 2.115,11.985 C2.115,8.789 2.131,8.399 2.176,7.124 C2.237,5.954 2.431,5.31 2.596,4.89 C2.806,4.32 3.075,3.93 3.496,3.509 C3.915,3.09 4.306,2.82 4.875,2.611 C5.295,2.445 5.926,2.25 7.096,2.19 C8.371,2.145 8.746,2.13 11.955,2.13 L12,2.16 Z M12,5.838 C8.595,5.838 5.838,8.598 5.838,12 C5.838,15.405 8.598,18.162 12,18.162 C15.405,18.162 18.162,15.402 18.162,12 C18.162,8.595 15.402,5.838 12,5.838 Z M12,16 C9.79,16 8,14.21 8,12 C8,9.79 9.79,8 12,8 C14.21,8 16,9.79 16,12 C16,14.21 14.21,16 12,16 Z M19.846,5.595 C19.846,6.39 19.2,7.035 18.406,7.035 C17.611,7.035 16.966,6.389 16.966,5.595 C16.966,4.801 17.612,4.156 18.406,4.156 C19.199,4.155 19.846,4.801 19.846,5.595 Z"
                                                />
                                            </svg>
                                        </a>
                                        <a
                                            href="https://medium.com/"
                                            rel="external"
                                            className="social-links-link"
                                            aria-label="Medium"
                                            title="Medium"
                                        >
                                            <svg
                                                width="20"
                                                height="20"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 22 19"
                                                focusable="false"
                                                tabIndex="-1"
                                            >
                                                <path
                                                    fill="inherit"
                                                    d="M21.9327307,3.47648347 C21.9646836,3.50222408 21.9751945,3.54769915 21.9531217,3.58459402 L15.2837923,
        14.6431878 L10.4889636,6.69277231 L14.3096489,0.357150921 C14.4467101,0.13020457 14.6996006,0 14.9537524,
        0 C15.0151356,0 15.0763086,0.0096527276 15.1362203,0.0253115968 C15.1839395,0.0377528902 15.231028,0.0531972543
        15.2758041,0.0761492955 L21.9123397,3.46211163 L21.9199075,3.46597272 C21.9251629,3.46854678 21.9285264,3.47305139
        21.9327307,3.47648347 Z M8.38448602,5.24958228 L14.6665966,15.6665914 L8.38448602,12.4614568 L8.38448602,5.24958228
        Z M15.6104688,16.1481553 L22,5.55332144 L22,18.2496613 C22,18.8893154 21.4544881,19.1297756 20.781585,18.786353
        L15.6104688,16.1481553 Z M7.2938827,3.48677971 C7.3180576,3.4990065 7.33340341,3.5243181 7.33340341,3.55177475
        L7.33340341,18.2496613 C7.33340341,18.7198564 7.08450704,19 6.72966155,19 C6.60374185,19 6.4643683,18.9646067
        6.3180576,18.8899589 L0.609207484,15.9774092 C0.274122346,15.8064487 0,15.353843 0,14.971595 L0,0.691993316
        C0,0.31596595 0.199075047,0.0918081647 0.482867353,0.0918081647 C0.583771284,0.0918081647 0.695186042,0.120122832
        0.812276645,0.179755238 L7.2938827,3.48677971 Z"
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <ul className="footer-links">
                                    <li className="footer-link-item">
                                        <a href="/uk/privacy">Privacy</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
