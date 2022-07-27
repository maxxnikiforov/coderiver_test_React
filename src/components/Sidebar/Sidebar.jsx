import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.scss';

export const Sidebar = () => (
  <div className="sidebar">
    <div className="sidebar__title">
      <div className="sidebar__title-img" />
      <span className="sidebar__title-text">Dashboard</span>
    </div>

    <div className="sidebar__item">
      <div className="sidebar__item-overview" />
      <span className="sidebar__item-text">Overview</span>
    </div>

    <Link to="/list" className="sidebar__link">
      <div className="sidebar__item">
        <div className="sidebar__item-users" />
        <span className="sidebar__item-text">Users</span>
      </div>
    </Link>

    <div className="sidebar__item">
      <div className="sidebar__item-ideas" />
      <span className="sidebar__item-text">Ideas</span>
    </div>

    <div className="sidebar__item">
      <div className="sidebar__item-contacts" />
      <span className="sidebar__item-text">Contacts</span>
    </div>

    <div className="sidebar__item">
      <div className="sidebar__item-agents" />
      <span className="sidebar__item-text">Agents</span>
    </div>

    <div className="sidebar__item">
      <div className="sidebar__item-articles" />
      <span className="sidebar__item-text">Articles</span>
    </div>

    <div className="sidebar__item-divider" />

    <div className="sidebar__item">
      <div className="sidebar__item-settings" />
      <span className="sidebar__item-text">Settings</span>
    </div>

    <div className="sidebar__item">
      <div className="sidebar__item-subscription" />
      <span className="sidebar__item-text">Subscription</span>
    </div>
  </div>
);
