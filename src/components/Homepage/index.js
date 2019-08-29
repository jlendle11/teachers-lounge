import React from 'react'
import Discussions from '../Discussions'
import Resources from '../Resources'
import Teachers from '../Teachers'

function Homepage() {
    return (
        <div>
            <h1>Homepage</h1>
            <Teachers/>
            <Resources/>
            <Discussions/>
        </div>
    )
}

export default Homepage