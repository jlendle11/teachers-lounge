import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav className='nav-bar'>
        <div>
          <Link to="/" >Home</Link>
        </div>
        <div>
          <Link to="/profile">Profile</Link>
        </div>
      </nav>
    )
}

export default Nav