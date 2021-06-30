import React from 'react'
import { Consumer } from "../context";
import ReactMarkdown from "react-markdown";
import { Container } from "react-bootstrap";

function ProjectPage(props) {
    return (
        <Consumer>
        {(value) => {
            const { projects } = value;
            const id = props.match.params.id;
            const project = projects.filter((project) => project.id == id)[0];
            const {imageUrl, title, excerpt, body} = project;
            return (
                <div>
                    <Container className="text-center p-5">
                        <div className = "justify-content-center">
                            <img src = {imageUrl} alt = {title} className = "img-fluid w-100" />
                        </div>
                        <h1 className = "font-weight-light text-center my-5">{title}</h1>
                        <p className = "font-weight-light text-center my-5">{excerpt}</p>
                        <ReactMarkdown>{body}</ReactMarkdown>
                    </Container>
                </div>
            );
        }}
    </Consumer>
    );
}

export default ProjectPage;