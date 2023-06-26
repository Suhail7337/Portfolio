import React from 'react'
import "./About.css"

function About() {
  return (
    <div className='about'>
      <label className='section-title'>About</label>
        <div className="about-container">
            <div className='about-wrap'>
              <div className="about-year">
                <h5>2011</h5>
                <div className="about-circle "></div>
                 <div className="about-border"></div>
              </div>
                <div className="about-para">
                <p>graduted and  in bsc in computer science </p>
                </div>
             </div>
            <div>
              <div className="about-year">
                <h5>2011</h5>
                <div className="about-circle "></div>
                 <div className="about-border"></div>
              </div>
                <div className="about-para">
                <p>gradutaed in bsc computer science</p>
                </div>
             </div>
            <div>
              <div className="about-year">
                <h5>2011</h5>
                <div className="about-circle "></div>
                 <div className="about-border"></div>
              </div>
                <div className="about-para">
                <p>gradutaed in bsc computer science</p>
                </div>
             </div>
        </div>
    </div>
  )
}

export default About