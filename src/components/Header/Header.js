import React from 'react';
import { string } from 'prop-types';

import './Header.scss';
import Navigation from './Navigation';

const Header = ({ title }) => (
  <div class="header">
    <div class="container">
      <div class="header__page-title">{title}</div>
      <Navigation />
    </div>
  </div>
);

Header.propTypes = {
  title: string.isRequired,
};

export default Header;
