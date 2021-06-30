import React, { Component } from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";

class Test extends Component {
    onClick = async () => {
        const response = await axios.post("http://127.0.0.1:5000/hello");
        console.log(response);
    };
    render() { 
        return ( 
            <div>
                <Button className = "my-5" onClick = {this.onClick}>Test</Button>
            </div>
         );
    }
}
 
export default Test;