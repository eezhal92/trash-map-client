import React from 'react';
import { object } from 'prop-types';
import LazyCard from 'react-lazy-card/dist/LazyCard';

import 'react-lazy-card/dist/lazyCard.css';
import './ImageCard.scss';

const ImageCard = ({ coordinate }) => (
  <div class="col-xs-12 col-sm-4">
    <div class="report-card" style={{ margin: '20px 0', boxShadow: '0 3px 4px rgba(0, 0, 0, .16)', borderRadius: 4 }}>
      {(() => {
        const photoUrl = coordinate.photo.url || 'https://unsplash.it/278/181?image=975&blur';

        return (
          <div class="image-card__lazy-card-wrapper clearfix">
            <LazyCard image={photoUrl} autoLoad defaultimage="https://unsplash.it/278/181?image=975&blur" />
          </div>
        );
      })()}
      <div style={{ padding: '20px 15px', fontSize: 12, color: '#666' }}>
        Hari, 1 Januari 2010 Jam 12:00
      </div>
    </div>
  </div>
);

ImageCard.propTypes = {
  coordinate: object.isRequired,
};

export default ImageCard;
