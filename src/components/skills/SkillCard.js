import React from 'react'
import "./Skillcard.css"
import {motion} from "framer-motion"
function SkillCard({skill,i}) {
	
  return (
   
    <div class="box">
			<div class={"percent" +i}>
				<svg>
					<circle cx="70" cy="70" r="70"></circle>
					{/* <circle cx="70" cy="70" r="70"></circle> */}
				</svg>
					<div class="number">
					<h2>{skill.level}<span>%{skill.icon}</span></h2>
					<p class="text">{skill.name}</p>

					</div>

			</div>
		</div>		
  )
}

export default SkillCard