import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Form, Container, Button } from "react-bootstrap";

class Contact extends Component {
    constructor() {
        super();

        this.state = {
            name: "",
            email: "",
            description: "",
            submitMessage: "",
            submitMessageTextColor: "",
        };
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    onSubmit = (event) => {
        event.preventDefault();

        let isSuccessful = true;
        const { name } = this.state;

        if (isSuccessful) {
            this.setState({
                submitMessage: `Thank you ${name}. I will contact you soon!`,
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
        const { submitMessage, submitMessageTextColor } = this.state;
        return (
            <div className="m-4">
                <h1 className="text-center pt-4"><span className="text-info">Thank you! </span>for your interest </h1>
                <Container >
                    <Form onSubmit = {this.onSubmit}>
                        <Form.Group className="m-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name="name" onChange={this.onChange} placeholder="Enter your name" required />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail" className="m-3">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" name="email" onChange={this.onChange} placeholder="name@email.com" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlTextarea1" className="m-3">
                            <Form.Label>Tell me about your project</Form.Label>
                            <Form.Control as="textarea" name="description" onChange={this.onChange} rows={3} />
                        </Form.Group>
                        <center><Button variant="dark" type="submit" className="alignRight">Let's talk business</Button></center>
                    </Form>

                    <div className="py-5 mx-2 text-center">
                        <h5 className={submitMessageTextColor}>{submitMessage}</h5>
                    </div>
                </Container>
            </div>
        );
    }
}

export default Contact;