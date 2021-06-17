import React from 'react';
import Skill from "./skillCard";
import {v4 as uuid} from "uuid";

function SkillStack() {
    const skills = [
        {
            name: "HTML5",
            imageUrl: "https://storage.googleapis.com/unschool-portfolio-website/html5.png",
            starsTotal: 3,
            starsActive: 2,
        },
        {
            name: "CSS 3",
            imageUrl: "https://storage.googleapis.com/unschool-portfolio-website/css3.png",
            starsTotal: 3,
            starsActive: 3,
        },
        {
            name: "Javascript",
            imageUrl: "https://storage.googleapis.com/unschool-portfolio-website/javascript.png",
            starsTotal: 3,
            starsActive: 2,
        },
        {
            name: "Bootstrap 4",
            imageUrl: "https://storage.googleapis.com/unschool-portfolio-website/bootstrap4.png",
            starsTotal: 3,
            starsActive: 1,
        },
        {
            name: "React",
            imageUrl: "https://storage.googleapis.com/unschool-portfolio-website/react.png",
            starsTotal: 3,
            starsActive: 3,
        },
        {
            name: "MySQL",
            imageUrl:
              "https://storage.googleapis.com/unschool-portfolio-website/mysql.png",
            starsTotal: 3,
            starsActive: 2,
          },
          {
            name: "Python",
            imageUrl:
              "https://storage.googleapis.com/unschool-portfolio-website/python.png",
            starsTotal: 3,
            starsActive: 3,
          },
          {
            name: "Flask",
            imageUrl:
              "https://storage.googleapis.com/unschool-portfolio-website/flask.png",
            starsTotal: 3,
            starsActive: 2,
          },
          
    ];
    const finalSkillRow = [];
    for (let i = 0; i < skills.length/4; i++) {
      let skillRow = skills.slice(i * 4, (i + 1) * 4);
      finalSkillRow.push(
        <div key = {uuid()} className = "d-flex flex-row justify-content-around py-3">
        {skillRow.map((skill) => (
          <Skill skill = {skill} />
        ))}     
      </div>
      );
    }
  return (
      <div className = "bg-light w-100">
          <div className = "container text-center py-5">
              <h1 className = "font-weight-light"><span className = "text-info">Technology</span> stack</h1>
              <p className = "lead pb-5">My technical proficiencies</p>
          </div>
          {finalSkillRow}
      </div>
  )
}

export default SkillStack;