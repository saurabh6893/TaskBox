import React from 'react'
import { Link } from 'react-router-dom'
function About() {
  return (
    <div className='about'>
      <h1>About this Project</h1>
      <p>this is a web app made to understand better about react.js</p>
      <p>version:1.0.0</p>
      <p>
        <Link className='theLink' to='/'>
          Back
        </Link>
      </p>
    </div>
  )
}

export default About
