import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

export const Header = () => (
  <div className="header">
    <div className="header__top">
      <h3 className="header__top-title">Users</h3>
      <div className="header__top-icons">
        <Link to="/">
          <div className="header__top-icons-search" />
        </Link>
        <div className="header__top-icons-bell" />
        <div className="header__top-icons-line" />
        <p className="header__top-icons-name">Jones Ferdinand</p>
        <div className="header__top-icons-avatar" />
      </div>
    </div>
    <div className="header__buttons">
      <div className="header__button">
        <span className="header__button-text">Active</span>
        <span className="header__button-number">60</span>
      </div>

      <div className="header__button">
        <span className="header__button-text">Online</span>
        <span className="header__button-number">16</span>
      </div>

      <div className="header__button">
        <span className="header__button-text">Filtered</span>
        <span className="header__button-number">43</span>
      </div>

      <div className="header__button">
        <span className="header__button-text">Banned</span>
        <span className="header__button-number">64</span>
      </div>
    </div>
  </div>
);
