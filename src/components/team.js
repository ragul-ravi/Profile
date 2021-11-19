import React from 'react'

class Team extends React.Component {
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
      <div id="team">
        <div class="row">
          <div class="column-about">
            <img onMouseEnter={this.check} onMouseLeave={this.check} className="car1" src="https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/common/navigation/desktop/Phantom-SWB-panel-D.jpg/jcr:content/renditions/cq5dam.web.2880.webp" />

          </div>
          <div class="column-about">
            <img onMouseEnter={this.check1} onMouseLeave={this.check1} className="car1" src="https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/common/navigation/desktop/Phantom-EWB-panel-D.jpg/jcr:content/renditions/cq5dam.web.2880.webp"></img>

          </div>
          <div class="column-about">
            <img onMouseEnter={this.check2} onMouseLeave={this.check2} className="car1" src="https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/common/navigation/desktop/ghost-new/Ghost-EWB-panel.jpg/jcr:content/renditions/cq5dam.web.1920.jpeg" />
          </div>
          <div class="column-about">
            <img onMouseEnter={this.check3} onMouseLeave={this.check3} className="car1" src="https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/common/navigation/desktop/Dawn-panel-D.jpg/jcr:content/renditions/cq5dam.web.1920.jpeg" />
          </div>
          {this.state.check ? "" :
            <div className="social-media" style={{ marginLeft: "100px" }}>
              <a href="#" class="fa fa-facebook"></a>
              <a href="#" class="fa fa-twitter"></a>
              <a href="#" class="fa fa-youtube"></a>
            </div>}
          {this.state.check1 ? "" :
            <div className="social-media" style={{ marginLeft: "500px" }}>
              <a href="#" class="fa fa-facebook"></a>
              <a href="#" class="fa fa-twitter"></a>
              <a href="#" class="fa fa-youtube"></a>
            </div>
          }
          {this.state.check2 ? "" :
            <div className="social-media" style={{ marginLeft: "855px" }}>
              <a href="#" class="fa fa-facebook"></a>
              <a href="#" class="fa fa-twitter"></a>
              <a href="#" class="fa fa-youtube"></a>
            </div>
          }
          {this.state.check3 ? "" :
            <div className="social-media" style={{ marginLeft: "1230px" }}>
              <a href="#" class="fa fa-facebook"></a>
              <a href="#" class="fa fa-twitter"></a>
              <a href="#" class="fa fa-youtube"></a>
            </div>
          }
        </div>
      </div>
    )
  }


}
export default Team;