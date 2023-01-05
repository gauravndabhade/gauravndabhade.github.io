import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";
import icon from "../icon";

class Header extends Component {

  constructor(props){
    super(props);
    this.state = {
      mylove : "?"
    };
  }

  componentDidMount() {
    let items = [];
    this.interval = setInterval(() =>{
      if (this.props.data) {
       items = this.props.data.mylove;
      }
      this.setState({ mylove: items[Math.floor(Math.random() * items.length)] })
    }
    , 500);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {

    if (!this.props.data) return null;
    const name = this.props.data.name;
    const description = this.props.data.description;

    const networks = this.props.data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url} target="_blank" rel="noopener">
            <i className={network.className}></i>
          </a>
        </li>
      );
    });

    let config = {
      num: [4, 7],
      rps: 0.1,
      radius: [5, 40],
      life: [1.5, 3],
      v: [2, 3],
      tha: [-50, 50],
      alpha: [0.6, 0],
      scale: [.1, 0.9],
      body: icon,
      position: "all",
      //color: ["random", "#ff0000"],
      cross: "dead",
      random: 10
    };

    return (
      <header id="home">
        <ParticlesBg type="custom" config={config} bg={true} />

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>

            {/* <li>
              <a className="smoothscroll" href="#portfolio">
                Works
              </a>
            </li> */}

            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
            {/* <li>
              <a className="smoothscroll" href="#openings">
                Current Openings</a> 
            </li> */}
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom duration={1200}>
              <h1 className="responsive-headline">{name}</h1>
              <hr />
            </Fade>
            <Fade bottom duration={1200}>
              <h3>{description} 
              <span>{this.state.mylove}</span></h3>
              <hr />
            </Fade>
          </div>
          <div className="twelve columns">
              <ul className="social-links">{networks}</ul>
          </div>
        </div>

        {/* <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p> */}
      </header>
    );
  }
}

export default Header;
