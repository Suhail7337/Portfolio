import React from 'react'
import "./Project.css"
import { ProjectData } from '../data/project'
import ProjectCard from './projectcard/ProjectCard'
function Project({project}) {
  const data = ProjectData
  return (
    <div className="project">
      <label className='section-title'>Project</label>
      <div className='project-container-container'>
          {data.map((project) => {
            return (
            <div className="project-container">
              <ProjectCard project={project}/>
            </div>)
          })}
      </div>
    </div>
  )
}

export default Project