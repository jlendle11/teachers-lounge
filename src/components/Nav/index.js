import React from 'react'
import { Link } from 'react-router-dom'
import linda from '../../pics/Linda.jpeg'
import Search from '../../pics/search_button.png'
import Chat from '../../pics/chat.png'
import Logo from '../../pics/logo.png'
import './Nav.css'

function Nav() {
  return (
    <nav className='navv-bar'>
      <div>
        <Link to="/">
          <img className='logo' src={Logo} alt='logo_pic' onClick={Link}></img>
        </Link>
      </div>

      <div className='search_button_bar'>
        <input className='search_bar' type="text" placeholder="Search.." />
        <span><img className='search_button' src={Search} alt='search'></img></span>
      </div>

      <div className="nav_links">

        <div className='network navz'>
          Network
      </div>


        <div className='resources navz'>
          Resources
      </div>


        <div className='discuss navz'>
          Discuss
      </div>


        <div className='settings navz'>
          Setting
      </div>


        <div className='help navz'>
          Help
      </div>


      </div>

      <div>
        <img className='chat_icon' src={Chat} alt='chat_bubble'></img>
      </div>

      <div>
        <Link to="/profile">
          <img className='profile_pic' src={linda} alt='profile pic'></img>
        </Link>
      </div>

    </nav>

  )
}

export default Nav