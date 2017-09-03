import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import { Message } from '../components';

const reportLink = <Link class="btn btn--outline" to="/report">Lihat Laporan</Link>;

const Submitted = () => (
  <div class="submitted-page">
    <Helmet>
      <title>Terima Kasih</title>
    </Helmet>
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <Message
            text="Terima Kasih"
            subText="Kontribusi Anda telah disimpan"
            action={reportLink}
          />
        </div>
      </div>
    </div>
    <div class="bottom-actions">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <Link class="btn btn-block btn--ios" to="/">Kembali ke beranda</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);


export default Submitted;
