import React from 'react'
import './Resources.css'
import books from '../../pics/books.png'

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
  },
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

function ProfileResources() {
  return (
    <div className="resources-container-profile">
      <div className="r-r-container">
        <div className="r-r">Recomended Resources</div>
        <div className="see-more">See more</div>
      </div>
      <div className="resources-component1">
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
      {/* ---------------------------- */}
      <div className="r-v-r-container">
        <div className="r-v-r">Recently Viewed Resources</div>
        <div className="see-more">See more</div>
      </div>
      <div className="resources-component2">
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
  )
}

export default ProfileResources