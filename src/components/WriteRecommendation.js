import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Form, Container, Button} from "react-bootstrap";

class WriteRecommendation extends Component {
    constructor() {
        super();
        
        this.state = {
            name: "",
            email: "",
            companyName: "",
            designation: "",
            recommendation: "",
            submitMessage: "",
            submitMessageTextColor: "",
        };
    }

    onChange = (event) => {
        this.setState ({
            [event.target.name]: event.target.value,
        });
    };

    onSubmit = (event) => {
        event.preventDefault();

        let isSuccessful = true;
        const {name} = this.state;
        
        if (isSuccessful) {
            this.setState({
                sumbitMessage: `Thank you ${name}. I will contact you soon!`,
                submitMessageTextColor: "text-info",
            });
        }
        else {
            this.setState({
                submitMessage: "Oops! Something went wrong. Please try again later :(",
                submitMessageTextColor: "text-danger",
            });
        }
    };

    render() {
        const {submitMessage, submitMessageTextColor} = this.state;
        return (
            <div className = "mt-4">
                <h1 className = "text-center pt-4"><span className = "text-info">Thank you! </span>for your interest </h1>
                <Container>
                    <Form>
                        <Form.Group className = "m-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type = "text" name = "name"  onChange = {this.onChange} placeholder = "Enter your name" required/>
                        </Form.Group>
                        <Form.Group controlId = "formBasicEmail" className = "m-3">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type = "email" name = "email" onChange = {this.onChange} placeholder="name@email.com" />
                            <Form.Text className = "text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className = "m-3">
                            <Form.Label>Company/Institution</Form.Label>
                            <Form.Control type = "text" name = "companyName"  onChange = {this.onChange} placeholder = "Enter your company name" required/>
                        </Form.Group>
                        <Form.Group className = "m-3">
                            <Form.Label>Designation</Form.Label>
                            <Form.Control type = "text" name = "designation"  onChange = {this.onChange} placeholder = "Enter your designation" required/>
                        </Form.Group>
                        <Form.Group controlId = "exampleForm.ControlTextarea1" className = "m-3">
                            <Form.Label>Recommendation</Form.Label>
                            <Form.Control as = "textarea" name = "recommendation" onChange = {this.onChange} rows = {3} />
                        </Form.Group>
                        <center><Button variant = "danger" type = "submit" className = "alignRight">Lot's of love</Button></center>
                    </Form>

                    <div className = "py-5 mx-2 text-center">
                        <h5 className = {submitMessageTextColor}>{submitMessage}</h5>
                    </div>
                </Container>
            </div>
        );
    }
}

export default WriteRecommendation;