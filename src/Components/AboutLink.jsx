import React from 'react'
import { Link } from 'react-router-dom'
import { FaReceipt } from 'react-icons/fa'

function AboutLink() {
  return (
    <div className='aboutLink'>
      <Link to='./about'>
        <FaReceipt size={40} />
      </Link>
    </div>
  )
}

export default AboutLink

/* <Link to={{ pathname: './about', search: '?sort=name', hash: 'hello' }}> */
