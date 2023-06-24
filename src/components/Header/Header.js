import React from 'react'
import "./Header.css"
import {AiFillInstagram,AiFillLinkedin} from "react-icons/ai"
import {BsFacebook} from "react-icons/bs"
function Header() {
  return (
    <div className='header'> 
      <div className="header-name">
        <h3>Portfolio</h3>
      </div>
      <div className="header-options">
        <div className='header-option'>
        <a href='#projects'>Projects</a>
        </div>
        <div className='header-option'>
        <a href="#skills">Skills</a>
        </div>
        <div className='header-option'>
        <a href="#about">About me</a>
        </div>
      </div>
      <div className="header-icons">
        <div className="header-icon">
          <AiFillInstagram/>
        </div>
        <div className='header-icon'>
          <BsFacebook/>
        </div>
        <div className='header-icon'>
          <AiFillLinkedin/>
        </div>
      </div>
    </div>
  )
}

export default Header