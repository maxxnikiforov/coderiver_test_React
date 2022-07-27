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
  </div>
);
