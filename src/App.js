// Packages and Libraries
import React from 'react'
import { Route, Link } from 'react-router-dom'
// Components
import Homepage from './components/Homepage'
import Profile from './components/Profile'
// Styling 
import './App.css'

function App() {
  return (
    <div className="App">
      <nav className='nav-bar'>
        <div>
          <Link to="/" >Home</Link>
        </div>
        <div>
          <Link to="/profile">Profile</Link>
        </div>
      </nav>
      <main>
        <Route 
            exact path="/" 
            component={Homepage}
        />
        <Route 
            exact path="/profile" 
            component={Profile}
        />
      </main>
    </div>
  )
}

export default App;
