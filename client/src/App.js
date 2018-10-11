import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import InfoPage from './components/InfoPage';
import Error from './components/Error';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
        <Route path="/id" component={InfoPage}/>
        <Route path="/" component={Home} exact />
        <Route component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
