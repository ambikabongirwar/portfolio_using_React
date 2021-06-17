import React from "react";
import ProjectCard from "./projectCard.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ArrowRight } from 'react-bootstrap-icons';

function ProjectSection() {
    const projects = [
        {
            id: 1,
            title: "Project 1",
            imageUrl: "https://www.shapebureau.com/wp-content/uploads/2017/01/web-design-1.jpg",
            excerpt: "This is my project about...",
        },
        {
            id: 2,
            title: "Project 2",
            imageUrl: "https://img.roidfa.com/easy.sudoku.puzzle.solver.free/Images/Logo/sudoku-free-classic-sudoku-puzzles-icon.jpg?version=150",
            excerpt: "This is my project about...",
        },
        { 
            id: 3,
            title: "Project 2",
            imageUrl: "http://1.bp.blogspot.com/-3n3FV3yHmGE/UenxsHtms-I/AAAAAAAAIZo/sKuQGxTWY4U/s1600/TDRS+satellite.jpg",
            excerpt: "This is my project about...",
        },
    ];
    return (
        <div className = "container text-center my-5">
            <h1 className = "font-weight-light">
                My <span className = "text-info">Projects</span>
            </h1>
            <div className = "lead">I build products. Just like this website.</div>
            <div className = "row my-5 pt-3">
                {projects.map((project) => (
                    <div key = {project.id} className = "col-12 col-md-4 my-2">
                        <ProjectCard project = {project} />
                    </div>
                ))}
            </div>
            <a href = "/" className = "text-right">
                <h5>See my projects
                    <ArrowRight className="m-1" color="royalblue" size = {20}/>
                </h5>
              </a>
        </div>

    );
}

export default ProjectSection;