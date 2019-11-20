import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CrossrailImg from './images/crossrail.jpg'

export default class I0P0 extends Component {
  render() {
    let pageStyle = {
      width: "100%",
      height: "100%",
    }
	let imgStyle = {
		display: "block",
		width: "100%",
		height: "100%",
		objectFit: "cover"
	}
      return (
        <div style={pageStyle}>
			<img style={imgStyle} src={CrossrailImg} alt="Background image" />
          <h1 className="zine-content--title">Issue {this.props.issue}:<br />{this.props.title}</h1>
        </div>
      );
  }
}
