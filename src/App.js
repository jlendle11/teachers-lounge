// Packages and Libraries
import React from 'react'
import { Route } from 'react-router-dom'
// Components
import Homepage from './components/Homepage'
import Profile from './components/Profile'
import Nav from './components/Nav'
import Footer from './components/Footer'
// Styling 
import './App.css'

function App() {
  return (
    <div className="App">
      <Nav/>
      <main className="App-body">
        <Route 
            exact path="/" 
            component={Homepage}
        />
        <Route 
            exact path="/profile" 
            component={Profile}
        />
      </main>
      <Footer/>
    </div>
  )
}

export default App;
