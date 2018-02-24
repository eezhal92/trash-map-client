import React from 'react';
import {
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';

import Home from './pages/Home';
import TPS from './pages/TPS';
import Snap from './pages/Snap';
import About from './pages/About';
import Stats from './pages/Stats';
import Report from './pages/Report';
import TpsDetail from './pages/TpsDetail';
import Submitted from './pages/Submitted';

export default function Root() {
  return (
    <Router>
      <div class="root">
        <Route exact path="/" component={Home} />
        <Route exact path="/tps" component={TPS} />
        <Route path="/tps/:id" component={TpsDetail} />
        <Route path="/snap" component={Snap} />
        <Route path="/submitted" component={Submitted} />
        <Route path="/report" component={Report} />
        <Route path="/about" component={About} />
        <Route path="/stats" component={Stats} />
      </div>
    </Router>
  );
}
