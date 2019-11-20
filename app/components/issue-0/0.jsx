import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CrossrailImg from './images/crossrail.jpg'

export default class I0P0 extends Component {
  render() {
    let pageStyle = {
      width: "100%",
      height: "100%",
      backgroundImage: "url(" + CrossrailImg + ")",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }
      return (
        <div style={pageStyle}>
          <h1 className="zine-content--title">Issue {this.props.issue}:<br />{this.props.title}</h1>
        </div>
      );
  }
}
