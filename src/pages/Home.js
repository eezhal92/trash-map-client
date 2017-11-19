import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import React from 'react';

import { Header } from '../components';
import { TrashCoordinatesMap } from '../containers';

const Home = () => (
  <div class="home-page">
    <Helmet>
      <title>Beranda</title>
    </Helmet>
    <Header title="Peta persebaran sampah" />
    <TrashCoordinatesMap />
    <div class="bottom-actions">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-offset-3 col-sm-6">
            <Link class="btn btn-block btn--ios" to="/snap">Lapor</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
