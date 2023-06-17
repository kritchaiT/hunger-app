import React, { useState } from "react"
import "./Header.css"
import { FiMenu, FiX } from "react-icons/fi";

function Header() {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click) /*switch click and unclick*/
    const closeMobileMenu = () => setClick(false)

    return(<div className="header">
        <div className="container">
            <div className="header-con"> {/* contains logo, menus, hamburger menus*/}
                <div className="logo-container">
                    <a href="#">LOGO</a>
                </div>
                <ul className={click ? "menu-active" : "menu"}>
                    <li className="menu-link">
                        <a href="#">HOME</a>
                    </li>
                    <li className="menu-link">
                        <a href="#">ABOUT</a>
                    </li>
                    <li className="menu-link">
                        <a href="#">CONTACT</a>
                    </li>
                    <li className="menu-link">
                        <a href="#">PROFILE</a>
                    </li>
                </ul>
                    <div className="mobile-menu" onClick={handleClick}>
                        {click ? (<FiX />) : (<FiMenu />)}
                    </div>
                </div>
            </div>
        </div>)
}

export default Header;