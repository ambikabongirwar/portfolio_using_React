import React, { Component } from 'react';
import {v4 as uuid} from "uuid";
//import RichTextEditor from './RichTextEditor';
import {Consumer} from "../context";
import 'bootstrap/dist/css/bootstrap.min.css';
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import ReactMarkdown from "react-markdown";

import { Container, Row, Col, Form, Button } from "react-bootstrap";

class AddProject extends Component {
    state = {
        imageUrl: "",
        title: "",
        excerpt: "",
        body: "",
        submitMessage: "",
        submitMessageTextColor: "",
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    };

    onBodyChange = (value) => {
        this.setState({
            body: value,
        });
    }

    onSubmit = (addProjectHandler, event) => {
        event.preventDefault();

        let isSuccessful = true;

        if (isSuccessful) {
            this.setState({
                submitMessage: `Project published successfully`,
                submitMessageTextColor: "text-info",
            });
        }
        else {
            this.setState({
                submitMessage: "Publish failed :(",
                submitMessageTextColor: "text-danger",
            });
        }

        const newProject = {
            id: uuid(),
            imageUrl: this.state.imageUrl,
            title: this.state.title,
            excerpt: this.state.excerpt,
            body: this.state.body,
        };

        //handler("ADD_PROJECT", newProject);
        addProjectHandler(newProject);
    };

    render() {
        return (
            <Consumer>
                {(value) => {
                    const {
                        imageUrl,
                        title,
                        body, 
                        submitMessage,
                        submitMessageTextColor,
                    } = this.state;
                    const { addProjectHandler } = value;

                    return (
                        <div className="py-5 my-5">
                            <h1 className="display-4 text-center">Add <span className="text-info">Project</span></h1>
                            <Container fluid>
                                <Row>
                                    <Col xs={12} md={6}>
                                        <Form onSubmit = {this.onSubmit.bind(this, addProjectHandler)}>
                                            <Form.Group>
                                                <Form.Label>Featured Image URL*</Form.Label>
                                                <Form.Control type="text" name="imageUrl" id="imageUrl" onChange={this.onChange} placeholder="Enter URL of the image you want to insert" required/>
                                            </Form.Group>
                                            <br />
                                            <Form.Group>
                                                <Form.Label>Title*</Form.Label>
                                                <Form.Control type="text" name="title" id="title" onChange={this.onChange} placeholder="Enter the title" required />
                                            </Form.Group>
                                            <br />
                                            <Form.Group>
                                                <Form.Label>Excerpt*</Form.Label>
                                                <Form.Control type="text" name="excerpt" id="excerpt" onChange={this.onChange} placeholder="" />
                                            </Form.Group>
                                            <br />
                                            <SimpleMDE 
                                                onChange = {this.onBodyChange}
                                                /*options = {{
                                                    hideIcons: ["preview", "side-by-side", "fullscreen"],
                                                }}*/
                                            />
                                            <center><Button variant="dark" type="submit" className="alignCenter">Publish</Button></center>
                                        </Form>
                                        <br />
                                        <div className="py-5 mx-2 text-center">
                                            <h5 className={submitMessageTextColor}>{submitMessage}</h5>
                                        </div>
                                    </Col>
                                    <Col xs={12} md={6} className="text-center">
                                        <div className = "justify-content-center">
                                            <img src = {imageUrl} alt = {title} className = "img-fluid" />
                                        </div>
                                        <h1 className = "font-weight-light text-center my-5">{title}</h1>
                                        <ReactMarkdown>{body}</ReactMarkdown>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default AddProject;
