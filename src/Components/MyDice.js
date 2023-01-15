import React, { Component } from "react";
import MyCube from "./MyCube.js";
import "./MyCube.css";

class App extends Component {
  state = {
    lastKey: null,
    dice: Math.floor(Math.random() * 6) + 1,
    onClick: (event) => {
      this.setState({dice: Math.floor(Math.random() * 6) + 1})
    }
  };
  
  onKeypress = (event) => {
    this.setState({ lastKey: event.keyCode });
    this.setState({ dice: Math.floor(Math.random() * 6) + 1 });
  };
  componentDidMount() {
    window.addEventListener("keypress", this.onKeypress);
  }
  componentWillUnmount() {
    window.removeEventListener("keypress", this.onKeypress);
  } 
  render() {
    return (
      <MyCube dice={this.state.dice} click={this.state.onClick}/>
    );
  }
}

export default App;