import React from 'react'
import { Link } from 'react-router-dom'
import linda from '../../pics/linda-profile.jpeg'
import Search from '../../pics/search_button_magnify_glass.png'
import Chat from '../../pics/chat_icon_comic_bubble.png'
import Logo from '../../pics/teachers_lounge_logo.png'
import './Nav.css'

function Nav() {
  return (
    <nav className='main-nav-bar'>
      <div>
        <Link to="/">
          <img className='tl-logo' src={Logo} alt='logo-pic'></img>
        </Link>
      </div>

      <div className='search-button-bar'>
        <input type="text" placeholder="Search.." />
        <img className='search-button' src={Search} alt='search'></img>
      </div>

      <div className="nav-links">
        <div className='network-navz'>
          Network
      </div>


        <div className='resources-navz'>
          Resources
      </div>


        <div className='discuss-navz'>
          Discuss
      </div>

        <div className='settings-navz'>
          Setting
      </div>


        <div className='help-navz'>
          Help
      </div>
      </div>

      <div className='parent-chat-icon'>
        <img className='chat-icon-bubble' src={Chat} alt='chat-bubble'></img>
      </div>

      <div>
        <Link to="/profile">
          <img className='nav-profile-pic' src={linda} alt='profile-pic'></img>
        </Link>
      </div>

    </nav>

  )
}

export default Nav