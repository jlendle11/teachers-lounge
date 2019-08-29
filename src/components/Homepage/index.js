import React from 'react'
import Discussions from '../Discussions'
import Resources from '../Resources'
import Teachers from '../Teachers'

// import css
import './Homepage.css'



const resourcesArray = [
    {
        title: "Metric Slides",
        type: "Slides",
        subject: "Chemistry"
    },
    {
        title: "Cool Animals",
        type: "Activity",
        subject: "Science"
    },
    {
        title: "Title",
        type: "Type",
        subject: "Subject"
    },
    {
        title: "Title",
        type: "Type",
        subject: "Subject"
    },
    {
        title: "Title",
        type: "Type",
        subject: "Subject"
    }
]

function Homepage() {
    return (
        <div>
            <h1>Homepage</h1>
            <Teachers />
            <Resources />
            <Discussions />
        </div>
    )
}

export default Homepage