import classnames from 'classnames';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';

import './Navigation.scss';

class Navigation extends Component {
  state = {
    isSidebarOpen: false,
  };

  toggleSidebar = () => {
    this.setState(prevState => ({
      isSidebarOpen: !prevState.isSidebarOpen,
    }));
  };

  render() {
    const { isSidebarOpen } = this.state;

    return (
      <nav class="navigation">
        <div role="button" aria-label="menu" tabIndex="0" class="navigation__hamburger hidden-lg hidden-md show-sm show-xs" onClick={this.toggleSidebar}>
          <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
          </svg>
        </div>
        <div class={classnames('navigation__links sidebar', { 'sidebar--open': isSidebarOpen })}>
          <div class="sidebar__overlay" />
          <div class="sidebar__content">
            <div class="sidebar__header clearfix">
              <div role="button" aria-label="menu-close" tabIndex="0" class="navigation__hamburger pull-right" onClick={this.toggleSidebar}>
                <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <line x1="4" y1="20" x2="20" y2="4" stroke="#424242" strokeWidth="2" />
                  <line x1="4" y1="4" x2="20" y2="20" stroke="#424242" strokeWidth="2" />
                </svg>
              </div>
            </div>
            <ul class="sidebar__nav">
              <li><Link to="/"><i class="glyphicon glyphicon-home nav-icon" /> <span class="nav-text">Beranda</span></Link></li>
              <li><Link to="/tps"><i class="glyphicon glyphicon-trash nav-icon" /> <span class="nav-text">Titik TPS</span></Link></li>
              <li><Link to="/report"><i class="glyphicon glyphicon-camera nav-icon" /> <span class="nav-text">Laporan Terbaru</span></Link></li>
              <li><Link to="/about"><i class="glyphicon glyphicon-book nav-icon" /> <span class="nav-text">Tentang</span></Link></li>
              <li><Link to="/stats"><i class="glyphicon glyphicon-equalizer nav-icon" /> <span class="nav-text">Statistik</span></Link></li>
            </ul>
          </div>
        </div>
        <ul class="hidden-xs hidden-sm navigation__links--non-mobile">
          <li><Link to="/">Beranda</Link></li>
          <li><Link to="/tps">Titik TPS</Link></li>
          <li><Link to="/report">Laporan Terbaru</Link></li>
          <li><Link to="/about">Tentang</Link></li>
          <li><Link to="/stats">Statistik</Link></li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
