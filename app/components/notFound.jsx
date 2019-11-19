import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
import ZineListItem from './zineList';
import Panel from './panel';

export default class NotFound extends Component {
  render() {
      return (
		<>
			<h1>Not Found</h1>
			<a href="/">Home</a>
		</>
      );
  }
}
