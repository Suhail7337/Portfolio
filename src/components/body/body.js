import React from 'react'
import "./body.css"
import {motion} from "framer-motion"
function Body() {
  return (
    <motion.div className='body'
    initial={{x:-1000}}
    animate={{x:0}}
    transition={{delay:1,duration:1}}
    >
        <div className="body-info">
            <h2><span>Hello,I'm Suhail,</span> Web Developer</h2>
            <p>seeking to apply competent developent skills with focus on collaboration,communication,and passion</p>
            <a href="/cv.pdf" download>Download CV</a>
        </div>
        <div className="body-profile">
            <div className="one"> </div>
            <div className='two'></div>
            <div className="three"></div>
        </div>
    </motion.div>
  )
}

export default Body