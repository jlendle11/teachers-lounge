import React from 'react'
import './Resources.css'
import books from '../../pics/books.png'
import leftArrow from '../../pics/leftArrow.png'
import rightArrow from '../../pics/rightArrow.png'

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

function Resources() {
    return (
        <div>

            <div className="resources-container">
                <div className="resources-featured-recommendation">
                    <div className="featured-resources"><div className="f-r">Featured Resources</div>
                    </div>
                    <div className="recommendations"><div className="r">Recommendations</div></div>
                </div>
                <img className="left-arrow" src={leftArrow} alt="left-arrow" />
                <img className="right-arrow" src={rightArrow} alt="left-arrow" />
                <div className="resources-component">
                    {resourcesArray.map((resource, index) => {
                        return (
                            <div key={index} className="resources-content-container">
                                <div className="resources-boxes">

                                    <div className="resources-title-box">
                                        <div className="resources-title">{resource.title}</div>
                                    </div>

                                    <div className="resources-img-box">
                                        <img className="resources-img" src={books} alt="books" />
                                    </div>

                                    <div className="resources-type">{resource.type}</div>
                                    <div className="resources-subject">{resource.subject}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>


        </div>
    )
}

export default Resources