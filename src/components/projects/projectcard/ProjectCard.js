import React from 'react'
import {motion} from "framer-motion"
import "./ProjectCard.css"
function ProjectCard({project}) {
  return (
    <>
    <div className='project-card'>
        <div className="project-img"><img src={project.image} alt="" />
        </div>

    </div>
    <div className="project-title">
          <h3>{project.name}</h3>
        </div>
        <div className="project-desc">
          <p>{project.about}</p>
        </div>
        <div className="project-links">
          {project.livepreview&& (
          <a className='link1' href={project.livepreview}>Live Preview</a>
          )}
          {project.github&& (
          <a className='link2' href={project.github}>Check on Github</a>
          )}
        </div>
    </>
  )
}

export default ProjectCard