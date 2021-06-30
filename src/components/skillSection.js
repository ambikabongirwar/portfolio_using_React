import React from 'react';
import {Consumer} from "../context";
import Skill from "./skillCard";
import {v4 as uuid} from "uuid";

function SkillStack() {
    return (
        <Consumer>
            {(value) => {
                const {skills} = value;
                const finalSkillRow = [];
                for (let i = 0; i < skills.length/4; i++) {
                  let skillRow = skills.slice(i * 4, (i + 1) * 4);
                  finalSkillRow.push(
                    <div key = {uuid()} className = "d-flex flex-row justify-content-around py-3">
                    {skillRow.map((skill) => (
                      <div key = {uuid()}> 
                          <Skill skill = {skill} />
                      </div>
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
            }}
        </Consumer>
    )
  
}

export default SkillStack;