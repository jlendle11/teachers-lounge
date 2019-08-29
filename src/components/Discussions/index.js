import React from 'react'

import './Discussions.css'

function Discussions() {
    return (
        <div className="discuss-container">
            <div  className="discuss-header">
                <p className="discuss-title">Discussions</p>
            </div>
            <div className="discuss-box box-one">
                <div className="box-top">
                    <p className="box-top-left box-all">Russian Social Engineering<span className="discuss-span"> in Geopolotics</span></p>
                    <p className="box-top-right box-all">— posts</p>
                </div>
                <div className="box-bot">
                    <p className="box-bot-left box-all">By Fu45</p>
                    <p className="box-bot-right box-all">Last post 8:14pm</p>
                </div>
            </div>
            <div className="discuss-box box-two">
            <div className="box-top">
                    <p className="box-top-left box-all">Wood Wid Web<span className="discuss-span"> in Mycology</span></p>
                    <p className="box-top-right box-all">420 posts</p>
                </div>
                <div className="box-bot">
                    <p className="box-bot-left box-all">By ShroomWiz</p>
                    <p className="box-bot-right box-all">Last post 8:14pm</p>
                </div>
            </div>
            <div className="discuss-box box-one">
                <div className="box-top">
                    <p className="box-top-left box-all">Doh! How the Simpsons shaped the 90’s<span className="discuss-span"> in Funziez</span></p>
                    <p className="box-top-right box-all">1999 posts</p>
                </div>
                <div className="box-bot">
                    <p className="box-bot-left box-all">By IPfreely</p>
                    <p className="box-bot-right box-all">Last post 8:14pm</p>
                </div>
            </div>
            <div className="discuss-box box-two">
                <div className="box-top">
                    <p className="box-top-left box-all">Who ate my stew?<span className="discuss-span"> in WTFrant</span></p>
                    <p className="box-top-right box-all">5 posts</p>
                </div>
                <div className="box-bot">
                    <p className="box-bot-left box-all">By WhoatemyStu</p>
                    <p className="box-bot-right box-all">Last post 8:14pm</p>
                </div>
            </div>
            <div className="discuss-foot-container">
                <a className="discuss-foot" href="#" >Go to all discussions</a>
            </div>
        </div>
    )
}

export default Discussions