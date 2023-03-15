import React from 'react'
import { Project } from './Components'

const Projects = ({ projectList }) => {
    return (
        <>
            <div style={{ display : "flex", flexDirection: "column"}}>
                {projectList?.map((project) => <Project project={project} />)}
            </div>
        </>
    )
}

export default Projects