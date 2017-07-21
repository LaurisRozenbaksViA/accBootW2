import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';
import Main from './pages/main';
import About from './pages/about';
import Err from './pages/error';

class Picogram extends React.Component {
  render() {
    return(
      <Router history={hashHistory}>
        <Route path='/' component={Main}/>
        <Route path='/about' component={About}/>
        <Route path='/*' component={Err}/>
      </Router>
    );
  }
}

export default Picogram;
