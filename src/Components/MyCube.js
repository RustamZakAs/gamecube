import React, { Component } from "react";
import "./MyCube.css";

class MyCube extends Component {
  render() {
    return (
      <>
        {this.props.dice === 1 ? (
          <div onClick={this.props.click} className="first-face">
            <span className="pip"></span>
          </div>
        ) : this.props.dice === 2 ? (
          <div onClick={this.props.click} className="second-face">
            <span className="pip"></span>
            <span className="pip"></span>
          </div>
        ) : this.props.dice === 3 ? (
          <div onClick={this.props.click} className="third-face">
            <span className="pip"></span>
            <span className="pip"></span>
            <span className="pip"></span>
          </div>
        ) : this.props.dice === 4 ? (
          <div onClick={this.props.click} className="fourth-face">
            <div className="column">
              <span className="pip"></span>
              <span className="pip"></span>
            </div>
            <div className="column">
              <span className="pip"></span>
              <span className="pip"></span>
            </div>
          </div>
        ) : this.props.dice === 5 ? (
          <div onClick={this.props.click} className="fifth-face">
            <div className="column">
              <span className="pip"></span>
              <span className="pip"></span>
            </div>
            <div className="column">
              <span className="pip"></span>
            </div>
            <div className="column">
              <span className="pip"></span>
              <span className="pip"></span>
            </div>
          </div>
        ) : this.props.dice === 6 ? (
          <div onClick={this.props.click} className="sixth-face">
            <div className="column">
              <span className="pip"></span>
              <span className="pip"></span>
              <span className="pip"></span>
            </div>
            <div className="column">
              <span className="pip"></span>
              <span className="pip"></span>
              <span className="pip"></span>
            </div>
          </div>
        ) : (
          ""
        )}
      </>
    );
  }
}

export default MyCube;