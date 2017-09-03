import React from 'react';
import {
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';

import Home from './pages/Home';
import Snap from './pages/Snap';
import About from './pages/About';
import Stats from './pages/Stats';
import Report from './pages/Report';
import Submitted from './pages/Submitted';

export default function Root() {
  return (
    <Router>
      <div class="root">
        <Route exact path="/" component={Home} />
        <Route path="/snap" component={Snap} />
        <Route path="/submitted" component={Submitted} />
        <Route path="/report" component={Report} />
        <Route path="/about" component={About} />
        <Route path="/stats" component={Stats} />
      </div>
    </Router>
  );
}
