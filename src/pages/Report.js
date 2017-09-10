/* eslint-disable no-underscore-dangle */
import React from 'react';

import { Header } from '../components';
import { TrashImages } from '../containers';

const Report = () => (
  <div class="report-page" style={{ paddingTop: 62 }}>
    <Header title="Laporan Terbaru" />
    <div class="container">
      <TrashImages />
    </div>
  </div>
);

export default Report;
