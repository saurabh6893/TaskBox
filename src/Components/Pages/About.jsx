import React from 'react'
import { Link } from 'react-router-dom'
function About() {
  return (
    <div className='about'>
      <h2 className='h2nt'>TaskBox</h2>
      <p>
        This is a WebApp made to understand better about <span>React.js</span>
      </p>
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
