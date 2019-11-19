import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home';
import ZineCont from './components/zineCont'
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css'
import {Provider} from "react-redux";
import {store} from "./store/index";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/zines/issue-0">
          <ZineCont issue="0" />
        </Route>
        <Route path="/zines/issue-1">
          <ZineCont issue="1" />
        </Route>
      </Switch>
    </Router>
</Provider>, document.getElementById('main')
);
