import React from 'react';
import PropTypes from 'prop-types';
import './UserPage.scss';

export const UserPage = ({ user }) => (
  <div className="user">
    <div className="user__header">
      <img
        className="user__avatar"
        src={`users/user${user?.id}.png`}
        alt="avatar"
      />
    </div>
    <h2 className="user__title">{user?.name}</h2>
    <p className="user__title-text">
      Multi-layered client-server neural-net
    </p>
    <main className="user__info">
      <h3 className="user__info-kind">Address</h3>
      <p className="user__info-detail">
        {
          `${user?.address?.street},
         ${user?.address?.suite},
         ${user?.address?.city},
         ${user?.address?.zipcode}`
        }
      </p>
      <h3 className="user__info-kind">Phone</h3>
      <p className="user__info-detail">{user?.phone}</p>
      <h3 className="user__info-kind">Website</h3>
      <p className="user__info-detail">{user?.website}</p>
    </main>
  </div>
);

UserPage.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    address: PropTypes.shape({
      street: PropTypes.string,
      suite: PropTypes.string,
      city: PropTypes.string,
      zipcode: PropTypes.string,
    }),
    phone: PropTypes.string,
    website: PropTypes.string,
  }).isRequired,
};
