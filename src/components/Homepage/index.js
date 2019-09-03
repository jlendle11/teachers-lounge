import React from 'react'
import Discussions from '../Discussions'
import Resources from '../Resources'
import Teachers from '../Teachers'


// import css
import './Homepage.css'





function Homepage() {
    return (
        <div>
            <h1>Welome, Linda</h1>
            <Resources />
            <Teachers />
            <Discussions />
        </div>
    )
}

export default Homepage