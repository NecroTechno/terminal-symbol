import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class CommitRender extends Component {
  render() {
      return (
        <>
        {this.props.commitLog.default.slice(0, 5).map((item, key) =>
          <pre key={key} className="commit-cont">
            <p><a target="_blank" href={"https://github.com/NecroTechno/terminal-symbol/commit/" + item.commit}>{item.commit}</a></p>
            <p>{item.message}</p>
            <p>{item.date}</p>
          </pre>
        )}
        </>
      );
  }
}
