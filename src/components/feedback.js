import React from 'react'


class Feedback extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

            name: "",
            noname: false,
            email: "",
            noemail: false,
            invalidemail: false,
            subject: "",
            nosubject: false,
            textarea: "",
            notextarea: false

        }
        this.validate = this.validate.bind(this);
    }
    inputchange(event) {
        var field = event.target.name;
        var value = event.target.value;
        // console.log (value,"***")


        if (field == "name") {
            this.setState({ name: value });
        }
        else if (field == "email") {
            this.setState({ email: value });
        }
        else if (field == "subject") {
            this.setState({ subject: value })
        }
        else {
            this.setState({ textarea: value })
        }

        console.log(this.state.textarea, "***")


    }
    validate() {

        var name = this.state.name;
        var email = this.state.email;
        var subject = this.state.subject;
        var textarea = this.state.textarea;
        var pattern = "\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}"

        if (name) {
            this.setState({ noname: false })

        }
        else {
            this.setState({ noname: true })

        }
        if (email) {

            if (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
                this.setState({ noemail: false })
                this.setState({ invalidemail: false })

            }
            else {
                this.setState({ noemail: false })
                this.setState({ invalidemail: true })

            }
        }
        else {

            this.setState({ noemail: true })
            this.setState({ invalidemail: false })

        }
        if (subject) {
            this.setState({ nosubject: false })

        }
        else {
            this.setState({ nosubject: true })

        }
        if (textarea) {
            this.setState({ notextarea: false })

        }
        else {
            this.setState({ notextarea: true })
        }


    }




    render() {
        return (
            <>
                <div id="feedback" className="feedback">
                    <div className="form">
                        <div>
                            <input type="text" placeholder="Name" onChange={(event) => this.inputchange(event)} id="name" name="name" />
                            <div>
                                {this.state.noname ? <label style={{ color: "red" }}> Enter your Name</label> : ""}
                            </div>
                        </div>
                        <div>
                            <input type="email" placeholder="Email" onChange={(event) => this.inputchange(event)} id="email" name="email" />
                            <div>
                                {this.state.noemail ? <label style={{ color: "red" }}> Enter your Email</label> : ""}
                            </div>
                            <div>
                                {this.state.invalidemail ? <label style={{ color: "red" }}> Invalid Email Id</label> : ""}
                            </div>

                        </div>
                        <div>
                            <input type="text" placeholder="Subject" onChange={(event) => this.inputchange(event)} id="subject" name="subject" />
                            <div>
                                {this.state.nosubject ? <label style={{ color: "red" }}> Please mention the subject</label> : ""}
                            </div>
                        </div>
                        <div>
                            <  textarea placeholder="Text area" name="textarea" onChange={(event) => this.inputchange(event)} id="Text area" />
                        </div>
                        <div>
                            {this.state.notextarea ? <label style={{ color: "red" }}> Please enter your message</label> : ""}
                        </div>
                        <div >
                            <input type="button" onClick={this.validate} className="submit" value="submit" />
                        </div>
                    </div>
                </div>
            </>





        )
    }
}
export default Feedback;