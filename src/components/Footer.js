import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Linkedin, Github, Envelope } from 'react-bootstrap-icons';

function Footer() {
    return(
        <footer>
            <div className = "container-fluid bg-dark text-white text-center mt-5 py-5">
                <h1 className = "text-white">Interested in working with me?</h1>
                <button type = "button" className = "btn btn-outline-light">Let's talk</button>
                <div className = "row text-center align-items-center">
                    <div className = "col-12 col-md-4 my-5">
                        <h5 className = "text-info">More Links</h5>
                        <a href = "/" className = "text-white">Blogs</a><br />
                        <a href = "/" className = "text-white">Home</a><br />
                        <a href = "/" className = "text-white">Contact me</a><br />
                        <a href = "/" className = "text-white">Write a recommendation <i className = "fa fa-heart"></i></a>
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