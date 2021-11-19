import React from 'react';
class About extends React.Component {


    render() {
        return (
            <div id="about">
                <table>
                    <tr>
                        <td>
                            <img className="about-photo" src="asset/ragul.jpg" />
                        </td>
                        <td>
                            <div className="about-me">
                                <div className="tech-skills" style={{ height: "250px" }}>

                                    <div className="border">
                                        <h1>My Skills</h1>
                                        <p>HTML</p>
                                        <div class="container">
                                            <div class="skills html">90%</div>
                                        </div>

                                        <p>CSS</p>
                                        <div class="container">
                                            <div class="skills css">80%</div>
                                        </div>

                                        <p>JavaScript</p>
                                        <div class="container">
                                            <div class="skills js">65%</div>
                                        </div>

                                        <p>React</p>
                                        <div class="container">
                                            <div class="skills php">60%</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="my-profile">
                                    <p>Ragul (born MAY 26, 1999) is an Indian andHis father, Ravi was an Business man and his mother, SUDHA. As a child, he travelled across India following his father's profession, before finally settling in Tamil nadu in 2006, where he finished his secondary and college education.Ragul started trading stock markets at the age of 20, when he started managing his father's trading account. After spending considerable time as a professional trader, he worked at a call centre for two years due to the lack of trading Capital senior UI developer at British broadcasting giant BSkyB and based in Leeds, Ragul first got into development aged 21. Specialising in CSS architecture and frontend performance, he's recently been working on "a pretty huge mobile build" for Sky. Outside of work he's been working on his open source OOCSS framework inuit.css, and also on csswizardry-grids, a Sass-based responsive grid system.
                                    </p>
                                </div>

                            </div>
                        </td>
                    </tr>
                </table>
            </div>

        )
    }





}



export default About;
