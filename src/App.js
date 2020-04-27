import React from 'react';
import ReactDOM from 'react-dom'

import { HashRouter as Router, Route } from 'react-router-dom';

import Search from './components/Search';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/search" component={ Search } />
      </div>
    </Router>
  );
}

export default App;
