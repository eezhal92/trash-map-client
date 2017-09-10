import React from 'react';
import { Helmet } from 'react-helmet';
import { Header } from '../components';

const About = () => (
  <div class="about-page">
    <Helmet>
      <title>Tentang</title>
    </Helmet>
    <Header title="Tentang" />
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <div style={{ padding: '80px 0', color: '#7f7f7f', lineHeight: '21px' }}>
            <h1 style={{ fontSize: 22, color: 'rgba(0,0,0,.87)', marginBottom: 12 }}>Mengapa Aplikasi Ini Dibuat?</h1>
            <p>
              Aplikasi ini dikembangkan untuk menampung data tentang titik pembuangan sampah liar
              &nbsp;maupun tempat yang sangat kotor akibat sampah.
            </p>
            <p>
              <a class="github-button" href="https://github.com/eezhal92/trash-map-api" data-icon="octicon-star" data-show-count="true" aria-label="Star eezhal92/trash-map-api on GitHub">Star</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
