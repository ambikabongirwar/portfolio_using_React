import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand text-uppercase text-info px-4 fw-bold" href="/">Ambika Bongirwar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse px-5" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center justify-content-around">
                        <li className="nav-item mx-3">
                            <a className="nav-link active" href="/">Home</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link" href="/">Project</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link" href="/">Blogs</a>
                        </li>
                        <li className="nav-item mx-3">
                            <button className = "btn btn-sm btn-outline-info"><Link className="nav-link" to = "/contact">Contact me</Link></button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;