import React from 'react';
import { format } from 'date-fns';
import idLocale from 'date-fns/locale/id';
import { object, func } from 'prop-types';
import LazyCard from 'react-lazy-card/dist/LazyCard';

import 'react-lazy-card/dist/lazyCard.css';
import './ImageCard.scss';

const btnStyle = {
  border: 0,
  background: 'transparent',
  borderRadius: 0,
  padding: '10px 0',
  marginTop: 10,
  fontSize: 10,
};

const ImageCard = ({
  coordinate,
  markNotAppropriate,
}) => (
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
        <br />
        <button style={btnStyle} onClick={markNotAppropriate}>
          <i class="fa fa-eye-slash" /> Tandai sebagai tidak pantas
        </button>
      </div>
    </div>
  </div>
);

ImageCard.propTypes = {
  coordinate: object.isRequired,
  markNotAppropriate: func.isRequired,
};

ImageCard.defaultProps = {
  markNotAppropriate: () => {},
};

export default ImageCard;
