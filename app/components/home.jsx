import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
import ZineListItem from './zineList';
import Panel from './panel';

let zineIssues = ['New Beginnings','New Beginnings','New Beginnings','New Beginnings'];

export default class Home extends Component {
  render() {
      return (
        <>
          <h1>List</h1>
            <Panel label="Issues" contExtension={["center"]}>
              {zineIssues.map((item,i) => <Link key={item} to={"/zines/issue-" + i}><ZineListItem issueNum={i} title={item} /></Link>)}
            </Panel>
            <Panel label="Credits">
              <p>Developed by Eden</p>
            </Panel>
        </>
      );
  }
}
