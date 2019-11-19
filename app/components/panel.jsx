import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
import ZineListItem from './zineList'


export default class Panel extends Component {

  classBuilder() {
    if (!this.props.contExtension) {
      return "panel--cont"
    } else {
      let classes = this.props.contExtension;
      classes.push("panel--cont")
      return classes.join(' ')
    }
  }

  render() {
      return (
        <div className="panel--cont">
          <span className="panel--label">{this.props.label}</span>
          {this.props.children}
        </div>
      );
  }
}
