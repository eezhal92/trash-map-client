import { Helmet } from 'react-helmet';
import React from 'react';

import { Header } from '../components';
import { TPSCoordinatesMap } from '../containers';

const Home = () => (
  <div class="home-page">
    <Helmet>
      <title>Titik TPS</title>
    </Helmet>
    <Header title="Titik TPS" />
    <TPSCoordinatesMap />
  </div>
);

export default Home;
