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
          <a className='link1' href="">Live Preview</a>
          <a className='link2' href="https://github.com/Suhail7337/netflix-clone.git">Check on Github</a>
        </div>
    </>
  )
}

export default ProjectCard