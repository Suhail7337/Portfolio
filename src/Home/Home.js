import React from 'react'
import "./Home.css"
import Header from '../components/Header/Header'
import Body from '../components/body/body'
import Project from '../components/projects/Project'
import Skills from '../components/skills/Skills'




function Home() {
  return (
    <div className='home'>
        <div className="header">
          <Header/>
        </div>
        <div className="body">
          <Body/>
        </div>
        <div className="projects" id='projects'>
          <Project/>
        </div>
        <div className="skills" id='skills'>
          <Skills/>
        </div>
    </div>
  )
}

export default Home