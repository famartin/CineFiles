import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './components/Home';
import InfoPage from './components/InfoPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
        <Route path="/id" component={InfoPage}/>
        <Route path="/" component={Home} exact />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
