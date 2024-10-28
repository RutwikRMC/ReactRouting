import React from "react";
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <div className="shadow-sm p-3 mb-5 bg-body-tertiary rounded d-flex align-items-center justify-content-between">
            {/* Left-aligned logo */}
            <div>
                <img style={{ height: "40px" }} src="https://logodix.com/logo/488905.png" alt="Logo" />
            </div>

            {/* Centered navigation */}
            <div className="d-flex align-items-center">
                <NavLink
                    to="/home" // Ensure 'to' prop is added for navigation
                    className={({ isActive }) => (isActive ? "text-orange-700 ms-3 navLink" : "ms-3 spnNavigators navLink")}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) => (isActive ? "text-orange-700 ms-3  navLink" : "ms-3 spnNavigators navLink") }
                >
                    About
                </NavLink>
                <NavLink
                    to="/contact"
                    className={({ isActive }) => (isActive ? "text-orange-700 ms-3  navLink" : "ms-3 spnNavigators navLink")}
                >
                    Contact
                </NavLink>
                <NavLink
                    to="/github"
                    className={({ isActive }) => (isActive ? "text-orange-700 ms-3 spnNavigators navLink" : "ms-3 spnNavigators navLink")}
                >
                    GitHub
                </NavLink>
                <NavLink
                    to="/user/1"
                    className={({ isActive }) => (isActive ? "text-orange-700 ms-3 spnNavigators navLink" : "ms-3 spnNavigators navLink")}
                >
                    User
                </NavLink>
            </div>

            {/* Right-aligned buttons */}
            <div>
                <button type="button" className="btn btn-light logInBtn btn-sm">Log In</button>
                <button type="button" className="btn gtBtn ms-3 btn-sm">Getting Started</button>
            </div>
        </div>
    );
}

export default Header;
