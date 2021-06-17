import React from "react";
import PropTypes from "prop-types";
import dummy from "../assets/dummy-profile.png";

function Title(props) {
    const {name} = props;
    return (
        <div className = "container my-5 row text-center align-items-center" style = {{width: "100%"}}>
            <div className = "col-12 col-md-6">
                <img src = {dummy} alt = "profile_pic" style = {{width: "100%", height: "100%"}} className = "rounded-circle"/>
            </div>
            <div className = "col-12 col-md-6">
                <h1>Hi, My name is <span className = "text-info">{name}</span></h1>
            </div>
        </div>
    );
}

Title.defaultProps = {
    name: "Ambika B",
};

Title.propTypes = {
    name: PropTypes.string.isRequired,
}
 
export default Title;