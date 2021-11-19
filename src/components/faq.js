import React from 'react'


class Faq extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            check: true,
            check1: true,
            check2: true,
            check3: true
        }
        this.check = this.check.bind(this);
        this.check1 = this.check1.bind(this);
        this.check2 = this.check2.bind(this);
        this.check3 = this.check3.bind(this);
    }

    check() {

        if (this.state.check == true) {
            this.setState({ check: false });
            this.setState({ check1: true })
            this.setState({ check2: true })
            this.setState({ check3: true })
        }
        else {
            this.setState({ check: true });
        }
    }
    check1() {
        if (this.state.check1 == true) {
            this.setState({ check1: false });
            this.setState({ check: true })
            this.setState({ check2: true })
            this.setState({ check3: true })


        }
        else {
            this.setState({ check1: true });
        }
    }
    check2() {
        if (this.state.check2 == true) {
            this.setState({ check1: true });
            this.setState({ check: true })
            this.setState({ check3: true })
            this.setState({ check2: false })

        }
        else {
            this.setState({ check2: true })
        }
    }
    check3() {
        if (this.state.check3 == true) {
            this.setState({ check: true });
            this.setState({ check1: true })
            this.setState({ check2: true })
            this.setState({ check3: false })
        }
        else {
            this.setState({ check3: true })


        }
    }


    render() {
        return (
            <div className="faq-section" id="FAQ" >
                <h1>Clear your doubts with our FAQ</h1>
                <div className="question" style={{ backgroundColor: "white" }}>
                    What factors should I consider when purchasing homeowners insurance?
                    <button style={{ left: "250px", position: "relative" }} onMouseEnter={this.check} onMouseLeave={this.check}>+</button>
                    {this.state.check ? "" : <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus. Totam nihil similique a repellat minus dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxim</p>}
                </div>
                <div className="question" style={{ backgroundColor: "white" }}>
                    What factors should I consider when purchasing homeowners insurance?
                    <button style={{ left: "250px", position: "relative" }} onMouseEnter={this.check1} onMouseLeave={this.check1}>+</button>
                    {this.state.check1 ? "" : <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus. Totam nihil similique a repellat minus dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxim</p>}
                </div>
                <div className="question" style={{ backgroundColor: "white" }}>
                    What factors should I consider when purchasing homeowners insurance?
                    <button style={{ left: "250px", position: "relative" }} onMouseEnter={this.check2} onMouseLeave={this.check2}>+</button>
                    {this.state.check2 ? "" : <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus. Totam nihil similique a repellat minus dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxim</p>}


                </div>
                <div className="question" style={{ backgroundColor: "white" }}>
                    What factors should I consider when purchasing homeowners insurance?
                    <button style={{ left: "250px", position: "relative" }} onMouseEnter={this.check3} onMouseLeave={this.check3}>+</button>
                    {this.state.check3 ? "" : <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus. Totam nihil similique a repellat minus dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxim</p>}


                </div>
            </div>
        );
    }
}

export default Faq;

