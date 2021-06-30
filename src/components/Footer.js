import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Linkedin, Github, Envelope, HeartFill } from 'react-bootstrap-icons';

function Footer() {
    return(
        <footer>
            <div className = "container-fluid bg-dark text-white text-center mt-5 py-5">
                <h1 className = "text-white">Interested in working with me?</h1>
                <Link to = "/contact" ><button type = "button" className = "btn btn-outline-light">Let's talk</button></Link>
                <div className = "row text-center align-items-center">
                    <div className = "col-12 col-md-4 my-5">
                        <h5 className = "text-info">More Links</h5>
                        <a href = "/" className = "text-white">Blogs</a><br />
                        <Link to = "/" className = "text-white">Home</Link><br />
                        <Link to = "/contact" className = "text-white">Contact me</Link><br />
                        <Link to = "/write-a-recommendation" className = "text-white">Write a recommendation <HeartFill size = {15}/></Link>
                    </div>

                    <div className = "col-12 col-md-4 my-5">
                        <p className = "about justify-content-center" >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus nulla gravida orci a odio sit aliquip ut nullam.
                        </p>
                    </div>

                    <div className = "col-12 col-md-4 my-5">
                        <a href = "/" ><Linkedin color = "white" className = "m-1" size = {40}/></a> <br />
                        <a href = "/" ><Github color = "white" className = "m-1" size = {40}/></a> <br />
                        <a href = "/" ><Envelope color = "white" className = "m-1" size = {40}/></a> 
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;