import React from 'react'


class Footer extends React.Component {

    render() {
        return (
            <div className="fotter-section">
                <p className="contactus">Contact Us</p>
                <table>
                    <tr>
                        <td>
                            <div>
                                <i class="fa fa-envelope" style={{ fontSize: "55px", color: "red" }}></i>
                                <h3>ragulmailz@gmail.com</h3>
                            </div>
                        </td>
                        <td>
                            <div className="phone">
                                <i class="fa fa-phone" style={{ fontSize: "55px", color: "red" }} />
                                <h3 className="call">Call Us:</h3>
                                <h3>+1 5589 55488 55</h3>
                            </div>
                        </td>
                        <td style={{ position: "relative", left: "500px", top: "20px" }}>
                            <i class="fa fa-map-marker" style={{ fontSize: "60px", color: "red" }}></i>
                            <h3>Our Address:</h3>
                            <h3 style={{ position: 'relative', left: "-0px" }}>A108 Adam Street,</h3>
                            <h3>New York, NY 535022</h3>
                        </td>





                    </tr>
                </table>

            </div>



        )
    }



}

export default Footer;