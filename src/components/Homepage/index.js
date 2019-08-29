import React from 'react'
import Discussions from '../Discussions'
import Resources from '../Resources'
import Teachers from '../Teachers'

const teachersArray = [
    {
        name: "Sally Jones",
        subject: "Social Studies",
        grade: 5,
        location: "New York, NY"
    },
    {
        name: "Jeff Smith",
        subject: "Math",
        grade: 8,
        location: "White Plains, NY"
    },
    {
        name: "Billie Jean",
        subject: "Science",
        grade: 4,
        location: "Tarrytown, NY"
    },
    {
        name: "Charlie Michaels",
        subject: "Spanish",
        grade: 11,
        location: "Bronx, NY"
    },
    {
        name: "Debbie Harold",
        subject: "English",
        grade: 7,
        location: "Brooklyn, NY"
    }
]

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
            <Teachers/>
            <Resources/>
            <Discussions/>
        </div>
    )
}

export default Homepage