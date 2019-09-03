import React from 'react'
import Discussions from '../Discussions'
import Resources from '../Resources'
import Teachers from '../Teachers'


// import css
import './Homepage.css'





function Homepage() {
    return (
        <div>
            <Resources />
            <Teachers />
            <Discussions />
        </div>
    )
}

export default Homepage