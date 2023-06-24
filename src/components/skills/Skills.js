import React, { useState } from 'react'
import "./Skills.css"
import { SkillsData } from '../data/skill'
import SkillCard from './SkillCard'
function Skills() {
    const data = SkillsData

    const [isShown, setIsShown] = useState(false)
  return (
    <div className='skills'>
        <label className='section-title'>Skills</label>
        {/* <label className='skills-section-title'></label> */}
        <div className="skills-container">
            {data.map((item)=>{
                return(
                    <div className="skills-section">
                        {/* <label className="skills-section-title">{item.type}</label> */}
                        <div className="skills-list">
                            {item.list.map((skill,i)=>{
                                return( 
                                    <SkillCard skill={skill} i={i}/>
                                )
                            })}
                        </div> 
                        
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Skills