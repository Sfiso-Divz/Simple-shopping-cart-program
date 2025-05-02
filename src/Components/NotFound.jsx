import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <div className='flex space-x-1'>
        <h1>404</h1>
        <span>|</span>
        <p>Page Not Found</p>
      </div>
      <div>
        <h3><Link to={"/"}>Go back to Home</Link></h3>
      </div>
    </div>
  )
}

export default NotFound
