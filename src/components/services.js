import React from "react";

class Services extends React.Component {
    render() {

        return (
            <div id="services">
                <div className="row">
                    <div className="column" id="iconic">
                        <h2>Linkedin</h2>
                        <a className="linked" href="#" class="fa fa-linkedin"></a>
                        <p id="word">LinkedIn enables you to network with people and professional organizations in your industry. ... You can invite anyone to connect </p>
                    </div>
                    <div className="column">
                        <h2>Pintrest</h2>
                        <a href="#" class="fa fa-pinterest"></a>
                        <p id="word">Pinterest is a visual discovery engine for finding ideas like recipes, home and style inspiration, and more. With billions of Pins on Pinterest, you'll always find ideas to spark inspiration.</p>
                    </div>
                    <div className="column">
                        <h2>Reddit</h2>
                        <a href="#" class="fa fa-reddit"></a>
                        <p id="word">Reddit is a social news platform that allows users to discuss and vote on content that other users have submitted. </p>
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <h2>Snapchat</h2>
                        <a href="#" class="fa fa-snapchat-ghost"></a>
                        <p id="word">Snapchat is a mobile messaging application used to share photos, videos, text, and drawings. </p>
                    </div>
                    <div className="column">
                        <h2>Google</h2>
                        <a href="#" class="fa fa-google"></a>
                        <p id="word">The main purpose of Google Search is to search for text in publicly accessible documents offered by web servers, as opposed to other data, such as images or data contained in databases</p>
                    </div>
                    <div class="column">
                        <h2>Android</h2>
                        <a href="#" class="fa fa-android"></a>
                        <p id="word">Basically, Android is thought of as a mobile operating system. ... It is currently used in various devices such as mobiles, tablets, televisions etc.</p>
                    </div>
                </div>

            </div>
        )
    }


}
export default Services;
