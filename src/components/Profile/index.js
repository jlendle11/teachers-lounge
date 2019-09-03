import React from 'react'
import './Profile.css'
import ProfileResources from '../Resources/ProfileResources'

function Profile() {
    return (
        <div className="test-profile">

            <div className="row-1">
                <div className="box-1">

                </div>
                <div className="box-2">
                    <div
                        className="bio-title"><h4 className="bio">Bio</h4>
                    </div>
                    <h4 className="bioText">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse semper blandit dictum. Fusce sed quam sed est vehicula semper eu eget nunc.
                        Fusce vehicula venenatis est, non scelerisque lectus gravida scelerisque. Praesent molestie tincidunt nibh in gravida.
                    Fusce molestie, sapien a pellentesque rhoncus, a hendrerit justo nisl sed odio.</h4>
                    <div className="passion-container">
                        <div>
                            <h4 className="passions">Passions:</h4>
                        </div>
                        <div className="bio-buttonContainer">
                            <div className="bio-buttons1">
                                <button className="bio-button1" type="button">Geopolitics</button>
                                <button className="bio-button2" type="button">Mycology</button>
                                <button className="bio-button3" type="button">Fostering cats</button>
                            </div>
                            <div className="bio-buttons2">
                                <button className="bio-button4" type="button">Kayaking</button>
                                <button className="bio-button5" type="button">Crafts</button>
                                <button className="bio-button6" type="button">Math</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="row-2">
                <div className="box-3">
                    <div className="box-3-experience">
                        <h4 className="box-3-experience-title">Experience</h4>
                    </div>
                    <br></br>
                    <div className='box-3-description'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse semper blandit dictum. Fusce sed quam sed est vehicula semper eu eget nunc. Fusce vehicula venenatis est, non scelerisque lectus gravida scelerisque. Praesent molestie tincidunt nibh in gravida. Fusce molestie, sapien a pellentesque rhoncus, orci lorem pharetra lectus, a hendrerit justo nisl sed odio.
                        <br></br>
                        <br></br>
                        Curabitur et risus felis. Sed euismod cursus laoreet. Quisque semper, tortor faucibus maximus imperdiet, neque nibh congue sapien, at elementum augue mauris nec nisi. In sodales sapien in nibh commodo sagittis. Aenean ac sodales risus. Nulla tincidunt et ipsum id imperdiet. Curabitur massa orci, viverra ac vestibulum id, pulvinar sit amet quam. Donec ex turpis, viverra efficitur nibh non, faucibus pretium leo.
    <br></br>
                        <br></br>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse semper blandit dictum. Fusce sed quam sed est vehicula semper eu eget nunc. Fusce vehicula venenatis est, non scelerisque lectus gravida scelerisque. Praesent molestie tincidunt nibh in gravida. Fusce molestie, sapien a pellentesque rhoncus, orci lorem pharetra lectus, a hendrerit justo nisl sed odio.
    <br></br>
                        <br></br>
                        Curabitur et risus felis. Sed euismod cursus laoreet. Quisque semper, tortor faucibus maximus imperdiet, neque nibh congue sapien, at elementum augue mauris nec nisi. In sodales sapien in nibh commodo sagittis. Aenean ac sodales risus. Nulla tincidunt et ipsum id imperdiet. Curabitur massa orci, viverra ac vestibulum id, pulvinar sit amet quam. Donec ex turpis, viverra efficitur nibh non, faucibus pretium leo.
                    </div>


                </div>
                <div className="box-4">
                    <ProfileResources />
                </div>
            </div>

        </div>
    )
}


export default Profile