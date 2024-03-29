import React, { Component } from "react";
import Slide from "react-reveal";

class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;
    const skillmessage = this.props.data.skillmessage;
    const education = this.props.data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3><a href={education.website} target="_blank" rel="noopener">{education.school} </a></h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });
    
    const work = this.props.data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3><a href={work.website} target="_blank" rel="noopener">{work.company}</a></h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          {/* <p>{work.description}</p> */}
        </div>
      );
    });
    
    const resumeDownload = this.props.data.resumedownload;

    return (
      <section id="resume">
        <div className="row">
          <div className="columns">
          </div>
          <div className="columns download">
            <p>
              <a href={resumeDownload} target="_blank" rel="noopener" className="button">
                <i className="fa fa-download"></i>Download Resume
              </a>
            </p>
          </div>
        </div>
        <Slide right duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{education}</div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Work</span>
              </h1>
            </div>

            <div className="nine columns main-col"> {work}</div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Resume;
