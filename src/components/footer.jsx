import React from "react"
import "./footer.css"
const Footer = () => {
    return(<div className="main">
        <ul className="footer-box">
            <li className="button-wrap">
                <div className="review">
                    <a href="/">REVIEW</a>
                </div>
            </li>
            <li>
                <li className="review">
                    <a href="/">SAVED</a>
                </li>
            </li>
        </ul>
    </div>)
}

export default Footer;