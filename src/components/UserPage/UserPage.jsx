import React from 'react';
import PropTypes from 'prop-types';
import './UserPage.scss';

export const UserPage = ({ user }) => (
  <div className="user">
    <div className="user__header">
      <div className="user__avatar" />
    </div>
    <h2>{user?.name}</h2>
    <p>Multi-layered client-server neural-net</p>
    <main className="user__info">
      <h3>Address</h3>
      <p>
        {
          `${user?.address?.street},
         ${user?.address?.suite},
         ${user?.address?.city},
         ${user?.address?.zipcode}`
        }
      </p>
      <h3>Phone</h3>
      <p>{user?.phone}</p>
      <h3>Website</h3>
      <p>{user?.website}</p>
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

// UserPage.propTypes = {
//   user: PropTypes.object.isRequired,
// };
