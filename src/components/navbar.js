import React from "react";
import { Link } from "react-scroll";

class Navbar extends React.Component {
    render() {
        return (
            <div id="header">
                <table className="">
                    <tr>
                        <td className="name">
                            Ragul
                        </td>
                        <td className="nav">
                            <Link to="photo" spy={true} smooth={true}>
                                Home
                            </Link>
                        </td>
                        <td className="nav">
                            <Link to="about" spy={true} smooth={true}>
                                About
                            </Link>
                        </td>
                        <td className="nav">
                            <Link to="services" spy={true} smooth={true}>
                                Services
                            </Link>
                        </td>
                        <td className="nav">
                            <Link to="feedback" spy={true} smooth={true}>
                                Feedback
                            </Link>
                        </td>
                        <td className="nav">
                            <Link to="team" spy={true} smooth={true}>
                                Team
                            </Link>
                        </td>
                        <td className="nav">
                            <Link to="FAQ" spy={true} smooth={true}>
                                FAQ
                            </Link>
                        </td>


                    </tr>

                </table>

            </div>


        )
    }




}

export default Navbar;