import React from 'react';
import { object } from 'prop-types';
import { NavLink as Link, Route } from 'react-router-dom';

import TPSStats from './TPSStats';
import TrashStats from './TrashStats';
import { Tabs, Header, Message } from '../components';

const Stats = ({ match }) => (
  <div class="stats-page" style={{ paddingTop: 62 }}>
    <Header title="Statistik &amp; Visualisasi Data" />
    <Tabs defaultActiveKey={1}>
      <Link class="tabs__item" activeClassName="tabs__item--active" to="/stats/trash">Persebaran Sampah</Link>
      <Link class="tabs__item" activeClassName="tabs__item--active" to="/stats/tps">TPS</Link>
    </Tabs>
    <Route
      exact
      path={match.url}
      render={() => (
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <Message
                text="Statistic"
                subText="Lorem ipsum"
              />
            </div>
          </div>
        </div>
      )}
    />
    <Route
      path={`${match.url}/:section`}
      component={(props) => {
        // eslint-disable-next-line react/prop-types
        if (props.match.params.section === 'trash') {
          return <TrashStats />;
        }

        return <TPSStats />;
      }}
    />
  </div>
);

Stats.propTypes = {
  match: object.isRequired,
};

export default Stats;
