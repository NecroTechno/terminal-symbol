import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
import ZineListItem from './zineList';
import Panel from './panel';
import CommitRender from './commitRender'
import {version} from '../../package.json';
import * as commitLog from '../log/commit.json'

export default class Home extends Component {
  render() {
      return (
        <>
          <h1 className="home-title">Terminal Symbols <span>v{version}</span></h1>
            <Panel label="Issues">
              {this.props.zineIssues.map((item,i) => <Link key={item} to={"/zines/issue-" + i}><ZineListItem issueNum={i} title={item} /></Link>)}
            </Panel>
			      <Panel label="About">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in diam nisi. Nullam consequat tortor arcu, in finibus neque tincidunt at. Nulla commodo nec leo nec maximus. Donec eu elementum diam. Morbi sollicitudin sapien luctus commodo malesuada. Praesent sem ex, accumsan at elit quis, vulputate venenatis sem. Vivamus sit amet fringilla est.</p>
            </Panel>
            <Panel label="Latest Commits">
              <CommitRender commitLog={commitLog} />
            </Panel>
            <Panel label="Credits">
              <p>Source available <a href="https://github.com/NecroTechno/zines" target="_blank">here</a>.</p>
      			  <p>Developed by <a href="https://necro.tech/" target="_blank">Eden</a>.</p>
      			  <p>Thanks to <a href="https://www.instagram.com/vannahgalaxy/" target="_blank">Vannah Galaxy</a> for the support.</p>
      			  <p>Thank you to Sora Sagano of <a href="https://dotcolon.net/" target="_blank">dotcolon</a> for the Aileron font.</p>
            </Panel>
        </>
      );
  }
}
