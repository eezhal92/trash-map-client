import React from 'react';
import { format } from 'date-fns';
import idLocale from 'date-fns/locale/id';
import { object } from 'prop-types';
import LazyCard from 'react-lazy-card/dist/LazyCard';

import 'react-lazy-card/dist/lazyCard.css';
import './ImageCard.scss';

const ImageCard = ({ coordinate }) => (
  <div class="col-xs-12 col-sm-4">
    <div class="image-card">
      {(() => {
        const photoUrl = coordinate.photo.url || 'https://unsplash.it/278/181?image=975&blur';

        return (
          <div class="image-card__lazy-card-wrapper clearfix">
            <LazyCard image={photoUrl} autoLoad defaultimage="https://unsplash.it/278/181?image=975&blur" />
          </div>
        );
      })()}
      <div class="image-card__info">
        {format(coordinate.createdAt, 'dddd, D MMM YYYY', { locale: idLocale })} Jam {format(coordinate.createdAt, 'HH:mm')}
      </div>
    </div>
  </div>
);

ImageCard.propTypes = {
  coordinate: object.isRequired,
};

export default ImageCard;
