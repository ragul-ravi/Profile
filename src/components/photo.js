import React from "react";

class Photo extends React.Component {

    render() {

        return (
            <div id="photo">
                <section>
                    <img src="asset/img.webp" alt="display image" />
                    <div className="imagequots">
                        <div class="text">
                            <p className="quote">Risk comes from not knowing what you’re doing.”  – Warren Buffett</p>
                        </div>

                    </div>
                </section>

            </div>


        )
    }
}

export default Photo;