import React from 'react';
import { Header, Message } from '../components';

const Stats = () => (
  <div class="stats-page" style={{ paddingTop: 62 }}>
    <Header title="Statistik &amp; Visualisasi Data" />
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <Message
            text="Belum tersedia"
            subText="Fitur ini akan tersedia ketika data cukup banyak"
          />
        </div>
      </div>
    </div>
  </div>
);

export default Stats;
