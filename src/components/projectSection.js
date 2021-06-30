import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "./projectCard.js";
import { Consumer } from "../context";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ArrowRight } from 'react-bootstrap-icons';
import {Container} from "react-bootstrap";

function ProjectSection() {
    return (
        <Consumer>
            {(value) => {
                const { projects } = value;
                return (
                    <div className = "container text-center my-5">
                        <h1 className = "font-weight-light">
                            My <span className = "text-info">Projects</span>
                        </h1>
                        <div className = "lead">I build products. Just like this website.</div>
                        <Container className = "row my-5 pt-3">
                            {projects.slice(0, 3).map((project) => (
                                <div key = {project.id} className = "col-12 col-md-4 my-2">
                                    <ProjectCard project = {project} />
                                </div>
                            ))}
                        </Container>
                        <Link to = "/allprojects" className = "text-right">
                            <h5>See my projects
                                <ArrowRight className="m-1" color="royalblue" size = {20}/>
                            </h5>
                        </Link>
                    </div>
                );
            }}
        </Consumer>
    );
}

export default ProjectSection;