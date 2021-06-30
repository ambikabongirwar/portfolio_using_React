import React from 'react';
import {Consumer} from "../context";
import ProjectCard from "./projectCard";
import {Container} from "react-bootstrap";

function AllProjects() {
    return (
        <Consumer>
            {(value) => {
                const { projects } = value;
                return (
                    <div className = "container text-center my-5 py-5">
                        <h1 className = "font-weight-light py-5">
                            All my <span className = "text-info">Projects</span>
                        </h1>
                        <Container className = "row my-4 pt-4">
                            {projects.map((project) => (
                                <div key = {project.id} className = "col-12 col-md-6 p-5">
                                    <ProjectCard project = {project} />
                                </div>
                            ))}
                        </Container>
                    </div>
                );
            }}
        </Consumer>
    )
}

export default AllProjects;