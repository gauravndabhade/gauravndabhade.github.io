import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic = "images/" + this.props.data.image;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const email = this.props.data.email;

    const description = this.props.data.bio.map(function(para){
      return <p>{para}</p>
    })
    console.log(description)
    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={profilepic}
                alt="Gaurav's Profile Pic"
              />
              <h6 className="profile-name">Python Developer at Tavant <br/>Pune</h6>
              <p className="quote"><span className="quote-title">Favourite Quote:</span><br/><br/>"Do What You Love or <br/>
                Love What You Do"
              </p>
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>
              {description}
            
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
