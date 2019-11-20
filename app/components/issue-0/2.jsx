import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class I0P1 extends Component {
  render() {
    let pageStyle = {
      width: "100%",
      height: "100%"
    }
      return (
        <div style={pageStyle}>
          <div className="absCenter--cont">
			<blockquote cite="http://www.melconway.com/Home/Conways_Law.html">
			<p>Any organization that designs a system (defined broadly) will produce a design whose structure is a copy of the organization's communication structure.</p>
			<footer>— <a target="_blank" href="http://www.melconway.com/Home/Conways_Law.html">Mel Conway</a></footer>
			</blockquote>
          </div>
        </div>
      );
  }
}
