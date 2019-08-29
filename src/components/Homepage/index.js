import React from 'react'
import Discussions from '../Discussions'
import Resources from '../Resources'
import Teachers from '../Teachers'
import leftArrow from '../../pics/leftArrow.png'
import rightArrow from '../../pics/rightArrow.png'

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



function Homepage() {
    return (
        <div>
            <h1>Homepage</h1>
            <Teachers />
            <div className="resources-container">
                <div className="resources-featured-recommendation">
                    <div className="featured-resources"><div className="f-r">Featured Resources</div>
                        </div>
                    <div className="recommendations"><div className="r">Recommendations</div></div>
                </div>
                <img className="left-arrow" src={leftArrow} alt="left-arrow"/>
                <img className="right-arrow" src={rightArrow} alt="left-arrow"/>
                <div className="resources-component">
                    <Resources />
                </div>
            </div>
            <Discussions />
        </div>
    )
}

export default Homepage