import React from 'react'
import "./Home.css"
import Header from '../components/Header/Header'
import Body from '../components/body/body'
import Project from '../components/projects/Project'
import Skills from '../components/skills/Skills'
import About from '../components/about/About'




function Home() {
  return (
    <div className='home'>
      <section>
        <Header/>
      </section>
        
        <section className="body">
          <Body/>
        </section>
        <section className="projects" id='projects'>
          <Project/>
        </section>
        <section className="skills" id='skills'>
          <Skills/>
        </section>
        <section className="about">
          <About/>
        </section>
    </div>
  )
}

export default Home