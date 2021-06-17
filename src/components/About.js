import React from "react";

function About() {
    return (
        <div className = "container-fluid my-5 text-center bg-light">
            <h1 className = "display-1">
                <span className = "text-info">About</span> me
            </h1>
            <p className = "lead"> I can develop the front and back of an app </p>
            <div className = "row">
                <div className = "col-12 col-md-6">
                    <p><strong>What I can do?</strong></p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud labore tempor ut labore exercitation.</p>
                </div>
                <div className = "col-12 col-md-6">
                    <p><strong>What am I doing currently?</strong></p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud labore tempor ut labore exercitation.</p>
                </div>
                <div className = "col-12 col-md-6">
                    <p> <strong>What do I believe in?</strong></p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud labore tempor ut labore exercitation.</p>
                </div>
                <div className = "col-12 col-md-6">
                    <p> <strong> How I can help you? </strong> </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud labore tempor ut labore exercitation.</p>
                </div>
            </div>
        </div>
    );
}

export default About;