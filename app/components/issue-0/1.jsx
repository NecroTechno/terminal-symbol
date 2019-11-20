import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class I0P1 extends Component {
  render() {
    let pageStyle = {
      width: "100%",
      height: "100%"
    }
	// TODO: Release notes?
      return (
        <div style={pageStyle}>
          <div className="zine-content--tocCont">
            <h4>Table of Contents</h4>
            <ol>
              <li>Cover</li>
              <li>TOC</li>
              <li>Lorem Ipsum</li>
              <li>Adipiscing Elit</li>
              <li>Quisque In</li>
              <li>Nullam Consequat Tortor</li>
              <li>Attributions</li>
            </ol>
          </div>
        </div>
      );
  }
}
