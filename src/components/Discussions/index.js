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
                    <p className="box-top-left box-bot-all">Russian Social Engineering<span className="discuss-span"> in Geopolotics</span></p>
                    <p className="box-top-right box-bot-all">— posts</p>
                </div>
                <div className="box-bot">
                    <p className="box-bot-left box-bot-all">By Fu45</p>
                    <p className="box-bot-right box-bot-all">Last post 8:14pm</p>
                </div>
            </div>
            <div className="discuss-box box-two">
            <div className="box-top">
                    <p className="box-top-left box-bot-all">Wood Wid Web<span className="discuss-span"> in Mycology</span></p>
                    <p className="box-top-right box-bot-all">420 posts</p>
                </div>
                <div className="box-bot">
                    <p className="box-bot-left box-bot-all">By ShroomWiz</p>
                    <p className="box-bot-right box-bot-all">Last post 8:14pm</p>
                </div>
            </div>
            <div className="discuss-box box-one">
                <div className="box-top">
                    <p className="box-top-left box-bot-all">Doh! How the Simpsons shaped the 90’s<span className="discuss-span"> in Funziez</span></p>
                    <p className="box-top-right box-bot-all">1999 posts</p>
                </div>
                <div className="box-bot">
                    <p className="box-bot-left box-bot-all">By IPfreely</p>
                    <p className="box-bot-right box-bot-all">Last post 8:14pm</p>
                </div>
            </div>
            <div className="discuss-box box-two">
                <div className="box-top">
                    <p className="box-top-left box-bot-all">Who ate my stew?<span className="discuss-span"> in WTFrant</span></p>
                    <p className="box-top-right box-bot-all">5 posts</p>
                </div>
                <div className="box-bot">
                    <p className="box-bot-left box-bot-all">By WhoatemyStu</p>
                    <p className="box-bot-right box-bot-all">Last post 8:14pm</p>
                </div>
            </div>
            <div className="discuss-foot-container">
                <div className="discuss-foot">Go to all discussions</div>
            </div>
        </div>
    )
}

export default Discussions