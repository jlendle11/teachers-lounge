import React from 'react'

// import images for teachersArray
import t1 from '../../pics/t1.png'
import t2 from '../../pics/t2.png'
import t3 from '../../pics/t3.png'

// import images for arrows
import arrowLeft from '../../pics/arrowleft.png'
import arrowRight from '../../pics/arrowright.png'

// import css
import './Teachers.css'

const teachersArray = [
    {
        name: "Sally Jones",
        subject: "Social Studies",
        grade: "Grade 5",
        location: "New York, NY",
        img: t1
    },
    {
        name: "Jeff Smith",
        subject: "Math",
        grade: "Grade 8",
        location: "White Plains, NY",
        img: t2
    },
    {
        name: "Billie Jean",
        subject: "Science",
        grade: "Grade 4",
        location: "Tarrytown, NY",
        img: t3
    },
    {
        name: "Charlie Michaels",
        subject: "Spanish",
        grade: "Grade 11",
        location: "Bronx, NY",
        img: t2
    },
    {
        name: "Debbie Harold",
        subject: "English",
        grade: "Grade 7",
        location: "Brooklyn, NY",
        img: t1
    }
]



function Teachers() {
    return (
        <div className="teachers-container">
            <div className="teachers-text">
                <h3 className="teacher-h3">Meet teachers</h3>
            </div>
            <div className="teachers-text-second">
                <h4 className="teacher-h4">People you may know</h4>
            </div>
            <div className="teachers-card-container">
                <img className="teacher-arrow-left" src={arrowLeft} alt="teacher-arrow-left"></img>
                <div className="teachers-card-wrapper">
                    {teachersArray.map((teacher, index) => {
                        const nospacesnames = teacher.name.split(' ').join('-').toLowerCase()
                        return <div className="teacher-card" id={`${nospacesnames}-${index}`} key={index}>
                            <h5 className="teacher-h5">{teacher.name}</h5>
                            <img className="teacher-image" src={teacher.img} alt={`${teacher.name}`}></img>
                            <p className="teacher-p">{teacher.subject}</p>
                            <p className="teacher-p">{teacher.grade}</p>
                            <p className="teacher-p">{teacher.location}</p>
                            <button className="teacher-button">Connect</button>
                        </div>
                    })}
                </div>
                <img className="teacher-arrow-right" src={arrowRight} alt="teacher-arrow-right"></img>
            </div>
        </div>
    )
}

export default Teachers