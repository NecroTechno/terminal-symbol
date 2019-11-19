import React, { Component } from 'react';
import ReactDOM from 'react-dom';

function invertColor(hex) {
    if (hex.indexOf('#') === 0) {
        hex = hex.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    if (hex.length !== 6) {
        throw new Error('Invalid HEX color.');
    }
    // invert color components
    var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
        g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
        b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
    // pad each with zeros and return
    return '#' + padZero(r) + padZero(g) + padZero(b);
}

function padZero(str, len) {
    len = len || 2;
    var zeros = new Array(len).join('0');
    return (zeros + str).slice(-len);
}

function getRandomColors() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  let color2 = invertColor(color);
  return {bg: color, fg: color2};
}

export default class ZineListItem extends Component {
  render() {
    let colourPair = getRandomColors();
    let zlStyle={backgroundColor: colourPair.bg}
    let zlTitleStyle = {color: colourPair.fg}
      return (
        <div style={zlStyle} className="zine-list">
          <div className="titleCont">
            <h4 style={zlTitleStyle}>Issue {this.props.issueNum}</h4>
            <h4 style={zlTitleStyle}>{this.props.title}</h4>
          </div>
        </div>
      );
  }
}
