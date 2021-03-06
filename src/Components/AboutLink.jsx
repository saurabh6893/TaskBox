import React from 'react'
import { Link } from 'react-router-dom'
import { FaReceipt } from 'react-icons/fa'

function AboutLink() {
  return (
    <div className='aboutLink'>
      <Link to='./about'>
        <FaReceipt size={50} />
      </Link>
    </div>
  )
}

export default AboutLink
