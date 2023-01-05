import React, { Component } from 'react'
import Slide from "react-reveal";

export default class Openings extends Component {
  render() {
    if (!this.props.data) return null;
    const openings = this.props.data.openings.map(function (position) {
        return (
          <div key={position.title}>
            <h3>{position.title}</h3>
            <p className="info">
                {position.description}
            </p>
          </div>
        );
      });
    return (
        <section id="openings">
            <Slide top duration={1300}>
                <div className="row work">
                    <div className="three columns header-col">
                    <h1>
                        <span>Openings</span>
                    </h1>
                    </div>

                    <div className="nine columns main-col">{openings} </div>
                </div>
            </Slide>
        </section>
    )
  }
}
