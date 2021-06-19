import React from 'react'

function ProjectPage(props) {
    return (
        <div>
            <h1 className = "py-5 my-5">Project {props.match.params.id}</h1>
        </div>
    )
}

export default ProjectPage;